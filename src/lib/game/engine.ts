import { CARD_BY_ID, cardCost, defOf, mintCard, rollCardRewards, starterDeck, setCardSeq, getCardSeq, priceFor } from "./cards";
import { nextIntent, rollEncounter } from "./enemies";
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
const BASE_HP = 72;

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

export function newRun(seed?: number): { run: RunState; rng: Rng } {
  const s = seed ?? ((Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0);
  const rng = new Rng(s);
  setCardSeq(1);
  const deck = starterDeck();
  const map = generateMap(rng);
  const run: RunState = {
    seed: s,
    rngState: rng.getState(),
    gold: 99,
    hp: BASE_HP,
    maxHp: BASE_HP,
    deck,
    relics: ["burning_blood"],
    potions: [null, null, null],
    map,
    currentNodeId: null,
    visited: [],
    row: -1,
    cardSeq: getCardSeq(),
    shop: null,
    floorKills: 0,
    damageDealt: 0,
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

export function startCombat(run: RunState, rng: Rng, type: NodeType): CombatState {
  const enemies = rollEncounter(type, rng, Math.max(0, run.row));
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
    dexterity: 0,
    weak: 0,
    vulnerable: 0,
    frail: 0,
    metallicize: 0,
    noDraw: false,
    hand: [],
    drawPile: copies,
    discardPile: [],
    exhaustPile: [],
    targetingUid: null,
    targetingPotion: null,
    attacksPlayed: 0,
    log: "The chamber answers.",
  };
  const drawN = 5 + (hasRelic(run, "bag") ? 2 : 0);
  drawCards(combat, rng, drawN);
  if (hasRelic(run, "blood_vial")) {
    run.hp = Math.min(run.maxHp, run.hp + 2);
  }
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
) {
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
) {
  for (let i = 0; i < hits; i++) {
    if (enemy.hp <= 0) break;
    const dmg = calcDamage(base, playerStr(run, combat), combat.weak, enemy.vulnerable, doubleHit);
    hitEnemy(run, combat, enemy, dmg, killed, damageTo);
  }
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
  combat.energy -= cardCost(card);

  const nums = d.numbers(card.upgraded);
  const killed: string[] = [];
  const damageTo: { id: string; amount: number }[] = [];
  let playerHurt = 0;

  const target = targetId ? combat.enemies.find((e) => e.id === targetId && e.hp > 0) : undefined;

  if (nums.hpLoss) {
    playerHurt += loseHp(run, combat, nums.hpLoss);
  }

  if (d.special === "limitBreak") {
    combat.strength *= 2;
  } else if (nums.strength && nums.strength > 0 && d.special !== "disarm") {
    combat.strength += nums.strength;
  }

  if (nums.metallicize) combat.metallicize += nums.metallicize;
  if (nums.energy) combat.energy += nums.energy;

  if (nums.block) {
    combat.block += calcBlock(nums.block, combat.dexterity, combat.frail);
  }

  const doubleHit =
    d.type === "attack" && hasRelic(run, "pen_nib") && (combat.attacksPlayed + 1) % 10 === 0;

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
  } else if (d.type === "attack" && nums.damage) {
    const hits = nums.hits ?? 1;
    if (d.target === "all") {
      for (const e of combat.enemies.filter((en) => en.hp > 0)) {
        dealToEnemy(run, combat, e, nums.damage, hits, doubleHit, killed, damageTo);
      }
    } else if (target) {
      dealToEnemy(run, combat, target, nums.damage, hits, doubleHit, killed, damageTo);
    }
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

  const exhaust =
    d.type === "power" || (d.special === "limitBreak" ? !card.upgraded : Boolean(d.exhaust));
  if (exhaust) combat.exhaustPile.push(card);
  else combat.discardPile.push(card);

  if (nums.draw) drawCards(combat, rng, nums.draw);

  if (d.special === "acrobatics" && combat.hand.length) {
    const i = rng.int(0, combat.hand.length - 1);
    const [disc] = combat.hand.splice(i, 1);
    if (disc) combat.discardPile.push(disc);
  }

  if (d.special === "battleTrance") combat.noDraw = true;

  if (run.hp <= 0 && tryFairy(run)) {
    combat.log = "The fairy shatters. You remain.";
  }

  const won = combat.enemies.every((e) => e.hp <= 0);
  const dead = run.hp <= 0;
  combat.log = d.name;
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
  } else if (id === "block") {
    combat.block += 12;
    combat.log = "Gained 12 Block.";
  } else if (id === "fire") {
    const t = combat.enemies.find((e) => e.id === targetId && e.hp > 0);
    if (t) hitEnemy(run, combat, t, 20, killed, damageTo);
  } else if (id === "str") {
    combat.strength += 2;
  } else if (id === "energy") {
    combat.energy += 2;
  } else if (id === "swift") {
    drawCards(combat, rng, 3);
  }
  const won = combat.enemies.every((e) => e.hp <= 0);
  return { run, combat, killed, damageTo, playerHurt: 0, needTarget: false, dead: false, won };
}

export function endPlayerTurn(run: RunState, combat: CombatState, rng: Rng) {
  combat.targetingUid = null;
  combat.targetingPotion = null;
  const keep: CardInst[] = [];
  for (const c of combat.hand) {
    const d = defOf(c);
    if (d.ethereal) combat.exhaustPile.push(c);
    else combat.discardPile.push(c);
  }
  combat.hand = keep;
  if (hasRelic(run, "orichalcum") && combat.block === 0) combat.block += 6;
  if (combat.weak > 0) combat.weak -= 1;
  if (combat.vulnerable > 0) combat.vulnerable -= 1;
  if (combat.frail > 0) combat.frail -= 1;
  combat.noDraw = false;
  combat.phase = "enemy";
  combat.log = "They move.";
  persistRng(run, rng);
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
  } else if (intent.kind === "attackDefend") {
    attackOnce(intent.dmg);
    enemy.block += intent.block;
  }

  if (enemy.weak > 0) enemy.weak -= 1;
  if (enemy.vulnerable > 0) enemy.vulnerable -= 1;
  enemy.intent = nextIntent(enemy, Math.max(0, run.row));

  if (run.hp <= 0 && tryFairy(run)) {
    combat.log = "The fairy shatters. You remain.";
  }
  const dead = run.hp <= 0;
  persistRng(run, rng);
  return { run, combat, playerHurt, blocked, dead, enemyId: enemy.id, kind: intent.kind };
}

export function beginPlayerTurn(run: RunState, combat: CombatState, rng: Rng) {
  combat.turn += 1;
  combat.block = 0;
  combat.block += combat.metallicize;
  combat.energy = combat.maxEnergy;
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
  } else {
    combat.log = `Turn ${combat.turn}.`;
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
  if (n.damage) {
    n.damage = calcDamage(n.damage, playerStr(run, combat), combat.weak, vuln, doubleHit);
  }
  if (n.block) {
    n.block = calcBlock(n.block, combat.dexterity, combat.frail);
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
  const cards = rollCardRewards(rng, bias);
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
  const cards = rollCardRewards(rng, "normal", 3).map((card) => ({
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
