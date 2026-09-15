import type { FamiliarInst } from "./familiars";

export type CardType = "attack" | "skill" | "power" | "status";
export type Rarity = "starter" | "common" | "uncommon" | "rare" | "status";
export type NodeType = "combat" | "elite" | "event" | "rest" | "shop" | "boss";
export type Screen =
  | "title"
  | "select"
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
  summon?: "ember" | "rime" | "gloom" | "spark" | "twin" | "all";
  classId?: "interred" | "veil" | "kindled" | "mage" | "vampire";
  neutral?: boolean;
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
  | "dropkick"
  | "evokeLeft"
  | "pulseFamiliars"
  | "evolveAll"
  | "extraSlot"
  | "discardRand"
  | "reprise"
  | "handUpgrade"
  | "lastWord"
  | "blockPerAttack"
  | "envenom"
  | "afterburn"
  | "cinderBonus"
  | "execute"
  | "shieldBash"
  | "overhead"
  | "bastion"
  | "counterfeit"
  | "backstep"
  | "coinFlip"
  | "smoke"
  | "prism"
  | "reboot"
  | "voltage"
  | "channelSpark"
  | "overheat"
  | "spendArcana"
  | "discharge"
  | "thunderArcana"
  | "iceLance"
  | "sage"
  | "feast"
  | "drainAll"
  | "hunger"
  | "bloodPrice"
  | "leech"
  | "bloodRite"
  | "bloodReckoning";

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
  stageBonus?: number;
  gold?: number;
  toxin?: number;
  cinder?: number;
  daze?: number;
  heal?: number;
  bonus?: number;
  focus?: number;
  plasma?: number;
  dexterity?: number;
  threshold?: number;
  arcana?: number;
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
  shuffleStart?: boolean;
}

export type Intent =
  | { kind: "attack"; dmg: number; hits?: number }
  | { kind: "defend"; block: number }
  | { kind: "buff"; strength: number; block?: number }
  | { kind: "debuff"; weak?: number; vulnerable?: number; daze?: number }
  | { kind: "attackDefend"; dmg: number; block: number }
  | { kind: "toxin"; toxin: number }
  | { kind: "cinder"; cinder: number }
  | { kind: "attackToxin"; dmg: number; toxin: number }
  | { kind: "attackCinder"; dmg: number; cinder: number }
  | { kind: "daze"; daze: number };

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
  toxin: number;
  cinder: number;
  daze: number;
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
  toxin: number;
  cinder: number;
  daze: number;
  envenom: number;
  afterburn: number;
  bastion: number;
  smokeMirrors: number;
  focus: number;
  plasma: number;
  prismPulse: number;
  prismUsed: boolean;
  overheatPlasma: number;
  overheatNeed: number;
  cardsPlayed: number;
  blockGainedThisTurn: number;
  toxinApplied: boolean;
  cinderApplied: boolean;
  arcana: number;
  sage: boolean;
  hunger: number;
  leech: number;
  leechDrain: number;
  bloodSpentTurn: number;
  bloodSpentBattle: number;
  journal: string[];
  noDraw: boolean;
  hand: CardInst[];
  drawPile: CardInst[];
  discardPile: CardInst[];
  exhaustPile: CardInst[];
  targetingUid: string | null;
  targetingPotion: number | null;
  attacksPlayed: number;
  familiars: FamiliarInst[];
  familiarSlots: number;
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
  act?: number;
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
  classId: "interred" | "veil" | "kindled" | "mage" | "vampire";
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
  act: number;
  cardSeq: number;
  shop: ShopState | null;
  floorKills: number;
  damageDealt: number;
  seenEvents: string[];
}

export interface MetaState {
  version: number;
  wins: number;
  losses: number;
  bestRow: number;
  mute: boolean;
  shake: boolean;
  seenHint: boolean;
  plain: boolean;
}

export interface FloatNum {
  id: number;
  text: string;
  color: "hp" | "block" | "heal" | "buff";
  x: number;
  y: number;
}

export type PileKind = "draw" | "discard" | "exhaust";
