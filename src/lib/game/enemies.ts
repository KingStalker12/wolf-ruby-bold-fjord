import type { EnemyDef, EnemyInst, Intent, NodeType } from "./types";
import type { Rng } from "./rng";

export const ENEMIES: EnemyDef[] = [
  {
    id: "mite",
    name: "Tomb Mite",
    hp: [16, 20],
    pattern: [
      { kind: "attack", dmg: 6 },
      { kind: "attack", dmg: 5 },
      { kind: "defend", block: 5 },
    ],
  },
  {
    id: "acolyte",
    name: "Acolyte",
    hp: [24, 28],
    pattern: [
      { kind: "debuff", weak: 2 },
      { kind: "attack", dmg: 8 },
      { kind: "attack", dmg: 7 },
    ],
  },
  {
    id: "archer",
    name: "Bone Archer",
    hp: [22, 26],
    pattern: [
      { kind: "attack", dmg: 4, hits: 2 },
      { kind: "attack", dmg: 10 },
      { kind: "defend", block: 6 },
    ],
  },
  {
    id: "wraith",
    name: "Soot Wraith",
    hp: [30, 36],
    pattern: [
      { kind: "debuff", vulnerable: 2 },
      { kind: "attack", dmg: 11 },
      { kind: "attackDefend", dmg: 7, block: 7 },
    ],
  },
  {
    id: "jaw",
    name: "Ossuary Beast",
    hp: [38, 44],
    pattern: [
      { kind: "buff", strength: 2, block: 6 },
      { kind: "attack", dmg: 12 },
      { kind: "attack", dmg: 9 },
    ],
  },
  {
    id: "sentinel",
    name: "Gilded Sentinel",
    hp: [58, 64],
    pattern: [
      { kind: "attack", dmg: 12 },
      { kind: "defend", block: 16 },
      { kind: "buff", strength: 3, block: 8 },
      { kind: "attack", dmg: 16 },
    ],
  },
  {
    id: "priest",
    name: "Hex Priest",
    hp: [52, 58],
    pattern: [
      { kind: "debuff", weak: 2, vulnerable: 2 },
      { kind: "attack", dmg: 14 },
      { kind: "attack", dmg: 6, hits: 2 },
      { kind: "buff", strength: 2 },
    ],
  },
  {
    id: "warden",
    name: "The Pale Warden",
    hp: [118, 126],
    pattern: [
      { kind: "attack", dmg: 8, hits: 2 },
      { kind: "buff", strength: 2, block: 14 },
      { kind: "attack", dmg: 22 },
      { kind: "debuff", weak: 2, vulnerable: 2 },
      { kind: "attack", dmg: 7, hits: 3 },
    ],
  },
];

export const ENEMY_BY_ID: Record<string, EnemyDef> = Object.fromEntries(
  ENEMIES.map((e) => [e.id, e]),
);

function scaleIntent(intent: Intent, row: number): Intent {
  const extra = Math.floor(Math.max(0, row) / 3);
  if (intent.kind === "attack") {
    return { ...intent, dmg: intent.dmg + extra };
  }
  if (intent.kind === "attackDefend") {
    return { ...intent, dmg: intent.dmg + extra };
  }
  return intent;
}

export function spawnEnemy(defId: string, rng: Rng, row: number, slot: number): EnemyInst {
  const def = ENEMY_BY_ID[defId];
  if (!def) throw new Error(`Unknown enemy ${defId}`);
  const hp = rng.int(def.hp[0], def.hp[1]) + row * 2;
  const intent = scaleIntent(def.pattern[0]!, row);
  return {
    id: `${defId}-${slot}`,
    defId,
    name: def.name,
    hp,
    maxHp: hp,
    block: 0,
    strength: 0,
    weak: 0,
    vulnerable: 0,
    patternIndex: 0,
    intent,
  };
}

export function nextIntent(enemy: EnemyInst, row: number): Intent {
  const def = ENEMY_BY_ID[enemy.defId]!;
  const i = (enemy.patternIndex + 1) % def.pattern.length;
  enemy.patternIndex = i;
  return scaleIntent(def.pattern[i]!, row);
}

export function rollEncounter(type: NodeType, rng: Rng, row: number): EnemyInst[] {
  if (type === "boss") return [spawnEnemy("warden", rng, row, 0)];
  if (type === "elite") {
    return rng.chance(0.5)
      ? [spawnEnemy("sentinel", rng, row, 0)]
      : [spawnEnemy("priest", rng, row, 0)];
  }
  const roll = rng.next();
  if (roll < 0.28) {
    return [spawnEnemy("mite", rng, row, 0), spawnEnemy("mite", rng, row, 1)];
  }
  if (roll < 0.46) {
    return [spawnEnemy("mite", rng, row, 0), spawnEnemy("acolyte", rng, row, 1)];
  }
  if (roll < 0.62) return [spawnEnemy("acolyte", rng, row, 0)];
  if (roll < 0.78) return [spawnEnemy("archer", rng, row, 0)];
  if (roll < 0.9) return [spawnEnemy("wraith", rng, row, 0)];
  return [spawnEnemy("jaw", rng, row, 0)];
}

export function intentLabel(intent: Intent, strength: number, weak = 0, targetVuln = 0): string {
  const dmg = (n: number) => {
    let d = n + strength;
    if (weak > 0) d = Math.floor(d * 0.75);
    if (targetVuln > 0) d = Math.floor(d * 1.5);
    return Math.max(0, d);
  };
  switch (intent.kind) {
    case "attack": {
      const hits = intent.hits ?? 1;
      return hits > 1 ? `${dmg(intent.dmg)}×${hits}` : `${dmg(intent.dmg)}`;
    }
    case "defend":
      return `${intent.block}`;
    case "buff":
      return intent.block ? `+${intent.strength} / ${intent.block}` : `+${intent.strength}`;
    case "debuff":
      return "Hex";
    case "attackDefend":
      return `${dmg(intent.dmg)} · ${intent.block}`;
  }
}

export function intentKind(
  intent: Intent,
): "attack" | "defend" | "buff" | "debuff" | "mixed" {
  if (intent.kind === "attack") return "attack";
  if (intent.kind === "defend") return "defend";
  if (intent.kind === "buff") return "buff";
  if (intent.kind === "debuff") return "debuff";
  return "mixed";
}
