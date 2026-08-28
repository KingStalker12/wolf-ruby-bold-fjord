import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardView } from "./CardView";
import { defOf } from "@/lib/game/cards";
import { EVENT_BY_ID } from "@/lib/game/events";
import { POTION_BY_ID, RELIC_BY_ID } from "@/lib/game/items";
import { loadRun } from "@/lib/game/save";
import { useGame } from "@/lib/game/store";
import { unlockAudio } from "@/lib/game/audio";
import { cn } from "@/lib/utils";

export function TitleScreen() {
  const meta = useGame((s) => s.meta);
  const newDescent = useGame((s) => s.newDescent);
  const continueRun = useGame((s) => s.continueRun);
  const setScreen = useGame((s) => s.setScreen);
  const toggleMute = useGame((s) => s.toggleMute);
  const [hasSave, setHasSave] = useState(false);

  useEffect(() => {
    setHasSave(!!loadRun());
  }, []);

  return (
    <div className="min-h-dvh bg-bg text-fg flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img src="/game/chamber.jpg" alt="" className="size-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/50" />
      </div>
      <div className="relative flex flex-col items-center">
        <WellMark />
        <h1 className="mt-8 font-display text-5xl sm:text-7xl tracking-tight text-balance">
          Sepulcher
        </h1>
        <p className="mt-3 max-w-sm text-center text-muted text-pretty leading-relaxed">
          A roguelike deckbuilder. Descend the sealed tomb, play your rites, and do not look back.
        </p>
        <div className="mt-10 flex w-full max-w-xs flex-col gap-3">
          <Button size="lg" className="w-full" onClick={newDescent}>
            Descend
          </Button>
          {hasSave && (
            <Button size="lg" variant="secondary" className="w-full" onClick={continueRun}>
              Continue
            </Button>
          )}
          <Button size="lg" variant="ghost" className="w-full" onClick={() => setScreen("howto")}>
            How to play
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-4 text-xs tabular-nums text-subtle">
          <span>
            {meta.wins} sealed · {meta.losses} lost
            {meta.bestRow >= 0 ? ` · deepest ${meta.bestRow + 1}` : ""}
          </span>
          <button
            type="button"
            className="size-10 flex items-center justify-center hover:text-fg"
            onClick={() => {
              unlockAudio();
              toggleMute();
            }}
            aria-label={meta.mute ? "Unmute" : "Mute"}
          >
            {meta.mute ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export function HowToScreen() {
  const setScreen = useGame((s) => s.setScreen);
  const run = useGame((s) => s.run);
  return (
    <div className="min-h-dvh bg-bg text-fg px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-md">
        <h1 className="font-display text-3xl">How to play</h1>
        <ol className="mt-6 space-y-5 text-sm text-muted leading-relaxed">
          <li>
            <span className="text-fg font-medium">Energy and rites.</span> Each turn you have three
            energy. Play cards from your hand to spend it. Attacks deal damage; skills gain Block.
          </li>
          <li>
            <span className="text-fg font-medium">Intents.</span> Enemies show their next action
            above their portrait. Block absorbs damage before your life does, then clears at the
            start of your turn.
          </li>
          <li>
            <span className="text-fg font-medium">The map.</span> After each chamber, choose a path:
            fights, elites, a merchant, a rest, or an unknown. The Pale Warden waits at the bottom.
          </li>
          <li>
            <span className="text-fg font-medium">Relics.</span> Permanent gifts. Elites and the
            Warden drop them. Rest to heal or upgrade a card.
          </li>
          <li>
            <span className="text-fg font-medium">Keys.</span> 1–9 play cards in hand. E or Enter
            ends the turn. Escape cancels targeting.
          </li>
        </ol>
        <Button className="mt-8 w-full" onClick={() => setScreen(run ? "map" : "title")}>
          Return
        </Button>
      </div>
    </div>
  );
}

export function RewardScreen() {
  const reward = useGame((s) => s.reward)!;
  const pickRewardCard = useGame((s) => s.pickRewardCard);
  const skipRewardCard = useGame((s) => s.skipRewardCard);
  const takeRelic = useGame((s) => s.takeRelic);
  const takePotion = useGame((s) => s.takePotion);
  const skipPotion = useGame((s) => s.skipPotion);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl text-center">Spoils</h2>
        {reward.gold > 0 && (
          <p className="mt-1 text-center text-sm text-muted tabular-nums">+{reward.gold} gold</p>
        )}

        {!reward.pickedCard && (
          <section className="mt-8">
            <p className="text-center text-xs uppercase tracking-[0.16em] text-muted mb-4">
              Choose a rite
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {reward.cards.map((c) => (
                <CardView key={c.uid} card={c} size="reward" onClick={() => pickRewardCard(c.uid)} />
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="ghost" onClick={skipRewardCard}>
                Skip
              </Button>
            </div>
          </section>
        )}

        {reward.relic && !reward.pickedRelic && (
          <section className="mt-8 mx-auto max-w-sm rounded-lg border border-border bg-surface p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Relic</p>
            <p className="mt-1 font-display text-xl">{RELIC_BY_ID[reward.relic]?.name}</p>
            <p className="mt-1 text-sm text-muted">{RELIC_BY_ID[reward.relic]?.text}</p>
            <Button className="mt-4 w-full" onClick={takeRelic}>
              Take
            </Button>
          </section>
        )}

        {reward.potion && !reward.pickedPotion && (
          <section className="mt-6 mx-auto max-w-sm rounded-lg border border-border bg-surface p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Potion</p>
            <p className="mt-1 font-display text-xl">{POTION_BY_ID[reward.potion]?.name}</p>
            <p className="mt-1 text-sm text-muted">{POTION_BY_ID[reward.potion]?.text}</p>
            <div className="mt-4 flex gap-2">
              <Button className="flex-1" onClick={takePotion}>
                Take
              </Button>
              <Button className="flex-1" variant="secondary" onClick={skipPotion}>
                Skip
              </Button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export function ShopScreen() {
  const run = useGame((s) => s.run)!;
  const shop = run.shop!;
  const buyCard = useGame((s) => s.buyCard);
  const buyRelic = useGame((s) => s.buyRelic);
  const buyPotion = useGame((s) => s.buyPotion);
  const shopRemove = useGame((s) => s.shopRemove);
  const leaveShop = useGame((s) => s.leaveShop);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl text-center">Merchant</h2>
        <p className="mt-1 text-center text-sm text-muted tabular-nums">{run.gold} gold</p>

        <p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted">Rites</p>
        <div className="mt-3 flex flex-wrap gap-3 justify-center">
          {shop.cards.map((o, i) => (
            <CardView
              key={o.item.uid}
              card={o.item}
              size="reward"
              price={o.price}
              dimmed={o.sold || run.gold < o.price}
              playable={!o.sold && run.gold >= o.price}
              onClick={() => buyCard(i)}
            />
          ))}
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted">Relics</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {shop.relics.map((o, i) => (
            <OfferRow
              key={o.item}
              title={RELIC_BY_ID[o.item]?.name ?? o.item}
              text={RELIC_BY_ID[o.item]?.text ?? ""}
              price={o.price}
              sold={o.sold}
              canAfford={run.gold >= o.price}
              onBuy={() => buyRelic(i)}
            />
          ))}
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted">Potions</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {shop.potions.map((o, i) => (
            <OfferRow
              key={`${o.item}-${i}`}
              title={POTION_BY_ID[o.item]?.name ?? o.item}
              text={POTION_BY_ID[o.item]?.text ?? ""}
              price={o.price}
              sold={o.sold}
              canAfford={run.gold >= o.price && run.potions.some((p) => p === null)}
              onBuy={() => buyPotion(i)}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            className="flex-1"
            disabled={shop.removed || run.gold < shop.removePrice}
            onClick={shopRemove}
          >
            Remove a card · {shop.removePrice}g
          </Button>
          <Button className="flex-1" onClick={leaveShop}>
            Leave
          </Button>
        </div>
      </div>
    </div>
  );
}

function OfferRow({
  title,
  text,
  price,
  sold,
  canAfford,
  onBuy,
}: {
  title: string;
  text: string;
  price: number;
  sold: boolean;
  canAfford: boolean;
  onBuy: () => void;
}) {
  return (
    <button
      type="button"
      disabled={sold || !canAfford}
      onClick={onBuy}
      className={cn(
        "text-left rounded-md border border-border bg-surface p-3",
        (sold || !canAfford) && "opacity-40",
      )}
    >
      <div className="flex justify-between gap-2">
        <p className="font-medium">{title}</p>
        <p className="text-sm tabular-nums">{sold ? "Sold" : `${price}g`}</p>
      </div>
      <p className="mt-1 text-xs text-muted">{text}</p>
    </button>
  );
}

export function RestScreen() {
  const rest = useGame((s) => s.rest);
  const run = useGame((s) => s.run)!;
  const healAmt = Math.ceil(run.maxHp * 0.3);
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <h2 className="font-display text-3xl text-center">A cold hearth</h2>
        <p className="mt-2 text-center text-sm text-muted">Rest, or rewrite a rite.</p>
        <div className="mt-8 grid gap-3">
          <Button size="lg" className="w-full h-auto py-4" onClick={() => rest("heal")}>
            Rest · heal {healAmt}
          </Button>
          <Button size="lg" variant="secondary" className="w-full h-auto py-4" onClick={() => rest("upgrade")}>
            Inscribe · upgrade a card
          </Button>
        </div>
      </div>
    </div>
  );
}

export function EventScreen() {
  const event = useGame((s) => s.event)!;
  const run = useGame((s) => s.run)!;
  const chooseEvent = useGame((s) => s.chooseEvent);
  const leaveEvent = useGame((s) => s.leaveEvent);
  const def = EVENT_BY_ID[event.defId];
  if (!def) return null;

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <h2 className="font-display text-3xl">{def.title}</h2>
        <p className="mt-3 text-sm text-muted leading-relaxed text-pretty">{def.body}</p>
        {event.resolved ? (
          <>
            <p className="mt-6 text-sm text-fg">{event.result}</p>
            <Button className="mt-6 w-full" onClick={leaveEvent}>
              Continue
            </Button>
          </>
        ) : (
          <div className="mt-8 grid gap-2">
            {def.choices.map((c) => {
              const locked = c.requireGold !== undefined && run.gold < c.requireGold;
              return (
                <button
                  key={c.id}
                  type="button"
                  disabled={locked}
                  onClick={() => chooseEvent(c.id)}
                  className="text-left rounded-md border border-border bg-surface p-3 disabled:opacity-40"
                >
                  <p className="font-medium">{c.label}</p>
                  <p className="text-xs text-muted mt-0.5">{c.hint}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export function PickerScreen() {
  const run = useGame((s) => s.run)!;
  const picker = useGame((s) => s.picker)!;
  const pickCard = useGame((s) => s.pickCard);
  const cards =
    picker.mode === "upgrade"
      ? run.deck.filter((c) => !c.upgraded && !defOf(c).unplayable)
      : run.deck;

  return (
    <div className="flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl text-center">{picker.title}</h2>
        <p className="mt-1 text-center text-sm text-muted">{picker.subtitle}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {cards.map((c) => (
            <CardView key={c.uid} card={c} size="mini" onClick={() => pickCard(c.uid)} />
          ))}
          {cards.length === 0 && (
            <p className="text-sm text-muted">Nothing eligible.</p>
          )}
        </div>
        {cards.length === 0 && (
          <div className="mt-6 flex justify-center">
            <Button onClick={() => useGame.getState().setScreen("map")}>Continue</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export function EndScreen({ win }: { win: boolean }) {
  const run = useGame((s) => s.run);
  const newDescent = useGame((s) => s.newDescent);
  const setScreen = useGame((s) => s.setScreen);
  return (
    <div className="min-h-dvh bg-bg text-fg flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img src="/game/chamber.jpg" alt="" className="size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/55" />
      </div>
      <div className="relative flex flex-col items-center">
        <h1 className="font-display text-4xl sm:text-6xl text-balance">
          {win ? "The tomb is quiet" : "Interred"}
        </h1>
        <p className="mt-3 max-w-sm text-center text-muted text-pretty">
          {win
            ? "The Pale Warden falls. Your name holds. For now."
            : "The well keeps what it is given."}
        </p>
        {run && (
          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2 text-sm tabular-nums">
            <dt className="text-muted">Depth</dt>
            <dd>{run.row + 1}</dd>
            <dt className="text-muted">Gold</dt>
            <dd>{run.gold}</dd>
            <dt className="text-muted">Relics</dt>
            <dd>{run.relics.length}</dd>
            <dt className="text-muted">Deck</dt>
            <dd>{run.deck.length}</dd>
            <dt className="text-muted">Damage</dt>
            <dd>{run.damageDealt}</dd>
          </dl>
        )}
        <div className="mt-10 flex w-full max-w-xs flex-col gap-3">
          <Button size="lg" className="w-full" onClick={newDescent}>
            Descend again
          </Button>
          <Button size="lg" variant="ghost" className="w-full" onClick={() => setScreen("title")}>
            Title
          </Button>
        </div>
      </div>
    </div>
  );
}

export function TopBar() {
  const run = useGame((s) => s.run)!;
  const setDeckOpen = useGame((s) => s.setDeckOpen);
  const setMenuOpen = useGame((s) => s.setMenuOpen);
  const meta = useGame((s) => s.meta);
  return (
    <header className="flex items-center gap-3 px-3 sm:px-5 py-2.5 border-b border-border bg-bg/90">
      <p className="font-display text-lg tracking-tight">Sepulcher</p>
      <div className="ml-auto flex items-center gap-3 text-xs tabular-nums text-muted">
        <span>
          {run.hp}/{run.maxHp}
        </span>
        <span>{run.gold}g</span>
        <button type="button" className="hover:text-fg" onClick={() => setDeckOpen(true)}>
          Deck {run.deck.length}
        </button>
        <button
          type="button"
          className="size-10 flex items-center justify-center hover:text-fg"
          onClick={() => setMenuOpen(true)}
          aria-label="Menu"
        >
          {meta.mute ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </button>
      </div>
    </header>
  );
}

export function Overlays() {
  const inspect = useGame((s) => s.inspect);
  const setInspect = useGame((s) => s.setInspect);
  const combat = useGame((s) => s.combat);
  const deckOpen = useGame((s) => s.deckOpen);
  const menuOpen = useGame((s) => s.menuOpen);
  const setDeckOpen = useGame((s) => s.setDeckOpen);
  const setMenuOpen = useGame((s) => s.setMenuOpen);
  const run = useGame((s) => s.run);
  const meta = useGame((s) => s.meta);
  const toggleMute = useGame((s) => s.toggleMute);
  const toggleShake = useGame((s) => s.toggleShake);
  const abandon = useGame((s) => s.abandon);
  const setScreen = useGame((s) => s.setScreen);

  return (
    <>
      {inspect && combat && (
        <Modal
          title={inspect === "draw" ? "Draw pile" : inspect === "discard" ? "Discard" : "Exhaust"}
          onClose={() => setInspect(null)}
        >
          <p className="text-xs text-muted mb-3">
            {inspect === "draw" ? "Order hidden." : "Newest last."}
          </p>
          <div className="flex flex-wrap gap-2 justify-center max-h-[60vh] overflow-y-auto">
            {(inspect === "draw"
              ? [...combat.drawPile].sort((a, b) => a.defId.localeCompare(b.defId))
              : inspect === "discard"
                ? combat.discardPile
                : combat.exhaustPile
            ).map((c) => (
              <CardView key={c.uid} card={c} size="mini" />
            ))}
            {(inspect === "draw" ? combat.drawPile : inspect === "discard" ? combat.discardPile : combat.exhaustPile)
              .length === 0 && <p className="text-sm text-muted">Empty.</p>}
          </div>
        </Modal>
      )}
      {deckOpen && run && (
        <Modal title="Deck" onClose={() => setDeckOpen(false)}>
          <div className="flex flex-wrap gap-2 justify-center max-h-[60vh] overflow-y-auto">
            {run.deck.map((c) => (
              <CardView key={c.uid} card={c} size="mini" />
            ))}
          </div>
          <div className="mt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted mb-2">Relics</p>
            <ul className="space-y-1 text-sm">
              {run.relics.map((id) => (
                <li key={id}>
                  <span className="text-fg">{RELIC_BY_ID[id]?.name}</span>
                  <span className="text-muted"> — {RELIC_BY_ID[id]?.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
      {menuOpen && (
        <Modal title="Menu" onClose={() => setMenuOpen(false)}>
          <div className="grid gap-2">
            <Button
              variant="secondary"
              onClick={() => {
                unlockAudio();
                toggleMute();
              }}
            >
              {meta.mute ? "Sound off" : "Sound on"}
            </Button>
            <Button variant="secondary" onClick={toggleShake}>
              {meta.shake ? "Shake on" : "Shake off"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setMenuOpen(false);
                setScreen("howto");
              }}
            >
              How to play
            </Button>
            <Button variant="danger" onClick={abandon}>
              Abandon run
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-bg/80"
        aria-label="Close"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal
        aria-label={title}
        className="relative w-full max-w-lg rounded-t-xl sm:rounded-xl border border-border bg-surface p-5 max-h-[88vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-2xl">{title}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}

function WellMark() {
  return (
    <svg viewBox="0 0 80 48" className="w-24 text-fg/70" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M8 44 V22 C8 10 20 4 40 4 C60 4 72 10 72 22 V44" />
      <path d="M20 44 V26 C20 16 28 12 40 12 C52 12 60 16 60 26 V44" />
      <path d="M32 44 V30 C32 24 36 22 40 22 C44 22 48 24 48 30 V44" />
    </svg>
  );
}
