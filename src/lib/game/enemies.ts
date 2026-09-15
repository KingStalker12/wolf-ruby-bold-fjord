import type { EnemyDef, EnemyInst, Intent, NodeType } from "./types";
import type { Rng } from "./rng";

export const ENEMIES: EnemyDef[] = [
  {
    id: "mite",
    name: "Tomb Mite",
    hp: [16, 20],
    shuffleStart: true,
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
    shuffleStart: true,
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
    shuffleStart: true,
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
    shuffleStart: true,
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
    shuffleStart: true,
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
      { kind: "debuff", weak: 2, vulnerable: 2, daze: 1 },
      { kind: "attack", dmg: 14 },
      { kind: "attack", dmg: 6, hits: 2 },
      { kind: "buff", strength: 2 },
    ],
  },
  {
    id: "warden",
    name: "The Pale Warden",
    hp: [100, 108],
    pattern: [
      { kind: "attack", dmg: 7, hits: 2 },
      { kind: "buff", strength: 2, block: 10 },
      { kind: "attack", dmg: 18 },
      { kind: "debuff", weak: 1, vulnerable: 2, daze: 1 },
      { kind: "attack", dmg: 6, hits: 3 },
    ],
  },
  {
    id: "cinder",
    name: "Cinder Host",
    hp: [28, 34],
    shuffleStart: true,
    pattern: [
      { kind: "attack", dmg: 8 },
      { kind: "attack", dmg: 5, hits: 2 },
      { kind: "defend", block: 7 },
    ],
  },
  {
    id: "coil",
    name: "Grave Coil",
    hp: [40, 48],
    shuffleStart: true,
    pattern: [
      { kind: "debuff", weak: 2 },
      { kind: "attack", dmg: 13 },
      { kind: "attackDefend", dmg: 8, block: 8 },
    ],
  },
  {
    id: "paladin",
    name: "Cinder Paladin",
    hp: [70, 78],
    pattern: [
      { kind: "attack", dmg: 9, hits: 2 },
      { kind: "buff", strength: 2, block: 12 },
      { kind: "daze", daze: 1 },
      { kind: "defend", block: 18 },
    ],
  },
  {
    id: "crown",
    name: "The Ember Crown",
    hp: [128, 138],
    pattern: [
      { kind: "attack", dmg: 9, hits: 2 },
      { kind: "buff", strength: 3, block: 12 },
      { kind: "attack", dmg: 20 },
      { kind: "debuff", weak: 2, vulnerable: 2, daze: 1 },
      { kind: "attack", dmg: 7, hits: 3 },
      { kind: "attackDefend", dmg: 12, block: 10 },
    ],
  },
  {
    id: "lurker",
    name: "Tomb Spider",
    hp: [20, 26],
    shuffleStart: true,
    pattern: [
      { kind: "toxin", toxin: 1 },
      { kind: "attack", dmg: 7 },
      { kind: "attackToxin", dmg: 5, toxin: 1 },
    ],
  },
  {
    id: "ghoul",
    name: "Wake Ghoul",
    hp: [26, 32],
    shuffleStart: true,
    pattern: [
      { kind: "attack", dmg: 9 },
      { kind: "debuff", weak: 2 },
      { kind: "attack", dmg: 6, hits: 2 },
    ],
  },
  {
    id: "ashrat",
    name: "Ash Rat",
    hp: [14, 18],
    shuffleStart: true,
    pattern: [
      { kind: "cinder", cinder: 1 },
      { kind: "attack", dmg: 4, hits: 2 },
      { kind: "attackCinder", dmg: 6, cinder: 1 },
    ],
  },
  {
    id: "widow",
    name: "Crypt Widow",
    hp: [36, 42],
    shuffleStart: true,
    pattern: [
      { kind: "toxin", toxin: 1 },
      { kind: "attackToxin", dmg: 8, toxin: 1 },
      { kind: "defend", block: 10 },
      { kind: "attack", dmg: 12 },
    ],
  },
  {
    id: "howler",
    name: "Howling Wolf",
    hp: [34, 40],
    shuffleStart: true,
    pattern: [
      { kind: "debuff", weak: 2 },
      { kind: "attack", dmg: 14 },
      { kind: "attack", dmg: 5, hits: 3 },
    ],
  },
  {
    id: "saint",
    name: "Venom Saint",
    hp: [62, 70],
    pattern: [
      { kind: "toxin", toxin: 1 },
      { kind: "attackToxin", dmg: 10, toxin: 1 },
      { kind: "defend", block: 14 },
      { kind: "attack", dmg: 16 },
      { kind: "debuff", weak: 2, daze: 1 },
    ],
  },
  {
    id: "wolf",
    name: "Ash Wolf",
    hp: [66, 74],
    pattern: [
      { kind: "cinder", cinder: 1 },
      { kind: "attackCinder", dmg: 12, cinder: 1 },
      { kind: "buff", strength: 2, block: 8 },
      { kind: "attack", dmg: 8, hits: 2 },
    ],
  },
];

export const ENEMY_BY_ID: Record<string, EnemyDef> = Object.fromEntries(
  ENEMIES.map((e) => [e.id, e]),
);

function scaleIntent(intent: Intent, row: number, act: number): Intent {
  const extra = Math.floor(Math.max(0, row) / 3) + Math.max(0, act - 1) * 2;
  if (intent.kind === "attack") {
    return { ...intent, dmg: intent.dmg + extra };
  }
  if (intent.kind === "attackDefend") {
    return { ...intent, dmg: intent.dmg + extra };
  }
  return intent;
}

export function spawnEnemy(defId: string, rng: Rng, row: number, slot: number, act = 1): EnemyInst {
  const def = ENEMY_BY_ID[defId];
  if (!def) throw new Error(`Unknown enemy ${defId}`);
  const hp = rng.int(def.hp[0], def.hp[1]) + row * 2 + Math.max(0, act - 1) * 12;
  const start = def.shuffleStart ? rng.int(0, def.pattern.length - 1) : 0;
  const intent = scaleIntent(def.pattern[start]!, row, act);
  return {
    id: `${defId}-${slot}-${rng.int(10, 99)}`,
    defId,
    name: def.name,
    hp,
    maxHp: hp,
    block: 0,
    strength: 0,
    weak: 0,
    vulnerable: 0,
    patternIndex: start,
    intent,
    toxin: 0,
    cinder: 0,
    daze: 0,
  };
}

export function nextIntent(enemy: EnemyInst, row: number, act = 1): Intent {
  const def = ENEMY_BY_ID[enemy.defId]!;
  const i = (enemy.patternIndex + 1) % def.pattern.length;
  enemy.patternIndex = i;
  return scaleIntent(def.pattern[i]!, row, act);
}

export function rollEncounter(type: NodeType, rng: Rng, row: number, act = 1): EnemyInst[] {
  if (type === "boss") {
    return [spawnEnemy(act >= 2 ? "crown" : "warden", rng, row, 0, act)];
  }
  if (type === "elite") {
    if (act >= 2) {
      const r = rng.next();
      if (r < 0.34) return [spawnEnemy("paladin", rng, row, 0, act)];
      if (r < 0.67) return [spawnEnemy("wolf", rng, row, 0, act)];
      return [spawnEnemy("saint", rng, row, 0, act)];
    }
    const r = rng.next();
    if (r < 0.34) return [spawnEnemy("sentinel", rng, row, 0, act)];
    if (r < 0.67) return [spawnEnemy("priest", rng, row, 0, act)];
    return rng.chance(0.5)
      ? [spawnEnemy("saint", rng, row, 0, act)]
      : [spawnEnemy("wolf", rng, row, 0, act)];
  }
  if (act >= 2) {
    const roll = rng.next();
    if (roll < 0.12) return [spawnEnemy("ashrat", rng, row, 0, act), spawnEnemy("ashrat", rng, row, 1, act), spawnEnemy("cinder", rng, row, 2, act)];
    if (roll < 0.24) return [spawnEnemy("cinder", rng, row, 0, act), spawnEnemy("cinder", rng, row, 1, act)];
    if (roll < 0.36) return [spawnEnemy("widow", rng, row, 0, act)];
    if (roll < 0.48) return [spawnEnemy("howler", rng, row, 0, act)];
    if (roll < 0.6) return [spawnEnemy("coil", rng, row, 0, act)];
    if (roll < 0.72) return [spawnEnemy("wraith", rng, row, 0, act), spawnEnemy("lurker", rng, row, 1, act)];
    if (roll < 0.84) return [spawnEnemy("jaw", rng, row, 0, act)];
    if (roll < 0.92) return [spawnEnemy("ghoul", rng, row, 0, act), spawnEnemy("ashrat", rng, row, 1, act)];
    return [spawnEnemy("archer", rng, row, 0, act), spawnEnemy("mite", rng, row, 1, act)];
  }
  const roll = rng.next();
  if (roll < 0.14) return [spawnEnemy("mite", rng, row, 0, act), spawnEnemy("mite", rng, row, 1, act)];
  if (roll < 0.24) return [spawnEnemy("lurker", rng, row, 0, act)];
  if (roll < 0.34) return [spawnEnemy("lurker", rng, row, 0, act), spawnEnemy("mite", rng, row, 1, act)];
  if (roll < 0.44) return [spawnEnemy("ghoul", rng, row, 0, act)];
  if (roll < 0.54) return [spawnEnemy("ashrat", rng, row, 0, act), spawnEnemy("ashrat", rng, row, 1, act)];
  if (roll < 0.64) return [spawnEnemy("mite", rng, row, 0, act), spawnEnemy("acolyte", rng, row, 1, act)];
  if (roll < 0.74) return [spawnEnemy("acolyte", rng, row, 0, act)];
  if (roll < 0.84) return [spawnEnemy("archer", rng, row, 0, act)];
  if (roll < 0.92) return [spawnEnemy("wraith", rng, row, 0, act)];
  return [spawnEnemy("jaw", rng, row, 0, act)];
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
      if (intent.daze) return "Daze";
      return "Hex";
    case "attackDefend":
      return `${dmg(intent.dmg)} · ${intent.block}`;
    case "toxin":
      return `Toxin ${intent.toxin}`;
    case "cinder":
      return `Cinder ${intent.cinder}`;
    case "attackToxin":
      return `${dmg(intent.dmg)} · Tx ${intent.toxin}`;
    case "attackCinder":
      return `${dmg(intent.dmg)} · Cn ${intent.cinder}`;
    case "daze":
      return "Daze";
  }
}

export function intentKind(
  intent: Intent,
): "attack" | "defend" | "buff" | "debuff" | "mixed" {
  if (intent.kind === "attack" || intent.kind === "attackToxin" || intent.kind === "attackCinder") {
    return "attack";
  }
  if (intent.kind === "defend") return "defend";
  if (intent.kind === "buff") return "buff";
  if (intent.kind === "debuff" || intent.kind === "toxin" || intent.kind === "cinder" || intent.kind === "daze") {
    return "debuff";
  }
  return "mixed";
}
