import type { EventDef, RunState } from "./types";
import { mintCard } from "./cards";
import { rollRelic } from "./items";
import type { Rng } from "./rng";

export const EVENTS: EventDef[] = [
  {
    id: "font",
    title: "The Font",
    body: "A basin of still water. Your reflection is a few years older, and already buried.",
    choices: [
      { id: "drink", label: "Drink", hint: "Heal 30% of Max HP." },
      { id: "coin", label: "Leave a coin", hint: "Gain 50 gold. Take 8 damage." },
    ],
  },
  {
    id: "shrine",
    title: "Nameless Shrine",
    body: "The inscription has been scraped out. Something still listens.",
    choices: [
      { id: "kneel", label: "Kneel", hint: "Upgrade a random card." },
      { id: "cut", label: "Cut a palm", hint: "Gain 8 Max HP. Lose 8 HP." },
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
    ],
  },
  {
    id: "bargain",
    title: "The Pale Bargain",
    body: "A voice from the next landing: 'A rare rite, for a scar that does not heal.'",
    choices: [
      { id: "accept", label: "Accept", hint: "Gain a rare card. Add a Wound to your deck." },
      { id: "walk", label: "Walk on", hint: "Heal 12 HP." },
    ],
  },
];

export const EVENT_BY_ID: Record<string, EventDef> = Object.fromEntries(
  EVENTS.map((e) => [e.id, e]),
);

export function rollEvent(rng: Rng): EventDef {
  return rng.pick(EVENTS);
}

export interface EventResult {
  run: RunState;
  message: string;
  followUp?: "cards" | "remove";
}

export function applyEventChoice(
  run: RunState,
  rng: Rng,
  eventId: string,
  choiceId: string,
): EventResult {
  const next: RunState = { ...run, deck: run.deck.map((c) => ({ ...c })) };

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
    const relic = rollRelic(rng, next.relics);
    if (relic) {
      next.relics = [...next.relics, relic];
      if (relic === "anchor_ring") {
        next.maxHp += 8;
        next.hp += 8;
      }
      return { run: next, message: "The lock gives. You take a relic and leave blood on the wire." };
    }
    return { run: next, message: "Empty. The wire still bites." };
  }
  if (eventId === "bargain" && choiceId === "accept") {
    next.deck.push(mintCard("wound"));
    return { run: next, message: "A rare rite, and a Wound.", followUp: "cards" };
  }
  if (eventId === "bargain" && choiceId === "walk") {
    heal(12);
    return { run: next, message: "You keep walking. Healed 12 HP." };
  }
  return { run: next, message: "Nothing happens." };
}
