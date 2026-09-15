import type { PotionDef, RelicDef } from "./types";
import type { Rng } from "./rng";

export const RELICS: RelicDef[] = [
  {
    id: "burning_blood",
    name: "Burning Blood",
    text: "Heal 6 HP at the end of combat.",
    rarity: "starter",
  },
  {
    id: "pale_shroud",
    name: "Pale Shroud",
    text: "Start each combat with 1 Dexterity.",
    rarity: "starter",
  },
  {
    id: "ash_locket",
    name: "Ash Locket",
    text: "Start each combat with a Spark in your rightmost slot.",
    rarity: "starter",
  },
  {
    id: "star_crystal",
    name: "Star Crystal",
    text: "At the start of your turn, gain 1 Arcana.",
    rarity: "starter",
  },
  {
    id: "crimson_chalice",
    name: "Crimson Chalice",
    text: "Whenever a card spends HP, gain 3 Block.",
    rarity: "starter",
  },
  {
    id: "anchor",
    name: "Anchor",
    text: "Start each combat with 10 Block.",
    rarity: "common",
  },
  {
    id: "vajra",
    name: "Vajra",
    text: "Start each combat with 1 Strength.",
    rarity: "common",
  },
  {
    id: "bag",
    name: "Bag of Preparation",
    text: "Draw 2 additional cards on turn 1.",
    rarity: "common",
  },
  {
    id: "lantern",
    name: "Lantern",
    text: "Gain 1 Energy on turn 1.",
    rarity: "common",
  },
  {
    id: "blood_vial",
    name: "Blood Vial",
    text: "Heal 2 HP at the start of combat.",
    rarity: "common",
  },
  {
    id: "bronze_scales",
    name: "Bronze Scales",
    text: "When you are attacked, deal 3 damage back.",
    rarity: "common",
  },
  {
    id: "orichalcum",
    name: "Orichalcum",
    text: "If you have no Block at the end of your turn, gain 6 Block.",
    rarity: "common",
  },
  {
    id: "red_skull",
    name: "Red Skull",
    text: "While at or below 50% HP, you have 3 additional Strength.",
    rarity: "uncommon",
  },
  {
    id: "pen_nib",
    name: "Pen Nib",
    text: "Every 10th Attack you play deals double damage.",
    rarity: "uncommon",
  },
  {
    id: "stone_calendar",
    name: "Stone Calendar",
    text: "On turn 7, deal 52 damage to ALL enemies.",
    rarity: "uncommon",
  },
  {
    id: "eternal_feather",
    name: "Eternal Feather",
    text: "Heal 3 HP for every 5 cards in your deck when you rest.",
    rarity: "uncommon",
  },
  {
    id: "anchor_ring",
    name: "Ring of the Well",
    text: "Raise your Max HP by 8.",
    rarity: "rare",
  },
  {
    id: "philosopher",
    name: "Philosopher's Stone",
    text: "Gain 1 Energy at the start of each turn. ALL enemies start with 1 Strength.",
    rarity: "rare",
  },
];

export const RELIC_BY_ID: Record<string, RelicDef> = Object.fromEntries(
  RELICS.map((r) => [r.id, r]),
);

export const POTIONS: PotionDef[] = [
  { id: "blood", name: "Blood Potion", text: "Heal 20% of Max HP.", target: "self" },
  { id: "block", name: "Block Potion", text: "Gain 12 Block.", target: "self" },
  { id: "fire", name: "Fire Potion", text: "Deal 20 damage.", target: "enemy" },
  { id: "str", name: "Strength Potion", text: "Gain 2 Strength.", target: "self" },
  { id: "energy", name: "Energy Potion", text: "Gain 2 Energy.", target: "self" },
  { id: "swift", name: "Swift Potion", text: "Draw 3 cards.", target: "self" },
  {
    id: "fairy",
    name: "Fairy in a Bottle",
    text: "When you would die, heal to 30% HP instead.",
    target: "none",
  },
];

export const POTION_BY_ID: Record<string, PotionDef> = Object.fromEntries(
  POTIONS.map((p) => [p.id, p]),
);

const COMBAT_RELICS = RELICS.filter(
  (r) => r.rarity === "common" || r.rarity === "uncommon" || r.rarity === "rare",
);

export function rollRelic(rng: Rng, owned: string[]): string | null {
  const pool = COMBAT_RELICS.filter((r) => !owned.includes(r.id));
  if (!pool.length) return null;
  return rng.pick(pool).id;
}

export function rollRelicOffers(rng: Rng, owned: string[], n: number): string[] {
  const pool = rng.shuffle(COMBAT_RELICS.filter((r) => !owned.includes(r.id)).slice());
  return pool.slice(0, n).map((r) => r.id);
}

export function rollPotion(rng: Rng): string {
  return rng.pick(POTIONS.filter((p) => p.id !== "fairy").concat(POTIONS)).id;
}

export function relicPrice(id: string, rng: Rng): number {
  const r = RELIC_BY_ID[id];
  if (r?.rarity === "rare") return rng.int(160, 190);
  if (r?.rarity === "uncommon") return rng.int(140, 165);
  return rng.int(120, 145);
}
