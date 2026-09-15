import {
  BookOpen,
  Crown,
  Flame,
  Skull,
  Store,
  Swords,
} from "lucide-react";
import { availableNodes, nodeLabel, nodesByRow } from "@/lib/game/map";
import { useGame } from "@/lib/game/store";
import type { NodeType } from "@/lib/game/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ICONS: Record<NodeType, typeof Swords> = {
  combat: Swords,
  elite: Skull,
  event: BookOpen,
  rest: Flame,
  shop: Store,
  boss: Crown,
};

export function MapScreen() {
  const run = useGame((s) => s.run)!;
  const selectNode = useGame((s) => s.selectNode);
  const hint = useGame((s) => s.hint);
  const dismissHint = useGame((s) => s.dismissHint);
  const rows = nodesByRow(run.map);
  const avail = new Set(availableNodes(run.map, run.currentNodeId, run.visited).map((n) => n.id));
  const visited = new Set(run.visited);
  const act = run.act ?? 1;

  return (
    <div className="flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24 relative">
      <div className="mx-auto max-w-lg">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-2">
          {act >= 2 ? "The second seal" : "The descent"}
        </p>
        <p className="text-center text-sm text-subtle tabular-nums mb-6">
          {run.row < 0
            ? act >= 2
              ? "Choose a first landing below"
              : "Choose a first landing"
            : `Act ${act} · Landing ${run.row + 1} of ${rows.length}`}
        </p>
        <div className="relative flex flex-col gap-5">
          <div className="pointer-events-none absolute left-1/2 top-3 bottom-3 w-px bg-border" aria-hidden />
          {rows.map((row, i) => (
            <div key={i} className="relative flex justify-center gap-3 sm:gap-8">
              {row.map((node) => {
                const Icon = ICONS[node.type];
                const isAvail = avail.has(node.id);
                const isDone = visited.has(node.id);
                const isHere = run.currentNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    disabled={!isAvail}
                    onClick={() => selectNode(node.id)}
                    className={cn(
                      "flex flex-col items-center gap-1.5 min-w-[3.5rem] sm:min-w-[4.5rem] group",
                      !isAvail && !isDone && "opacity-30",
                    )}
                  >
                    <span
                      className={cn(
                        "size-12 sm:size-14 rounded-md border flex items-center justify-center transition-transform duration-(--motion-fast) ease-(--ease-out)",
                        isAvail && "jrpg-panel bg-elevated text-fg group-hover:-translate-y-0.5",
                        isHere && "border-fg bg-elevated",
                        isDone && !isHere && "border-border bg-surface text-muted",
                        !isAvail && !isDone && "border-border bg-bg",
                        node.type === "boss" && "size-14 sm:size-16 rounded-lg",
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <span className={cn(
                      "text-[10px] uppercase tracking-[0.14em]",
                      isAvail ? "text-fg" : "text-muted",
                    )}>
                      {nodeLabel(node.type, act)}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
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
            <p className="font-display text-xl">A deeper well</p>
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