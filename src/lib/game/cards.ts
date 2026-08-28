import type { CardDef, CardInst, CardNumbers, Rarity } from "./types";
import type { Rng } from "./rng";

export const CARDS: CardDef[] = [
  {
    id: "strike",
    name: "Strike",
    type: "attack",
    rarity: "starter",
    cost: 1,
    target: "enemy",
    text: (n) => `Deal ${n.damage} damage.`,
    numbers: (up) => ({ damage: up ? 9 : 6 }),
  },
  {
    id: "guard",
    name: "Guard",
    type: "skill",
    rarity: "starter",
    cost: 1,
    target: "self",
    text: (n) => `Gain ${n.block} Block.`,
    numbers: (up) => ({ block: up ? 8 : 5 }),
  },
  {
    id: "brand",
    name: "Brand",
    type: "attack",
    rarity: "starter",
    cost: 2,
    target: "enemy",
    text: (n) => `Deal ${n.damage} damage. Apply ${n.vulnerable} Vulnerable.`,
    numbers: (up) => ({ damage: up ? 10 : 8, vulnerable: up ? 3 : 2 }),
  },
  {
    id: "cleave",
    name: "Cleave",
    type: "attack",
    rarity: "common",
    cost: 1,
    target: "all",
    text: (n) => `Deal ${n.damage} damage to ALL enemies.`,
    numbers: (up) => ({ damage: up ? 11 : 8 }),
  },
  {
    id: "twin_cut",
    name: "Twin Cut",
    type: "attack",
    rarity: "common",
    cost: 1,
    target: "enemy",
    text: (n) => `Deal ${n.damage} damage twice.`,
    numbers: (up) => ({ damage: up ? 6 : 4, hits: 2 }),
  },
  {
    id: "pommel",
    name: "Pommel",
    type: "attack",
    rarity: "common",
    cost: 1,
    target: "enemy",
    text: (n) => `Deal ${n.damage} damage. Draw ${n.draw}.`,
    numbers: (up) => ({ damage: up ? 10 : 9, draw: up ? 2 : 1 }),
  },
  {
    id: "iron_wave",
    name: "Iron Wave",
    type: "attack",
    rarity: "common",
    cost: 1,
    target: "enemy",
    text: (n) => `Gain ${n.block} Block. Deal ${n.damage} damage.`,
    numbers: (up) => ({ block: up ? 7 : 5, damage: up ? 7 : 5 }),
  },
  {
    id: "heavy",
    name: "Heavy Blow",
    type: "attack",
    rarity: "common",
    cost: 2,
    target: "enemy",
    text: (n) => `Deal ${n.damage} damage.`,
    numbers: (up) => ({ damage: up ? 18 : 14 }),
  },
  {
    id: "boomerang",
    name: "Bone Fan",
    type: "attack",
    rarity: "common",
    cost: 1,
    target: "enemy",
    text: (n) => `Deal ${n.damage} damage ${n.hits} times.`,
    numbers: (up) => ({ damage: up ? 4 : 3, hits: 3 }),
  },
  {
    id: "shrug",
    name: "Shrug It Off",
    type: "skill",
    rarity: "common",
    cost: 1,
    target: "self",
    text: (n) => `Gain ${n.block} Block. Draw 1.`,
    numbers: (up) => ({ block: up ? 11 : 8, draw: 1 }),
  },
  {
    id: "true_grit",
    name: "True Grit",
    type: "skill",
    rarity: "common",
    cost: 1,
    target: "self",
    special: "trueGrit",
    text: (n) => `Gain ${n.block} Block. Exhaust a random card in your hand.`,
    numbers: (up) => ({ block: up ? 9 : 7 }),
  },
  {
    id: "acrobatics",
    name: "Acrobatics",
    type: "skill",
    rarity: "common",
    cost: 1,
    target: "none",
    special: "acrobatics",
    text: (n) => `Draw ${n.draw}. Discard a random card.`,
    numbers: (up) => ({ draw: up ? 4 : 3 }),
  },
  {
    id: "clothesline",
    name: "Clothesline",
    type: "attack",
    rarity: "common",
    cost: 2,
    target: "enemy",
    text: (n) => `Deal ${n.damage} damage. Apply ${n.weak} Weak.`,
    numbers: (up) => ({ damage: up ? 14 : 12, weak: 2 }),
  },
  {
    id: "inflame",
    name: "Inflame",
    type: "power",
    rarity: "uncommon",
    cost: 1,
    target: "self",
    exhaust: true,
    text: (n) => `Gain ${n.strength} Strength.`,
    numbers: (up) => ({ strength: up ? 3 : 2 }),
  },
  {
    id: "metallicize",
    name: "Metallicize",
    type: "power",
    rarity: "uncommon",
    cost: 1,
    target: "self",
    exhaust: true,
    text: (n) => `At the start of your turn, gain ${n.metallicize} Block.`,
    numbers: (up) => ({ metallicize: up ? 4 : 3 }),
  },
  {
    id: "uppercut",
    name: "Uppercut",
    type: "attack",
    rarity: "uncommon",
    cost: 2,
    target: "enemy",
    text: (n) => `Deal ${n.damage} damage. Apply ${n.weak} Weak and ${n.vulnerable} Vulnerable.`,
    numbers: (up) => ({
      damage: 13,
      weak: up ? 2 : 1,
      vulnerable: up ? 2 : 1,
    }),
  },
  {
    id: "hemokinesis",
    name: "Hemokinesis",
    type: "attack",
    rarity: "uncommon",
    cost: 1,
    target: "enemy",
    special: "hemokinesis",
    text: (n) => `Lose ${n.hpLoss} HP. Deal ${n.damage} damage.`,
    numbers: (up) => ({ hpLoss: 2, damage: up ? 20 : 15 }),
  },
  {
    id: "disarm",
    name: "Disarm",
    type: "skill",
    rarity: "uncommon",
    cost: 1,
    target: "enemy",
    special: "disarm",
    exhaust: true,
    text: (n) => `Enemy loses ${Math.abs(n.strength ?? 0)} Strength. Exhaust.`,
    numbers: (up) => ({ strength: up ? -3 : -2 }),
  },
  {
    id: "battle_trance",
    name: "Battle Trance",
    type: "skill",
    rarity: "uncommon",
    cost: 0,
    target: "none",
    special: "battleTrance",
    text: (n) => `Draw ${n.draw}. You cannot draw additional cards this turn.`,
    numbers: (up) => ({ draw: up ? 4 : 3 }),
  },
  {
    id: "ghost_armor",
    name: "Ghost Armor",
    type: "skill",
    rarity: "uncommon",
    cost: 1,
    target: "self",
    ethereal: true,
    text: (n) => `Gain ${n.block} Block. Ethereal.`,
    numbers: (up) => ({ block: up ? 13 : 10 }),
  },
  {
    id: "bloodletting",
    name: "Bloodletting",
    type: "skill",
    rarity: "uncommon",
    cost: 0,
    target: "self",
    special: "bloodletting",
    text: (n) => `Lose ${n.hpLoss} HP. Gain ${n.energy} Energy.`,
    numbers: (up) => ({ hpLoss: 3, energy: up ? 3 : 2 }),
  },
  {
    id: "dropkick",
    name: "Dropkick",
    type: "attack",
    rarity: "uncommon",
    cost: 1,
    target: "enemy",
    special: "dropkick",
    text: (n) => `Deal ${n.damage} damage. If the enemy is Vulnerable, gain 1 Energy and draw 1.`,
    numbers: (up) => ({ damage: up ? 8 : 5 }),
  },
  {
    id: "shockwave",
    name: "Shockwave",
    type: "skill",
    rarity: "uncommon",
    cost: 2,
    target: "all",
    exhaust: true,
    text: (n) => `Apply ${n.weak} Weak to ALL enemies. Exhaust.`,
    numbers: (up) => ({ weak: up ? 5 : 3 }),
  },
  {
    id: "entrench",
    name: "Entrench",
    type: "skill",
    rarity: "uncommon",
    cost: 2,
    target: "self",
    special: "entrench",
    text: () => "Double your Block.",
    numbers: () => ({}),
  },
  {
    id: "bludgeon",
    name: "Bludgeon",
    type: "attack",
    rarity: "rare",
    cost: 3,
    target: "enemy",
    text: (n) => `Deal ${n.damage} damage.`,
    numbers: (up) => ({ damage: up ? 42 : 32 }),
  },
  {
    id: "limit_break",
    name: "Limit Break",
    type: "skill",
    rarity: "rare",
    cost: 1,
    target: "self",
    special: "limitBreak",
    exhaust: true,
    text: () => "Double your Strength.",
    numbers: () => ({}),
  },
  {
    id: "offering",
    name: "Offering",
    type: "skill",
    rarity: "rare",
    cost: 0,
    target: "self",
    special: "offering",
    exhaust: true,
    text: (n) => `Lose ${n.hpLoss} HP. Gain ${n.energy} Energy. Draw ${n.draw}. Exhaust.`,
    numbers: (up) => ({ hpLoss: 6, energy: 2, draw: up ? 5 : 3 }),
  },
  {
    id: "fiend_fire",
    name: "Fiend Fire",
    type: "attack",
    rarity: "rare",
    cost: 2,
    target: "enemy",
    special: "fiendFire",
    exhaust: true,
    text: (n) =>
      `Exhaust your hand. Deal ${n.damage} damage for each card exhausted. Exhaust.`,
    numbers: (up) => ({ damage: up ? 10 : 7 }),
  },
  {
    id: "impervious",
    name: "Impervious",
    type: "skill",
    rarity: "rare",
    cost: 2,
    target: "self",
    exhaust: true,
    text: (n) => `Gain ${n.block} Block. Exhaust.`,
    numbers: (up) => ({ block: up ? 40 : 30 }),
  },
  {
    id: "immolate",
    name: "Immolate",
    type: "attack",
    rarity: "rare",
    cost: 2,
    target: "all",
    special: "immolate",
    exhaust: true,
    text: (n) => `Deal ${n.damage} damage to ALL enemies. Add a Wound to your discard. Exhaust.`,
    numbers: (up) => ({ damage: up ? 28 : 21 }),
  },
  {
    id: "wound",
    name: "Wound",
    type: "status",
    rarity: "status",
    cost: 0,
    target: "none",
    unplayable: true,
    text: () => "Unplayable.",
    numbers: () => ({}),
  },
];

export const CARD_BY_ID: Record<string, CardDef> = Object.fromEntries(
  CARDS.map((c) => [c.id, c]),
);

export function defOf(card: CardInst): CardDef {
  const d = CARD_BY_ID[card.defId];
  if (!d) throw new Error(`Unknown card ${card.defId}`);
  return d;
}

export function cardText(card: CardInst, nums?: CardNumbers): string {
  const d = defOf(card);
  const n = nums ?? d.numbers(card.upgraded);
  if (d.id === "limit_break") {
    return `Double your Strength.${card.upgraded ? "" : " Exhaust."}`;
  }
  return d.text(n);
}

export function cardCost(card: CardInst): number {
  const d = defOf(card);
  if (card.upgraded && d.upgradeCost !== undefined) return d.upgradeCost;
  return d.cost;
}

let seq = 1;
export function mintCard(defId: string, upgraded = false, uid?: string): CardInst {
  return { uid: uid ?? `c${seq++}`, defId, upgraded };
}

export function setCardSeq(n: number) {
  seq = n;
}

export function getCardSeq(): number {
  return seq;
}

export function starterDeck(): CardInst[] {
  const d: CardInst[] = [];
  for (let i = 0; i < 5; i++) d.push(mintCard("strike"));
  for (let i = 0; i < 4; i++) d.push(mintCard("guard"));
  d.push(mintCard("brand"));
  return d;
}

const REWARD_POOL = CARDS.filter(
  (c) => c.rarity === "common" || c.rarity === "uncommon" || c.rarity === "rare",
);

function rollRarity(rng: Rng, bias: "normal" | "elite" | "boss"): Rarity {
  const r = rng.next();
  if (bias === "boss") return r < 0.55 ? "rare" : "uncommon";
  if (bias === "elite") {
    if (r < 0.1) return "rare";
    if (r < 0.55) return "uncommon";
    return "common";
  }
  if (r < 0.03) return "rare";
  if (r < 0.4) return "uncommon";
  return "common";
}

export function rollCardRewards(
  rng: Rng,
  bias: "normal" | "elite" | "boss",
  count = 3,
): CardInst[] {
  const out: CardInst[] = [];
  const used = new Set<string>();
  let guard = 0;
  while (out.length < count && guard++ < 40) {
    const rarity = rollRarity(rng, bias);
    const pool = REWARD_POOL.filter((c) => c.rarity === rarity && !used.has(c.id));
    const fallback = REWARD_POOL.filter((c) => !used.has(c.id));
    const pick = (pool.length ? pool : fallback)[0]
      ? rng.pick(pool.length ? pool : fallback)
      : null;
    if (!pick) break;
    used.add(pick.id);
    out.push(mintCard(pick.id));
  }
  return out;
}

export function priceFor(rarity: Rarity, rng: Rng): number {
  if (rarity === "rare") return rng.int(135, 165);
  if (rarity === "uncommon") return rng.int(68, 82);
  return rng.int(45, 55);
}
