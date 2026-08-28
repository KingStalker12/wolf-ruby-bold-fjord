import { useEffect } from "react";
import { ArrowDown, ArrowUp, Heart, Layers, Shield, Swords, Sparkles } from "lucide-react";
import { CardView } from "./CardView";
import { Button } from "@/components/ui/button";
import { defOf } from "@/lib/game/cards";
import { canPlay, liveNumbers, playerStr } from "@/lib/game/engine";
import { intentKind, intentLabel } from "@/lib/game/enemies";
import { POTION_BY_ID } from "@/lib/game/items";
import { useGame } from "@/lib/game/store";
import type { EnemyInst, Intent, PileKind } from "@/lib/game/types";
import { cn } from "@/lib/utils";

const PORTRAIT: Record<string, string> = {
  mite: "/game/mite.jpg",
  acolyte: "/game/acolyte.jpg",
  archer: "/game/archer.jpg",
  wraith: "/game/wraith.jpg",
  jaw: "/game/jaw.jpg",
  sentinel: "/game/sentinel.jpg",
  priest: "/game/priest.jpg",
  warden: "/game/warden.jpg",
};

export function CombatScreen() {
  const run = useGame((s) => s.run)!;
  const combat = useGame((s) => s.combat)!;
  const play = useGame((s) => s.play);
  const drink = useGame((s) => s.drink);
  const endTurn = useGame((s) => s.endTurn);
  const shake = useGame((s) => s.shake);
  const floats = useGame((s) => s.floats);
  const flashes = useGame((s) => s.flashes);
  const hint = useGame((s) => s.hint);
  const dismissHint = useGame((s) => s.dismissHint);
  const setInspect = useGame((s) => s.setInspect);
  const targeting = Boolean(combat.targetingUid) || combat.targetingPotion !== null;
  const locked = combat.phase !== "player";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "e" || e.key === "E" || e.key === "Enter") {
        if (!locked) endTurn();
      }
      if (e.key === "Escape") {
        if (combat.targetingUid || combat.targetingPotion !== null) {
          useGame.setState({
            combat: { ...combat, targetingUid: null, targetingPotion: null },
          });
        }
      }
      const n = Number(e.key);
      if (n >= 1 && n <= 9 && !locked) {
        const card = combat.hand[n - 1];
        if (card) play(card.uid);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [combat, endTurn, locked, play]);

  const trauma = shake * shake;
  const ox = trauma ? (Math.random() * 2 - 1) * 10 * trauma : 0;
  const oy = trauma ? (Math.random() * 2 - 1) * 8 * trauma : 0;
  const str = playerStr(run, combat);

  return (
    <div
      className="flex flex-1 min-h-0 flex-col relative overflow-hidden"
      style={{ transform: `translate(${ox}px, ${oy}px)` }}
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/game/chamber.jpg"
          alt=""
          className="size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/35" />
      </div>

      <div className="relative flex-1 min-h-0 flex items-end sm:items-center justify-center gap-3 sm:gap-8 px-3 py-3 overflow-auto">
        {combat.enemies.map((e) => (
          <EnemyPortrait
            key={e.id}
            enemy={e}
            targeting={targeting}
            locked={locked}
            flashing={flashes.includes(e.id)}
            playerVuln={combat.vulnerable}
            onClick={() => {
              if (locked) return;
              if (combat.targetingUid) play(combat.targetingUid, e.id);
              else if (combat.targetingPotion !== null) drink(combat.targetingPotion, e.id);
            }}
          />
        ))}
      </div>

      {floats.length > 0 && (
        <div className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center gap-8 z-10">
          {floats.map((f) => (
            <span
              key={f.id}
              className={cn(
                "font-display text-2xl tabular-nums animate-float-up",
                f.color === "hp" && "text-hp",
                f.color === "block" && "text-block",
                f.color === "heal" && "text-fg",
              )}
            >
              {f.text}
            </span>
          ))}
        </div>
      )}

      <div className="relative px-3 pb-1">
        <div
          className={cn(
            "mx-auto max-w-3xl rounded-lg border border-border bg-elevated/90 px-3 py-2",
            flashes.includes("player") && "hit-flash",
          )}
        >
          <div className="flex items-center gap-3">
            <Heart className="size-4 text-hp shrink-0" strokeWidth={1.75} />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between text-xs tabular-nums mb-1">
                <span>
                  {run.hp}/{run.maxHp}
                </span>
                {combat.block > 0 && (
                  <span className="text-block flex items-center gap-1">
                    <Shield className="size-3" strokeWidth={2} />
                    {combat.block}
                  </span>
                )}
              </div>
              <div className="h-2 rounded-full bg-bg overflow-hidden">
                <div
                  className="h-full bg-hp transition-[width] duration-(--motion-fast) ease-(--ease-out)"
                  style={{ width: `${Math.max(0, (run.hp / run.maxHp) * 100)}%` }}
                />
              </div>
            </div>
            <Energy energy={combat.energy} max={combat.maxEnergy} />
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5 text-[10px] uppercase tracking-wider text-muted">
            {str !== 0 && <StatusChip>Str {str > 0 ? `+${str}` : str}</StatusChip>}
            {combat.weak > 0 && <StatusChip>Weak {combat.weak}</StatusChip>}
            {combat.vulnerable > 0 && <StatusChip>Vuln {combat.vulnerable}</StatusChip>}
            {combat.frail > 0 && <StatusChip>Frail {combat.frail}</StatusChip>}
            {combat.metallicize > 0 && <StatusChip>Metal {combat.metallicize}</StatusChip>}
            <span className="ml-auto normal-case tracking-normal text-subtle hidden sm:inline">
              {targeting ? "Choose a target" : combat.log}
            </span>
            <button
              type="button"
              className="ml-auto sm:hidden normal-case tracking-normal text-subtle tabular-nums"
              onClick={() => setInspect("draw")}
            >
              Draw {combat.drawPile.length} · Disc {combat.discardPile.length}
            </button>
          </div>
        </div>
      </div>

      <div className="relative hand-fan min-h-[12.5rem] items-end px-3 py-2 overflow-x-auto">
        {combat.hand.map((card) => {
          const ok = canPlay(run, combat, card) && !locked;
          const selected = combat.targetingUid === card.uid;
          const base = defOf(card).numbers(card.upgraded);
          const live = liveNumbers(run, combat, card);
          const tone =
            (live.damage ?? 0) > (base.damage ?? 0) || (live.block ?? 0) > (base.block ?? 0)
              ? "up"
              : (live.damage ?? 0) < (base.damage ?? 0) || (live.block ?? 0) < (base.block ?? 0)
                ? "down"
                : "none";
          return (
            <CardView
              key={card.uid}
              card={card}
              playable={ok}
              selected={selected}
              dimmed={targeting && !selected}
              live={live}
              tone={tone}
              onClick={() => {
                if (locked) return;
                if (selected) {
                  useGame.setState({
                    combat: { ...combat, targetingUid: null },
                  });
                  return;
                }
                play(card.uid);
              }}
            />
          );
        })}
        {combat.hand.length === 0 && (
          <p className="text-sm text-muted self-center w-full text-center pb-8">Hand empty.</p>
        )}
      </div>

      <div className="relative flex items-center gap-2 px-3 pb-[max(4.5rem,env(safe-area-inset-bottom))] pt-1">
        <div className="flex gap-1.5">
          {run.potions.map((id, i) => (
            <button
              key={i}
              type="button"
              disabled={!id || locked || id === "fairy"}
              onClick={() => id && drink(i)}
              title={id ? POTION_BY_ID[id]?.name : "Empty"}
              className={cn(
                "size-11 rounded-md border text-[10px] leading-tight px-1",
                id
                  ? "border-border bg-surface text-fg"
                  : "border-dashed border-border bg-bg/80 text-subtle",
                combat.targetingPotion === i && "ring-2 ring-accent",
              )}
            >
              {id ? (POTION_BY_ID[id]?.name.split(" ")[0] ?? "Potion") : ""}
            </button>
          ))}
        </div>
        <div className="flex-1 flex justify-center gap-1">
          <PileBtn kind="draw" count={combat.drawPile.length} onOpen={setInspect} />
          <PileBtn kind="discard" count={combat.discardPile.length} onOpen={setInspect} />
          <PileBtn kind="exhaust" count={combat.exhaustPile.length} onOpen={setInspect} />
        </div>
        <Button
          onClick={endTurn}
          disabled={locked}
          variant="primary"
          className="ml-auto min-w-[7.5rem]"
        >
          {locked ? "Resolving" : "End turn"}
        </Button>
      </div>

      {hint && (
        <div
          className="absolute inset-0 z-20 flex items-end sm:items-center justify-center bg-bg/70 p-4"
          onClick={dismissHint}
        >
          <div
            className="w-full max-w-md rounded-xl border border-border bg-surface p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-display text-xl">The first chamber</p>
            <p className="mt-2 text-sm text-muted leading-relaxed text-pretty">{hint}</p>
            <Button className="mt-4 w-full" onClick={dismissHint}>
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function PileBtn({
  kind,
  count,
  onOpen,
}: {
  kind: PileKind;
  count: number;
  onOpen: (k: PileKind) => void;
}) {
  const label = kind === "draw" ? "Draw" : kind === "discard" ? "Discard" : "Exhaust";
  return (
    <button
      type="button"
      onClick={() => onOpen(kind)}
      className="hidden sm:flex items-center gap-1 rounded-md border border-border bg-surface/80 px-2 h-11 text-[11px] tabular-nums text-muted hover:text-fg"
    >
      <Layers className="size-3.5" strokeWidth={1.75} />
      {label} {count}
    </button>
  );
}

function Energy({ energy, max }: { energy: number; max: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${energy} of ${max} energy`}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "size-3.5 rotate-45 border",
            i < energy ? "bg-accent border-accent" : "border-border bg-transparent",
          )}
        />
      ))}
      <span className="ml-1 text-sm tabular-nums text-fg">
        {energy}/{max}
      </span>
    </div>
  );
}

function StatusChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm border border-border px-1.5 py-0.5 text-fg/80">{children}</span>
  );
}

function EnemyPortrait({
  enemy,
  targeting,
  locked,
  flashing,
  playerVuln,
  onClick,
}: {
  enemy: EnemyInst;
  targeting: boolean;
  locked: boolean;
  flashing: boolean;
  playerVuln: number;
  onClick: () => void;
}) {
  const dead = enemy.hp <= 0;
  const kind = intentKind(enemy.intent);
  const boss = enemy.defId === "warden";
  const src = PORTRAIT[enemy.defId];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={dead || locked}
      className={cn(
        "flex flex-col items-center gap-2 min-w-[7.5rem] sm:min-w-[9rem] transition-opacity",
        dead && "opacity-30 pointer-events-none",
      )}
    >
      <IntentBadge
        intent={enemy.intent}
        strength={enemy.strength}
        weak={enemy.weak}
        targetVuln={playerVuln}
        kind={kind}
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-md border border-border bg-elevated",
          boss ? "size-32 sm:size-44" : "size-28 sm:size-36",
          targeting && !dead && "ring-2 ring-accent",
          flashing && "hit-flash",
        )}
      >
        {src ? (
          <img src={src} alt="" className="size-full object-cover" />
        ) : (
          <div className="size-full bg-elevated" />
        )}
      </div>
      <div className="w-full">
        <p className="text-xs font-medium text-center mb-1">{enemy.name}</p>
        <div className="flex justify-between text-[10px] tabular-nums text-muted mb-0.5">
          <span>
            {enemy.hp}/{enemy.maxHp}
          </span>
          {enemy.block > 0 && <span className="text-block">{enemy.block}</span>}
        </div>
        <div className="h-1 rounded-full bg-bg overflow-hidden">
          <div
            className="h-full bg-hp/90 transition-[width] duration-(--motion-fast)"
            style={{ width: `${(enemy.hp / enemy.maxHp) * 100}%` }}
          />
        </div>
        <div className="mt-1 flex justify-center gap-1 text-[9px] uppercase tracking-wider text-muted">
          {enemy.strength !== 0 && <span>Str {enemy.strength}</span>}
          {enemy.weak > 0 && <span>Wk {enemy.weak}</span>}
          {enemy.vulnerable > 0 && <span>Vuln {enemy.vulnerable}</span>}
        </div>
      </div>
    </button>
  );
}

function IntentBadge({
  intent,
  strength,
  weak,
  targetVuln,
  kind,
}: {
  intent: Intent;
  strength: number;
  weak: number;
  targetVuln: number;
  kind: ReturnType<typeof intentKind>;
}) {
  const Icon =
    kind === "attack" || kind === "mixed"
      ? Swords
      : kind === "defend"
        ? Shield
        : kind === "buff"
          ? ArrowUp
          : kind === "debuff"
            ? ArrowDown
            : Sparkles;
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-surface/90 px-2 py-0.5 text-xs tabular-nums">
      <Icon className="size-3.5" strokeWidth={1.75} />
      {intentLabel(intent, strength, weak, targetVuln)}
    </div>
  );
}
