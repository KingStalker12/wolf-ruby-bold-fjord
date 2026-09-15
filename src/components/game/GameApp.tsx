import { useEffect } from "react";
import { Image, ImageOff } from "lucide-react";
import { CombatScreen } from "./CombatScreen";
import { MapScreen } from "./MapScreen";
import {
  EndScreen,
  EventScreen,
  HowToScreen,
  Overlays,
  PickerScreen,
  RestScreen,
  RewardScreen,
  SelectScreen,
  ShopScreen,
  TitleScreen,
  TopBar,
} from "./Screens";
import { useGame } from "@/lib/game/store";
import { cn } from "@/lib/utils";

function PlainToggle() {
  const plain = useGame((s) => s.meta.plain);
  const togglePlain = useGame((s) => s.togglePlain);
  const screen = useGame((s) => s.screen);
  const inRun = !["title", "select", "howto", "gameover", "victory"].includes(screen);
  return (
    <button
      type="button"
      onClick={togglePlain}
      className={cn(
        "fixed z-50 size-11 rounded-md border border-border bg-elevated/95 text-muted hover:text-fg",
        inRun ? "top-14 right-3" : "top-3 right-3",
      )}
      aria-label={plain ? "Show pictures" : "Hide pictures"}
      title={plain ? "Show pictures" : "Hide pictures"}
    >
      {plain ? <ImageOff className="mx-auto size-4" strokeWidth={1.75} /> : <Image className="mx-auto size-4" strokeWidth={1.75} />}
    </button>
  );
}

export function GameApp() {
  const ready = useGame((s) => s.ready);
  const screen = useGame((s) => s.screen);
  const combat = useGame((s) => s.combat);
  const run = useGame((s) => s.run);
  const reward = useGame((s) => s.reward);
  const event = useGame((s) => s.event);
  const picker = useGame((s) => s.picker);
  const hydrate = useGame((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = (t: number) => {
      const dt = Math.min(0.1, (t - last) / 1000);
      last = t;
      const s = useGame.getState().shake;
      if (s > 0.001) useGame.setState({ shake: Math.max(0, s - dt * 2.4) });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!ready) {
    return (
      <>
        <PlainToggle />
        <TitleScreen />
      </>
    );
  }
  if (screen === "title") {
    return (
      <>
        <PlainToggle />
        <TitleScreen />
      </>
    );
  }
  if (screen === "select") {
    return (
      <>
        <PlainToggle />
        <SelectScreen />
      </>
    );
  }
  if (screen === "howto") {
    return (
      <>
        <PlainToggle />
        <HowToScreen />
      </>
    );
  }
  if (screen === "gameover") {
    return (
      <>
        <PlainToggle />
        <EndScreen win={false} />
      </>
    );
  }
  if (screen === "victory") {
    return (
      <>
        <PlainToggle />
        <EndScreen win />
      </>
    );
  }

  return (
    <div className="min-h-dvh bg-bg text-fg flex flex-col">
      <PlainToggle />
      <TopBar />
      {screen === "map" && <MapScreen />}
      {screen === "combat" && combat && <CombatScreen />}
      {screen === "reward" && reward && <RewardScreen />}
      {screen === "shop" && run?.shop && <ShopScreen />}
      {screen === "rest" && <RestScreen />}
      {screen === "event" && event && <EventScreen />}
      {screen === "picker" && picker && <PickerScreen />}
      <Overlays />
    </div>
  );
}
