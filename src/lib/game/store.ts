import { create } from "zustand";
import { sfxPlay, setMuted, unlockAudio } from "./audio";
import {
  addCardToDeck,
  addPotion,
  addRelic,
  afterCombat,
  beginAct2,
  beginPlayerTurn,
  canPlay,
  endPlayerTurn,
  generateShop,
  newRun,
  persistRng,
  playCard,
  removeCard,
  restHeal,
  restoreRng,
  runDepth,
  startCombat,
  stepEnemy,
  upgradeCard,
  usePotion,
} from "./engine";
import { applyEventChoice, rollEvent } from "./events";
import { availableNodes, nodeById } from "./map";
import { rollCardRewards } from "./cards";
import { type ClassId } from "./characters";
import { clearRun, defaultMeta, loadMeta, loadRun, saveMeta, saveRun } from "./save";
import type {
  CombatState,
  EventState,
  FloatNum,
  MetaState,
  PickerState,
  PileKind,
  RewardState,
  RunState,
  Screen,
} from "./types";

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

function reduced() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let busy = false;
let floatSeq = 1;

interface GameStore {
  ready: boolean;
  screen: Screen;
  run: RunState | null;
  combat: CombatState | null;
  reward: RewardState | null;
  event: EventState | null;
  picker: PickerState | null;
  meta: MetaState;
  floats: FloatNum[];
  shake: number;
  flashes: string[];
  inspect: PileKind | null;
  deckOpen: boolean;
  menuOpen: boolean;
  hint: string | null;
  hydrate: () => void;
  openSelect: () => void;
  beginRun: (classId: ClassId) => void;
  continueRun: () => void;
  abandon: () => void;
  setScreen: (s: Screen) => void;
  toggleMute: () => void;
  toggleShake: () => void;
  togglePlain: () => void;
  selectNode: (id: string) => void;
  play: (uid: string, targetId?: string) => void;
  drink: (slot: number, targetId?: string) => void;
  endTurn: () => void;
  pickRewardCard: (uid: string) => void;
  skipRewardCard: () => void;
  takeRelic: () => void;
  takePotion: () => void;
  skipPotion: () => void;
  rest: (kind: "heal" | "upgrade") => void;
  pickCard: (uid: string) => void;
  buyCard: (index: number) => void;
  buyRelic: (index: number) => void;
  buyPotion: (index: number) => void;
  shopRemove: () => void;
  leaveShop: () => void;
  chooseEvent: (choiceId: string) => void;
  leaveEvent: () => void;
  setDeckOpen: (v: boolean) => void;
  setMenuOpen: (v: boolean) => void;
  setInspect: (v: PileKind | null) => void;
  dismissHint: () => void;
}

function snapshot(get: () => GameStore) {
  const s = get();
  if (!s.run) return;
  if (
    s.screen === "title" ||
    s.screen === "select" ||
    s.screen === "howto" ||
    s.screen === "gameover" ||
    s.screen === "victory"
  ) {
    return;
  }
  saveRun({
    version: 1,
    screen: s.screen,
    run: s.run,
    combat: s.combat,
    reward: s.reward,
    event: s.event,
    picker: s.picker,
  });
}

function pushFloat(set: (fn: (s: GameStore) => Partial<GameStore>) => void, f: Omit<FloatNum, "id">) {
  const id = floatSeq++;
  set((s) => ({ floats: [...s.floats, { ...f, id }] }));
  setTimeout(() => {
    set((s) => ({ floats: s.floats.filter((x) => x.id !== id) }));
  }, 1600);
}

export const useGame = create<GameStore>((set, get) => ({
  ready: false,
  screen: "title",
  run: null,
  combat: null,
  reward: null,
  event: null,
  picker: null,
  meta: defaultMeta(),
  floats: [],
  shake: 0,
  flashes: [],
  inspect: null,
  deckOpen: false,
  menuOpen: false,
  hint: null,

  hydrate: () => {
    try {
      const meta = loadMeta();
      try {
        setMuted(meta.mute);
      } catch {
        /* audio blocked */
      }
      const saved = loadRun();
      if (saved?.run && saved.run.map?.length) {
        const screen = saved.screen;
        const broken =
          (screen === "combat" && !saved.combat) ||
          (screen === "shop" && !saved.run.shop) ||
          (screen === "reward" && !saved.reward) ||
          (screen === "event" && !saved.event) ||
          (screen === "picker" && !saved.picker);
        set({
          ready: true,
          meta,
          screen: broken ? "map" : screen,
          run: saved.run,
          combat: saved.combat,
          reward: saved.reward,
          event: saved.event,
          picker: saved.picker,
        });
        return;
      }
      set({ ready: true, meta });
    } catch {
      set({ ready: true, screen: "title", run: null, combat: null });
    }
  },

  openSelect: () => {
    unlockAudio();
    sfxPlay.click();
    set({ screen: "select", menuOpen: false });
  },

  beginRun: (classId) => {
    unlockAudio();
    sfxPlay.click();
    const { run } = newRun(classId);
    set({
      screen: "map",
      run,
      combat: null,
      reward: null,
      event: null,
      picker: null,
      floats: [],
      flashes: [],
      inspect: null,
      menuOpen: false,
      deckOpen: false,
      hint: null,
    });
    snapshot(get);
  },

  continueRun: () => {
    unlockAudio();
    const saved = loadRun();
    if (!saved) return;
    sfxPlay.click();
    set({
      screen: saved.screen,
      run: saved.run,
      combat: saved.combat,
      reward: saved.reward,
      event: saved.event,
      picker: saved.picker,
      menuOpen: false,
    });
  },

  abandon: () => {
    const meta = { ...get().meta, losses: get().meta.losses + 1 };
    saveMeta(meta);
    clearRun();
    set({
      screen: "title",
      run: null,
      combat: null,
      reward: null,
      event: null,
      picker: null,
      meta,
      menuOpen: false,
    });
  },

  setScreen: (screen) => {
    set({ screen, menuOpen: false });
    snapshot(get);
  },

  toggleMute: () => {
    const meta = { ...get().meta, mute: !get().meta.mute };
    setMuted(meta.mute);
    saveMeta(meta);
    set({ meta });
  },

  toggleShake: () => {
    const meta = { ...get().meta, shake: !get().meta.shake };
    saveMeta(meta);
    set({ meta });
  },

  togglePlain: () => {
    const meta = { ...get().meta, plain: !get().meta.plain };
    saveMeta(meta);
    set({ meta });
  },

  selectNode: (id) => {
    if (busy) return;
    const { run } = get();
    if (!run) return;
    const avail = availableNodes(run.map, run.currentNodeId, run.visited);
    const node = avail.find((n) => n.id === id);
    if (!node) return;
    unlockAudio();
    sfxPlay.click();
    const rng = restoreRng(run);
    const nextRun: RunState = {
      ...run,
      currentNodeId: node.id,
      visited: [...run.visited, node.id],
      row: node.row,
      shop: null,
    };
    persistRng(nextRun, rng);

    if (node.type === "combat" || node.type === "elite" || node.type === "boss") {
      const combat = startCombat(nextRun, rng, node.type);
      persistRng(nextRun, rng);
      const hint = !get().meta.seenHint
        ? nextRun.classId === "kindled"
          ? "Familiars pulse at the end of your turn. Play the same Call again to Evolve them."
          : nextRun.classId === "vampire"
            ? "Bite heals. Lash spends HP. The Chalice turns that blood into Block."
            : nextRun.classId === "mage"
            ? "Spells bank Arcana. Spend 3 on Fireball for a burst, or Discharge the whole pool."
            : "Enemies telegraph their next action. Block absorbs damage before your life does."
        : null;
      set({
        run: nextRun,
        combat,
        screen: "combat",
        hint,
        floats: [],
      });
    } else if (node.type === "rest") {
      set({ run: nextRun, screen: "rest" });
    } else if (node.type === "shop") {
      const shop = generateShop(nextRun, rng);
      nextRun.shop = shop;
      set({ run: nextRun, screen: "shop" });
    } else if (node.type === "event") {
      const ev = rollEvent(rng, nextRun.seenEvents ?? [], nextRun.act ?? 1);
      nextRun.seenEvents = [...(nextRun.seenEvents ?? []), ev.id];
      persistRng(nextRun, rng);
      set({
        run: nextRun,
        event: { defId: ev.id, resolved: false, result: null },
        screen: "event",
      });
    }
    snapshot(get);
  },

  play: (uid, targetId) => {
    if (busy) return;
    const { run, combat } = get();
    if (!run || !combat) return;
    const card = combat.hand.find((c) => c.uid === uid);
    if (!card || !canPlay(run, combat, card)) return;
    const rng = restoreRng(run);
    const hp0 = run.hp;
    const block0 = combat.block;
    const res = playCard(run, combat, rng, uid, targetId);
    persistRng(res.run, rng);
    if (res.needTarget) {
      set({ combat: { ...res.combat } });
      return;
    }
    sfxPlay.playCard();
    if (res.damageTo.length) sfxPlay.hit();
    for (const d of res.damageTo) {
      pushFloat(set, { text: `-${d.amount}`, color: "hp", x: 0, y: 0 });
    }
    if (res.playerHurt > 0) {
      pushFloat(set, { text: `-${res.playerHurt}`, color: "hp", x: 0, y: 0 });
    }
    const healed = res.run.hp - hp0 + res.playerHurt;
    if (healed > 0) pushFloat(set, { text: `+${healed}`, color: "heal", x: 0, y: 0 });
    const gained = res.combat.block - block0;
    if (gained > 0) pushFloat(set, { text: `+${gained}`, color: "block", x: 0, y: 0 });
    if (get().meta.shake && res.damageTo.some((d) => d.amount >= 12)) {
      set({ shake: Math.min(1, get().shake + 0.45) });
    }
    const flashIds = res.damageTo.map((d) => d.id);
    if (res.playerHurt > 0) flashIds.push("player");
    set({ run: { ...res.run }, combat: { ...res.combat }, flashes: flashIds });
    if (flashIds.length) {
      window.setTimeout(() => {
        set((s) => ({ flashes: s.flashes.filter((id) => !flashIds.includes(id)) }));
      }, 280);
    }
    if (res.dead) {
      finish(get, set, false);
      return;
    }
    if (res.won) {
      void winCombat(get, set);
      return;
    }
    snapshot(get);
  },

  drink: (slot, targetId) => {
    if (busy) return;
    const { run, combat } = get();
    if (!run || !combat) return;
    const rng = restoreRng(run);
    const hp0 = run.hp;
    const block0 = combat.block;
    const res = usePotion(run, combat, rng, slot, targetId);
    persistRng(res.run, rng);
    if (res.needTarget) {
      set({ combat: { ...res.combat } });
      return;
    }
    sfxPlay.heal();
    const healed = res.run.hp - hp0;
    if (healed > 0) pushFloat(set, { text: `+${healed}`, color: "heal", x: 0, y: 0 });
    const gained = res.combat.block - block0;
    if (gained > 0) pushFloat(set, { text: `+${gained}`, color: "block", x: 0, y: 0 });
    for (const d of res.damageTo) {
      pushFloat(set, { text: `-${d.amount}`, color: "hp", x: 0, y: 0 });
    }
    set({ run: { ...res.run }, combat: { ...res.combat } });
    if (res.won) void winCombat(get, set);
    snapshot(get);
  },

  endTurn: () => {
    if (busy) return;
    const { run, combat } = get();
    if (!run || !combat || combat.phase !== "player") return;
    void runEnemyTurn(get, set);
  },

  pickRewardCard: (uid) => {
    const { run, reward } = get();
    if (!run || !reward || reward.pickedCard) return;
    const card = reward.cards.find((c) => c.uid === uid);
    if (!card) return;
    sfxPlay.click();
    addCardToDeck(run, card);
    const next = { ...reward, pickedCard: true };
    set({ run: { ...run }, reward: next });
    maybeLeaveReward(get, set);
  },

  skipRewardCard: () => {
    const { reward } = get();
    if (!reward || reward.pickedCard) return;
    sfxPlay.click();
    set({ reward: { ...reward, pickedCard: true } });
    maybeLeaveReward(get, set);
  },

  takeRelic: () => {
    const { run, reward } = get();
    if (!run || !reward || !reward.relic) return;
    sfxPlay.shop();
    addRelic(run, reward.relic);
    set({ run: { ...run }, reward: { ...reward, pickedRelic: true, relic: null } });
    maybeLeaveReward(get, set);
  },

  takePotion: () => {
    const { run, reward } = get();
    if (!run || !reward || !reward.potion) return;
    if (!addPotion(run, reward.potion)) return;
    sfxPlay.heal();
    set({ run: { ...run }, reward: { ...reward, pickedPotion: true, potion: null } });
    maybeLeaveReward(get, set);
  },

  skipPotion: () => {
    const { reward } = get();
    if (!reward) return;
    set({ reward: { ...reward, pickedPotion: true, potion: null } });
    maybeLeaveReward(get, set);
  },

  rest: (kind) => {
    const { run } = get();
    if (!run) return;
    sfxPlay.click();
    if (kind === "heal") {
      restHeal(run);
      set({ run: { ...run }, screen: "map" });
      snapshot(get);
    } else {
      set({
        picker: {
          mode: "upgrade",
          title: "Inscribe",
          subtitle: "Upgrade a rite in your deck.",
        },
        screen: "picker",
      });
      snapshot(get);
    }
  },

  pickCard: (uid) => {
    const { run, picker } = get();
    if (!run || !picker) return;
    sfxPlay.click();
    if (picker.mode === "upgrade") {
      upgradeCard(run, uid);
      set({ run: { ...run }, picker: null, screen: "map" });
    } else {
      removeCard(run, uid);
      if (picker.mode === "shop-remove" && run.shop) {
        run.gold -= run.shop.removePrice;
        run.shop = { ...run.shop, removed: true };
        set({ run: { ...run }, picker: null, screen: "shop" });
      } else {
        set({ run: { ...run }, picker: null, screen: "map" });
      }
    }
    snapshot(get);
  },

  buyCard: (index) => {
    const { run } = get();
    if (!run?.shop) return;
    const offer = run.shop.cards[index];
    if (!offer || offer.sold || run.gold < offer.price) return;
    sfxPlay.shop();
    run.gold -= offer.price;
    addCardToDeck(run, offer.item);
    offer.sold = true;
    set({ run: { ...run, shop: { ...run.shop, cards: [...run.shop.cards] } } });
    snapshot(get);
  },

  buyRelic: (index) => {
    const { run } = get();
    if (!run?.shop) return;
    const offer = run.shop.relics[index];
    if (!offer || offer.sold || run.gold < offer.price) return;
    sfxPlay.shop();
    run.gold -= offer.price;
    addRelic(run, offer.item);
    offer.sold = true;
    set({ run: { ...run, shop: { ...run.shop, relics: [...run.shop.relics] } } });
    snapshot(get);
  },

  buyPotion: (index) => {
    const { run } = get();
    if (!run?.shop) return;
    const offer = run.shop.potions[index];
    if (!offer || offer.sold || run.gold < offer.price) return;
    if (!addPotion(run, offer.item)) return;
    sfxPlay.shop();
    run.gold -= offer.price;
    offer.sold = true;
    set({ run: { ...run, shop: { ...run.shop, potions: [...run.shop.potions] } } });
    snapshot(get);
  },

  shopRemove: () => {
    const { run } = get();
    if (!run?.shop || run.shop.removed || run.gold < run.shop.removePrice) return;
    sfxPlay.click();
    set({
      picker: {
        mode: "shop-remove",
        title: "Erase a name",
        subtitle: "Remove a card from your deck.",
      },
      screen: "picker",
    });
  },

  leaveShop: () => {
    const { run } = get();
    if (!run) return;
    sfxPlay.click();
    set({ run: { ...run, shop: null }, screen: "map" });
    snapshot(get);
  },

  chooseEvent: (choiceId) => {
    const { run, event } = get();
    if (!run || !event || event.resolved) return;
    const rng = restoreRng(run);
    const res = applyEventChoice(run, rng, event.defId, choiceId);
    persistRng(res.run, rng);
    sfxPlay.click();
    if (res.followUp === "remove") {
      set({
        run: res.run,
        event: { ...event, resolved: true, result: res.message },
        picker: {
          mode: "remove",
          title: "Give a name",
          subtitle: "Remove a card from your deck.",
        },
        screen: "picker",
      });
      snapshot(get);
      return;
    }
    if (res.followUp === "upgrade") {
      set({
        run: res.run,
        event: { ...event, resolved: true, result: res.message },
        picker: {
          mode: "upgrade",
          title: "Rewrite a rite",
          subtitle: "Upgrade a card in your deck.",
        },
        screen: "picker",
      });
      snapshot(get);
      return;
    }
    if (res.followUp === "cards") {
      const bias = res.cardBias ?? (event.defId === "bargain" ? "boss" : "normal");
      const cards = rollCardRewards(rng, bias, 3, res.run.classId);
      persistRng(res.run, rng);
      set({
        run: res.run,
        event: { ...event, resolved: true, result: res.message },
        reward: {
          gold: 0,
          cards,
          relic: null,
          potion: null,
          pickedCard: false,
          pickedRelic: true,
          pickedPotion: true,
        },
        screen: "reward",
      });
      snapshot(get);
      return;
    }
    set({
      run: res.run,
      event: { ...event, resolved: true, result: res.message },
    });
    snapshot(get);
  },

  leaveEvent: () => {
    set({ event: null, screen: "map" });
    snapshot(get);
  },

  setDeckOpen: (deckOpen) => set({ deckOpen }),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  setInspect: (inspect) => set({ inspect }),
  dismissHint: () => {
    const meta = { ...get().meta, seenHint: true };
    saveMeta(meta);
    set({ hint: null, meta });
  },
}));

async function runEnemyTurn(
  get: () => GameStore,
  set: (p: Partial<GameStore> | ((s: GameStore) => Partial<GameStore>)) => void,
) {
  busy = true;
  const { run, combat } = get();
  if (!run || !combat) {
    busy = false;
    return;
  }
  const rng = restoreRng(run);
  const hp0 = run.hp;
  const pulse = endPlayerTurn(run, combat, rng);
  const healed = run.hp - hp0;
  if (pulse.damageTo.length) {
    sfxPlay.hit();
    for (const d of pulse.damageTo) {
      pushFloat(set, { text: `-${d.amount}`, color: "hp", x: 0, y: 0 });
    }
    set({ flashes: pulse.damageTo.map((d) => d.id) });
    window.setTimeout(() => {
      const ids = pulse.damageTo.map((d) => d.id);
      set((s) => ({ flashes: s.flashes.filter((id) => !ids.includes(id)) }));
    }, 280);
  } else if (pulse.blockGained > 0) {
    sfxPlay.block();
    pushFloat(set, { text: `+${pulse.blockGained}`, color: "block", x: 0, y: 0 });
  }
  if (healed > 0) pushFloat(set, { text: `+${healed}`, color: "heal", x: 0, y: 0 });
  set({ run: { ...run }, combat: { ...combat } });
  if (combat.enemies.every((e) => e.hp <= 0)) {
    busy = false;
    await winCombat(get, set);
    return;
  }
  const wait = reduced() ? 80 : 420;
  const living = () => (get().combat?.enemies ?? []).filter((e) => e.hp > 0);
  for (const enemy of living()) {
    await sleep(wait);
    const cur = get();
    if (!cur.run || !cur.combat) break;
    const e = cur.combat.enemies.find((x) => x.id === enemy.id);
    if (!e || e.hp <= 0) continue;
    const rng2 = restoreRng(cur.run);
    const res = stepEnemy(cur.run, cur.combat, rng2, e);
    persistRng(res.run, rng2);
    if (res.playerHurt > 0) {
      sfxPlay.hit();
      pushFloat(set, { text: `-${res.playerHurt}`, color: "hp", x: 0, y: 0 });
      if (cur.meta.shake) set({ shake: Math.min(1, get().shake + 0.35) });
      set({ flashes: ["player", res.enemyId] });
      window.setTimeout(() => {
        set((s) => ({
          flashes: s.flashes.filter((id) => id !== "player" && id !== res.enemyId),
        }));
      }, 280);
    } else if (res.blocked > 0) {
      sfxPlay.block();
      pushFloat(set, { text: `+${res.blocked}`, color: "block", x: 0, y: 0 });
    }
    set({ run: { ...res.run }, combat: { ...res.combat } });
    if (res.dead) {
      busy = false;
      finish(get, set, false);
      return;
    }
    if (res.combat.enemies.every((en) => en.hp <= 0)) {
      busy = false;
      await winCombat(get, set);
      return;
    }
  }
  await sleep(reduced() ? 40 : 180);
  const after = get();
  if (!after.run || !after.combat) {
    busy = false;
    return;
  }
  const rng3 = restoreRng(after.run);
  beginPlayerTurn(after.run, after.combat, rng3);
  persistRng(after.run, rng3);
  set({ run: { ...after.run }, combat: { ...after.combat } });
  snapshot(get);
  busy = false;
}

async function winCombat(
  get: () => GameStore,
  set: (p: Partial<GameStore> | ((s: GameStore) => Partial<GameStore>)) => void,
) {
  busy = true;
  sfxPlay.win();
  await sleep(reduced() ? 120 : 500);
  const { run, combat } = get();
  if (!run) {
    busy = false;
    return;
  }
  const node = run.currentNodeId ? nodeById(run.map, run.currentNodeId) : undefined;
  if (node?.type === "boss" && (run.act ?? 1) >= 2) {
    busy = false;
    finish(get, set, true);
    return;
  }
  const rng = restoreRng(run);
  const reward = afterCombat(run, rng, node?.type ?? "combat");
  persistRng(run, rng);
  set({
    run: { ...run },
    combat: combat ? { ...combat, phase: "resolving" } : null,
    reward,
    screen: "reward",
  });
  snapshot(get);
  busy = false;
}

function finish(
  get: () => GameStore,
  set: (p: Partial<GameStore> | ((s: GameStore) => Partial<GameStore>)) => void,
  win: boolean,
) {
  const { run, meta } = get();
  const nextMeta: MetaState = {
    ...meta,
    wins: meta.wins + (win ? 1 : 0),
    losses: meta.losses + (win ? 0 : 1),
    bestRow: Math.max(meta.bestRow, run ? runDepth(run) - 1 : -1),
  };
  saveMeta(nextMeta);
  clearRun();
  if (win) sfxPlay.win();
  else sfxPlay.lose();
  set({
    meta: nextMeta,
    screen: win ? "victory" : "gameover",
    combat: null,
    inspect: null,
    menuOpen: false,
  });
}

function maybeLeaveReward(
  get: () => GameStore,
  set: (p: Partial<GameStore> | ((s: GameStore) => Partial<GameStore>)) => void,
) {
  const { reward } = get();
  if (!reward) return;
  const relicDone = reward.pickedRelic || !reward.relic;
  const potionDone = reward.pickedPotion || !reward.potion;
  if (reward.pickedCard && relicDone && potionDone) {
    const { run } = get();
    if (run) {
      const node = run.currentNodeId ? nodeById(run.map, run.currentNodeId) : undefined;
      if (node?.type === "boss" && (run.act ?? 1) < 2) {
        const rng = restoreRng(run);
        beginAct2(run, rng);
        persistRng(run, rng);
        set({
          run: { ...run },
          reward: null,
          combat: null,
          inspect: null,
          screen: "map",
          hint: "The first seal breaks. A second map opens below.",
        });
        snapshot(get);
        return;
      }
    }
    set({ reward: null, combat: null, inspect: null, screen: "map" });
    snapshot(get);
  } else {
    snapshot(get);
  }
}

if (typeof window !== "undefined") {
  const persist = () => snapshot(useGame.getState);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") persist();
  });
  window.addEventListener("pagehide", persist);
  window.addEventListener("beforeunload", persist);
}
