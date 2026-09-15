import type { CombatState, EnemyInst, RunState } from "./types";
import type { Rng } from "./rng";

export type FamiliarKind = "ember" | "rime" | "gloom" | "spark";

export interface FamiliarInst {
  kind: FamiliarKind;
  stage: 1 | 2 | 3;
  stored: number;
}

export interface FamiliarPulse {
  damageTo: { id: string; amount: number }[];
  killed: string[];
  blockGained: number;
  log: string;
}

export const FAMILIAR_KINDS: FamiliarKind[] = ["ember", "rime", "gloom", "spark"];

const NAMES: Record<FamiliarKind, [string, string, string]> = {
  ember: ["Ember", "Cinder", "Pyre"],
  rime: ["Rime", "Hoar", "Glacier"],
  gloom: ["Gloom", "Umbra", "Nightmaw"],
  spark: ["Spark", "Coil", "Tempest"],
};

export const FAMILIAR_ART: Record<FamiliarKind, string> = {
  ember: "/game/ember.jpg",
  rime: "/game/rime.jpg",
  gloom: "/game/gloom.jpg",
  spark: "/game/spark.jpg",
};

const PASSIVE_DMG = {
  ember: [3, 5, 8],
  rime: [2, 4, 6],
  gloom: [4, 6, 9],
  spark: [2, 3, 4],
} as const;

const EVOKE_DMG = {
  ember: [8, 14, 22],
  rime: [5, 9, 14],
  spark: [7, 12, 18],
} as const;

export function familiarName(f: FamiliarInst): string {
  return NAMES[f.kind][f.stage - 1]!;
}

export function familiarPassive(f: FamiliarInst): string {
  const i = f.stage - 1;
  switch (f.kind) {
    case "ember":
      return `${PASSIVE_DMG.ember[i]} to a foe`;
    case "rime":
      return `+${PASSIVE_DMG.rime[i]} Block`;
    case "gloom":
      return `Store ${PASSIVE_DMG.gloom[i]} · ${f.stored}`;
    case "spark":
      return `${PASSIVE_DMG.spark[i]} to ALL`;
  }
}

export function familiarEvokeHint(f: FamiliarInst): string {
  const i = f.stage - 1;
  switch (f.kind) {
    case "ember":
      return `Evoke ${EVOKE_DMG.ember[i]} ALL`;
    case "rime":
      return `Evoke +${EVOKE_DMG.rime[i]} Block`;
    case "gloom":
      return `Evoke ${f.stored} ALL`;
    case "spark":
      return `Evoke ${EVOKE_DMG.spark[i]} ALL`;
  }
}

export function makeFamiliar(kind: FamiliarKind, stage: 1 | 2 | 3 = 1): FamiliarInst {
  return { kind, stage, stored: 0 };
}

export function clampStage(n: number): 1 | 2 | 3 {
  if (n <= 1) return 1;
  if (n >= 3) return 3;
  return 2;
}

export function emptyPulse(): FamiliarPulse {
  return { damageTo: [], killed: [], blockGained: 0, log: "" };
}

export function merge(a: FamiliarPulse, b: FamiliarPulse): FamiliarPulse {
  return {
    damageTo: a.damageTo.concat(b.damageTo),
    killed: a.killed.concat(b.killed),
    blockGained: a.blockGained + b.blockGained,
    log: [a.log, b.log].filter(Boolean).join(" · "),
  };
}

function applyHpDamage(
  hp: number,
  block: number,
  amount: number,
): { hp: number; block: number } {
  let left = amount;
  let b = block;
  if (b > 0) {
    const used = Math.min(b, left);
    b -= used;
    left -= used;
  }
  return { hp: Math.max(0, hp - left), block: b };
}

function hit(
  run: RunState,
  enemy: EnemyInst,
  amount: number,
  out: FamiliarPulse,
) {
  if (amount <= 0 || enemy.hp <= 0) return;
  const res = applyHpDamage(enemy.hp, enemy.block, amount);
  enemy.hp = res.hp;
  enemy.block = res.block;
  run.damageDealt += amount;
  out.damageTo.push({ id: enemy.id, amount });
  if (enemy.hp <= 0) {
    enemy.hp = 0;
    enemy.block = 0;
    out.killed.push(enemy.id);
    run.floorKills += 1;
  }
}

function hitAll(run: RunState, combat: CombatState, amount: number, out: FamiliarPulse) {
  for (const e of combat.enemies) {
    if (e.hp > 0) hit(run, e, amount, out);
  }
}

function pickLiving(combat: CombatState, rng: Rng): EnemyInst | undefined {
  const living = combat.enemies.filter((e) => e.hp > 0);
  if (!living.length) return undefined;
  return rng.pick(living);
}

export function pulseOne(
  run: RunState,
  combat: CombatState,
  rng: Rng,
  f: FamiliarInst,
): FamiliarPulse {
  const out = emptyPulse();
  const i = f.stage - 1;
  switch (f.kind) {
    case "ember": {
      const t = pickLiving(combat, rng);
      if (t) hit(run, t, PASSIVE_DMG.ember[i]!, out);
      out.log = `${familiarName(f)} burns`;
      break;
    }
    case "rime": {
      const b = PASSIVE_DMG.rime[i]!;
      combat.block += b;
      out.blockGained += b;
      out.log = `${familiarName(f)} wards`;
      break;
    }
    case "gloom": {
      f.stored += PASSIVE_DMG.gloom[i]!;
      out.log = `${familiarName(f)} stores ${f.stored}`;
      break;
    }
    case "spark": {
      hitAll(run, combat, PASSIVE_DMG.spark[i]!, out);
      out.log = `${familiarName(f)} arcs`;
      break;
    }
  }
  return out;
}

export function pulseAll(run: RunState, combat: CombatState, rng: Rng): FamiliarPulse {
  let acc = emptyPulse();
  for (const f of combat.familiars) {
    acc = merge(acc, pulseOne(run, combat, rng, f));
  }
  if (acc.log) combat.log = acc.log;
  return acc;
}

function evokeEffect(
  run: RunState,
  combat: CombatState,
  rng: Rng,
  f: FamiliarInst,
): FamiliarPulse {
  const out = emptyPulse();
  const i = f.stage - 1;
  switch (f.kind) {
    case "ember":
      hitAll(run, combat, EVOKE_DMG.ember[i]!, out);
      out.log = `${familiarName(f)} erupts`;
      break;
    case "rime": {
      const b = EVOKE_DMG.rime[i]!;
      combat.block += b;
      out.blockGained += b;
      out.log = `${familiarName(f)} sheathes you`;
      break;
    }
    case "gloom": {
      const dmg = f.stored;
      f.stored = 0;
      hitAll(run, combat, dmg, out);
      out.log = `${familiarName(f)} empties`;
      break;
    }
    case "spark":
      hitAll(run, combat, EVOKE_DMG.spark[i]!, out);
      out.log = `${familiarName(f)} detonates`;
      break;
  }
  void rng;
  return out;
}

export function evokeAt(
  run: RunState,
  combat: CombatState,
  rng: Rng,
  index: number,
  keep: boolean,
): FamiliarPulse {
  const f = combat.familiars[index];
  if (!f) return emptyPulse();
  const out = evokeEffect(run, combat, rng, f);
  if (!keep) combat.familiars.splice(index, 1);
  if (out.log) combat.log = out.log;
  return out;
}

export function evokeLeft(run: RunState, combat: CombatState, rng: Rng): FamiliarPulse {
  if (!combat.familiars.length) {
    combat.log = "Nothing to unleash.";
    return emptyPulse();
  }
  return evokeAt(run, combat, rng, 0, false);
}

function makeRoom(run: RunState, combat: CombatState, rng: Rng): FamiliarPulse {
  let acc = emptyPulse();
  while (combat.familiars.length >= combat.familiarSlots && combat.familiars.length) {
    acc = merge(acc, evokeAt(run, combat, rng, 0, false));
  }
  return acc;
}

export function callFamiliar(
  run: RunState,
  combat: CombatState,
  rng: Rng,
  kind: FamiliarKind,
  extraStages = 0,
): FamiliarPulse {
  const existing = combat.familiars.findIndex((f) => f.kind === kind);
  if (existing >= 0) {
    const f = combat.familiars[existing]!;
    if (f.stage >= 3) {
      const boom = evokeAt(run, combat, rng, existing, true);
      const extra = pulseOne(run, combat, rng, f);
      const out = merge(boom, extra);
      combat.log = `${familiarName(f)} surges`;
      out.log = combat.log;
      return out;
    }
    f.stage = clampStage(f.stage + 1);
    combat.log = `${familiarName(f)} evolves · ${"I".repeat(f.stage)}`;
    const out = emptyPulse();
    out.log = combat.log;
    return out;
  }
  let acc = makeRoom(run, combat, rng);
  if (combat.familiarSlots <= 0) return acc;
  const f = makeFamiliar(kind, clampStage(1 + extraStages));
  combat.familiars.push(f);
  combat.log = `${familiarName(f)} answers · ${"I".repeat(f.stage)}`;
  acc.log = [acc.log, combat.log].filter(Boolean).join(" · ");
  return acc;
}

export function callMany(
  run: RunState,
  combat: CombatState,
  rng: Rng,
  kinds: FamiliarKind[],
  extraStages = 0,
): FamiliarPulse {
  let acc = emptyPulse();
  for (const k of kinds) acc = merge(acc, callFamiliar(run, combat, rng, k, extraStages));
  return acc;
}

export function evolveAll(combat: CombatState): FamiliarPulse {
  const out = emptyPulse();
  if (!combat.familiars.length) {
    combat.log = "No bond to feed.";
    out.log = combat.log;
    return out;
  }
  for (const f of combat.familiars) {
    if (f.stage < 3) f.stage = clampStage(f.stage + 1);
  }
  combat.log = "The pack grows.";
  out.log = combat.log;
  return out;
}
