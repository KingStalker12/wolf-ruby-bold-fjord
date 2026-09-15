import { CARD_BY_ID, cardCost, defOf, mintCard, rollCardRewards, setCardSeq, getCardSeq, priceFor } from "./cards";
import { CLASS_BY_ID, starterDeckFor, type ClassId } from "./characters";
import { nextIntent, rollEncounter } from "./enemies";
import {
  callFamiliar,
  callMany,
  evokeLeft,
  evolveAll,
  makeFamiliar,
  merge,
  pulseAll,
  emptyPulse,
  type FamiliarKind,
  type FamiliarPulse,
} from "./familiars";
import { generateMap } from "./map";
import { rollPotion, rollRelic, rollRelicOffers, relicPrice } from "./items";
import { Rng } from "./rng";
import type {
  CardInst,
  CardNumbers,
  CombatState,
  EnemyInst,
  NodeType,
  RewardState,
  RunState,
  ShopState,
} from "./types";

const HAND_LIMIT = 10;
const BASE_ENERGY = 3;

export function hasRelic(run: RunState, id: string): boolean {
  return run.relics.includes(id);
}

export function skullStr(run: RunState, combat: CombatState): number {
  if (!hasRelic(run, "red_skull")) return 0;
  return run.hp <= run.maxHp * 0.5 ? 3 : 0;
}

export function playerStr(run: RunState, combat: CombatState): number {
  return combat.strength + skullStr(run, combat);
}

export function calcDamage(
  base: number,
  strength: number,
  weak: number,
  targetVuln: number,
  doubleHit: boolean,
): number {
  let d = base + strength;
  if (weak > 0) d = Math.floor(d * 0.75);
  if (doubleHit) d *= 2;
  if (targetVuln > 0) d = Math.floor(d * 1.5);
  return Math.max(0, d);
}

export function calcBlock(base: number, dex: number, frail: number): number {
  let b = base + dex;
  if (frail > 0) b = Math.floor(b * 0.75);
  return Math.max(0, b);
}

function gainBlock(combat: CombatState, amount: number): number {
  if (amount <= 0) return 0;
  let add = amount;
  if (combat.bastion > 0) add += combat.bastion;
  combat.block += add;
  combat.blockGainedThisTurn += add;
  return add;
}

function note(combat: CombatState, line: string) {
  if (!line) return;
  combat.log = line;
  const prev = combat.journal ?? [];
  if (prev[0] === line) return;
  combat.journal = [line, ...prev].slice(0, 8);
}

function applyEnemyToxin(combat: CombatState) {
  if (combat.toxinApplied) return;
  combat.toxinApplied = true;
  combat.toxin += 1;
}

function applyEnemyCinder(combat: CombatState) {
  if (combat.cinderApplied) return;
  combat.cinderApplied = true;
  combat.cinder += 1;
}

const DAZE_FOES = new Set(["warden", "crown", "sentinel", "priest", "paladin", "saint", "wolf"]);

function applyEnemyDaze(combat: CombatState, enemy: EnemyInst, amount: number) {
  if (!DAZE_FOES.has(enemy.defId) || amount <= 0) return;
  combat.daze += amount;
}

function randomLiving(combat: CombatState, rng: Rng): EnemyInst | undefined {
  const living = combat.enemies.filter((e) => e.hp > 0);
  if (!living.length) return undefined;
  return rng.pick(living);
}

function applyHpDamage(hp: number, block: number, amount: number): { hp: number; block: number; taken: number } {
  let left = amount;
  let b = block;
  if (b > 0) {
    const used = Math.min(b, left);
    b -= used;
    left -= used;
  }
  const taken = left;
  return { hp: Math.max(0, hp - left), block: b, taken };
}

export function cloneCard(c: CardInst): CardInst {
  return { ...c };
}

function shuffleDraw(combat: CombatState, rng: Rng) {
  if (combat.drawPile.length === 0 && combat.discardPile.length > 0) {
    combat.drawPile = rng.shuffle(combat.discardPile);
    combat.discardPile = [];
  }
}

export function drawCards(combat: CombatState, rng: Rng, n: number) {
  if (combat.noDraw) return;
  for (let i = 0; i < n; i++) {
    if (combat.hand.length >= HAND_LIMIT) break;
    shuffleDraw(combat, rng);
    const c = combat.drawPile.shift();
    if (!c) break;
    combat.hand.push(c);
  }
}

export function newRun(classId: ClassId = "interred", seed?: number): { run: RunState; rng: Rng } {
  const s = seed ?? ((Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0);
  const rng = new Rng(s);
  setCardSeq(1);
  const cls = CLASS_BY_ID[classId];
  const deck = starterDeckFor(classId);
  const map = generateMap(rng, 1);
  const run: RunState = {
    seed: s,
    rngState: rng.getState(),
    classId,
    gold: 99,
    hp: cls.hp,
    maxHp: cls.hp,
    deck,
    relics: [cls.relic],
    potions: [null, null, null],
    map,
    currentNodeId: null,
    visited: [],
    row: -1,
    act: 1,
    cardSeq: getCardSeq(),
    shop: null,
    floorKills: 0,
    damageDealt: 0,
    seenEvents: [],
  };
  return { run, rng };
}

export function restoreRng(run: RunState): Rng {
  setCardSeq(run.cardSeq);
  return Rng.fromState(run.rngState);
}

export function persistRng(run: RunState, rng: Rng) {
  run.rngState = rng.getState();
  run.cardSeq = getCardSeq();
}

export function runDepth(run: RunState): number {
  return Math.max(0, run.act - 1) * 12 + Math.max(0, run.row + 1);
}

export function beginAct2(run: RunState, rng: Rng) {
  run.act = 2;
  run.map = generateMap(rng, 2);
  run.currentNodeId = null;
  run.visited = [];
  run.row = -1;
  run.shop = null;
}

export function startCombat(run: RunState, rng: Rng, type: NodeType): CombatState {
  const enemies = rollEncounter(type, rng, Math.max(0, run.row), run.act ?? 1);
  if (hasRelic(run, "philosopher")) {
    for (const e of enemies) e.strength += 1;
  }
  const copies = rng.shuffle(run.deck.map(cloneCard));
  const combat: CombatState = {
    enemies,
    phase: "player",
    turn: 1,
    energy: BASE_ENERGY + (hasRelic(run, "lantern") ? 1 : 0) + (hasRelic(run, "philosopher") ? 1 : 0),
    maxEnergy: BASE_ENERGY + (hasRelic(run, "philosopher") ? 1 : 0),
    block: hasRelic(run, "anchor") ? 10 : 0,
    strength: hasRelic(run, "vajra") ? 1 : 0,
    dexterity: hasRelic(run, "pale_shroud") ? 1 : 0,
    weak: 0,
    vulnerable: 0,
    frail: 0,
    metallicize: 0,
    toxin: 0,
    cinder: 0,
    daze: 0,
    envenom: 0,
    afterburn: 0,
    bastion: 0,
    smokeMirrors: 0,
    focus: 0,
    plasma: 0,
    prismPulse: 0,
    prismUsed: false,
    overheatPlasma: 0,
    overheatNeed: 0,
    cardsPlayed: 0,
    blockGainedThisTurn: hasRelic(run, "anchor") ? 10 : 0,
    toxinApplied: false,
    cinderApplied: false,
    arcana: 0,
    sage: false,
    hunger: 0,
    leech: 0,
    leechDrain: 0,
    bloodSpentTurn: 0,
    bloodSpentBattle: 0,
    journal: ["The chamber answers."],
    noDraw: false,
    hand: [],
    drawPile: copies,
    discardPile: [],
    exhaustPile: [],
    targetingUid: null,
    targetingPotion: null,
    attacksPlayed: 0,
    familiars: [],
    familiarSlots: run.classId === "kindled" ? 3 : 0,
    log: "The chamber answers.",
  };
  const drawN = 5 + (hasRelic(run, "bag") ? 2 : 0);
  drawCards(combat, rng, drawN);
  if (hasRelic(run, "blood_vial")) {
    run.hp = Math.min(run.maxHp, run.hp + 2);
  }
  if (hasRelic(run, "ash_locket") && combat.familiarSlots > 0) {
    combat.familiars.push(makeFamiliar("spark"));
  }
  if (hasRelic(run, "star_crystal")) combat.arcana = 1;
  return combat;
}

export function canPlay(run: RunState, combat: CombatState, card: CardInst): boolean {
  if (combat.phase !== "player") return false;
  const d = defOf(card);
  if (d.unplayable) return false;
  if (cardCost(card) > combat.energy) return false;
  const living = combat.enemies.filter((e) => e.hp > 0);
  if ((d.target === "enemy" || d.target === "all") && living.length === 0) return false;
  return true;
}

export interface PlayResult {
  run: RunState;
  combat: CombatState;
  killed: string[];
  damageTo: { id: string; amount: number }[];
  playerHurt: number;
  needTarget: boolean;
  dead: boolean;
  won: boolean;
}

function hitEnemy(
  run: RunState,
  combat: CombatState,
  enemy: EnemyInst,
  amount: number,
  killed: string[],
  damageTo: { id: string; amount: number }[],
): number {
  const res = applyHpDamage(enemy.hp, enemy.block, amount);
  enemy.hp = res.hp;
  enemy.block = res.block;
  run.damageDealt += amount;
  damageTo.push({ id: enemy.id, amount });
  if (enemy.hp <= 0) {
    enemy.hp = 0;
    enemy.block = 0;
    killed.push(enemy.id);
    run.floorKills += 1;
  }
  return res.taken;
}

function dealToEnemy(
  run: RunState,
  combat: CombatState,
  enemy: EnemyInst,
  base: number,
  hits: number,
  doubleHit: boolean,
  killed: string[],
  damageTo: { id: string; amount: number }[],
): number {
  let taken = 0;
  for (let i = 0; i < hits; i++) {
    if (enemy.hp <= 0) break;
    const dmg = calcDamage(base, playerStr(run, combat), combat.weak, enemy.vulnerable, doubleHit);
    taken += hitEnemy(run, combat, enemy, dmg, killed, damageTo);
  }
  return taken;
}

function loseHp(run: RunState, combat: CombatState, amount: number): number {
  run.hp = Math.max(0, run.hp - amount);
  return amount;
}

function tryFairy(run: RunState): boolean {
  const i = run.potions.findIndex((p) => p === "fairy");
  if (i < 0) return false;
  run.potions[i] = null;
  run.hp = Math.max(1, Math.ceil(run.maxHp * 0.3));
  return true;
}

export function playCard(
  run: RunState,
  combat: CombatState,
  rng: Rng,
  uid: string,
  targetId?: string,
): PlayResult {
  const empty: PlayResult = {
    run,
    combat,
    killed: [],
    damageTo: [],
    playerHurt: 0,
    needTarget: false,
    dead: false,
    won: false,
  };
  if (combat.phase !== "player") return empty;
  const idx = combat.hand.findIndex((c) => c.uid === uid);
  if (idx < 0) return empty;
  const card = combat.hand[idx]!;
  if (!canPlay(run, combat, card)) return empty;
  const d = defOf(card);
  const living = combat.enemies.filter((e) => e.hp > 0);

  if (d.target === "enemy" && !targetId) {
    if (living.length === 1) targetId = living[0]!.id;
    else {
      combat.targetingUid = uid;
      return { ...empty, needTarget: true };
    }
  }

  combat.targetingUid = null;
  combat.hand.splice(idx, 1);
  const energyBefore = combat.energy;
  combat.energy -= cardCost(card);
  combat.cardsPlayed += 1;
  if (combat.overheatPlasma > 0) combat.plasma += combat.overheatPlasma;

  const nums = d.numbers(card.upgraded);
  const killed: string[] = [];
  const damageTo: { id: string; amount: number }[] = [];
  let playerHurt = 0;

  const target = targetId ? combat.enemies.find((e) => e.id === targetId && e.hp > 0) : undefined;

  if (d.special === "bloodRite") {
    const lo = nums.hpLoss ?? 1;
    const hi = Math.max(lo, nums.bonus ?? 4);
    const n = rng.int(lo, hi);
    playerHurt += loseHp(run, combat, n);
    combat.strength += n;
  } else if (nums.hpLoss && d.special !== "counterfeit") {
    playerHurt += loseHp(run, combat, nums.hpLoss);
  }
  if (playerHurt > 0) {
    combat.bloodSpentTurn += playerHurt;
    combat.bloodSpentBattle += playerHurt;
    if (hasRelic(run, "crimson_chalice")) gainBlock(combat, 3);
  }

  if (d.special === "limitBreak") {
    combat.strength *= 2;
  } else if (nums.strength && nums.strength > 0 && d.special !== "disarm" && d.special !== "voltage") {
    combat.strength += nums.strength;
  }

  if (nums.metallicize) combat.metallicize += nums.metallicize;
  if (nums.energy && d.special !== "reboot") combat.energy += nums.energy;
  if (nums.dexterity && d.special !== "coinFlip") combat.dexterity += nums.dexterity;
  if (nums.focus && d.special !== "reboot" && d.special !== "voltage") combat.focus += nums.focus;

  if (nums.block && d.special !== "blockPerAttack") {
    gainBlock(combat, calcBlock(nums.block, combat.dexterity, combat.frail));
  }
  if (d.special === "blockPerAttack") {
    const nAtk = combat.hand.filter((c) => defOf(c).type === "attack").length;
    gainBlock(combat, calcBlock((nums.block ?? 4) * nAtk, combat.dexterity, combat.frail));
  }

  if (nums.gold) run.gold += nums.gold;

  const doubleHit =
    d.type === "attack" && hasRelic(run, "pen_nib") && (combat.attacksPlayed + 1) % 10 === 0;
  let drained = 0;

  if (d.special === "fiendFire") {
    const others = combat.hand.splice(0, combat.hand.length);
    const per = nums.damage ?? 7;
    if (target) {
      for (const c of others) {
        combat.exhaustPile.push(c);
        dealToEnemy(run, combat, target, per, 1, doubleHit, killed, damageTo);
      }
    } else {
      combat.exhaustPile.push(...others);
    }
  } else if (
    d.type === "attack" &&
    nums.damage &&
    d.special !== "discharge" &&
    d.special !== "bloodPrice" &&
    d.special !== "bloodReckoning"
  ) {
    const hits = nums.hits ?? 1;
    if (d.target === "all") {
      for (const e of combat.enemies.filter((en) => en.hp > 0)) {
        drained += dealToEnemy(run, combat, e, nums.damage, hits, doubleHit, killed, damageTo);
      }
    } else if (target) {
      drained += dealToEnemy(run, combat, target, nums.damage, hits, doubleHit, killed, damageTo);
    }
  }

  if (d.special === "bloodPrice" && target && target.hp > 0) {
    const dmg = (nums.bonus ?? 4) * combat.bloodSpentTurn;
    if (dmg > 0) drained += dealToEnemy(run, combat, target, dmg, 1, doubleHit, killed, damageTo);
  }
  if (d.special === "bloodReckoning") {
    run.hp = Math.min(run.maxHp, run.hp + (nums.heal ?? 5));
    const dmg = combat.bloodSpentBattle;
    if (dmg > 0) {
      for (const e of combat.enemies.filter((en) => en.hp > 0)) {
        drained += dealToEnemy(run, combat, e, dmg, 1, doubleHit, killed, damageTo);
      }
    }
  }
  if (d.special === "leech") {
    combat.leech += 1;
    combat.leechDrain = Math.max(combat.leechDrain, nums.heal ?? 2);
  }

  if (d.type === "attack") combat.attacksPlayed += 1;

  if (nums.vulnerable || nums.weak) {
    const debuffTargets =
      d.target === "all" ? combat.enemies.filter((en) => en.hp > 0) : target ? [target] : [];
    for (const t of debuffTargets) {
      if (nums.vulnerable) t.vulnerable += nums.vulnerable;
      if (nums.weak) t.weak += nums.weak;
    }
  }
  if (d.special === "disarm" && target && nums.strength) {
    target.strength += nums.strength;
  }

  const statusTargets =
    d.target === "all" ? combat.enemies.filter((en) => en.hp > 0) : target ? [target] : [];
  if (d.special !== "envenom" && d.special !== "afterburn") {
    for (const t of statusTargets) {
      if (nums.toxin) t.toxin += nums.toxin;
      if (nums.cinder) t.cinder += nums.cinder;
      if (nums.daze) t.daze += nums.daze;
    }
  }
  if (d.type === "attack" && combat.envenom) {
    for (const t of statusTargets) t.toxin += combat.envenom;
  }
  if (d.special === "envenom") combat.envenom += nums.toxin ?? 2;
  if (d.special === "afterburn") combat.afterburn += nums.cinder ?? 2;
  if (d.special === "cinderBonus" && target && target.hp > 0 && target.cinder > 0) {
    dealToEnemy(run, combat, target, nums.damage ?? 8, 1, doubleHit, killed, damageTo);
  }
  if (d.special === "execute" && target && killed.includes(target.id) && nums.heal) {
    run.hp = Math.min(run.maxHp, run.hp + nums.heal);
  }

  if (d.special === "shieldBash") {
    const foe = randomLiving(combat, rng);
    if (foe && combat.blockGainedThisTurn > 0) {
      dealToEnemy(run, combat, foe, nums.bonus ?? 3, 1, false, killed, damageTo);
    }
  }
  if (d.special === "overhead" && target && target.hp > 0 && target.weak > 0) {
    dealToEnemy(run, combat, target, nums.bonus ?? 6, 1, doubleHit, killed, damageTo);
  }
  if (d.special === "backstep" && target && target.hp > 0 && combat.block > 0) {
    dealToEnemy(run, combat, target, nums.bonus ?? 3, 1, doubleHit, killed, damageTo);
  }
  if (d.special === "bastion") combat.bastion += nums.bonus ?? 1;
  if (d.special === "counterfeit" && energyBefore === 0 && nums.hpLoss) {
    playerHurt += loseHp(run, combat, nums.hpLoss);
  }
  if (d.special === "coinFlip" && rng.chance(0.5) && nums.dexterity) {
    combat.dexterity += nums.dexterity;
  }
  if (d.special === "smoke") combat.smokeMirrors += nums.bonus ?? 2;
  if (d.special === "prism") combat.prismPulse += nums.plasma ?? 4;
  if (d.special === "reboot") {
    if (combat.focus <= 0) combat.focus += nums.focus ?? 1;
    else if (nums.energy) combat.energy = Math.min(combat.maxEnergy, combat.energy + nums.energy);
  }
  if (d.special === "voltage" && target && killed.includes(target.id)) {
    combat.strength += nums.strength ?? 1;
    combat.focus += nums.focus ?? 1;
  }
  if (d.special === "overheat") {
    combat.overheatPlasma += nums.plasma ?? 1;
    combat.overheatNeed = nums.threshold ?? 3;
  }
  if (d.special === "spendArcana" && target && target.hp > 0 && combat.arcana >= 3) {
    combat.arcana -= 3;
    dealToEnemy(run, combat, target, nums.bonus ?? 12, 1, doubleHit, killed, damageTo);
  }
  if (d.special === "discharge") {
    const stacks = combat.arcana;
    combat.arcana = 0;
    const per = nums.damage ?? 5;
    if (stacks > 0) {
      for (const e of combat.enemies.filter((en) => en.hp > 0)) {
        dealToEnemy(run, combat, e, per * stacks, 1, false, killed, damageTo);
      }
    }
  }
  if (d.special === "thunderArcana" && combat.arcana >= 2) combat.energy += 1;
  if (d.special === "iceLance" && target && combat.arcana >= 2) target.daze += nums.daze ?? 1;
  if (d.special === "sage") combat.sage = true;
  if (d.special === "hunger") combat.hunger += nums.heal ?? 1;
  if (nums.arcana) combat.arcana = Math.min(9, combat.arcana + nums.arcana);
  if (combat.sage && d.type === "skill" && d.special !== "sage") {
    combat.arcana = Math.min(9, combat.arcana + 1);
  }

  if (d.type === "attack" && combat.smokeMirrors > 0) {
    gainBlock(combat, calcBlock(combat.smokeMirrors, combat.dexterity, combat.frail));
  }
  if (d.type === "attack" && combat.prismPulse > 0 && !combat.prismUsed) {
    const foe = randomLiving(combat, rng);
    if (foe) {
      combat.prismUsed = true;
      dealToEnemy(run, combat, foe, combat.prismPulse + combat.focus, 1, false, killed, damageTo);
    }
  }

  if (d.special === "entrench") {
    combat.block *= 2;
  }
  if (d.special === "immolate") {
    combat.discardPile.push(mintCard("wound"));
  }
  if (d.special === "dropkick" && target && target.vulnerable > 0) {
    combat.energy += 1;
    drawCards(combat, rng, 1);
  }

  if (d.special === "trueGrit" && combat.hand.length) {
    const i = rng.int(0, combat.hand.length - 1);
    const [ex] = combat.hand.splice(i, 1);
    if (ex) combat.exhaustPile.push(ex);
  }

  const extra = nums.stageBonus ?? 0;
  let fam: FamiliarPulse | null = null;
  if (d.summon === "twin") {
    fam = callMany(run, combat, rng, ["ember", "rime"], extra);
  } else if (d.summon === "all") {
    fam = callMany(run, combat, rng, ["ember", "rime", "gloom", "spark"], extra);
  } else if (d.summon) {
    fam = callFamiliar(run, combat, rng, d.summon as FamiliarKind, extra);
  } else if (d.special === "evokeLeft") {
    fam = evokeLeft(run, combat, rng);
  } else if (d.special === "pulseFamiliars") {
    fam = pulseAll(run, combat, rng);
  } else if (d.special === "evolveAll") {
    fam = evolveAll(combat);
  } else if (d.special === "channelSpark") {
    const times = nums.stageBonus ?? 2;
    let acc = emptyPulse();
    for (let i = 0; i < times; i++) acc = merge(acc, callFamiliar(run, combat, rng, "spark", 0));
    fam = acc;
    const foe = randomLiving(combat, rng);
    if (foe) dealToEnemy(run, combat, foe, nums.bonus ?? 2, 1, false, killed, damageTo);
  } else if (d.special === "extraSlot") {
    combat.familiarSlots += extra || 1;
    note(combat, "A new kennel opens.");
  }
  if (fam) {
    killed.push(...fam.killed);
    damageTo.push(...fam.damageTo);
  }
  if (d.special === "pulseFamiliars" && combat.afterburn) {
    for (const e of combat.enemies) if (e.hp > 0) e.cinder += combat.afterburn;
  }

  if (d.special === "lastWord" && target && killed.includes(target.id)) {
    combat.energy += 2;
  }

  const exhaust =
    d.type === "power" || (d.special === "limitBreak" ? !card.upgraded : Boolean(d.exhaust));
  if (exhaust) combat.exhaustPile.push(card);
  else combat.discardPile.push(card);

  if (d.special === "discardRand" && combat.hand.length) {
    const i = rng.int(0, combat.hand.length - 1);
    const [disc] = combat.hand.splice(i, 1);
    if (disc) combat.discardPile.push(disc);
  }

  if (nums.draw) drawCards(combat, rng, nums.draw);

  if (d.special === "acrobatics" && combat.hand.length) {
    const i = rng.int(0, combat.hand.length - 1);
    const [disc] = combat.hand.splice(i, 1);
    if (disc) combat.discardPile.push(disc);
  }

  if (d.special === "reprise" && combat.discardPile.length) {
    const i = rng.int(0, combat.discardPile.length - 1);
    const [back] = combat.discardPile.splice(i, 1);
    if (back) combat.hand.push(back);
  }

  if (d.special === "handUpgrade") {
    const candidates = combat.hand.filter((c) => !c.upgraded && defOf(c).rarity !== "status");
    if (candidates.length) {
      rng.pick(candidates).upgraded = true;
    }
  }

  if (d.special === "battleTrance") combat.noDraw = true;

  if (d.special === "feast" && drained > 0) {
    run.hp = Math.min(run.maxHp, run.hp + drained);
  }
  if (d.special === "drainAll") {
    const n = new Set(damageTo.map((x) => x.id)).size;
    if (n > 0) run.hp = Math.min(run.maxHp, run.hp + n * (nums.heal ?? 1));
  } else if (
    nums.heal &&
    d.special !== "feast" &&
    d.special !== "execute" &&
    d.special !== "hunger" &&
    d.special !== "bloodReckoning" &&
    d.special !== "leech"
  ) {
    run.hp = Math.min(run.maxHp, run.hp + nums.heal);
  }
  if (combat.hunger > 0 && d.type === "attack") {
    run.hp = Math.min(run.maxHp, run.hp + combat.hunger);
  }

  if (run.hp <= 0 && tryFairy(run)) {
    note(combat, "The fairy shatters. You remain.");
  }

  const won = combat.enemies.every((e) => e.hp <= 0);
  const dead = run.hp <= 0;
  if (!fam && d.special !== "extraSlot") {
    const bits = [`You play ${d.name}.`];
    if (playerHurt) bits.push(`Spend ${playerHurt} HP.`);
    for (const hit of damageTo) {
      const foe = combat.enemies.find((e) => e.id === hit.id);
      bits.push(`${foe?.name ?? "A foe"} takes ${hit.amount}.`);
    }
    if (killed.length) bits.push(killed.length === 1 ? "A foe falls." : `${killed.length} foes fall.`);
    note(combat, bits.join(" "));
  } else if (fam?.log) {
    note(combat, fam.log);
  }
  if (won) combat.phase = "resolving";
  return { run, combat, killed, damageTo, playerHurt, needTarget: false, dead, won };
}

export function usePotion(
  run: RunState,
  combat: CombatState,
  rng: Rng,
  slot: number,
  targetId?: string,
): PlayResult {
  const empty: PlayResult = {
    run,
    combat,
    killed: [],
    damageTo: [],
    playerHurt: 0,
    needTarget: false,
    dead: false,
    won: false,
  };
  if (combat.phase !== "player") return empty;
  const id = run.potions[slot];
  if (!id || id === "fairy") return empty;
  const living = combat.enemies.filter((e) => e.hp > 0);
  if (id === "fire" && !targetId) {
    if (living.length === 1) targetId = living[0]!.id;
    else {
      combat.targetingPotion = slot;
      return { ...empty, needTarget: true };
    }
  }
  run.potions[slot] = null;
  combat.targetingPotion = null;
  const killed: string[] = [];
  const damageTo: { id: string; amount: number }[] = [];
  if (id === "blood") {
    const amt = Math.ceil(run.maxHp * 0.2);
    run.hp = Math.min(run.maxHp, run.hp + amt);
    combat.log = `Healed ${amt}.`;
    note(combat, `Potion: heal ${amt}.`);
  } else if (id === "block") {
    gainBlock(combat, 12);
    combat.log = "Gained 12 Block.";
    note(combat, "Potion: +12 Block.");
  } else if (id === "fire") {
    const t = combat.enemies.find((e) => e.id === targetId && e.hp > 0);
    if (t) {
      hitEnemy(run, combat, t, 20, killed, damageTo);
      note(combat, `Fire potion hits ${t.name} for 20.`);
    }
  } else if (id === "str") {
    combat.strength += 2;
    note(combat, "Potion: +2 Strength.");
  } else if (id === "energy") {
    combat.energy += 2;
    note(combat, "Potion: +2 Energy.");
  } else if (id === "swift") {
    drawCards(combat, rng, 3);
    note(combat, "Potion: draw 3.");
  }
  const won = combat.enemies.every((e) => e.hp <= 0);
  return { run, combat, killed, damageTo, playerHurt: 0, needTarget: false, dead: false, won };
}

export function endPlayerTurn(run: RunState, combat: CombatState, rng: Rng): FamiliarPulse {
  combat.targetingUid = null;
  combat.targetingPotion = null;
  const keep: CardInst[] = [];
  for (const c of combat.hand) {
    const d = defOf(c);
    if (d.ethereal) combat.exhaustPile.push(c);
    else combat.discardPile.push(c);
  }
  combat.hand = keep;
  const pulse = combat.familiars.length
    ? pulseAll(run, combat, rng)
    : { damageTo: [], killed: [], blockGained: 0, log: "" };
  if (combat.afterburn) {
    for (const e of combat.enemies) if (e.hp > 0) e.cinder += combat.afterburn;
  }
  if (combat.leech > 0) {
    const sip = combat.leechDrain || 2;
    for (let i = 0; i < combat.leech; i++) {
      const foe = randomLiving(combat, rng);
      if (!foe) break;
      const res = applyHpDamage(foe.hp, foe.block, sip);
      foe.hp = res.hp;
      foe.block = res.block;
      run.damageDealt += sip;
      pulse.damageTo.push({ id: foe.id, amount: sip });
      if (foe.hp <= 0) {
        foe.hp = 0;
        foe.block = 0;
        pulse.killed.push(foe.id);
        run.floorKills += 1;
      }
      run.hp = Math.min(run.maxHp, run.hp + sip);
      note(combat, `Leech drinks ${sip} from ${foe.name}.`);
    }
  }
  for (const e of combat.enemies) {
    if (e.hp <= 0 || e.cinder <= 0) continue;
    const amt = e.cinder;
    e.cinder -= 1;
    const res = applyHpDamage(e.hp, 0, amt);
    e.hp = res.hp;
    run.damageDealt += amt;
    pulse.damageTo.push({ id: e.id, amount: amt });
    if (e.hp <= 0) {
      e.hp = 0;
      e.block = 0;
      pulse.killed.push(e.id);
      run.floorKills += 1;
    }
  }
  if (hasRelic(run, "orichalcum") && combat.block === 0) gainBlock(combat, 6);
  if (combat.overheatNeed > 0 && combat.cardsPlayed >= combat.overheatNeed) {
    const foe = randomLiving(combat, rng);
    if (foe) {
      const amt = 12 + combat.focus;
      const res = applyHpDamage(foe.hp, foe.block, amt);
      foe.hp = res.hp;
      foe.block = res.block;
      run.damageDealt += amt;
      pulse.damageTo.push({ id: foe.id, amount: amt });
      if (foe.hp <= 0) {
        foe.hp = 0;
        foe.block = 0;
        pulse.killed.push(foe.id);
        run.floorKills += 1;
      }
    }
  }
  combat.smokeMirrors = 0;
  combat.prismUsed = false;
  combat.cardsPlayed = 0;
  combat.blockGainedThisTurn = 0;
  combat.bloodSpentTurn = 0;
  combat.toxinApplied = false;
  combat.cinderApplied = false;
  if (combat.weak > 0) combat.weak -= 1;
  if (combat.vulnerable > 0) combat.vulnerable -= 1;
  if (combat.frail > 0) combat.frail -= 1;
  combat.noDraw = false;
  const won = combat.enemies.every((e) => e.hp <= 0);
  combat.phase = won ? "resolving" : "enemy";
  if (!pulse.log) note(combat, "They move.");
  else note(combat, pulse.log);
  persistRng(run, rng);
  return pulse;
}

export interface EnemyStepResult {
  run: RunState;
  combat: CombatState;
  playerHurt: number;
  blocked: number;
  dead: boolean;
  enemyId: string;
  kind: string;
}

export function stepEnemy(
  run: RunState,
  combat: CombatState,
  rng: Rng,
  enemy: EnemyInst,
): EnemyStepResult {
  enemy.block = 0;
  let playerHurt = 0;
  let blocked = 0;
  const intent = enemy.intent;
  const str = enemy.strength;

  if (enemy.toxin > 0) {
    const amt = enemy.toxin;
    enemy.toxin -= 1;
    const res = applyHpDamage(enemy.hp, 0, amt);
    enemy.hp = res.hp;
    run.damageDealt += amt;
    if (enemy.hp <= 0) {
      enemy.hp = 0;
      run.floorKills += 1;
      if (enemy.weak > 0) enemy.weak -= 1;
      if (enemy.vulnerable > 0) enemy.vulnerable -= 1;
      enemy.intent = nextIntent(enemy, Math.max(0, run.row), run.act ?? 1);
      persistRng(run, rng);
      note(combat, `${enemy.name} bleeds ${amt} Toxin.`);
      return { run, combat, playerHurt: 0, blocked: 0, dead: false, enemyId: enemy.id, kind: "toxin" };
    }
  }

  if (enemy.daze > 0) {
    enemy.daze -= 1;
    if (enemy.weak > 0) enemy.weak -= 1;
    if (enemy.vulnerable > 0) enemy.vulnerable -= 1;
    enemy.intent = nextIntent(enemy, Math.max(0, run.row), run.act ?? 1);
    persistRng(run, rng);
    note(combat, `${enemy.name} is dazed and skips.`);
    return { run, combat, playerHurt: 0, blocked: 0, dead: false, enemyId: enemy.id, kind: "daze" };
  }

  const attackOnce = (base: number) => {
    let d = base + str;
    if (enemy.weak > 0) d = Math.floor(d * 0.75);
    if (combat.vulnerable > 0) d = Math.floor(d * 1.5);
    d = Math.max(0, d);
    const before = combat.block;
    const res = applyHpDamage(run.hp, combat.block, d);
    run.hp = res.hp;
    combat.block = res.block;
    playerHurt += res.taken;
    blocked += before - res.block;
    if (res.taken > 0 && hasRelic(run, "bronze_scales") && enemy.hp > 0) {
      const back = applyHpDamage(enemy.hp, enemy.block, 3);
      enemy.hp = back.hp;
      enemy.block = back.block;
      if (enemy.hp <= 0) {
        enemy.hp = 0;
        run.floorKills += 1;
      }
    }
  };

  if (intent.kind === "attack") {
    const hits = intent.hits ?? 1;
    for (let i = 0; i < hits; i++) attackOnce(intent.dmg);
  } else if (intent.kind === "defend") {
    enemy.block += intent.block;
  } else if (intent.kind === "buff") {
    enemy.strength += intent.strength;
    if (intent.block) enemy.block += intent.block;
  } else if (intent.kind === "debuff") {
    if (intent.weak) combat.weak += intent.weak;
    if (intent.vulnerable) combat.vulnerable += intent.vulnerable;
    if (intent.daze) applyEnemyDaze(combat, enemy, intent.daze);
  } else if (intent.kind === "attackDefend") {
    attackOnce(intent.dmg);
    enemy.block += intent.block;
  } else if (intent.kind === "toxin") {
    applyEnemyToxin(combat);
  } else if (intent.kind === "cinder") {
    applyEnemyCinder(combat);
  } else if (intent.kind === "attackToxin") {
    attackOnce(intent.dmg);
    applyEnemyToxin(combat);
  } else if (intent.kind === "attackCinder") {
    attackOnce(intent.dmg);
    applyEnemyCinder(combat);
  } else if (intent.kind === "daze") {
    applyEnemyDaze(combat, enemy, intent.daze);
  }

  if (enemy.weak > 0) enemy.weak -= 1;
  if (enemy.vulnerable > 0) enemy.vulnerable -= 1;
  enemy.intent = nextIntent(enemy, Math.max(0, run.row), run.act ?? 1);

  if (run.hp <= 0 && tryFairy(run)) {
    note(combat, "The fairy shatters. You remain.");
  }
  const dead = run.hp <= 0;
  if (intent.kind === "attack" || intent.kind === "attackDefend" || intent.kind === "attackToxin" || intent.kind === "attackCinder") {
    const bits = [`${enemy.name} strikes.`];
    if (playerHurt) bits.push(`You take ${playerHurt}.`);
    if (blocked) bits.push(`${blocked} blocked.`);
    note(combat, bits.join(" "));
  } else if (intent.kind === "defend") {
    note(combat, `${enemy.name} guards (+${intent.block} Block).`);
  } else if (intent.kind === "buff") {
    note(combat, `${enemy.name} grows stronger.`);
  } else if (intent.kind === "debuff") {
    note(combat, `${enemy.name} hexes you.`);
  } else if (intent.kind === "toxin") {
    note(combat, `${enemy.name} applies Toxin.`);
  } else if (intent.kind === "cinder") {
    note(combat, `${enemy.name} applies Cinder.`);
  } else if (intent.kind === "daze") {
    note(combat, `${enemy.name} dazes you.`);
  }
  persistRng(run, rng);
  return { run, combat, playerHurt, blocked, dead, enemyId: enemy.id, kind: intent.kind };
}

export function beginPlayerTurn(run: RunState, combat: CombatState, rng: Rng) {
  combat.turn += 1;
  combat.block = 0;
  if (combat.metallicize) gainBlock(combat, combat.metallicize);
  combat.energy = combat.maxEnergy;
  if (hasRelic(run, "star_crystal")) combat.arcana = Math.min(9, combat.arcana + 1);
  if (combat.daze > 0) {
    combat.energy = Math.max(0, combat.energy - 1);
    combat.daze -= 1;
  }
  if (combat.toxin > 0) {
    const amt = combat.toxin;
    combat.toxin -= 1;
    loseHp(run, combat, amt);
  }
  if (combat.cinder > 0) {
    const amt = combat.cinder;
    combat.cinder -= 1;
    loseHp(run, combat, amt);
  }
  combat.noDraw = false;
  combat.phase = "player";
  combat.targetingUid = null;
  combat.targetingPotion = null;
  drawCards(combat, rng, 5);
  if (hasRelic(run, "stone_calendar") && combat.turn === 7) {
    for (const e of combat.enemies) {
      if (e.hp <= 0) continue;
      const res = applyHpDamage(e.hp, e.block, 52);
      e.hp = res.hp;
      e.block = res.block;
      run.damageDealt += 52;
      if (e.hp <= 0) {
        e.hp = 0;
        run.floorKills += 1;
      }
    }
    combat.log = "The calendar strikes.";
    note(combat, "The calendar strikes.");
  } else {
    note(combat, `Turn ${combat.turn}.`);
  }
  persistRng(run, rng);
}

export function liveNumbers(run: RunState, combat: CombatState, card: CardInst): CardNumbers {
  const d = defOf(card);
  const n = { ...d.numbers(card.upgraded) };
  const living = combat.enemies.filter((e) => e.hp > 0);
  const vuln = living.length === 1 ? living[0]!.vulnerable : 0;
  const doubleHit =
    d.type === "attack" && hasRelic(run, "pen_nib") && (combat.attacksPlayed + 1) % 10 === 0;
  if (d.special === "discharge" && n.damage) {
    n.damage = n.damage * Math.max(0, combat.arcana);
  } else if (d.special === "bloodPrice") {
    n.damage = calcDamage(
      (n.bonus ?? 4) * combat.bloodSpentTurn,
      playerStr(run, combat),
      combat.weak,
      vuln,
      doubleHit,
    );
  } else if (d.special === "bloodReckoning") {
    n.damage = calcDamage(combat.bloodSpentBattle, playerStr(run, combat), combat.weak, vuln, doubleHit);
  } else if (n.damage) {
    n.damage = calcDamage(n.damage, playerStr(run, combat), combat.weak, vuln, doubleHit);
  }
  if (d.special === "spendArcana" && n.bonus && combat.arcana >= 3) {
    n.damage = (n.damage ?? 0) + n.bonus;
  }
  if (n.block) {
    n.block = calcBlock(n.block, combat.dexterity, combat.frail);
    if (combat.bastion > 0) n.block += combat.bastion;
  }
  return n;
}

export function afterCombat(run: RunState, rng: Rng, type: NodeType): RewardState {
  if (hasRelic(run, "burning_blood")) {
    run.hp = Math.min(run.maxHp, run.hp + 6);
  }
  const gold =
    type === "boss" ? rng.int(80, 110) : type === "elite" ? rng.int(28, 42) : rng.int(12, 22);
  run.gold += gold;
  const bias = type === "boss" ? "boss" : type === "elite" ? "elite" : "normal";
  const cards = rollCardRewards(rng, bias, 3, run.classId);
  let relic: string | null = null;
  if (type === "elite" || type === "boss") relic = rollRelic(rng, run.relics);
  let potion: string | null = null;
  const potionChance = type === "elite" ? 0.45 : type === "boss" ? 0.7 : 0.18;
  if (rng.chance(potionChance) && run.potions.some((p) => p === null)) {
    potion = rollPotion(rng);
  }
  persistRng(run, rng);
  return {
    gold,
    cards,
    relic,
    potion,
    pickedCard: false,
    pickedRelic: type !== "elite" && type !== "boss",
    pickedPotion: !potion,
  };
}

export function addCardToDeck(run: RunState, card: CardInst) {
  run.deck.push(cloneCard(card));
}

export function addRelic(run: RunState, id: string) {
  if (run.relics.includes(id)) return;
  run.relics.push(id);
  if (id === "anchor_ring") {
    run.maxHp += 8;
    run.hp += 8;
  }
}

export function addPotion(run: RunState, id: string): boolean {
  const i = run.potions.findIndex((p) => p === null);
  if (i < 0) return false;
  run.potions[i] = id;
  return true;
}

export function restHeal(run: RunState) {
  const amt = Math.ceil(run.maxHp * 0.3);
  run.hp = Math.min(run.maxHp, run.hp + amt);
  if (hasRelic(run, "eternal_feather")) {
    const extra = Math.floor(run.deck.length / 5) * 3;
    run.hp = Math.min(run.maxHp, run.hp + extra);
  }
}

export function upgradeCard(run: RunState, uid: string): boolean {
  const c = run.deck.find((x) => x.uid === uid);
  if (!c || c.upgraded) return false;
  const d = defOf(c);
  if (d.unplayable) return false;
  c.upgraded = true;
  return true;
}

export function removeCard(run: RunState, uid: string): boolean {
  const i = run.deck.findIndex((x) => x.uid === uid);
  if (i < 0) return false;
  if (run.deck.length <= 1) return false;
  run.deck.splice(i, 1);
  return true;
}

export function generateShop(run: RunState, rng: Rng): ShopState {
  const cards = rollCardRewards(rng, "normal", 3, run.classId).map((card) => ({
    item: card,
    price: priceFor(CARD_BY_ID[card.defId]!.rarity, rng),
    sold: false,
  }));
  const relics = rollRelicOffers(rng, run.relics, 2).map((id) => ({
    item: id,
    price: relicPrice(id, rng),
    sold: false,
  }));
  const potions = [rollPotion(rng), rollPotion(rng)].map((id) => ({
    item: id,
    price: rng.int(48, 58),
    sold: false,
  }));
  persistRng(run, rng);
  return { cards, relics, potions, removePrice: 75, removed: false };
}
