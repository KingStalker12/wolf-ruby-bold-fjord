import type { CombatState, MetaState, RewardState, RunState, Screen, PickerState, EventState } from "./types";

const META_KEY = "sepulcher.meta.v1";
const RUN_KEY = "sepulcher.run.v1";
const META_VERSION = 1;
const RUN_VERSION = 1;

export const defaultMeta = (): MetaState => ({
  version: META_VERSION,
  wins: 0,
  losses: 0,
  bestRow: -1,
  mute: false,
  shake: true,
  seenHint: false,
  plain: false,
});

export interface SavedRun {
  version: number;
  screen: Screen;
  run: RunState;
  combat: CombatState | null;
  reward: RewardState | null;
  event: EventState | null;
  picker: PickerState | null;
}

function storageGet(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    const local = localStorage.getItem(key);
    if (local) return local;
  } catch {
    /* private mode / blocked */
  }
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key: string, value: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, value);
  } catch {
    /* quota / private mode */
  }
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function storageRemove(key: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
  try {
    sessionStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

function read<T>(key: string): T | null {
  try {
    const raw = storageGet(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    storageSet(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

export function loadMeta(): MetaState {
  const m = read<MetaState>(META_KEY);
  if (!m || m.version !== META_VERSION) return defaultMeta();
  return { ...defaultMeta(), ...m, version: META_VERSION };
}

export function saveMeta(meta: MetaState) {
  write(META_KEY, { ...meta, version: META_VERSION });
}

export function loadRun(): SavedRun | null {
  const s = read<SavedRun>(RUN_KEY);
  if (!s || s.version !== RUN_VERSION || !s.run) return null;
  if (!s.run.classId) s.run.classId = "interred";
  if (!s.run.act) s.run.act = 1;
  if (!s.run.seenEvents) s.run.seenEvents = [];
  if (s.combat) {
    if (!s.combat.familiars) s.combat.familiars = [];
    if (typeof s.combat.familiarSlots !== "number") {
      s.combat.familiarSlots = s.run.classId === "kindled" ? 3 : 0;
    }
    s.combat.toxin ??= 0;
    s.combat.cinder ??= 0;
    s.combat.daze ??= 0;
    s.combat.envenom ??= 0;
    s.combat.afterburn ??= 0;
    s.combat.bastion ??= 0;
    s.combat.smokeMirrors ??= 0;
    s.combat.focus ??= 0;
    s.combat.plasma ??= 0;
    s.combat.prismPulse ??= 0;
    s.combat.prismUsed ??= false;
    s.combat.overheatPlasma ??= 0;
    s.combat.overheatNeed ??= 0;
    s.combat.cardsPlayed ??= 0;
    s.combat.blockGainedThisTurn ??= 0;
    s.combat.toxinApplied ??= false;
    s.combat.cinderApplied ??= false;
    s.combat.arcana ??= 0;
    s.combat.sage ??= false;
    s.combat.hunger ??= 0;
    s.combat.leech ??= 0;
    s.combat.leechDrain ??= 0;
    s.combat.bloodSpentTurn ??= 0;
    s.combat.bloodSpentBattle ??= 0;
    s.combat.journal ??= s.combat.log ? [s.combat.log] : [];
    for (const e of s.combat.enemies) {
      e.toxin ??= 0;
      e.cinder ??= 0;
      e.daze ??= 0;
    }
  }
  return s;
}

export function saveRun(data: SavedRun) {
  write(RUN_KEY, { ...data, version: RUN_VERSION });
}

export function clearRun() {
  storageRemove(RUN_KEY);
}
