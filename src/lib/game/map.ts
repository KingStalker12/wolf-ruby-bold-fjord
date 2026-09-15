import type { MapNode, NodeType } from "./types";
import type { Rng } from "./rng";

const ACT1: NodeType[][] = [
  ["combat", "combat"],
  ["combat", "event", "combat"],
  ["combat", "shop", "combat"],
  ["elite", "elite"],
  ["rest"],
  ["combat", "event", "combat"],
  ["shop", "combat", "event"],
  ["combat", "event", "combat"],
  ["elite", "combat", "shop"],
  ["combat", "event", "shop"],
  ["rest"],
  ["boss"],
];

const ACT2: NodeType[][] = [
  ["combat", "combat", "combat"],
  ["combat", "event", "combat", "shop"],
  ["elite", "combat", "combat"],
  ["combat", "event", "rest"],
  ["shop", "elite", "combat"],
  ["combat", "event", "combat"],
  ["elite", "shop", "combat"],
  ["combat", "event", "combat"],
  ["shop", "elite", "event"],
  ["combat", "combat", "shop"],
  ["rest"],
  ["boss"],
];

export function generateMap(rng: Rng, act = 1): MapNode[] {
  const layout = act >= 2 ? ACT2 : ACT1;
  const prefix = act >= 2 ? "b" : "n";
  const rows: MapNode[][] = layout.map((types, row) =>
    types.map((type, col) => ({
      id: `${prefix}${row}-${col}`,
      row,
      col,
      type,
      next: [],
    })),
  );

  for (let r = 0; r < rows.length - 1; r++) {
    const cur = rows[r]!;
    const nxt = rows[r + 1]!;
    for (let i = 0; i < cur.length; i++) {
      const t = cur.length === 1 ? 0.5 : i / (cur.length - 1);
      const j = Math.round(t * (nxt.length - 1));
      const ids = new Set<string>([nxt[j]!.id]);
      if (nxt[j - 1]) ids.add(nxt[j - 1]!.id);
      if (nxt[j + 1] && ids.size < 2) ids.add(nxt[j + 1]!.id);
      if (rng.chance(0.55) && nxt[j + 1]) ids.add(nxt[j + 1]!.id);
      if (rng.chance(0.4) && nxt[j - 1]) ids.add(nxt[j - 1]!.id);
      cur[i]!.next = [...ids];
    }
    const reached = new Set(cur.flatMap((n) => n.next));
    for (const n of nxt) {
      if (!reached.has(n.id)) {
        const closest = cur.reduce((a, b) =>
          Math.abs(a.col - n.col) < Math.abs(b.col - n.col) ? a : b,
        );
        closest.next.push(n.id);
      }
    }
  }

  return rows.flat();
}

export function nodesByRow(map: MapNode[]): MapNode[][] {
  const max = map.reduce((m, n) => Math.max(m, n.row), 0);
  const rows: MapNode[][] = Array.from({ length: max + 1 }, () => []);
  for (const n of map) rows[n.row]!.push(n);
  for (const row of rows) row.sort((a, b) => a.col - b.col);
  return rows;
}

export function availableNodes(map: MapNode[], currentId: string | null, visited: string[]): MapNode[] {
  if (currentId === null) return map.filter((n) => n.row === 0);
  const cur = map.find((n) => n.id === currentId);
  if (!cur) return [];
  return map.filter((n) => cur.next.includes(n.id) && !visited.includes(n.id));
}

export function nodeById(map: MapNode[], id: string): MapNode | undefined {
  return map.find((n) => n.id === id);
}

export const NODE_LABEL: Record<NodeType, string> = {
  combat: "Rite",
  elite: "Elite",
  event: "Unknown",
  rest: "Rest",
  shop: "Merchant",
  boss: "Warden",
};

export function nodeLabel(type: NodeType, act = 1): string {
  if (type === "boss") return act >= 2 ? "Crown" : "Warden";
  return NODE_LABEL[type];
}
