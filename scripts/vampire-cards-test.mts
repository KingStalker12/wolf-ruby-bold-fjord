import { newRun, startCombat, playCard, liveNumbers, endPlayerTurn } from "../src/lib/game/engine.ts";
import { mintCard } from "../src/lib/game/cards.ts";

const { run, rng } = newRun("vampire", 42);
const combat = startCombat(run, rng, "combat");
combat.hand = [
  mintCard("lash"),
  mintCard("blood_tithe"),
  mintCard("pale_curse"),
  mintCard("blood_rite"),
  mintCard("summon_leech"),
  mintCard("crimson_requiem"),
];
combat.energy = 9;
const foe = combat.enemies[0];
if (!foe) throw new Error("no foe");
const hp0 = run.hp;
const r1 = playCard(run, combat, rng, combat.hand[0].uid, foe.id);
console.log("LASH", {
  hpLost: hp0 - run.hp,
  dmg: r1.damageTo,
  bloodT: combat.bloodSpentTurn,
  bloodB: combat.bloodSpentBattle,
  block: combat.block,
});
const tithe = combat.hand.find((c) => c.defId === "blood_tithe");
if (!tithe) throw new Error("no tithe");
console.log("LIVE_TITHE", liveNumbers(run, combat, tithe));
const r2 = playCard(run, combat, rng, tithe.uid, foe.id);
console.log("TITHE", r2.damageTo, "bloodTurn", combat.bloodSpentTurn);
const curse = combat.hand.find((c) => c.defId === "pale_curse");
if (!curse) throw new Error("no curse");
playCard(run, combat, rng, curse.uid, foe.id);
console.log("CURSE", { vuln: foe.vulnerable, blood: combat.bloodSpentTurn, exhaust: combat.exhaustPile.map((c) => c.defId) });
const rite = combat.hand.find((c) => c.defId === "blood_rite");
if (!rite) throw new Error("no rite");
const str0 = combat.strength;
const hp1 = run.hp;
playCard(run, combat, rng, rite.uid);
console.log("RITE", { hpLost: hp1 - run.hp, strGain: combat.strength - str0 });
const leech = combat.hand.find((c) => c.defId === "summon_leech");
if (!leech) throw new Error("no leech");
playCard(run, combat, rng, leech.uid);
console.log("LEECH", combat.leech, combat.leechDrain);
const req = combat.hand.find((c) => c.defId === "crimson_requiem");
if (!req) throw new Error("no requiem");
console.log("LIVE_REQ", liveNumbers(run, combat, req), "bloodBattle", combat.bloodSpentBattle);
const hp2 = run.hp;
const r5 = playCard(run, combat, rng, req.uid);
console.log("REQUIEM", { healed: run.hp - hp2 + 0, dmg: r5.damageTo, hp: run.hp });
const hp3 = run.hp;
endPlayerTurn(run, combat, rng);
console.log("PULSE_LEECH", { heal: run.hp - hp3, log: combat.log, leech: combat.leech });
