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

function read<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota / private mode */
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
  return s;
}

export function saveRun(data: SavedRun) {
  write(RUN_KEY, { ...data, version: RUN_VERSION });
}

export function clearRun() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(RUN_KEY);
  } catch {
    /* ignore */
  }
}
