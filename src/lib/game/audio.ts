let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let sfx: GainNode | null = null;
let muted = false;

function ac(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const C = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = new C({ latencyHint: "interactive" });
    master = ctx.createGain();
    sfx = ctx.createGain();
    sfx.connect(master);
    master.connect(ctx.destination);
    master.gain.value = muted ? 0 : 0.7;
  }
  return ctx;
}

export function unlockAudio() {
  const c = ac();
  if (c && c.state === "suspended") void c.resume();
}

export function setMuted(m: boolean) {
  muted = m;
  const c = ac();
  if (master && c) master.gain.setTargetAtTime(m ? 0 : 0.7, c.currentTime, 0.02);
}

export function isMuted() {
  return muted;
}

function tone(
  freq: number,
  dur: number,
  type: OscillatorType,
  vol = 0.12,
  slide?: number,
) {
  const c = ac();
  if (!c || !sfx || muted) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, c.currentTime);
  if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, slide), c.currentTime + dur);
  g.gain.setValueAtTime(vol, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
  osc.connect(g);
  g.connect(sfx);
  osc.start();
  osc.stop(c.currentTime + dur + 0.02);
}

function noise(dur: number, vol = 0.1) {
  const c = ac();
  if (!c || !sfx || muted) return;
  const n = Math.floor(c.sampleRate * dur);
  const buf = c.createBuffer(1, n, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (0.015 * c.sampleRate));
  const src = c.createBufferSource();
  src.buffer = buf;
  const g = c.createGain();
  g.gain.value = vol;
  const f = c.createBiquadFilter();
  f.type = "lowpass";
  f.frequency.value = 900;
  src.connect(f);
  f.connect(g);
  g.connect(sfx);
  src.start();
}

export const sfxPlay = {
  click: () => tone(720, 0.04, "square", 0.04),
  hover: () => tone(520, 0.03, "sine", 0.02),
  playCard: () => {
    tone(240, 0.08, "triangle", 0.08, 420);
  },
  hit: () => {
    noise(0.08, 0.14);
    tone(140, 0.1, "sawtooth", 0.07, 70);
  },
  block: () => tone(280, 0.09, "triangle", 0.07, 180),
  heal: () => tone(520, 0.12, "sine", 0.06, 780),
  death: () => {
    noise(0.16, 0.12);
    tone(180, 0.28, "sawtooth", 0.08, 50);
  },
  win: () => {
    tone(392, 0.12, "triangle", 0.07);
    setTimeout(() => tone(523, 0.14, "triangle", 0.07), 90);
    setTimeout(() => tone(659, 0.22, "triangle", 0.08), 180);
  },
  lose: () => tone(110, 0.45, "sawtooth", 0.08, 50),
  energy: () => tone(880, 0.05, "square", 0.03),
  shop: () => tone(440, 0.08, "sine", 0.05, 660),
};

if (typeof window !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") unlockAudio();
  });
}
