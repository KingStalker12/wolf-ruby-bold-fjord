import { useEffect } from "react";
import { ArrowDown, ArrowUp, Heart, Layers, Shield, Swords, Sparkles } from "lucide-react";
import { CardView } from "./CardView";
import { Button } from "@/components/ui/button";
import { defOf } from "@/lib/game/cards";
import { CLASS_BY_ID } from "@/lib/game/characters";
import { canPlay, liveNumbers, playerStr } from "@/lib/game/engine";
import { intentKind, intentLabel } from "@/lib/game/enemies";
import { POTION_BY_ID } from "@/lib/game/items";
import { FAMILIAR_ART, familiarEvokeHint, familiarName, familiarPassive } from "@/lib/game/familiars";
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
  cinder: "/game/cinder.jpg",
  coil: "/game/coil.jpg",
  paladin: "/game/paladin.jpg",
  crown: "/game/crown.jpg",
  lurker: "/game/lurker.jpg",
  ghoul: "/game/ghoul.jpg",
  ashrat: "/game/ashrat.jpg",
  widow: "/game/widow.jpg",
  howler: "/game/howler.jpg",
  saint: "/game/saint.jpg",
  wolf: "/game/wolf.jpg",
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
  const plain = useGame((s) => s.meta.plain);
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

  const trauma = plain ? 0 : shake * shake;
  const ox = trauma ? (Math.random() * 2 - 1) * 10 * trauma : 0;
  const oy = trauma ? (Math.random() * 2 - 1) * 8 * trauma : 0;
  const str = playerStr(run, combat);

  return (
    <div
      className="flex flex-1 min-h-0 flex-col relative overflow-hidden"
      style={{ transform: `translate(${ox}px, ${oy}px)` }}
    >
      <div className="pointer-events-none absolute inset-0">
        {!plain && (
          <img
            src="/game/chamber.jpg"
            alt=""
            className="size-full object-cover opacity-45"
          />
        )}
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
            plain={plain}
            onClick={() => {
              if (locked) return;
              if (combat.targetingUid) play(combat.targetingUid, e.id);
              else if (combat.targetingPotion !== null) drink(combat.targetingPotion, e.id);
            }}
          />
        ))}
      </div>

      {floats.length > 0 && (
        <div className="pointer-events-none absolute inset-x-0 top-[22%] flex justify-center gap-6 z-20">
          {floats.map((f, i) => (
            <span
              key={f.id}
              className={cn(
                "font-display text-4xl sm:text-5xl font-semibold tabular-nums animate-float-up",
                f.color === "hp" && "text-hp",
                f.color === "block" && "text-block",
                f.color === "heal" && "text-heal",
                f.color === "buff" && "text-accent",
              )}
              style={{
                textShadow: "0 2px 0 rgb(0 0 0 / 0.55), 0 8px 18px rgb(0 0 0 / 0.45)",
                marginLeft: `${((i % 3) - 1) * 28}px`,
              }}
            >
              {f.text}
            </span>
          ))}
        </div>
      )}

      {(combat.journal?.length ?? 0) > 0 && (
        <div className="pointer-events-none absolute left-2 top-2 z-20 w-[11.5rem] sm:w-60">
          <div className="jrpg-panel bg-bg/85 px-2 py-1.5">
            <p className="text-[10px] uppercase tracking-[0.16em] text-accent mb-1">Battle log</p>
            <ul className="space-y-0.5 max-h-24 sm:max-h-36 overflow-hidden">
              {combat.journal.slice(0, 6).map((line, i) => (
                <li
                  key={`${i}-${line.slice(0, 12)}`}
                  className={cn("text-[11px] leading-snug", i === 0 ? "text-fg" : "text-muted")}
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {combat.familiarSlots > 0 && (
        <div className="relative px-3 pb-2">
          <div className="mx-auto max-w-3xl flex justify-center gap-2">
            {Array.from({ length: Math.max(0, combat.familiarSlots - combat.familiars.length) }, (_, i) => (
              <div
                key={`empty-${i}`}
                className="size-14 sm:size-16 rounded-lg border border-dashed border-border bg-bg/50 shrink-0"
                aria-label="Empty familiar slot"
              />
            ))}
            {combat.familiars.map((f, i) => (
              <div
                key={`${f.kind}-${i}`}
                className={cn(
                  "w-20 sm:w-24 rounded-lg border bg-elevated/90 overflow-hidden shrink-0",
                  f.stage >= 3 ? "border-accent ring-1 ring-accent/40" : "border-border",
                )}
                title={`${familiarPassive(f)} · ${familiarEvokeHint(f)}`}
              >
                <div className="h-12 sm:h-14 overflow-hidden bg-elevated flex items-center justify-center">
                  {plain ? (
                    <p className="font-display text-lg text-muted">{familiarName(f).slice(0, 1)}</p>
                  ) : (
                    <img
                      src={FAMILIAR_ART[f.kind]}
                      alt=""
                      className="size-full object-cover"
                      style={{ filter: f.stage === 1 ? "grayscale(0.35)" : f.stage === 2 ? "none" : "contrast(1.15) saturate(1.2)" }}
                    />
                  )}
                </div>
                <div className="px-1.5 py-1">
                  <p className={cn("font-display text-xs leading-tight truncate", f.stage >= 3 && "text-accent")}>
                    {familiarName(f)}
                  </p>
                  <p className="text-[9px] text-muted tabular-nums truncate">
                    {f.stage >= 3 ? `III · Surge ready` : familiarPassive(f)}
                  </p>
                  <div className="mt-0.5 flex gap-0.5 items-center">
                    {[1, 2, 3].map((s) => (
                      <span
                        key={s}
                        className={cn(
                          "rounded-full",
                          s <= f.stage ? "bg-accent" : "bg-border",
                          f.stage >= 3 ? "size-2" : "size-1.5",
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="relative px-3 pb-1">
        <div
          className={cn(
            "mx-auto max-w-3xl rounded-lg jrpg-panel bg-elevated/90 px-3 py-2",
            flashes.includes("player") && "hit-flash",
          )}
        >
          <div className="flex items-center gap-3">
            {!plain && CLASS_BY_ID[run.classId] && (
              <img
                src={CLASS_BY_ID[run.classId].portrait}
                alt=""
                className="size-12 rounded-md object-cover border border-accent/40 shrink-0"
              />
            )}
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
            {combat.dexterity !== 0 && (
              <StatusChip>Dex {combat.dexterity > 0 ? `+${combat.dexterity}` : combat.dexterity}</StatusChip>
            )}
            {combat.weak > 0 && <StatusChip>Weak {combat.weak}</StatusChip>}
            {combat.vulnerable > 0 && <StatusChip>Vuln {combat.vulnerable}</StatusChip>}
            {combat.frail > 0 && <StatusChip>Frail {combat.frail}</StatusChip>}
            {combat.metallicize > 0 && <StatusChip>Metal {combat.metallicize}</StatusChip>}
            {combat.toxin > 0 && <StatusChip>Toxin {combat.toxin}</StatusChip>}
            {combat.cinder > 0 && <StatusChip>Cinder {combat.cinder}</StatusChip>}
            {combat.daze > 0 && <StatusChip>Daze {combat.daze}</StatusChip>}
            {combat.envenom > 0 && <StatusChip>Venom {combat.envenom}</StatusChip>}
            {combat.afterburn > 0 && <StatusChip>Afterburn {combat.afterburn}</StatusChip>}
            {combat.bastion > 0 && <StatusChip>Bastion {combat.bastion}</StatusChip>}
            {combat.smokeMirrors > 0 && <StatusChip>Smoke {combat.smokeMirrors}</StatusChip>}
            {combat.focus > 0 && <StatusChip>Focus {combat.focus}</StatusChip>}
            {combat.plasma > 0 && <StatusChip>Plasma {combat.plasma}</StatusChip>}
            {combat.prismPulse > 0 && <StatusChip>Prism {combat.prismPulse}</StatusChip>}
            {combat.overheatPlasma > 0 && <StatusChip>Overheat {combat.overheatNeed}+</StatusChip>}
            {combat.arcana > 0 && <StatusChip>Arcana {combat.arcana}</StatusChip>}
            {combat.sage && <StatusChip>Sage</StatusChip>}
            {combat.hunger > 0 && <StatusChip>Hunger {combat.hunger}</StatusChip>}
            {(combat.bloodSpentTurn > 0 || combat.bloodSpentBattle > 0) && (
              <StatusChip>
                Blood {combat.bloodSpentTurn}/{combat.bloodSpentBattle}
              </StatusChip>
            )}
            {combat.leech > 0 && <StatusChip>Leech {combat.leech}</StatusChip>}
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
  plain,
}: {
  enemy: EnemyInst;
  targeting: boolean;
  locked: boolean;
  flashing: boolean;
  playerVuln: number;
  onClick: () => void;
  plain: boolean;
}) {
  const dead = enemy.hp <= 0;
  const kind = intentKind(enemy.intent);
  const boss = enemy.defId === "warden" || enemy.defId === "crown";
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
          "relative overflow-hidden rounded-md border border-border bg-elevated flex items-center justify-center",
          boss ? "size-32 sm:size-44" : "size-28 sm:size-36",
          targeting && !dead && "ring-2 ring-accent",
          flashing && "hit-flash",
        )}
      >
        {!plain && src ? (
          <img src={src} alt="" className="size-full object-cover" />
        ) : (
          <p className="font-display text-3xl sm:text-4xl text-muted px-2 text-center leading-tight">
            {enemy.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </p>
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
        <div className="mt-1 flex justify-center gap-1 text-[9px] uppercase tracking-wider text-muted flex-wrap">
          {enemy.strength !== 0 && <span>Str {enemy.strength}</span>}
          {enemy.weak > 0 && <span>Wk {enemy.weak}</span>}
          {enemy.vulnerable > 0 && <span>Vuln {enemy.vulnerable}</span>}
          {enemy.toxin > 0 && <span>Tx {enemy.toxin}</span>}
          {enemy.cinder > 0 && <span>Cn {enemy.cinder}</span>}
          {enemy.daze > 0 && <span>Dz {enemy.daze}</span>}
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
