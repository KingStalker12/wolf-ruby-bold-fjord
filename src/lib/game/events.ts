import type { EventDef, RunState } from "./types";
import { mintCard } from "./cards";
import { rollPotion, rollRelic } from "./items";
import type { Rng } from "./rng";

export const EVENTS: EventDef[] = [
  {
    id: "font",
    title: "The Font",
    body: "A basin of still water. Your reflection is a few years older, and already buried.",
    choices: [
      { id: "drink", label: "Drink", hint: "Heal 30% of Max HP." },
      { id: "coin", label: "Leave a coin", hint: "Gain 50 gold. Take 8 damage." },
      { id: "wash", label: "Wash a rite", hint: "Upgrade a card." },
    ],
  },
  {
    id: "shrine",
    title: "Nameless Shrine",
    body: "The inscription has been scraped out. Something still listens.",
    choices: [
      { id: "kneel", label: "Kneel", hint: "Upgrade a random card." },
      { id: "cut", label: "Cut a palm", hint: "Gain 8 Max HP. Lose 8 HP." },
      { id: "spit", label: "Spit in the bowl", hint: "Gain 35 gold." },
    ],
  },
  {
    id: "beggar",
    title: "The Beggar",
    body: "A figure in funeral linen holds out a cracked bowl. 'One name. I can take it from the book.'",
    choices: [
      { id: "pay", label: "Pay 40 gold", hint: "Remove a card from your deck.", requireGold: 40 },
      { id: "refuse", label: "Refuse", hint: "Nothing happens." },
      { id: "steal", label: "Take the bowl", hint: "Gain 80 gold. Add a Wound to your deck." },
    ],
  },
  {
    id: "cache",
    title: "Sealed Cache",
    body: "A lead casket, bound in wire. Whatever is inside was not meant to travel.",
    choices: [
      { id: "smash", label: "Smash it", hint: "Choose 1 of 3 cards." },
      { id: "pick", label: "Pick the lock", hint: "Gain a relic. Take 12 damage." },
      { id: "leave", label: "Leave it bound", hint: "Heal 8 HP." },
    ],
  },
  {
    id: "bargain",
    title: "The Pale Bargain",
    body: "A voice from the next landing: 'A rare rite, for a scar that does not heal.'",
    choices: [
      { id: "accept", label: "Accept", hint: "Gain a rare card. Add a Wound to your deck." },
      { id: "walk", label: "Walk on", hint: "Heal 12 HP." },
      { id: "counter", label: "Counter-offer", hint: "Gain 45 gold. Take 10 damage." },
    ],
  },
  {
    id: "choir",
    title: "The Choir Below",
    body: "Voices rise through a grate. They are singing your funeral, and they are ahead of schedule.",
    choices: [
      { id: "join", label: "Join the hymn", hint: "Upgrade two random cards. Lose 6 HP." },
      { id: "plug", label: "Stop your ears", hint: "Gain a potion." },
      { id: "heckle", label: "Heckle", hint: "Gain 30 gold. Add a Wound." },
    ],
  },
  {
    id: "lottery",
    title: "Bone Lottery",
    body: "A cup of finger-bones. One is gilded. The rest are not.",
    choices: [
      { id: "draw", label: "Draw a bone", hint: "50%: a relic. 50%: a Wound." },
      { id: "buy", label: "Buy the gilded one — 55g", hint: "Gain a relic.", requireGold: 55 },
      { id: "pass", label: "Pass the cup", hint: "Gain 20 gold." },
    ],
  },
  {
    id: "mirror",
    title: "The Unburied Mirror",
    body: "Your double mouths a word you have not said yet. The glass is warm.",
    choices: [
      { id: "smash", label: "Smash it", hint: "Remove a card from your deck." },
      { id: "copy", label: "Let it copy you", hint: "Duplicate a random card in your deck." },
      { id: "bow", label: "Bow", hint: "Heal 16 HP." },
    ],
  },
  {
    id: "procession",
    title: "The Procession",
    body: "Pallbearers with empty hands. They have not decided who is in the box.",
    choices: [
      { id: "carry", label: "Take a handle", hint: "Choose 1 of 3 cards. Take 7 damage." },
      { id: "cut", label: "Cut across", hint: "Gain 40 gold. Add a Wound." },
      { id: "hide", label: "Step into a niche", hint: "Heal 14 HP." },
    ],
  },
  {
    id: "ledger",
    title: "The Ledger",
    body: "A book of debts. Your name is already written, in a hand that is not yours.",
    choices: [
      { id: "sign", label: "Sign anyway", hint: "Lose 10 Max HP. Gain a relic." },
      { id: "erase", label: "Scratch it out — 35g", hint: "Remove a card.", requireGold: 35 },
      { id: "read", label: "Read the other names", hint: "Gain 55 gold." },
    ],
  },
  {
    id: "niche",
    title: "Hungry Niche",
    body: "A hole in the wall the size of a heart. It breathes when you do.",
    choices: [
      { id: "feed", label: "Feed it a Strike", hint: "Remove a Strike. Heal 12. Gain 20 gold." },
      { id: "reach", label: "Reach in", hint: "Gain a relic. Add 2 Wounds." },
      { id: "walk", label: "Walk on", hint: "Nothing happens." },
    ],
  },
  {
    id: "guest",
    title: "The Uninvited Guest",
    body: "A table is set for one. The second chair is already pulled out.",
    choices: [
      { id: "dine", label: "Sit and eat", hint: "Heal 40% HP. Add a Wound." },
      { id: "pay", label: "Leave 25 gold", hint: "Gain a potion.", requireGold: 25 },
      { id: "starve", label: "Refuse the plate", hint: "Gain 6 Max HP." },
    ],
  },
  {
    id: "crack",
    title: "Whispering Crack",
    body: "A split in the masonry talks in your voice, a half-second late.",
    choices: [
      { id: "listen", label: "Listen", hint: "Gain a rare card. Take 12 damage." },
      { id: "seal", label: "Pack it with linen", hint: "Heal 18 HP." },
      { id: "answer", label: "Answer it", hint: "Duplicate a random card. Lose 8 HP." },
    ],
  },
  {
    id: "garden",
    title: "Soot Garden",
    body: "Ash-flowers grow from a collapsed lung of earth. They turn toward you.",
    choices: [
      { id: "pluck", label: "Pluck one", hint: "Heal 20 HP." },
      { id: "eat", label: "Eat a bloom", hint: "Gain 10 Max HP. Add 2 Wounds." },
      { id: "burn", label: "Burn the bed", hint: "Gain 50 gold." },
    ],
  },
  {
    id: "skull",
    title: "Crossroads Skull",
    body: "A skull on a spike, facing three ways. One jaw still has a gold tooth.",
    choices: [
      { id: "ask", label: "Ask the way", hint: "Choose 1 of 3 cards." },
      { id: "kick", label: "Kick it down", hint: "Gain 40 gold. Take 9 damage." },
      { id: "bury", label: "Bury it", hint: "Heal 10 HP. Gain 15 gold." },
    ],
  },
  {
    id: "mask",
    title: "The Warden's Mask",
    body: "A pale mask hung on a nail. The inside is still warm.",
    choices: [
      { id: "wear", label: "Put it on", hint: "Gain 8 Max HP. Lose 15 HP." },
      { id: "hang", label: "Hang it facing out", hint: "Upgrade a card." },
      { id: "sell", label: "Tuck it in your coat", hint: "Gain 60 gold." },
    ],
  },
  {
    id: "bell",
    title: "The Wrong Bell",
    body: "A bell with no clapper. Someone has been ringing it anyway.",
    choices: [
      { id: "ring", label: "Ring it", hint: "Gain 2 potions. Take 8 damage." },
      { id: "steal", label: "Take the bell — 20g to quiet it", hint: "Gain a relic.", requireGold: 20 },
      { id: "leave", label: "Leave it ringing", hint: "Heal 8 HP. Gain 10 gold." },
    ],
  },
  {
    id: "tithe",
    title: "Ember Tithe",
    body: "A brass plate. Coins on it are blackened. A notice: THE CROWN STILL COLLECTS.",
    act: 2,
    choices: [
      { id: "pay", label: "Pay 40 gold", hint: "Heal to 75% HP.", requireGold: 40 },
      { id: "blood", label: "Pay in blood", hint: "Take 14 damage. Gain a rare card." },
      { id: "refuse", label: "Refuse the tax", hint: "Gain 70 gold. Add 2 Wounds." },
    ],
  },
  {
    id: "second_name",
    title: "The Second Name",
    body: "A clerk without a face asks what you are called now. The first answer is already dry on the page.",
    act: 2,
    choices: [
      { id: "speak", label: "Give a new name", hint: "Duplicate your most expensive-feeling card. Take 8 damage." },
      { id: "silent", label: "Say nothing", hint: "Gain a relic." },
      { id: "lie", label: "Lie", hint: "Gain 80 gold. Add a Wound." },
    ],
  },
];

export const EVENT_BY_ID: Record<string, EventDef> = Object.fromEntries(
  EVENTS.map((e) => [e.id, e]),
);

export function rollEvent(rng: Rng, seen: string[] = [], act = 1): EventDef {
  const pool = EVENTS.filter((e) => !e.act || e.act <= act);
  const fresh = pool.filter((e) => !seen.includes(e.id));
  return rng.pick(fresh.length ? fresh : pool);
}

export interface EventResult {
  run: RunState;
  message: string;
  followUp?: "cards" | "remove" | "upgrade";
  cardBias?: "normal" | "elite" | "boss";
}

function grantRelic(run: RunState, rng: Rng): string | null {
  const relic = rollRelic(rng, run.relics);
  if (!relic) return null;
  run.relics = [...run.relics, relic];
  if (relic === "anchor_ring") {
    run.maxHp += 8;
    run.hp += 8;
  }
  return relic;
}

function grantPotion(run: RunState, rng: Rng): boolean {
  const i = run.potions.findIndex((p) => p === null);
  if (i < 0) return false;
  const next = [...run.potions];
  next[i] = rollPotion(rng);
  run.potions = next;
  return true;
}

function duplicateRandom(run: RunState, rng: Rng): string | null {
  const pool = run.deck.filter((c) => c.defId !== "wound");
  if (!pool.length) return null;
  const card = rng.pick(pool);
  run.deck.push(mintCard(card.defId, card.upgraded));
  return card.defId;
}

function removeStrike(run: RunState): boolean {
  const i = run.deck.findIndex((c) => c.defId === "strike" && !c.upgraded);
  if (i < 0) {
    const j = run.deck.findIndex((c) => c.defId === "strike");
    if (j < 0) return false;
    run.deck.splice(j, 1);
    return true;
  }
  run.deck.splice(i, 1);
  return true;
}

export function applyEventChoice(
  run: RunState,
  rng: Rng,
  eventId: string,
  choiceId: string,
): EventResult {
  const next: RunState = {
    ...run,
    deck: run.deck.map((c) => ({ ...c })),
    relics: [...run.relics],
    potions: [...run.potions],
    seenEvents: [...(run.seenEvents ?? [])],
  };

  const dmg = (n: number) => {
    next.hp = Math.max(1, next.hp - n);
  };
  const heal = (n: number) => {
    next.hp = Math.min(next.maxHp, next.hp + n);
  };

  if (eventId === "font" && choiceId === "drink") {
    const amt = Math.ceil(next.maxHp * 0.3);
    heal(amt);
    return { run: next, message: `You drink. Healed ${amt} HP.` };
  }
  if (eventId === "font" && choiceId === "coin") {
    next.gold += 50;
    dmg(8);
    return { run: next, message: "The water takes a coin and a little blood. +50 gold." };
  }
  if (eventId === "font" && choiceId === "wash") {
    return { run: next, message: "The water rewrites a name.", followUp: "upgrade" };
  }
  if (eventId === "shrine" && choiceId === "kneel") {
    const pool = next.deck.filter((c) => !c.upgraded && c.defId !== "wound");
    if (pool.length) {
      const card = rng.pick(pool);
      const found = next.deck.find((c) => c.uid === card.uid);
      if (found) found.upgraded = true;
      return { run: next, message: "A card in your deck is rewritten." };
    }
    return { run: next, message: "Nothing left to rewrite." };
  }
  if (eventId === "shrine" && choiceId === "cut") {
    next.maxHp += 8;
    dmg(8);
    return { run: next, message: "Max HP +8." };
  }
  if (eventId === "shrine" && choiceId === "spit") {
    next.gold += 35;
    return { run: next, message: "The shrine accepts an insult. +35 gold." };
  }
  if (eventId === "beggar" && choiceId === "pay") {
    next.gold -= 40;
    return { run: next, message: "The beggar waits for a name.", followUp: "remove" };
  }
  if (eventId === "beggar" && choiceId === "refuse") {
    return { run: next, message: "The figure does not follow." };
  }
  if (eventId === "beggar" && choiceId === "steal") {
    next.gold += 80;
    next.deck.push(mintCard("wound"));
    return { run: next, message: "+80 gold. A Wound is added to your deck." };
  }
  if (eventId === "cache" && choiceId === "smash") {
    return { run: next, message: "Rites spill onto the stone.", followUp: "cards" };
  }
  if (eventId === "cache" && choiceId === "pick") {
    dmg(12);
    if (grantRelic(next, rng)) {
      return { run: next, message: "The lock gives. You take a relic and leave blood on the wire." };
    }
    return { run: next, message: "Empty. The wire still bites." };
  }
  if (eventId === "cache" && choiceId === "leave") {
    heal(8);
    return { run: next, message: "You leave the wire alone. Healed 8 HP." };
  }
  if (eventId === "bargain" && choiceId === "accept") {
    next.deck.push(mintCard("wound"));
    return { run: next, message: "A rare rite, and a Wound.", followUp: "cards", cardBias: "boss" };
  }
  if (eventId === "bargain" && choiceId === "walk") {
    heal(12);
    return { run: next, message: "You keep walking. Healed 12 HP." };
  }
  if (eventId === "bargain" && choiceId === "counter") {
    next.gold += 45;
    dmg(10);
    return { run: next, message: "The voice laughs. +45 gold." };
  }
  if (eventId === "choir" && choiceId === "join") {
    dmg(6);
    const pool = next.deck.filter((c) => !c.upgraded && c.defId !== "wound");
    rng.shuffle(pool);
    for (const card of pool.slice(0, 2)) {
      const found = next.deck.find((c) => c.uid === card.uid);
      if (found) found.upgraded = true;
    }
    return { run: next, message: "The hymn takes a little blood and rewrites two rites." };
  }
  if (eventId === "choir" && choiceId === "plug") {
    if (grantPotion(next, rng)) return { run: next, message: "Silence. A vial rolls from the grate." };
    next.gold += 20;
    return { run: next, message: "Your belt is full. +20 gold instead." };
  }
  if (eventId === "choir" && choiceId === "heckle") {
    next.gold += 30;
    next.deck.push(mintCard("wound"));
    return { run: next, message: "They falter. +30 gold, and a Wound." };
  }
  if (eventId === "lottery" && choiceId === "draw") {
    if (rng.chance(0.5) && grantRelic(next, rng)) {
      return { run: next, message: "Gilded. A relic sits in the cup." };
    }
    next.deck.push(mintCard("wound"));
    return { run: next, message: "Bare bone. A Wound is added to your deck." };
  }
  if (eventId === "lottery" && choiceId === "buy") {
    next.gold -= 55;
    if (grantRelic(next, rng)) return { run: next, message: "You buy the sure thing." };
    next.gold += 25;
    return { run: next, message: "No relic left. A partial refund." };
  }
  if (eventId === "lottery" && choiceId === "pass") {
    next.gold += 20;
    return { run: next, message: "The cup moves on. +20 gold." };
  }
  if (eventId === "mirror" && choiceId === "smash") {
    return { run: next, message: "Glass and a name, both gone.", followUp: "remove" };
  }
  if (eventId === "mirror" && choiceId === "copy") {
    duplicateRandom(next, rng);
    return { run: next, message: "A second you steps into the deck." };
  }
  if (eventId === "mirror" && choiceId === "bow") {
    heal(16);
    return { run: next, message: "The double nods. Healed 16 HP." };
  }
  if (eventId === "procession" && choiceId === "carry") {
    dmg(7);
    return { run: next, message: "The box is lighter than it should be.", followUp: "cards" };
  }
  if (eventId === "procession" && choiceId === "cut") {
    next.gold += 40;
    next.deck.push(mintCard("wound"));
    return { run: next, message: "You cross the line. +40 gold, and a Wound." };
  }
  if (eventId === "procession" && choiceId === "hide") {
    heal(14);
    return { run: next, message: "They pass. Healed 14 HP." };
  }
  if (eventId === "ledger" && choiceId === "sign") {
    next.maxHp = Math.max(20, next.maxHp - 10);
    if (next.hp > next.maxHp) next.hp = next.maxHp;
    grantRelic(next, rng);
    return { run: next, message: "The debt is witnessed. Max HP −10. A relic." };
  }
  if (eventId === "ledger" && choiceId === "erase") {
    next.gold -= 35;
    return { run: next, message: "Ink and gold, both spent.", followUp: "remove" };
  }
  if (eventId === "ledger" && choiceId === "read") {
    next.gold += 55;
    return { run: next, message: "Other people's ruin. +55 gold." };
  }
  if (eventId === "niche" && choiceId === "feed") {
    if (removeStrike(next)) {
      heal(12);
      next.gold += 20;
      return { run: next, message: "It swallows a Strike. Healed 12. +20 gold." };
    }
    heal(6);
    return { run: next, message: "No Strike to feed. It takes a sip anyway. Healed 6." };
  }
  if (eventId === "niche" && choiceId === "reach") {
    grantRelic(next, rng);
    next.deck.push(mintCard("wound"), mintCard("wound"));
    return { run: next, message: "A relic, and two Wounds clinging to your wrist." };
  }
  if (eventId === "niche" && choiceId === "walk") {
    return { run: next, message: "The hole watches you go." };
  }
  if (eventId === "guest" && choiceId === "dine") {
    heal(Math.ceil(next.maxHp * 0.4));
    next.deck.push(mintCard("wound"));
    return { run: next, message: "The meat is yours. So is the Wound." };
  }
  if (eventId === "guest" && choiceId === "pay") {
    next.gold -= 25;
    if (grantPotion(next, rng)) return { run: next, message: "A vial by the plate." };
    next.gold += 15;
    return { run: next, message: "No room for a vial. Partial coin back." };
  }
  if (eventId === "guest" && choiceId === "starve") {
    next.maxHp += 6;
    next.hp += 6;
    return { run: next, message: "Hunger agrees to wait. Max HP +6." };
  }
  if (eventId === "crack" && choiceId === "listen") {
    dmg(12);
    return { run: next, message: "It tells you a rare name.", followUp: "cards", cardBias: "boss" };
  }
  if (eventId === "crack" && choiceId === "seal") {
    heal(18);
    return { run: next, message: "The masonry sleeps. Healed 18 HP." };
  }
  if (eventId === "crack" && choiceId === "answer") {
    dmg(8);
    duplicateRandom(next, rng);
    return { run: next, message: "It repeats you into the deck." };
  }
  if (eventId === "garden" && choiceId === "pluck") {
    heal(20);
    return { run: next, message: "The bloom cools on your tongue. Healed 20 HP." };
  }
  if (eventId === "garden" && choiceId === "eat") {
    next.maxHp += 10;
    next.hp += 10;
    next.deck.push(mintCard("wound"), mintCard("wound"));
    return { run: next, message: "Max HP +10. Two Wounds take root." };
  }
  if (eventId === "garden" && choiceId === "burn") {
    next.gold += 50;
    return { run: next, message: "Soot money. +50 gold." };
  }
  if (eventId === "skull" && choiceId === "ask") {
    return { run: next, message: "It points, with someone else's finger.", followUp: "cards" };
  }
  if (eventId === "skull" && choiceId === "kick") {
    next.gold += 40;
    dmg(9);
    return { run: next, message: "The tooth comes free. +40 gold." };
  }
  if (eventId === "skull" && choiceId === "bury") {
    heal(10);
    next.gold += 15;
    return { run: next, message: "You give it earth. It gives a little back." };
  }
  if (eventId === "mask" && choiceId === "wear") {
    next.maxHp += 8;
    dmg(15);
    return { run: next, message: "It fits. Max HP +8." };
  }
  if (eventId === "mask" && choiceId === "hang") {
    return { run: next, message: "The empty face watches a rite change.", followUp: "upgrade" };
  }
  if (eventId === "mask" && choiceId === "sell") {
    next.gold += 60;
    return { run: next, message: "Warm ivory in the coat. +60 gold." };
  }
  if (eventId === "bell" && choiceId === "ring") {
    dmg(8);
    const a = grantPotion(next, rng);
    const b = grantPotion(next, rng);
    if (a || b) return { run: next, message: "The well answers in glass." };
    next.gold += 25;
    return { run: next, message: "No room for vials. +25 gold." };
  }
  if (eventId === "bell" && choiceId === "steal") {
    next.gold -= 20;
    if (grantRelic(next, rng)) return { run: next, message: "The ringing stops. A relic in its place." };
    return { run: next, message: "Quiet. Nothing else." };
  }
  if (eventId === "bell" && choiceId === "leave") {
    heal(8);
    next.gold += 10;
    return { run: next, message: "You leave it to its work." };
  }
  if (eventId === "tithe" && choiceId === "pay") {
    next.gold -= 40;
    const target = Math.ceil(next.maxHp * 0.75);
    if (next.hp < target) next.hp = target;
    return { run: next, message: "The plate is satisfied. HP set toward 75%." };
  }
  if (eventId === "tithe" && choiceId === "blood") {
    dmg(14);
    return { run: next, message: "The Crown drinks. A rare rite remains.", followUp: "cards", cardBias: "boss" };
  }
  if (eventId === "tithe" && choiceId === "refuse") {
    next.gold += 70;
    next.deck.push(mintCard("wound"), mintCard("wound"));
    return { run: next, message: "Tax evasion, tomb-style. +70 gold, two Wounds." };
  }
  if (eventId === "second_name" && choiceId === "speak") {
    dmg(8);
    duplicateRandom(next, rng);
    return { run: next, message: "The clerk writes it twice." };
  }
  if (eventId === "second_name" && choiceId === "silent") {
    if (grantRelic(next, rng)) return { run: next, message: "Silence is entered as a relic." };
    heal(12);
    return { run: next, message: "The clerk shrugs. Healed 12 HP." };
  }
  if (eventId === "second_name" && choiceId === "lie") {
    next.gold += 80;
    next.deck.push(mintCard("wound"));
    return { run: next, message: "The page blisters. +80 gold, and a Wound." };
  }
  return { run: next, message: "Nothing happens." };
}
