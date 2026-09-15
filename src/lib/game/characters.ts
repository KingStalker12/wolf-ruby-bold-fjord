import { mintCard } from "./cards";
import type { CardInst } from "./types";

export type ClassId = "interred" | "veil" | "kindled" | "mage" | "vampire";

export interface ClassDef {
  id: ClassId;
  name: string;
  blurb: string;
  hp: number;
  relic: string;
  deck: string[];
  portrait: string;
}

export const CLASSES: ClassDef[] = [
  {
    id: "interred",
    name: "The Interred",
    blurb: "A body that will not stay buried. Weapons, blood, and a heavy hand.",
    hp: 72,
    relic: "burning_blood",
    deck: [
      "strike",
      "strike",
      "strike",
      "strike",
      "strike",
      "guard",
      "guard",
      "guard",
      "guard",
      "brand",
    ],
    portrait: "/game/interred.jpg",
  },
  {
    id: "veil",
    name: "The Veil",
    blurb: "A mourner between names. Toxin, Daze, and a shroud of Block.",
    hp: 66,
    relic: "pale_shroud",
    deck: [
      "strike",
      "strike",
      "strike",
      "strike",
      "strike",
      "guard",
      "guard",
      "guard",
      "guard",
      "guard",
      "dirge",
      "fade",
    ],
    portrait: "/game/veil.jpg",
  },
  {
    id: "kindled",
    name: "The Kindled",
    blurb: "Calls tomb-beasts and sets Cinder. Same Call Evolves them I→II→III, then Surges.",
    hp: 70,
    relic: "ash_locket",
    deck: [
      "strike",
      "strike",
      "strike",
      "guard",
      "guard",
      "guard",
      "ember",
      "ember",
      "rime",
      "rime",
    ],
    portrait: "/game/kindled.jpg",
  },
  {
    id: "mage",
    name: "The Mage",
    blurb: "A crystal scholar. Bank Arcana with spells, then spend it for bursts, freeze, and thunder.",
    hp: 60,
    relic: "star_crystal",
    deck: [
      "strike",
      "strike",
      "strike",
      "strike",
      "guard",
      "guard",
      "guard",
      "bolt",
      "bolt",
      "study",
    ],
    portrait: "/game/mage.jpg",
  },
  {
    id: "vampire",
    name: "The Vampire",
    blurb: "Spends blood to strike. Drains life, turns wounds into Block, and heals from the kill.",
    hp: 66,
    relic: "crimson_chalice",
    deck: [
      "strike",
      "strike",
      "strike",
      "strike",
      "guard",
      "guard",
      "guard",
      "bite",
      "bite",
      "lash",
    ],
    portrait: "/game/vampire.jpg",
  },
];

export const CLASS_BY_ID: Record<ClassId, ClassDef> = Object.fromEntries(
  CLASSES.map((c) => [c.id, c]),
) as Record<ClassId, ClassDef>;

export function starterDeckFor(id: ClassId): CardInst[] {
  return CLASS_BY_ID[id].deck.map((defId) => mintCard(defId));
}
