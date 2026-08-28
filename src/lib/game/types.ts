export type CardType = "attack" | "skill" | "power" | "status";
export type Rarity = "starter" | "common" | "uncommon" | "rare" | "status";
export type NodeType = "combat" | "elite" | "event" | "rest" | "shop" | "boss";
export type Screen =
  | "title"
  | "howto"
  | "map"
  | "combat"
  | "reward"
  | "shop"
  | "rest"
  | "event"
  | "picker"
  | "gameover"
  | "victory";

export type CombatPhase = "player" | "enemy" | "resolving";

export interface CardDef {
  id: string;
  name: string;
  type: CardType;
  rarity: Rarity;
  cost: number;
  upgradeCost?: number;
  target: "enemy" | "all" | "self" | "none";
  exhaust?: boolean;
  ethereal?: boolean;
  unplayable?: boolean;
  special?: CardSpecial;
  text: (n: CardNumbers) => string;
  numbers: (up: boolean) => CardNumbers;
}

export type CardSpecial =
  | "fiendFire"
  | "limitBreak"
  | "offering"
  | "hemokinesis"
  | "battleTrance"
  | "trueGrit"
  | "acrobatics"
  | "disarm"
  | "bloodletting"
  | "entrench"
  | "immolate"
  | "dropkick";

export interface CardNumbers {
  damage?: number;
  hits?: number;
  block?: number;
  draw?: number;
  energy?: number;
  strength?: number;
  weak?: number;
  vulnerable?: number;
  metallicize?: number;
  hpLoss?: number;
}

export interface CardInst {
  uid: string;
  defId: string;
  upgraded: boolean;
}

export interface EnemyDef {
  id: string;
  name: string;
  hp: [number, number];
  pattern: Intent[];
}

export type Intent =
  | { kind: "attack"; dmg: number; hits?: number }
  | { kind: "defend"; block: number }
  | { kind: "buff"; strength: number; block?: number }
  | { kind: "debuff"; weak?: number; vulnerable?: number }
  | { kind: "attackDefend"; dmg: number; block: number };

export interface EnemyInst {
  id: string;
  defId: string;
  name: string;
  hp: number;
  maxHp: number;
  block: number;
  strength: number;
  weak: number;
  vulnerable: number;
  patternIndex: number;
  intent: Intent;
}

export interface RelicDef {
  id: string;
  name: string;
  text: string;
  rarity: Exclude<Rarity, "starter" | "status"> | "starter" | "boss";
}

export interface PotionDef {
  id: string;
  name: string;
  text: string;
  target: "enemy" | "self" | "none";
}

export interface MapNode {
  id: string;
  row: number;
  col: number;
  type: NodeType;
  next: string[];
}

export interface ShopOffer<T> {
  item: T;
  price: number;
  sold: boolean;
}

export interface ShopState {
  cards: ShopOffer<CardInst>[];
  relics: ShopOffer<string>[];
  potions: ShopOffer<string>[];
  removePrice: number;
  removed: boolean;
}

export interface CombatState {
  enemies: EnemyInst[];
  phase: CombatPhase;
  turn: number;
  energy: number;
  maxEnergy: number;
  block: number;
  strength: number;
  dexterity: number;
  weak: number;
  vulnerable: number;
  frail: number;
  metallicize: number;
  noDraw: boolean;
  hand: CardInst[];
  drawPile: CardInst[];
  discardPile: CardInst[];
  exhaustPile: CardInst[];
  targetingUid: string | null;
  targetingPotion: number | null;
  attacksPlayed: number;
  log: string;
}

export interface RewardState {
  gold: number;
  cards: CardInst[];
  relic: string | null;
  potion: string | null;
  pickedCard: boolean;
  pickedRelic: boolean;
  pickedPotion: boolean;
}

export interface EventDef {
  id: string;
  title: string;
  body: string;
  choices: EventChoice[];
}

export interface EventChoice {
  id: string;
  label: string;
  hint: string;
  requireGold?: number;
}

export interface EventState {
  defId: string;
  resolved: boolean;
  result: string | null;
}

export type PickerMode = "upgrade" | "remove" | "shop-remove";

export interface PickerState {
  mode: PickerMode;
  title: string;
  subtitle: string;
}

export interface RunState {
  seed: number;
  rngState: number;
  gold: number;
  hp: number;
  maxHp: number;
  deck: CardInst[];
  relics: string[];
  potions: (string | null)[];
  map: MapNode[];
  currentNodeId: string | null;
  visited: string[];
  row: number;
  cardSeq: number;
  shop: ShopState | null;
  floorKills: number;
  damageDealt: number;
}

export interface MetaState {
  version: number;
  wins: number;
  losses: number;
  bestRow: number;
  mute: boolean;
  shake: boolean;
  seenHint: boolean;
}

export interface FloatNum {
  id: number;
  text: string;
  color: "hp" | "block" | "heal" | "fg";
  x: number;
  y: number;
}

export type PileKind = "draw" | "discard" | "exhaust";
