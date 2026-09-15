import { defOf, cardCost, cardText } from "@/lib/game/cards";
import type { CardInst, CardNumbers } from "@/lib/game/types";
import { cn } from "@/lib/utils";

const TYPE_LABEL = { attack: "Attack", skill: "Skill", power: "Power", status: "Status" } as const;

export function CardView({
  card,
  playable = true,
  selected = false,
  dimmed = false,
  size = "hand",
  price,
  live,
  tone = "none",
  onClick,
}: {
  card: CardInst;
  playable?: boolean;
  selected?: boolean;
  dimmed?: boolean;
  size?: "hand" | "reward" | "mini";
  price?: number;
  live?: CardNumbers;
  tone?: "up" | "down" | "none";
  onClick?: () => void;
}) {
  const d = defOf(card);
  const cost = cardCost(card);
  const compact = size === "mini";
  const reward = size === "reward";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        "relative flex flex-col text-left border transition-transform duration-(--motion-fast) ease-(--ease-out)",
        "bg-surface border-accent/35 text-fg shrink-0",
        compact
          ? "w-[5.5rem] h-[8.25rem] rounded-sm p-1.5"
          : reward
            ? "w-[9.5rem] h-[13.5rem] rounded-lg p-3"
            : "w-[7.75rem] h-[11.5rem] sm:w-[8.5rem] sm:h-[12.5rem] rounded-md p-2.5",
        playable && onClick && "hover:-translate-y-1.5 hover:z-10",
        selected && "ring-2 ring-accent border-accent -translate-y-2 z-10",
        (dimmed || !playable) && "opacity-45",
        d.type === "power" && "border-accent/35",
        d.neutral && "border-muted bg-elevated/80",
        d.type === "status" && "opacity-70",
      )}
    >
      <div className="flex items-start justify-between gap-1">
        <span
          className={cn(
            "flex items-center justify-center rounded-full border border-border bg-elevated font-medium tabular-nums",
            compact ? "size-5 text-[10px]" : "size-6 text-xs",
          )}
        >
          {d.unplayable ? "—" : cost}
        </span>
        <span className={cn("font-display leading-tight text-balance", compact ? "text-[11px]" : "text-sm")}>
          {d.name}
          {card.upgraded ? "+" : ""}
        </span>
      </div>
      <div className={cn("flex-1 flex items-center justify-center", compact ? "py-1" : "py-2")}>
        <Sigil id={d.id} className={compact ? "size-8" : "size-12"} />
      </div>
      <p
        className={cn(
          "leading-snug",
          compact ? "text-[9px] line-clamp-3" : "text-[11px] sm:text-xs",
          tone === "up" && "text-fg",
          tone === "down" && "text-hp",
          tone === "none" && "text-muted",
        )}
      >
        {cardText(card, live)}
      </p>
      <div className="mt-auto pt-1 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.14em] text-subtle">
          {d.neutral ? "Nameless" : TYPE_LABEL[d.type]}
        </span>
        {price !== undefined && <span className="text-[10px] tabular-nums text-fg">{price}g</span>}
      </div>
    </button>
  );
}

function Sigil({ id, className }: { id: string; className?: string }) {
  const common = {
    viewBox: "0 0 48 48",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    "aria-hidden": true as const,
  };
  switch (id) {
    case "strike":
      return (
        <svg {...common}>
          <path d="M10 38 L38 10" />
          <path d="M28 10 H38 V20" />
        </svg>
      );
    case "guard":
      return (
        <svg {...common}>
          <path d="M24 6 L40 14 V26 C40 34 32 40 24 42 C16 40 8 34 8 26 V14 Z" />
        </svg>
      );
    case "brand":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="10" />
          <path d="M24 8 V16 M24 32 V40 M8 24 H16 M32 24 H40" />
        </svg>
      );
    case "dirge":
      return (
        <svg {...common}>
          <path d="M16 38 V14 L32 10 V34" />
          <path d="M16 22 H32" />
        </svg>
      );
    case "fade":
      return (
        <svg {...common} strokeDasharray="3 3">
          <path d="M12 36 C12 20 20 12 24 8 C28 12 36 20 36 36" />
        </svg>
      );
    case "cleave":
      return (
        <svg {...common}>
          <path d="M8 30 L24 10 L40 30" />
          <path d="M12 36 H36" />
        </svg>
      );
    case "twin_cut":
      return (
        <svg {...common}>
          <path d="M14 36 L20 8" />
          <path d="M28 36 L34 8" />
        </svg>
      );
    case "pommel":
      return (
        <svg {...common}>
          <path d="M24 6 V30" />
          <rect x="20" y="30" width="8" height="10" />
        </svg>
      );
    case "iron_wave":
      return (
        <svg {...common}>
          <path d="M6 30 C14 18 20 18 24 28 C28 38 34 38 42 26" />
        </svg>
      );
    case "heavy":
      return (
        <svg {...common}>
          <path d="M16 8 H32 L28 40 H20 Z" />
        </svg>
      );
    case "boomerang":
      return (
        <svg {...common}>
          <path d="M10 28 C10 14 24 10 34 16" />
          <path d="M14 20 C22 8 38 12 40 24" />
        </svg>
      );
    case "shrug":
      return (
        <svg {...common}>
          <path d="M10 28 C16 16 32 16 38 28" />
          <path d="M14 36 H34" />
        </svg>
      );
    case "true_grit":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="14" />
          <path d="M24 14 V24 L30 30" />
        </svg>
      );
    case "acrobatics":
      return (
        <svg {...common}>
          <path d="M8 32 C16 8 32 8 40 32" />
          <circle cx="24" cy="34" r="3" />
        </svg>
      );
    case "clothesline":
      return (
        <svg {...common}>
          <path d="M8 20 H40" />
          <path d="M16 20 V36 M32 20 V36" />
        </svg>
      );
    case "inflame":
      return (
        <svg {...common}>
          <path d="M24 8 C18 20 16 24 16 30 A8 8 0 0 0 32 30 C32 24 30 20 24 8 Z" />
        </svg>
      );
    case "metallicize":
      return (
        <svg {...common}>
          <rect x="12" y="12" width="24" height="24" />
          <rect x="18" y="18" width="12" height="12" />
        </svg>
      );
    case "uppercut":
      return (
        <svg {...common}>
          <path d="M16 40 L24 8 L32 40" />
        </svg>
      );
    case "hemokinesis":
      return (
        <svg {...common}>
          <path d="M24 8 C24 8 12 22 12 30 A12 12 0 0 0 36 30 C36 22 24 8 24 8 Z" />
        </svg>
      );
    case "disarm":
      return (
        <svg {...common}>
          <path d="M10 10 L38 38 M38 10 L10 38" />
        </svg>
      );
    case "battle_trance":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="6" />
          <circle cx="24" cy="24" r="14" strokeDasharray="3 4" />
        </svg>
      );
    case "ghost_armor":
      return (
        <svg {...common} strokeDasharray="3 3">
          <path d="M24 6 L40 14 V26 C40 34 32 40 24 42 C16 40 8 34 8 26 V14 Z" />
        </svg>
      );
    case "bloodletting":
      return (
        <svg {...common}>
          <path d="M24 6 V42 M16 16 H32" />
        </svg>
      );
    case "dropkick":
      return (
        <svg {...common}>
          <path d="M12 36 L24 12 L36 36" />
          <path d="M18 28 H30" />
        </svg>
      );
    case "shockwave":
      return (
        <svg {...common}>
          <path d="M24 24 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" />
          <path d="M10 24 H16 M32 24 H38 M24 10 V16 M24 32 V38" />
        </svg>
      );
    case "entrench":
      return (
        <svg {...common}>
          <path d="M8 32 H40" />
          <path d="M14 32 V18 L24 10 L34 18 V32" />
        </svg>
      );
    case "bludgeon":
      return (
        <svg {...common} strokeWidth={2}>
          <path d="M12 36 L36 12" />
        </svg>
      );
    case "limit_break":
      return (
        <svg {...common}>
          <path d="M10 30 L24 8 L38 30" />
          <path d="M16 38 L24 22 L32 38" />
        </svg>
      );
    case "offering":
      return (
        <svg {...common}>
          <circle cx="24" cy="20" r="8" />
          <path d="M12 40 H36" />
        </svg>
      );
    case "fiend_fire":
      return (
        <svg {...common}>
          <path d="M18 40 C12 28 20 24 18 12 C28 20 22 28 30 40 Z" />
          <path d="M28 40 C26 32 32 28 30 18" />
        </svg>
      );
    case "impervious":
      return (
        <svg {...common}>
          <path d="M24 6 L42 16 V30 C42 38 32 44 24 46 C16 44 6 38 6 30 V16 Z" />
          <path d="M24 16 L34 22 V30 C34 34 28 38 24 39 C20 38 14 34 14 30 V22 Z" />
        </svg>
      );
    case "immolate":
      return (
        <svg {...common}>
          <path d="M16 40 H32 L28 22 C32 18 30 10 24 8 C18 10 16 18 20 22 Z" />
        </svg>
      );
    case "ember":
      return (
        <svg {...common}>
          <path d="M24 8 C18 20 16 28 20 38 H28 C32 28 30 20 24 8 Z" />
        </svg>
      );
    case "rime":
      return (
        <svg {...common}>
          <path d="M24 6 V42 M10 16 L38 32 M38 16 L10 32" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M28 6 L14 26 H24 L20 42 L36 22 H26 Z" />
        </svg>
      );
    case "gloom":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="12" />
          <circle cx="24" cy="24" r="4" />
        </svg>
      );
    case "unleash":
      return (
        <svg {...common}>
          <path d="M8 24 H40 M24 8 V40" />
          <path d="M14 14 L34 34 M34 14 L14 34" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="6" />
          <circle cx="24" cy="24" r="14" />
        </svg>
      );
    case "feed":
      return (
        <svg {...common}>
          <path d="M24 40 L10 22 C8 14 16 10 24 18 C32 10 40 14 38 22 Z" />
        </svg>
      );
    case "twin_call":
      return (
        <svg {...common}>
          <circle cx="16" cy="24" r="8" />
          <circle cx="32" cy="24" r="8" />
        </svg>
      );
    case "kennel":
      return (
        <svg {...common}>
          <path d="M8 40 V22 L24 10 L40 22 V40 Z" />
          <path d="M18 40 V28 H30 V40" />
        </svg>
      );
    case "primeval":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="5" />
          <circle cx="32" cy="16" r="5" />
          <circle cx="16" cy="32" r="5" />
          <circle cx="32" cy="32" r="5" />
        </svg>
      );
    case "ashen_gift":
      return (
        <svg {...common}>
          <path d="M16 32 H32 L24 10 Z" />
          <path d="M12 38 H36" />
        </svg>
      );
    case "pale_coin":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="12" />
          <path d="M24 16 V32 M20 20 H28 M20 28 H28" />
        </svg>
      );
    case "pall":
      return (
        <svg {...common}>
          <path d="M10 36 Q24 8 38 36" />
        </svg>
      );
    case "harrow":
      return (
        <svg {...common}>
          <path d="M12 16 H36 M12 24 H36 M12 32 H28" />
        </svg>
      );
    case "jester":
      return (
        <svg {...common}>
          <path d="M24 10 L30 22 H18 Z" />
          <circle cx="24" cy="32" r="8" />
        </svg>
      );
    case "chime":
      return (
        <svg {...common}>
          <path d="M16 16 H32 L28 34 H20 Z" />
          <path d="M24 34 V40" />
        </svg>
      );
    case "omen":
      return (
        <svg {...common}>
          <circle cx="24" cy="20" r="8" />
          <path d="M12 40 L24 28 L36 40" />
        </svg>
      );
    case "reprise":
      return (
        <svg {...common}>
          <path d="M14 24 H34" />
          <path d="M26 16 L34 24 L26 32" />
        </svg>
      );
    case "last_word":
      return (
        <svg {...common}>
          <path d="M10 38 L24 8 L38 38" />
        </svg>
      );
    case "masquerade":
      return (
        <svg {...common}>
          <path d="M8 24 Q24 10 40 24 Q24 38 8 24" />
          <circle cx="18" cy="24" r="2" />
          <circle cx="30" cy="24" r="2" />
        </svg>
      );
    case "the_toll":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="12" />
          <path d="M24 24 L24 14 M24 24 L32 28" />
        </svg>
      );
    case "gild":
      return (
        <svg {...common}>
          <path d="M24 8 L28 20 H40 L30 28 L34 40 L24 32 L14 40 L18 28 L8 20 H20 Z" />
        </svg>
      );
    case "burial":
      return (
        <svg {...common}>
          <path d="M8 32 H40 V38 H8 Z" />
          <path d="M16 32 V18 H32 V32" />
        </svg>
      );
    case "shield_bash":
      return (
        <svg {...common}>
          <path d="M24 8 L38 16 V28 C38 36 30 40 24 42 C18 40 10 36 10 28 V16 Z" />
          <path d="M18 24 L24 30 L32 18" />
        </svg>
      );
    case "rally":
      return (
        <svg {...common}>
          <path d="M24 8 V40 M16 16 L24 8 L32 16" />
        </svg>
      );
    case "overhead":
      return (
        <svg {...common}>
          <path d="M12 12 H36 L24 40 Z" />
        </svg>
      );
    case "bastion":
      return (
        <svg {...common}>
          <path d="M8 36 H40 V18 L24 8 L8 18 Z" />
          <path d="M24 8 V36" />
        </svg>
      );
    case "groundbreaker":
      return (
        <svg {...common}>
          <path d="M24 6 V28 M16 20 L24 28 L32 20" />
          <path d="M10 36 H38" />
        </svg>
      );
    case "counterfeit":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="10" />
          <path d="M20 24 H28 M24 20 V28" />
        </svg>
      );
    case "backstep":
      return (
        <svg {...common}>
          <path d="M34 14 L14 24 L34 34" />
          <path d="M14 24 H38" />
        </svg>
      );
    case "coin_flip":
      return (
        <svg {...common}>
          <ellipse cx="24" cy="24" rx="8" ry="12" />
          <path d="M24 12 V36" />
        </svg>
      );
    case "vial_dagger":
      return (
        <svg {...common}>
          <path d="M18 40 L24 8 L30 40" />
          <path d="M16 28 H32" />
        </svg>
      );
    case "smoke":
      return (
        <svg {...common}>
          <path d="M10 34 Q18 20 24 28 Q30 36 38 22" />
          <path d="M14 38 Q24 26 34 38" />
        </svg>
      );
    case "prism_pulse":
      return (
        <svg {...common}>
          <path d="M24 8 L38 36 H10 Z" />
          <path d="M24 8 V36" />
        </svg>
      );
    case "neural_reboot":
      return (
        <svg {...common}>
          <path d="M16 16 H32 V32 H16 Z" />
          <path d="M20 24 H28 M24 20 V28" />
        </svg>
      );
    case "voltage":
      return (
        <svg {...common}>
          <path d="M26 6 L14 26 H24 L22 42 L36 20 H26 Z" />
        </svg>
      );
    case "channel_spark":
      return (
        <svg {...common}>
          <path d="M24 8 V20 M16 14 L24 20 L32 14" />
          <path d="M18 28 L30 40 M30 28 L18 40" />
        </svg>
      );
    case "overheat":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="10" />
          <circle cx="24" cy="24" r="4" />
          <path d="M24 6 V10 M24 38 V42 M6 24 H10 M38 24 H42" />
        </svg>
      );
    case "bolt":
    case "thunder":
      return (
        <svg {...common}>
          <path d="M26 6 L14 26 H24 L22 42 L36 20 H26 Z" />
        </svg>
      );
    case "study":
    case "sage":
      return (
        <svg {...common}>
          <path d="M12 10 H36 V38 H12 Z" />
          <path d="M18 16 H30 M18 22 H28 M18 28 H26" />
        </svg>
      );
    case "fireball":
    case "meteor":
      return (
        <svg {...common}>
          <circle cx="24" cy="26" r="10" />
          <path d="M24 8 C28 14 32 16 30 22" />
        </svg>
      );
    case "blizzard":
    case "ice_lance":
      return (
        <svg {...common}>
          <path d="M24 6 V42 M16 14 L24 22 L32 14 M16 34 L24 26 L32 34" />
        </svg>
      );
    case "mana_font":
    case "discharge":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="8" />
          <path d="M24 8 V12 M24 36 V40 M8 24 H12 M36 24 H40" />
        </svg>
      );
    case "arcane_barrier":
      return (
        <svg {...common}>
          <path d="M24 8 L38 16 V28 C38 36 30 40 24 42 C18 40 10 36 10 28 V16 Z" />
        </svg>
      );
    case "bite":
    case "feast":
    case "drain":
    case "exsanguinate":
      return (
        <svg {...common}>
          <path d="M18 14 L24 36 L30 14" />
          <path d="M16 22 H32" />
        </svg>
      );
    case "lash":
    case "crimson_tide":
      return (
        <svg {...common}>
          <path d="M12 34 C20 8 28 8 36 34" />
          <path d="M24 12 V38" />
        </svg>
      );
    case "blood_shield":
      return (
        <svg {...common}>
          <path d="M24 8 L38 16 V28 C38 36 30 40 24 42 C18 40 10 36 10 28 V16 Z" />
          <path d="M24 18 V30 M20 24 H28" />
        </svg>
      );
    case "sanguine":
    case "hunger":
    case "blood_tithe":
    case "crimson_requiem":
    case "blood_rite":
    case "pale_curse":
      return (
        <svg {...common}>
          <path d="M24 10 C18 20 16 26 16 30 C16 36 20 40 24 40 C28 40 32 36 32 30 C32 26 30 20 24 10 Z" />
        </svg>
      );
    case "summon_leech":
      return (
        <svg {...common}>
          <ellipse cx="24" cy="26" rx="12" ry="8" />
          <path d="M12 26 C8 18 16 12 24 16" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="14" y="14" width="20" height="20" />
        </svg>
      );
  }
}
