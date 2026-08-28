import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Store, c as Shield, d as Flame, f as Crown, h as ArrowDown, i as Swords, l as Layers, m as ArrowUp, n as Volume2, o as Sparkles, p as BookOpen, s as Skull, t as VolumeX, u as Heart } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CAcr5k_V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CARDS = [
	{
		id: "strike",
		name: "Strike",
		type: "attack",
		rarity: "starter",
		cost: 1,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage.`,
		numbers: (up) => ({ damage: up ? 9 : 6 })
	},
	{
		id: "guard",
		name: "Guard",
		type: "skill",
		rarity: "starter",
		cost: 1,
		target: "self",
		text: (n) => `Gain ${n.block} Block.`,
		numbers: (up) => ({ block: up ? 8 : 5 })
	},
	{
		id: "brand",
		name: "Brand",
		type: "attack",
		rarity: "starter",
		cost: 2,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.vulnerable} Vulnerable.`,
		numbers: (up) => ({
			damage: up ? 10 : 8,
			vulnerable: up ? 3 : 2
		})
	},
	{
		id: "cleave",
		name: "Cleave",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "all",
		text: (n) => `Deal ${n.damage} damage to ALL enemies.`,
		numbers: (up) => ({ damage: up ? 11 : 8 })
	},
	{
		id: "twin_cut",
		name: "Twin Cut",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage twice.`,
		numbers: (up) => ({
			damage: up ? 6 : 4,
			hits: 2
		})
	},
	{
		id: "pommel",
		name: "Pommel",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage. Draw ${n.draw}.`,
		numbers: (up) => ({
			damage: up ? 10 : 9,
			draw: up ? 2 : 1
		})
	},
	{
		id: "iron_wave",
		name: "Iron Wave",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		text: (n) => `Gain ${n.block} Block. Deal ${n.damage} damage.`,
		numbers: (up) => ({
			block: up ? 7 : 5,
			damage: up ? 7 : 5
		})
	},
	{
		id: "heavy",
		name: "Heavy Blow",
		type: "attack",
		rarity: "common",
		cost: 2,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage.`,
		numbers: (up) => ({ damage: up ? 18 : 14 })
	},
	{
		id: "boomerang",
		name: "Bone Fan",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage ${n.hits} times.`,
		numbers: (up) => ({
			damage: up ? 4 : 3,
			hits: 3
		})
	},
	{
		id: "shrug",
		name: "Shrug It Off",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		text: (n) => `Gain ${n.block} Block. Draw 1.`,
		numbers: (up) => ({
			block: up ? 11 : 8,
			draw: 1
		})
	},
	{
		id: "true_grit",
		name: "True Grit",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		special: "trueGrit",
		text: (n) => `Gain ${n.block} Block. Exhaust a random card in your hand.`,
		numbers: (up) => ({ block: up ? 9 : 7 })
	},
	{
		id: "acrobatics",
		name: "Acrobatics",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "none",
		special: "acrobatics",
		text: (n) => `Draw ${n.draw}. Discard a random card.`,
		numbers: (up) => ({ draw: up ? 4 : 3 })
	},
	{
		id: "clothesline",
		name: "Clothesline",
		type: "attack",
		rarity: "common",
		cost: 2,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.weak} Weak.`,
		numbers: (up) => ({
			damage: up ? 14 : 12,
			weak: 2
		})
	},
	{
		id: "inflame",
		name: "Inflame",
		type: "power",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		exhaust: true,
		text: (n) => `Gain ${n.strength} Strength.`,
		numbers: (up) => ({ strength: up ? 3 : 2 })
	},
	{
		id: "metallicize",
		name: "Metallicize",
		type: "power",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		exhaust: true,
		text: (n) => `At the start of your turn, gain ${n.metallicize} Block.`,
		numbers: (up) => ({ metallicize: up ? 4 : 3 })
	},
	{
		id: "uppercut",
		name: "Uppercut",
		type: "attack",
		rarity: "uncommon",
		cost: 2,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.weak} Weak and ${n.vulnerable} Vulnerable.`,
		numbers: (up) => ({
			damage: 13,
			weak: up ? 2 : 1,
			vulnerable: up ? 2 : 1
		})
	},
	{
		id: "hemokinesis",
		name: "Hemokinesis",
		type: "attack",
		rarity: "uncommon",
		cost: 1,
		target: "enemy",
		special: "hemokinesis",
		text: (n) => `Lose ${n.hpLoss} HP. Deal ${n.damage} damage.`,
		numbers: (up) => ({
			hpLoss: 2,
			damage: up ? 20 : 15
		})
	},
	{
		id: "disarm",
		name: "Disarm",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "enemy",
		special: "disarm",
		exhaust: true,
		text: (n) => `Enemy loses ${Math.abs(n.strength ?? 0)} Strength. Exhaust.`,
		numbers: (up) => ({ strength: up ? -3 : -2 })
	},
	{
		id: "battle_trance",
		name: "Battle Trance",
		type: "skill",
		rarity: "uncommon",
		cost: 0,
		target: "none",
		special: "battleTrance",
		text: (n) => `Draw ${n.draw}. You cannot draw additional cards this turn.`,
		numbers: (up) => ({ draw: up ? 4 : 3 })
	},
	{
		id: "ghost_armor",
		name: "Ghost Armor",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		ethereal: true,
		text: (n) => `Gain ${n.block} Block. Ethereal.`,
		numbers: (up) => ({ block: up ? 13 : 10 })
	},
	{
		id: "bloodletting",
		name: "Bloodletting",
		type: "skill",
		rarity: "uncommon",
		cost: 0,
		target: "self",
		special: "bloodletting",
		text: (n) => `Lose ${n.hpLoss} HP. Gain ${n.energy} Energy.`,
		numbers: (up) => ({
			hpLoss: 3,
			energy: up ? 3 : 2
		})
	},
	{
		id: "dropkick",
		name: "Dropkick",
		type: "attack",
		rarity: "uncommon",
		cost: 1,
		target: "enemy",
		special: "dropkick",
		text: (n) => `Deal ${n.damage} damage. If the enemy is Vulnerable, gain 1 Energy and draw 1.`,
		numbers: (up) => ({ damage: up ? 8 : 5 })
	},
	{
		id: "shockwave",
		name: "Shockwave",
		type: "skill",
		rarity: "uncommon",
		cost: 2,
		target: "all",
		exhaust: true,
		text: (n) => `Apply ${n.weak} Weak to ALL enemies. Exhaust.`,
		numbers: (up) => ({ weak: up ? 5 : 3 })
	},
	{
		id: "entrench",
		name: "Entrench",
		type: "skill",
		rarity: "uncommon",
		cost: 2,
		target: "self",
		special: "entrench",
		text: () => "Double your Block.",
		numbers: () => ({})
	},
	{
		id: "bludgeon",
		name: "Bludgeon",
		type: "attack",
		rarity: "rare",
		cost: 3,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage.`,
		numbers: (up) => ({ damage: up ? 42 : 32 })
	},
	{
		id: "limit_break",
		name: "Limit Break",
		type: "skill",
		rarity: "rare",
		cost: 1,
		target: "self",
		special: "limitBreak",
		exhaust: true,
		text: () => "Double your Strength.",
		numbers: () => ({})
	},
	{
		id: "offering",
		name: "Offering",
		type: "skill",
		rarity: "rare",
		cost: 0,
		target: "self",
		special: "offering",
		exhaust: true,
		text: (n) => `Lose ${n.hpLoss} HP. Gain ${n.energy} Energy. Draw ${n.draw}. Exhaust.`,
		numbers: (up) => ({
			hpLoss: 6,
			energy: 2,
			draw: up ? 5 : 3
		})
	},
	{
		id: "fiend_fire",
		name: "Fiend Fire",
		type: "attack",
		rarity: "rare",
		cost: 2,
		target: "enemy",
		special: "fiendFire",
		exhaust: true,
		text: (n) => `Exhaust your hand. Deal ${n.damage} damage for each card exhausted. Exhaust.`,
		numbers: (up) => ({ damage: up ? 10 : 7 })
	},
	{
		id: "impervious",
		name: "Impervious",
		type: "skill",
		rarity: "rare",
		cost: 2,
		target: "self",
		exhaust: true,
		text: (n) => `Gain ${n.block} Block. Exhaust.`,
		numbers: (up) => ({ block: up ? 40 : 30 })
	},
	{
		id: "immolate",
		name: "Immolate",
		type: "attack",
		rarity: "rare",
		cost: 2,
		target: "all",
		special: "immolate",
		exhaust: true,
		text: (n) => `Deal ${n.damage} damage to ALL enemies. Add a Wound to your discard. Exhaust.`,
		numbers: (up) => ({ damage: up ? 28 : 21 })
	},
	{
		id: "wound",
		name: "Wound",
		type: "status",
		rarity: "status",
		cost: 0,
		target: "none",
		unplayable: true,
		text: () => "Unplayable.",
		numbers: () => ({})
	}
];
var CARD_BY_ID = Object.fromEntries(CARDS.map((c) => [c.id, c]));
function defOf(card) {
	const d = CARD_BY_ID[card.defId];
	if (!d) throw new Error(`Unknown card ${card.defId}`);
	return d;
}
function cardText(card, nums) {
	const d = defOf(card);
	const n = nums ?? d.numbers(card.upgraded);
	if (d.id === "limit_break") return `Double your Strength.${card.upgraded ? "" : " Exhaust."}`;
	return d.text(n);
}
function cardCost(card) {
	const d = defOf(card);
	if (card.upgraded && d.upgradeCost !== void 0) return d.upgradeCost;
	return d.cost;
}
var seq = 1;
function mintCard(defId, upgraded = false, uid) {
	return {
		uid: uid ?? `c${seq++}`,
		defId,
		upgraded
	};
}
function setCardSeq(n) {
	seq = n;
}
function getCardSeq() {
	return seq;
}
function starterDeck() {
	const d = [];
	for (let i = 0; i < 5; i++) d.push(mintCard("strike"));
	for (let i = 0; i < 4; i++) d.push(mintCard("guard"));
	d.push(mintCard("brand"));
	return d;
}
var REWARD_POOL = CARDS.filter((c) => c.rarity === "common" || c.rarity === "uncommon" || c.rarity === "rare");
function rollRarity(rng, bias) {
	const r = rng.next();
	if (bias === "boss") return r < .55 ? "rare" : "uncommon";
	if (bias === "elite") {
		if (r < .1) return "rare";
		if (r < .55) return "uncommon";
		return "common";
	}
	if (r < .03) return "rare";
	if (r < .4) return "uncommon";
	return "common";
}
function rollCardRewards(rng, bias, count = 3) {
	const out = [];
	const used = /* @__PURE__ */ new Set();
	let guard = 0;
	while (out.length < count && guard++ < 40) {
		const rarity = rollRarity(rng, bias);
		const pool = REWARD_POOL.filter((c) => c.rarity === rarity && !used.has(c.id));
		const fallback = REWARD_POOL.filter((c) => !used.has(c.id));
		const pick = (pool.length ? pool : fallback)[0] ? rng.pick(pool.length ? pool : fallback) : null;
		if (!pick) break;
		used.add(pick.id);
		out.push(mintCard(pick.id));
	}
	return out;
}
function priceFor(rarity, rng) {
	if (rarity === "rare") return rng.int(135, 165);
	if (rarity === "uncommon") return rng.int(68, 82);
	return rng.int(45, 55);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TYPE_LABEL = {
	attack: "Attack",
	skill: "Skill",
	power: "Power",
	status: "Status"
};
function CardView({ card, playable = true, selected = false, dimmed = false, size = "hand", price, live, tone = "none", onClick }) {
	const d = defOf(card);
	const cost = cardCost(card);
	const compact = size === "mini";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		disabled: !onClick,
		className: cn("relative flex flex-col text-left border transition-transform duration-(--motion-fast) ease-(--ease-out)", "bg-surface border-border text-fg shrink-0", compact ? "w-[5.5rem] h-[8.25rem] rounded-sm p-1.5" : size === "reward" ? "w-[9.5rem] h-[13.5rem] rounded-lg p-3" : "w-[7.75rem] h-[11.5rem] sm:w-[8.5rem] sm:h-[12.5rem] rounded-md p-2.5", playable && onClick && "hover:-translate-y-1.5 hover:z-10", selected && "ring-2 ring-accent border-accent -translate-y-2 z-10", (dimmed || !playable) && "opacity-45", d.type === "power" && "border-accent/35", d.type === "status" && "opacity-70"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("flex items-center justify-center rounded-full border border-border bg-elevated font-medium tabular-nums", compact ? "size-5 text-[10px]" : "size-6 text-xs"),
					children: d.unplayable ? "—" : cost
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("font-display leading-tight text-balance", compact ? "text-[11px]" : "text-sm"),
					children: [d.name, card.upgraded ? "+" : ""]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("flex-1 flex items-center justify-center", compact ? "py-1" : "py-2"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sigil, {
					id: d.id,
					className: compact ? "size-8" : "size-12"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("leading-snug", compact ? "text-[9px] line-clamp-3" : "text-[11px] sm:text-xs", tone === "up" && "text-fg", tone === "down" && "text-hp", tone === "none" && "text-muted"),
				children: cardText(card, live)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto pt-1 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] uppercase tracking-[0.14em] text-subtle",
					children: TYPE_LABEL[d.type]
				}), price !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[10px] tabular-nums text-fg",
					children: [price, "g"]
				})]
			})
		]
	});
}
function Sigil({ id, className }) {
	const common = {
		viewBox: "0 0 48 48",
		className,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.25,
		"aria-hidden": true
	};
	switch (id) {
		case "strike": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 38 L38 10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 10 H38 V20" })]
		});
		case "guard": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 L40 14 V26 C40 34 32 40 24 42 C16 40 8 34 8 26 V14 Z" })
		});
		case "brand": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "10"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 V16 M24 32 V40 M8 24 H16 M32 24 H40" })]
		});
		case "cleave": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 30 L24 10 L40 30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 36 H36" })]
		});
		case "twin_cut": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 36 L20 8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 36 L34 8" })]
		});
		case "pommel": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 V30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20",
				y: "30",
				width: "8",
				height: "10"
			})]
		});
		case "iron_wave": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 30 C14 18 20 18 24 28 C28 38 34 38 42 26" })
		});
		case "heavy": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8 H32 L28 40 H20 Z" })
		});
		case "boomerang": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 28 C10 14 24 10 34 16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 20 C22 8 38 12 40 24" })]
		});
		case "shrug": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 28 C16 16 32 16 38 28" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 36 H34" })]
		});
		case "true_grit": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "14"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 14 V24 L30 30" })]
		});
		case "acrobatics": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 32 C16 8 32 8 40 32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "34",
				r: "3"
			})]
		});
		case "clothesline": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 20 H40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 20 V36 M32 20 V36" })]
		});
		case "inflame": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 C18 20 16 24 16 30 A8 8 0 0 0 32 30 C32 24 30 20 24 8 Z" })
		});
		case "metallicize": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "12",
				width: "24",
				height: "24"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "18",
				width: "12",
				height: "12"
			})]
		});
		case "uppercut": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 40 L24 8 L32 40" })
		});
		case "hemokinesis": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 C24 8 12 22 12 30 A12 12 0 0 0 36 30 C36 22 24 8 24 8 Z" })
		});
		case "disarm": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 10 L38 38 M38 10 L10 38" })
		});
		case "battle_trance": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "6"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "14",
				strokeDasharray: "3 4"
			})]
		});
		case "ghost_armor": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			strokeDasharray: "3 3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 L40 14 V26 C40 34 32 40 24 42 C16 40 8 34 8 26 V14 Z" })
		});
		case "bloodletting": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 V42 M16 16 H32" })
		});
		case "dropkick": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 36 L24 12 L36 36" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 28 H30" })]
		});
		case "shockwave": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 24 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 24 H16 M32 24 H38 M24 10 V16 M24 32 V38" })]
		});
		case "entrench": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 32 H40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 32 V18 L24 10 L34 18 V32" })]
		});
		case "bludgeon": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			strokeWidth: 2,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 36 L36 12" })
		});
		case "limit_break": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 30 L24 8 L38 30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 38 L24 22 L32 38" })]
		});
		case "offering": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "20",
				r: "8"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 40 H36" })]
		});
		case "fiend_fire": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 40 C12 28 20 24 18 12 C28 20 22 28 30 40 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 40 C26 32 32 28 30 18" })]
		});
		case "impervious": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 L42 16 V30 C42 38 32 44 24 46 C16 44 6 38 6 30 V16 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 16 L34 22 V30 C34 34 28 38 24 39 C20 38 14 34 14 30 V22 Z" })]
		});
		case "immolate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 40 H32 L28 22 C32 18 30 10 24 8 C18 10 16 18 20 22 Z" })
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "14",
				width: "20",
				height: "20"
			})
		});
	}
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-opacity duration-(--motion-quick) ease-(--ease-out) select-none disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "border border-border bg-surface text-fg hover:bg-elevated",
			ghost: "text-muted hover:text-fg",
			danger: "border border-hp/40 text-hp hover:bg-hp/10"
		},
		size: {
			sm: "h-10 min-h-10 px-3 text-sm rounded-sm",
			md: "h-11 min-h-11 px-4 text-sm rounded-md",
			lg: "h-12 min-h-12 px-6 text-base rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var ENEMY_BY_ID = Object.fromEntries([
	{
		id: "mite",
		name: "Tomb Mite",
		hp: [16, 20],
		pattern: [
			{
				kind: "attack",
				dmg: 6
			},
			{
				kind: "attack",
				dmg: 5
			},
			{
				kind: "defend",
				block: 5
			}
		]
	},
	{
		id: "acolyte",
		name: "Acolyte",
		hp: [24, 28],
		pattern: [
			{
				kind: "debuff",
				weak: 2
			},
			{
				kind: "attack",
				dmg: 8
			},
			{
				kind: "attack",
				dmg: 7
			}
		]
	},
	{
		id: "archer",
		name: "Bone Archer",
		hp: [22, 26],
		pattern: [
			{
				kind: "attack",
				dmg: 4,
				hits: 2
			},
			{
				kind: "attack",
				dmg: 10
			},
			{
				kind: "defend",
				block: 6
			}
		]
	},
	{
		id: "wraith",
		name: "Soot Wraith",
		hp: [30, 36],
		pattern: [
			{
				kind: "debuff",
				vulnerable: 2
			},
			{
				kind: "attack",
				dmg: 11
			},
			{
				kind: "attackDefend",
				dmg: 7,
				block: 7
			}
		]
	},
	{
		id: "jaw",
		name: "Ossuary Beast",
		hp: [38, 44],
		pattern: [
			{
				kind: "buff",
				strength: 2,
				block: 6
			},
			{
				kind: "attack",
				dmg: 12
			},
			{
				kind: "attack",
				dmg: 9
			}
		]
	},
	{
		id: "sentinel",
		name: "Gilded Sentinel",
		hp: [58, 64],
		pattern: [
			{
				kind: "attack",
				dmg: 12
			},
			{
				kind: "defend",
				block: 16
			},
			{
				kind: "buff",
				strength: 3,
				block: 8
			},
			{
				kind: "attack",
				dmg: 16
			}
		]
	},
	{
		id: "priest",
		name: "Hex Priest",
		hp: [52, 58],
		pattern: [
			{
				kind: "debuff",
				weak: 2,
				vulnerable: 2
			},
			{
				kind: "attack",
				dmg: 14
			},
			{
				kind: "attack",
				dmg: 6,
				hits: 2
			},
			{
				kind: "buff",
				strength: 2
			}
		]
	},
	{
		id: "warden",
		name: "The Pale Warden",
		hp: [118, 126],
		pattern: [
			{
				kind: "attack",
				dmg: 8,
				hits: 2
			},
			{
				kind: "buff",
				strength: 2,
				block: 14
			},
			{
				kind: "attack",
				dmg: 22
			},
			{
				kind: "debuff",
				weak: 2,
				vulnerable: 2
			},
			{
				kind: "attack",
				dmg: 7,
				hits: 3
			}
		]
	}
].map((e) => [e.id, e]));
function scaleIntent(intent, row) {
	const extra = Math.floor(Math.max(0, row) / 3);
	if (intent.kind === "attack") return {
		...intent,
		dmg: intent.dmg + extra
	};
	if (intent.kind === "attackDefend") return {
		...intent,
		dmg: intent.dmg + extra
	};
	return intent;
}
function spawnEnemy(defId, rng, row, slot) {
	const def = ENEMY_BY_ID[defId];
	if (!def) throw new Error(`Unknown enemy ${defId}`);
	const hp = rng.int(def.hp[0], def.hp[1]) + row * 2;
	const intent = scaleIntent(def.pattern[0], row);
	return {
		id: `${defId}-${slot}`,
		defId,
		name: def.name,
		hp,
		maxHp: hp,
		block: 0,
		strength: 0,
		weak: 0,
		vulnerable: 0,
		patternIndex: 0,
		intent
	};
}
function nextIntent(enemy, row) {
	const def = ENEMY_BY_ID[enemy.defId];
	const i = (enemy.patternIndex + 1) % def.pattern.length;
	enemy.patternIndex = i;
	return scaleIntent(def.pattern[i], row);
}
function rollEncounter(type, rng, row) {
	if (type === "boss") return [spawnEnemy("warden", rng, row, 0)];
	if (type === "elite") return rng.chance(.5) ? [spawnEnemy("sentinel", rng, row, 0)] : [spawnEnemy("priest", rng, row, 0)];
	const roll = rng.next();
	if (roll < .28) return [spawnEnemy("mite", rng, row, 0), spawnEnemy("mite", rng, row, 1)];
	if (roll < .46) return [spawnEnemy("mite", rng, row, 0), spawnEnemy("acolyte", rng, row, 1)];
	if (roll < .62) return [spawnEnemy("acolyte", rng, row, 0)];
	if (roll < .78) return [spawnEnemy("archer", rng, row, 0)];
	if (roll < .9) return [spawnEnemy("wraith", rng, row, 0)];
	return [spawnEnemy("jaw", rng, row, 0)];
}
function intentLabel(intent, strength, weak = 0, targetVuln = 0) {
	const dmg = (n) => {
		let d = n + strength;
		if (weak > 0) d = Math.floor(d * .75);
		if (targetVuln > 0) d = Math.floor(d * 1.5);
		return Math.max(0, d);
	};
	switch (intent.kind) {
		case "attack": {
			const hits = intent.hits ?? 1;
			return hits > 1 ? `${dmg(intent.dmg)}×${hits}` : `${dmg(intent.dmg)}`;
		}
		case "defend": return `${intent.block}`;
		case "buff": return intent.block ? `+${intent.strength} / ${intent.block}` : `+${intent.strength}`;
		case "debuff": return "Hex";
		case "attackDefend": return `${dmg(intent.dmg)} · ${intent.block}`;
	}
}
function intentKind(intent) {
	if (intent.kind === "attack") return "attack";
	if (intent.kind === "defend") return "defend";
	if (intent.kind === "buff") return "buff";
	if (intent.kind === "debuff") return "debuff";
	return "mixed";
}
var ROWS = [
	["combat", "combat"],
	[
		"combat",
		"event",
		"combat"
	],
	[
		"combat",
		"shop",
		"combat"
	],
	["elite", "elite"],
	["rest"],
	[
		"combat",
		"event",
		"combat"
	],
	[
		"shop",
		"combat",
		"event"
	],
	["rest"],
	["boss"]
];
function generateMap(rng) {
	const rows = ROWS.map((types, row) => types.map((type, col) => ({
		id: `n${row}-${col}`,
		row,
		col,
		type,
		next: []
	})));
	for (let r = 0; r < rows.length - 1; r++) {
		const cur = rows[r];
		const nxt = rows[r + 1];
		for (let i = 0; i < cur.length; i++) {
			const t = cur.length === 1 ? .5 : i / (cur.length - 1);
			const j = Math.round(t * (nxt.length - 1));
			const ids = /* @__PURE__ */ new Set([nxt[j].id]);
			if (nxt[j - 1]) ids.add(nxt[j - 1].id);
			if (nxt[j + 1] && ids.size < 2) ids.add(nxt[j + 1].id);
			if (rng.chance(.35) && nxt[j + 1]) ids.add(nxt[j + 1].id);
			if (rng.chance(.35) && nxt[j - 1]) ids.add(nxt[j - 1].id);
			cur[i].next = [...ids];
		}
		const reached = new Set(cur.flatMap((n) => n.next));
		for (const n of nxt) if (!reached.has(n.id)) cur.reduce((a, b) => Math.abs(a.col - n.col) < Math.abs(b.col - n.col) ? a : b).next.push(n.id);
	}
	return rows.flat();
}
function nodesByRow(map) {
	const max = map.reduce((m, n) => Math.max(m, n.row), 0);
	const rows = Array.from({ length: max + 1 }, () => []);
	for (const n of map) rows[n.row].push(n);
	for (const row of rows) row.sort((a, b) => a.col - b.col);
	return rows;
}
function availableNodes(map, currentId, visited) {
	if (currentId === null) return map.filter((n) => n.row === 0);
	const cur = map.find((n) => n.id === currentId);
	if (!cur) return [];
	return map.filter((n) => cur.next.includes(n.id) && !visited.includes(n.id));
}
function nodeById(map, id) {
	return map.find((n) => n.id === id);
}
var NODE_LABEL = {
	combat: "Rite",
	elite: "Elite",
	event: "Unknown",
	rest: "Rest",
	shop: "Merchant",
	boss: "Warden"
};
var RELICS = [
	{
		id: "burning_blood",
		name: "Burning Blood",
		text: "Heal 6 HP at the end of combat.",
		rarity: "starter"
	},
	{
		id: "anchor",
		name: "Anchor",
		text: "Start each combat with 10 Block.",
		rarity: "common"
	},
	{
		id: "vajra",
		name: "Vajra",
		text: "Start each combat with 1 Strength.",
		rarity: "common"
	},
	{
		id: "bag",
		name: "Bag of Preparation",
		text: "Draw 2 additional cards on turn 1.",
		rarity: "common"
	},
	{
		id: "lantern",
		name: "Lantern",
		text: "Gain 1 Energy on turn 1.",
		rarity: "common"
	},
	{
		id: "blood_vial",
		name: "Blood Vial",
		text: "Heal 2 HP at the start of combat.",
		rarity: "common"
	},
	{
		id: "bronze_scales",
		name: "Bronze Scales",
		text: "When you are attacked, deal 3 damage back.",
		rarity: "common"
	},
	{
		id: "orichalcum",
		name: "Orichalcum",
		text: "If you have no Block at the end of your turn, gain 6 Block.",
		rarity: "common"
	},
	{
		id: "red_skull",
		name: "Red Skull",
		text: "While at or below 50% HP, you have 3 additional Strength.",
		rarity: "uncommon"
	},
	{
		id: "pen_nib",
		name: "Pen Nib",
		text: "Every 10th Attack you play deals double damage.",
		rarity: "uncommon"
	},
	{
		id: "stone_calendar",
		name: "Stone Calendar",
		text: "On turn 7, deal 52 damage to ALL enemies.",
		rarity: "uncommon"
	},
	{
		id: "eternal_feather",
		name: "Eternal Feather",
		text: "Heal 3 HP for every 5 cards in your deck when you rest.",
		rarity: "uncommon"
	},
	{
		id: "anchor_ring",
		name: "Ring of the Well",
		text: "Raise your Max HP by 8.",
		rarity: "rare"
	},
	{
		id: "philosopher",
		name: "Philosopher's Stone",
		text: "Gain 1 Energy at the start of each turn. ALL enemies start with 1 Strength.",
		rarity: "rare"
	}
];
var RELIC_BY_ID = Object.fromEntries(RELICS.map((r) => [r.id, r]));
var POTIONS = [
	{
		id: "blood",
		name: "Blood Potion",
		text: "Heal 20% of Max HP.",
		target: "self"
	},
	{
		id: "block",
		name: "Block Potion",
		text: "Gain 12 Block.",
		target: "self"
	},
	{
		id: "fire",
		name: "Fire Potion",
		text: "Deal 20 damage.",
		target: "enemy"
	},
	{
		id: "str",
		name: "Strength Potion",
		text: "Gain 2 Strength.",
		target: "self"
	},
	{
		id: "energy",
		name: "Energy Potion",
		text: "Gain 2 Energy.",
		target: "self"
	},
	{
		id: "swift",
		name: "Swift Potion",
		text: "Draw 3 cards.",
		target: "self"
	},
	{
		id: "fairy",
		name: "Fairy in a Bottle",
		text: "When you would die, heal to 30% HP instead.",
		target: "none"
	}
];
var POTION_BY_ID = Object.fromEntries(POTIONS.map((p) => [p.id, p]));
var COMBAT_RELICS = RELICS.filter((r) => r.rarity === "common" || r.rarity === "uncommon" || r.rarity === "rare");
function rollRelic(rng, owned) {
	const pool = COMBAT_RELICS.filter((r) => !owned.includes(r.id));
	if (!pool.length) return null;
	return rng.pick(pool).id;
}
function rollRelicOffers(rng, owned, n) {
	return rng.shuffle(COMBAT_RELICS.filter((r) => !owned.includes(r.id)).slice()).slice(0, n).map((r) => r.id);
}
function rollPotion(rng) {
	return rng.pick(POTIONS.filter((p) => p.id !== "fairy").concat(POTIONS)).id;
}
function relicPrice(id, rng) {
	const r = RELIC_BY_ID[id];
	if (r?.rarity === "rare") return rng.int(160, 190);
	if (r?.rarity === "uncommon") return rng.int(140, 165);
	return rng.int(120, 145);
}
/** Mulberry32 — small, seedable, serializable. */
var Rng = class Rng {
	s;
	constructor(seed) {
		this.s = seed >>> 0;
	}
	next() {
		this.s = this.s + 1831565813 >>> 0;
		let t = this.s;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	}
	int(min, max) {
		return min + Math.floor(this.next() * (max - min + 1));
	}
	pick(arr) {
		return arr[Math.floor(this.next() * arr.length)];
	}
	chance(p) {
		return this.next() < p;
	}
	/** Unbiased Fisher–Yates. Mutates and returns the same array. */
	shuffle(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(this.next() * (i + 1));
			const tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
		}
		return arr;
	}
	getState() {
		return this.s;
	}
	static fromState(state) {
		const r = new Rng(0);
		r.s = state >>> 0;
		return r;
	}
};
var HAND_LIMIT = 10;
var BASE_ENERGY = 3;
var BASE_HP = 72;
function hasRelic(run, id) {
	return run.relics.includes(id);
}
function skullStr(run, combat) {
	if (!hasRelic(run, "red_skull")) return 0;
	return run.hp <= run.maxHp * .5 ? 3 : 0;
}
function playerStr(run, combat) {
	return combat.strength + skullStr(run, combat);
}
function calcDamage(base, strength, weak, targetVuln, doubleHit) {
	let d = base + strength;
	if (weak > 0) d = Math.floor(d * .75);
	if (doubleHit) d *= 2;
	if (targetVuln > 0) d = Math.floor(d * 1.5);
	return Math.max(0, d);
}
function calcBlock(base, dex, frail) {
	let b = base + dex;
	if (frail > 0) b = Math.floor(b * .75);
	return Math.max(0, b);
}
function applyHpDamage(hp, block, amount) {
	let left = amount;
	let b = block;
	if (b > 0) {
		const used = Math.min(b, left);
		b -= used;
		left -= used;
	}
	const taken = left;
	return {
		hp: Math.max(0, hp - left),
		block: b,
		taken
	};
}
function cloneCard(c) {
	return { ...c };
}
function shuffleDraw(combat, rng) {
	if (combat.drawPile.length === 0 && combat.discardPile.length > 0) {
		combat.drawPile = rng.shuffle(combat.discardPile);
		combat.discardPile = [];
	}
}
function drawCards(combat, rng, n) {
	if (combat.noDraw) return;
	for (let i = 0; i < n; i++) {
		if (combat.hand.length >= HAND_LIMIT) break;
		shuffleDraw(combat, rng);
		const c = combat.drawPile.shift();
		if (!c) break;
		combat.hand.push(c);
	}
}
function newRun(seed) {
	const s = seed ?? (Date.now() ^ Math.floor(Math.random() * 4294967295)) >>> 0;
	const rng = new Rng(s);
	setCardSeq(1);
	const deck = starterDeck();
	const map = generateMap(rng);
	return {
		run: {
			seed: s,
			rngState: rng.getState(),
			gold: 99,
			hp: BASE_HP,
			maxHp: BASE_HP,
			deck,
			relics: ["burning_blood"],
			potions: [
				null,
				null,
				null
			],
			map,
			currentNodeId: null,
			visited: [],
			row: -1,
			cardSeq: getCardSeq(),
			shop: null,
			floorKills: 0,
			damageDealt: 0
		},
		rng
	};
}
function restoreRng(run) {
	setCardSeq(run.cardSeq);
	return Rng.fromState(run.rngState);
}
function persistRng(run, rng) {
	run.rngState = rng.getState();
	run.cardSeq = getCardSeq();
}
function startCombat(run, rng, type) {
	const enemies = rollEncounter(type, rng, Math.max(0, run.row));
	if (hasRelic(run, "philosopher")) for (const e of enemies) e.strength += 1;
	const copies = rng.shuffle(run.deck.map(cloneCard));
	const combat = {
		enemies,
		phase: "player",
		turn: 1,
		energy: BASE_ENERGY + (hasRelic(run, "lantern") ? 1 : 0) + (hasRelic(run, "philosopher") ? 1 : 0),
		maxEnergy: BASE_ENERGY + (hasRelic(run, "philosopher") ? 1 : 0),
		block: hasRelic(run, "anchor") ? 10 : 0,
		strength: hasRelic(run, "vajra") ? 1 : 0,
		dexterity: 0,
		weak: 0,
		vulnerable: 0,
		frail: 0,
		metallicize: 0,
		noDraw: false,
		hand: [],
		drawPile: copies,
		discardPile: [],
		exhaustPile: [],
		targetingUid: null,
		targetingPotion: null,
		attacksPlayed: 0,
		log: "The chamber answers."
	};
	drawCards(combat, rng, 5 + (hasRelic(run, "bag") ? 2 : 0));
	if (hasRelic(run, "blood_vial")) run.hp = Math.min(run.maxHp, run.hp + 2);
	return combat;
}
function canPlay(run, combat, card) {
	if (combat.phase !== "player") return false;
	const d = defOf(card);
	if (d.unplayable) return false;
	if (cardCost(card) > combat.energy) return false;
	const living = combat.enemies.filter((e) => e.hp > 0);
	if ((d.target === "enemy" || d.target === "all") && living.length === 0) return false;
	return true;
}
function hitEnemy(run, combat, enemy, amount, killed, damageTo) {
	const res = applyHpDamage(enemy.hp, enemy.block, amount);
	enemy.hp = res.hp;
	enemy.block = res.block;
	run.damageDealt += amount;
	damageTo.push({
		id: enemy.id,
		amount
	});
	if (enemy.hp <= 0) {
		enemy.hp = 0;
		enemy.block = 0;
		killed.push(enemy.id);
		run.floorKills += 1;
	}
}
function dealToEnemy(run, combat, enemy, base, hits, doubleHit, killed, damageTo) {
	for (let i = 0; i < hits; i++) {
		if (enemy.hp <= 0) break;
		hitEnemy(run, combat, enemy, calcDamage(base, playerStr(run, combat), combat.weak, enemy.vulnerable, doubleHit), killed, damageTo);
	}
}
function loseHp(run, combat, amount) {
	run.hp = Math.max(0, run.hp - amount);
	return amount;
}
function tryFairy(run) {
	const i = run.potions.findIndex((p) => p === "fairy");
	if (i < 0) return false;
	run.potions[i] = null;
	run.hp = Math.max(1, Math.ceil(run.maxHp * .3));
	return true;
}
function playCard(run, combat, rng, uid, targetId) {
	const empty = {
		run,
		combat,
		killed: [],
		damageTo: [],
		playerHurt: 0,
		needTarget: false,
		dead: false,
		won: false
	};
	if (combat.phase !== "player") return empty;
	const idx = combat.hand.findIndex((c) => c.uid === uid);
	if (idx < 0) return empty;
	const card = combat.hand[idx];
	if (!canPlay(run, combat, card)) return empty;
	const d = defOf(card);
	const living = combat.enemies.filter((e) => e.hp > 0);
	if (d.target === "enemy" && !targetId) {
		if (living.length === 1) targetId = living[0].id;
		else {
			combat.targetingUid = uid;
			return {
				...empty,
				needTarget: true
			};
		}
	}
	combat.targetingUid = null;
	combat.hand.splice(idx, 1);
	combat.energy -= cardCost(card);
	const nums = d.numbers(card.upgraded);
	const killed = [];
	const damageTo = [];
	let playerHurt = 0;
	const target = targetId ? combat.enemies.find((e) => e.id === targetId && e.hp > 0) : void 0;
	if (nums.hpLoss) playerHurt += loseHp(run, combat, nums.hpLoss);
	if (d.special === "limitBreak") combat.strength *= 2;
	else if (nums.strength && nums.strength > 0 && d.special !== "disarm") combat.strength += nums.strength;
	if (nums.metallicize) combat.metallicize += nums.metallicize;
	if (nums.energy) combat.energy += nums.energy;
	if (nums.block) combat.block += calcBlock(nums.block, combat.dexterity, combat.frail);
	const doubleHit = d.type === "attack" && hasRelic(run, "pen_nib") && (combat.attacksPlayed + 1) % 10 === 0;
	if (d.special === "fiendFire") {
		const others = combat.hand.splice(0, combat.hand.length);
		const per = nums.damage ?? 7;
		if (target) for (const c of others) {
			combat.exhaustPile.push(c);
			dealToEnemy(run, combat, target, per, 1, doubleHit, killed, damageTo);
		}
		else combat.exhaustPile.push(...others);
	} else if (d.type === "attack" && nums.damage) {
		const hits = nums.hits ?? 1;
		if (d.target === "all") for (const e of combat.enemies.filter((en) => en.hp > 0)) dealToEnemy(run, combat, e, nums.damage, hits, doubleHit, killed, damageTo);
		else if (target) dealToEnemy(run, combat, target, nums.damage, hits, doubleHit, killed, damageTo);
	}
	if (d.type === "attack") combat.attacksPlayed += 1;
	if (nums.vulnerable || nums.weak) {
		const debuffTargets = d.target === "all" ? combat.enemies.filter((en) => en.hp > 0) : target ? [target] : [];
		for (const t of debuffTargets) {
			if (nums.vulnerable) t.vulnerable += nums.vulnerable;
			if (nums.weak) t.weak += nums.weak;
		}
	}
	if (d.special === "disarm" && target && nums.strength) target.strength += nums.strength;
	if (d.special === "entrench") combat.block *= 2;
	if (d.special === "immolate") combat.discardPile.push(mintCard("wound"));
	if (d.special === "dropkick" && target && target.vulnerable > 0) {
		combat.energy += 1;
		drawCards(combat, rng, 1);
	}
	if (d.special === "trueGrit" && combat.hand.length) {
		const i = rng.int(0, combat.hand.length - 1);
		const [ex] = combat.hand.splice(i, 1);
		if (ex) combat.exhaustPile.push(ex);
	}
	if (d.type === "power" || (d.special === "limitBreak" ? !card.upgraded : Boolean(d.exhaust))) combat.exhaustPile.push(card);
	else combat.discardPile.push(card);
	if (nums.draw) drawCards(combat, rng, nums.draw);
	if (d.special === "acrobatics" && combat.hand.length) {
		const i = rng.int(0, combat.hand.length - 1);
		const [disc] = combat.hand.splice(i, 1);
		if (disc) combat.discardPile.push(disc);
	}
	if (d.special === "battleTrance") combat.noDraw = true;
	if (run.hp <= 0 && tryFairy(run)) combat.log = "The fairy shatters. You remain.";
	const won = combat.enemies.every((e) => e.hp <= 0);
	const dead = run.hp <= 0;
	combat.log = d.name;
	if (won) combat.phase = "resolving";
	return {
		run,
		combat,
		killed,
		damageTo,
		playerHurt,
		needTarget: false,
		dead,
		won
	};
}
function usePotion(run, combat, rng, slot, targetId) {
	const empty = {
		run,
		combat,
		killed: [],
		damageTo: [],
		playerHurt: 0,
		needTarget: false,
		dead: false,
		won: false
	};
	if (combat.phase !== "player") return empty;
	const id = run.potions[slot];
	if (!id || id === "fairy") return empty;
	const living = combat.enemies.filter((e) => e.hp > 0);
	if (id === "fire" && !targetId) {
		if (living.length === 1) targetId = living[0].id;
		else {
			combat.targetingPotion = slot;
			return {
				...empty,
				needTarget: true
			};
		}
	}
	run.potions[slot] = null;
	combat.targetingPotion = null;
	const killed = [];
	const damageTo = [];
	if (id === "blood") {
		const amt = Math.ceil(run.maxHp * .2);
		run.hp = Math.min(run.maxHp, run.hp + amt);
		combat.log = `Healed ${amt}.`;
	} else if (id === "block") {
		combat.block += 12;
		combat.log = "Gained 12 Block.";
	} else if (id === "fire") {
		const t = combat.enemies.find((e) => e.id === targetId && e.hp > 0);
		if (t) hitEnemy(run, combat, t, 20, killed, damageTo);
	} else if (id === "str") combat.strength += 2;
	else if (id === "energy") combat.energy += 2;
	else if (id === "swift") drawCards(combat, rng, 3);
	return {
		run,
		combat,
		killed,
		damageTo,
		playerHurt: 0,
		needTarget: false,
		dead: false,
		won: combat.enemies.every((e) => e.hp <= 0)
	};
}
function endPlayerTurn(run, combat, rng) {
	combat.targetingUid = null;
	combat.targetingPotion = null;
	const keep = [];
	for (const c of combat.hand) if (defOf(c).ethereal) combat.exhaustPile.push(c);
	else combat.discardPile.push(c);
	combat.hand = keep;
	if (hasRelic(run, "orichalcum") && combat.block === 0) combat.block += 6;
	if (combat.weak > 0) combat.weak -= 1;
	if (combat.vulnerable > 0) combat.vulnerable -= 1;
	if (combat.frail > 0) combat.frail -= 1;
	combat.noDraw = false;
	combat.phase = "enemy";
	combat.log = "They move.";
	persistRng(run, rng);
}
function stepEnemy(run, combat, rng, enemy) {
	enemy.block = 0;
	let playerHurt = 0;
	let blocked = 0;
	const intent = enemy.intent;
	const str = enemy.strength;
	const attackOnce = (base) => {
		let d = base + str;
		if (enemy.weak > 0) d = Math.floor(d * .75);
		if (combat.vulnerable > 0) d = Math.floor(d * 1.5);
		d = Math.max(0, d);
		const before = combat.block;
		const res = applyHpDamage(run.hp, combat.block, d);
		run.hp = res.hp;
		combat.block = res.block;
		playerHurt += res.taken;
		blocked += before - res.block;
		if (res.taken > 0 && hasRelic(run, "bronze_scales") && enemy.hp > 0) {
			const back = applyHpDamage(enemy.hp, enemy.block, 3);
			enemy.hp = back.hp;
			enemy.block = back.block;
			if (enemy.hp <= 0) {
				enemy.hp = 0;
				run.floorKills += 1;
			}
		}
	};
	if (intent.kind === "attack") {
		const hits = intent.hits ?? 1;
		for (let i = 0; i < hits; i++) attackOnce(intent.dmg);
	} else if (intent.kind === "defend") enemy.block += intent.block;
	else if (intent.kind === "buff") {
		enemy.strength += intent.strength;
		if (intent.block) enemy.block += intent.block;
	} else if (intent.kind === "debuff") {
		if (intent.weak) combat.weak += intent.weak;
		if (intent.vulnerable) combat.vulnerable += intent.vulnerable;
	} else if (intent.kind === "attackDefend") {
		attackOnce(intent.dmg);
		enemy.block += intent.block;
	}
	if (enemy.weak > 0) enemy.weak -= 1;
	if (enemy.vulnerable > 0) enemy.vulnerable -= 1;
	enemy.intent = nextIntent(enemy, Math.max(0, run.row));
	if (run.hp <= 0 && tryFairy(run)) combat.log = "The fairy shatters. You remain.";
	const dead = run.hp <= 0;
	persistRng(run, rng);
	return {
		run,
		combat,
		playerHurt,
		blocked,
		dead,
		enemyId: enemy.id,
		kind: intent.kind
	};
}
function beginPlayerTurn(run, combat, rng) {
	combat.turn += 1;
	combat.block = 0;
	combat.block += combat.metallicize;
	combat.energy = combat.maxEnergy;
	combat.noDraw = false;
	combat.phase = "player";
	combat.targetingUid = null;
	combat.targetingPotion = null;
	drawCards(combat, rng, 5);
	if (hasRelic(run, "stone_calendar") && combat.turn === 7) {
		for (const e of combat.enemies) {
			if (e.hp <= 0) continue;
			const res = applyHpDamage(e.hp, e.block, 52);
			e.hp = res.hp;
			e.block = res.block;
			run.damageDealt += 52;
			if (e.hp <= 0) {
				e.hp = 0;
				run.floorKills += 1;
			}
		}
		combat.log = "The calendar strikes.";
	} else combat.log = `Turn ${combat.turn}.`;
	persistRng(run, rng);
}
function liveNumbers(run, combat, card) {
	const d = defOf(card);
	const n = { ...d.numbers(card.upgraded) };
	const living = combat.enemies.filter((e) => e.hp > 0);
	const vuln = living.length === 1 ? living[0].vulnerable : 0;
	const doubleHit = d.type === "attack" && hasRelic(run, "pen_nib") && (combat.attacksPlayed + 1) % 10 === 0;
	if (n.damage) n.damage = calcDamage(n.damage, playerStr(run, combat), combat.weak, vuln, doubleHit);
	if (n.block) n.block = calcBlock(n.block, combat.dexterity, combat.frail);
	return n;
}
function afterCombat(run, rng, type) {
	if (hasRelic(run, "burning_blood")) run.hp = Math.min(run.maxHp, run.hp + 6);
	const gold = type === "boss" ? rng.int(80, 110) : type === "elite" ? rng.int(28, 42) : rng.int(12, 22);
	run.gold += gold;
	const cards = rollCardRewards(rng, type === "boss" ? "boss" : type === "elite" ? "elite" : "normal");
	let relic = null;
	if (type === "elite" || type === "boss") relic = rollRelic(rng, run.relics);
	let potion = null;
	const potionChance = type === "elite" ? .45 : type === "boss" ? .7 : .18;
	if (rng.chance(potionChance) && run.potions.some((p) => p === null)) potion = rollPotion(rng);
	persistRng(run, rng);
	return {
		gold,
		cards,
		relic,
		potion,
		pickedCard: false,
		pickedRelic: type !== "elite" && type !== "boss",
		pickedPotion: !potion
	};
}
function addCardToDeck(run, card) {
	run.deck.push(cloneCard(card));
}
function addRelic(run, id) {
	if (run.relics.includes(id)) return;
	run.relics.push(id);
	if (id === "anchor_ring") {
		run.maxHp += 8;
		run.hp += 8;
	}
}
function addPotion(run, id) {
	const i = run.potions.findIndex((p) => p === null);
	if (i < 0) return false;
	run.potions[i] = id;
	return true;
}
function restHeal(run) {
	const amt = Math.ceil(run.maxHp * .3);
	run.hp = Math.min(run.maxHp, run.hp + amt);
	if (hasRelic(run, "eternal_feather")) {
		const extra = Math.floor(run.deck.length / 5) * 3;
		run.hp = Math.min(run.maxHp, run.hp + extra);
	}
}
function upgradeCard(run, uid) {
	const c = run.deck.find((x) => x.uid === uid);
	if (!c || c.upgraded) return false;
	if (defOf(c).unplayable) return false;
	c.upgraded = true;
	return true;
}
function removeCard(run, uid) {
	const i = run.deck.findIndex((x) => x.uid === uid);
	if (i < 0) return false;
	if (run.deck.length <= 1) return false;
	run.deck.splice(i, 1);
	return true;
}
function generateShop(run, rng) {
	const cards = rollCardRewards(rng, "normal", 3).map((card) => ({
		item: card,
		price: priceFor(CARD_BY_ID[card.defId].rarity, rng),
		sold: false
	}));
	const relics = rollRelicOffers(rng, run.relics, 2).map((id) => ({
		item: id,
		price: relicPrice(id, rng),
		sold: false
	}));
	const potions = [rollPotion(rng), rollPotion(rng)].map((id) => ({
		item: id,
		price: rng.int(48, 58),
		sold: false
	}));
	persistRng(run, rng);
	return {
		cards,
		relics,
		potions,
		removePrice: 75,
		removed: false
	};
}
var ctx = null;
var master = null;
var sfx = null;
var muted = false;
function ac() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "interactive" });
		master = ctx.createGain();
		sfx = ctx.createGain();
		sfx.connect(master);
		master.connect(ctx.destination);
		master.gain.value = muted ? 0 : .7;
	}
	return ctx;
}
function unlockAudio() {
	const c = ac();
	if (c && c.state === "suspended") c.resume();
}
function setMuted(m) {
	muted = m;
	const c = ac();
	if (master && c) master.gain.setTargetAtTime(m ? 0 : .7, c.currentTime, .02);
}
function tone(freq, dur, type, vol = .12, slide) {
	const c = ac();
	if (!c || !sfx || muted) return;
	const osc = c.createOscillator();
	const g = c.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, c.currentTime);
	if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, slide), c.currentTime + dur);
	g.gain.setValueAtTime(vol, c.currentTime);
	g.gain.exponentialRampToValueAtTime(1e-4, c.currentTime + dur);
	osc.connect(g);
	g.connect(sfx);
	osc.start();
	osc.stop(c.currentTime + dur + .02);
}
function noise(dur, vol = .1) {
	const c = ac();
	if (!c || !sfx || muted) return;
	const n = Math.floor(c.sampleRate * dur);
	const buf = c.createBuffer(1, n, c.sampleRate);
	const data = buf.getChannelData(0);
	for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (.015 * c.sampleRate));
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
var sfxPlay = {
	click: () => tone(720, .04, "square", .04),
	hover: () => tone(520, .03, "sine", .02),
	playCard: () => {
		tone(240, .08, "triangle", .08, 420);
	},
	hit: () => {
		noise(.08, .14);
		tone(140, .1, "sawtooth", .07, 70);
	},
	block: () => tone(280, .09, "triangle", .07, 180),
	heal: () => tone(520, .12, "sine", .06, 780),
	death: () => {
		noise(.16, .12);
		tone(180, .28, "sawtooth", .08, 50);
	},
	win: () => {
		tone(392, .12, "triangle", .07);
		setTimeout(() => tone(523, .14, "triangle", .07), 90);
		setTimeout(() => tone(659, .22, "triangle", .08), 180);
	},
	lose: () => tone(110, .45, "sawtooth", .08, 50),
	energy: () => tone(880, .05, "square", .03),
	shop: () => tone(440, .08, "sine", .05, 660)
};
if (typeof window !== "undefined") document.addEventListener("visibilitychange", () => {
	if (document.visibilityState === "visible") unlockAudio();
});
var EVENTS = [
	{
		id: "font",
		title: "The Font",
		body: "A basin of still water. Your reflection is a few years older, and already buried.",
		choices: [{
			id: "drink",
			label: "Drink",
			hint: "Heal 30% of Max HP."
		}, {
			id: "coin",
			label: "Leave a coin",
			hint: "Gain 50 gold. Take 8 damage."
		}]
	},
	{
		id: "shrine",
		title: "Nameless Shrine",
		body: "The inscription has been scraped out. Something still listens.",
		choices: [{
			id: "kneel",
			label: "Kneel",
			hint: "Upgrade a random card."
		}, {
			id: "cut",
			label: "Cut a palm",
			hint: "Gain 8 Max HP. Lose 8 HP."
		}]
	},
	{
		id: "beggar",
		title: "The Beggar",
		body: "A figure in funeral linen holds out a cracked bowl. 'One name. I can take it from the book.'",
		choices: [
			{
				id: "pay",
				label: "Pay 40 gold",
				hint: "Remove a card from your deck.",
				requireGold: 40
			},
			{
				id: "refuse",
				label: "Refuse",
				hint: "Nothing happens."
			},
			{
				id: "steal",
				label: "Take the bowl",
				hint: "Gain 80 gold. Add a Wound to your deck."
			}
		]
	},
	{
		id: "cache",
		title: "Sealed Cache",
		body: "A lead casket, bound in wire. Whatever is inside was not meant to travel.",
		choices: [{
			id: "smash",
			label: "Smash it",
			hint: "Choose 1 of 3 cards."
		}, {
			id: "pick",
			label: "Pick the lock",
			hint: "Gain a relic. Take 12 damage."
		}]
	},
	{
		id: "bargain",
		title: "The Pale Bargain",
		body: "A voice from the next landing: 'A rare rite, for a scar that does not heal.'",
		choices: [{
			id: "accept",
			label: "Accept",
			hint: "Gain a rare card. Add a Wound to your deck."
		}, {
			id: "walk",
			label: "Walk on",
			hint: "Heal 12 HP."
		}]
	}
];
var EVENT_BY_ID = Object.fromEntries(EVENTS.map((e) => [e.id, e]));
function rollEvent(rng) {
	return rng.pick(EVENTS);
}
function applyEventChoice(run, rng, eventId, choiceId) {
	const next = {
		...run,
		deck: run.deck.map((c) => ({ ...c }))
	};
	const dmg = (n) => {
		next.hp = Math.max(1, next.hp - n);
	};
	const heal = (n) => {
		next.hp = Math.min(next.maxHp, next.hp + n);
	};
	if (eventId === "font" && choiceId === "drink") {
		const amt = Math.ceil(next.maxHp * .3);
		heal(amt);
		return {
			run: next,
			message: `You drink. Healed ${amt} HP.`
		};
	}
	if (eventId === "font" && choiceId === "coin") {
		next.gold += 50;
		dmg(8);
		return {
			run: next,
			message: "The water takes a coin and a little blood. +50 gold."
		};
	}
	if (eventId === "shrine" && choiceId === "kneel") {
		const pool = next.deck.filter((c) => !c.upgraded && c.defId !== "wound");
		if (pool.length) {
			const card = rng.pick(pool);
			const found = next.deck.find((c) => c.uid === card.uid);
			if (found) found.upgraded = true;
			return {
				run: next,
				message: "A card in your deck is rewritten."
			};
		}
		return {
			run: next,
			message: "Nothing left to rewrite."
		};
	}
	if (eventId === "shrine" && choiceId === "cut") {
		next.maxHp += 8;
		dmg(8);
		return {
			run: next,
			message: "Max HP +8."
		};
	}
	if (eventId === "beggar" && choiceId === "pay") {
		next.gold -= 40;
		return {
			run: next,
			message: "The beggar waits for a name.",
			followUp: "remove"
		};
	}
	if (eventId === "beggar" && choiceId === "refuse") return {
		run: next,
		message: "The figure does not follow."
	};
	if (eventId === "beggar" && choiceId === "steal") {
		next.gold += 80;
		next.deck.push(mintCard("wound"));
		return {
			run: next,
			message: "+80 gold. A Wound is added to your deck."
		};
	}
	if (eventId === "cache" && choiceId === "smash") return {
		run: next,
		message: "Rites spill onto the stone.",
		followUp: "cards"
	};
	if (eventId === "cache" && choiceId === "pick") {
		dmg(12);
		const relic = rollRelic(rng, next.relics);
		if (relic) {
			next.relics = [...next.relics, relic];
			if (relic === "anchor_ring") {
				next.maxHp += 8;
				next.hp += 8;
			}
			return {
				run: next,
				message: "The lock gives. You take a relic and leave blood on the wire."
			};
		}
		return {
			run: next,
			message: "Empty. The wire still bites."
		};
	}
	if (eventId === "bargain" && choiceId === "accept") {
		next.deck.push(mintCard("wound"));
		return {
			run: next,
			message: "A rare rite, and a Wound.",
			followUp: "cards"
		};
	}
	if (eventId === "bargain" && choiceId === "walk") {
		heal(12);
		return {
			run: next,
			message: "You keep walking. Healed 12 HP."
		};
	}
	return {
		run: next,
		message: "Nothing happens."
	};
}
var META_KEY = "sepulcher.meta.v1";
var RUN_KEY = "sepulcher.run.v1";
var META_VERSION = 1;
var RUN_VERSION = 1;
var defaultMeta = () => ({
	version: META_VERSION,
	wins: 0,
	losses: 0,
	bestRow: -1,
	mute: false,
	shake: true,
	seenHint: false
});
function read(key) {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function write(key, value) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function loadMeta() {
	const m = read(META_KEY);
	if (!m || m.version !== META_VERSION) return defaultMeta();
	return {
		...defaultMeta(),
		...m,
		version: META_VERSION
	};
}
function saveMeta(meta) {
	write(META_KEY, {
		...meta,
		version: META_VERSION
	});
}
function loadRun() {
	const s = read(RUN_KEY);
	if (!s || s.version !== RUN_VERSION || !s.run) return null;
	return s;
}
function saveRun(data) {
	write(RUN_KEY, {
		...data,
		version: RUN_VERSION
	});
}
function clearRun() {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(RUN_KEY);
	} catch {}
}
function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}
function reduced() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
var busy = false;
var floatSeq = 1;
function snapshot(get) {
	const s = get();
	if (!s.run) {
		clearRun();
		return;
	}
	if (s.screen === "title" || s.screen === "howto" || s.screen === "gameover" || s.screen === "victory") {
		clearRun();
		return;
	}
	saveRun({
		version: 1,
		screen: s.screen,
		run: s.run,
		combat: s.combat,
		reward: s.reward,
		event: s.event,
		picker: s.picker
	});
}
function pushFloat(set, f) {
	const id = floatSeq++;
	set((s) => ({ floats: [...s.floats, {
		...f,
		id
	}] }));
	setTimeout(() => {
		set((s) => ({ floats: s.floats.filter((x) => x.id !== id) }));
	}, 700);
}
var useGame = create((set, get) => ({
	ready: false,
	screen: "title",
	run: null,
	combat: null,
	reward: null,
	event: null,
	picker: null,
	meta: defaultMeta(),
	floats: [],
	shake: 0,
	flashes: [],
	inspect: null,
	deckOpen: false,
	menuOpen: false,
	hint: null,
	hydrate: () => {
		const meta = loadMeta();
		setMuted(meta.mute);
		set({
			ready: true,
			meta
		});
	},
	newDescent: () => {
		unlockAudio();
		sfxPlay.click();
		const { run } = newRun();
		set({
			screen: "map",
			run,
			combat: null,
			reward: null,
			event: null,
			picker: null,
			floats: [],
			flashes: [],
			inspect: null,
			menuOpen: false,
			deckOpen: false,
			hint: null
		});
		snapshot(get);
	},
	continueRun: () => {
		unlockAudio();
		const saved = loadRun();
		if (!saved) return;
		sfxPlay.click();
		set({
			screen: saved.screen,
			run: saved.run,
			combat: saved.combat,
			reward: saved.reward,
			event: saved.event,
			picker: saved.picker,
			menuOpen: false
		});
	},
	abandon: () => {
		const meta = {
			...get().meta,
			losses: get().meta.losses + 1
		};
		saveMeta(meta);
		clearRun();
		set({
			screen: "title",
			run: null,
			combat: null,
			reward: null,
			event: null,
			picker: null,
			meta,
			menuOpen: false
		});
	},
	setScreen: (screen) => {
		set({
			screen,
			menuOpen: false
		});
		snapshot(get);
	},
	toggleMute: () => {
		const meta = {
			...get().meta,
			mute: !get().meta.mute
		};
		setMuted(meta.mute);
		saveMeta(meta);
		set({ meta });
	},
	toggleShake: () => {
		const meta = {
			...get().meta,
			shake: !get().meta.shake
		};
		saveMeta(meta);
		set({ meta });
	},
	selectNode: (id) => {
		if (busy) return;
		const { run } = get();
		if (!run) return;
		const node = availableNodes(run.map, run.currentNodeId, run.visited).find((n) => n.id === id);
		if (!node) return;
		unlockAudio();
		sfxPlay.click();
		const rng = restoreRng(run);
		const nextRun = {
			...run,
			currentNodeId: node.id,
			visited: [...run.visited, node.id],
			row: node.row,
			shop: null
		};
		persistRng(nextRun, rng);
		if (node.type === "combat" || node.type === "elite" || node.type === "boss") {
			const combat = startCombat(nextRun, rng, node.type);
			persistRng(nextRun, rng);
			set({
				run: nextRun,
				combat,
				screen: "combat",
				hint: !get().meta.seenHint ? "Enemies telegraph their next action. Block absorbs damage before your life does." : null,
				floats: []
			});
		} else if (node.type === "rest") set({
			run: nextRun,
			screen: "rest"
		});
		else if (node.type === "shop") {
			nextRun.shop = generateShop(nextRun, rng);
			set({
				run: nextRun,
				screen: "shop"
			});
		} else if (node.type === "event") {
			const ev = rollEvent(rng);
			persistRng(nextRun, rng);
			set({
				run: nextRun,
				event: {
					defId: ev.id,
					resolved: false,
					result: null
				},
				screen: "event"
			});
		}
		snapshot(get);
	},
	play: (uid, targetId) => {
		if (busy) return;
		const { run, combat } = get();
		if (!run || !combat) return;
		const card = combat.hand.find((c) => c.uid === uid);
		if (!card || !canPlay(run, combat, card)) return;
		const rng = restoreRng(run);
		const res = playCard(run, combat, rng, uid, targetId);
		persistRng(res.run, rng);
		if (res.needTarget) {
			set({ combat: { ...res.combat } });
			return;
		}
		sfxPlay.playCard();
		if (res.damageTo.length) sfxPlay.hit();
		for (const d of res.damageTo) pushFloat(set, {
			text: `-${d.amount}`,
			color: "hp",
			x: 0,
			y: 0
		});
		if (get().meta.shake && res.damageTo.some((d) => d.amount >= 12)) set({ shake: Math.min(1, get().shake + .45) });
		const flashIds = res.damageTo.map((d) => d.id);
		if (res.playerHurt > 0) flashIds.push("player");
		set({
			run: { ...res.run },
			combat: { ...res.combat },
			flashes: flashIds
		});
		if (flashIds.length) window.setTimeout(() => {
			set((s) => ({ flashes: s.flashes.filter((id) => !flashIds.includes(id)) }));
		}, 280);
		if (res.dead) {
			finish(get, set, false);
			return;
		}
		if (res.won) {
			winCombat(get, set);
			return;
		}
		snapshot(get);
	},
	drink: (slot, targetId) => {
		if (busy) return;
		const { run, combat } = get();
		if (!run || !combat) return;
		const rng = restoreRng(run);
		const res = usePotion(run, combat, rng, slot, targetId);
		persistRng(res.run, rng);
		if (res.needTarget) {
			set({ combat: { ...res.combat } });
			return;
		}
		sfxPlay.heal();
		set({
			run: { ...res.run },
			combat: { ...res.combat }
		});
		if (res.won) winCombat(get, set);
		snapshot(get);
	},
	endTurn: () => {
		if (busy) return;
		const { run, combat } = get();
		if (!run || !combat || combat.phase !== "player") return;
		runEnemyTurn(get, set);
	},
	pickRewardCard: (uid) => {
		const { run, reward } = get();
		if (!run || !reward || reward.pickedCard) return;
		const card = reward.cards.find((c) => c.uid === uid);
		if (!card) return;
		sfxPlay.click();
		addCardToDeck(run, card);
		const next = {
			...reward,
			pickedCard: true
		};
		set({
			run: { ...run },
			reward: next
		});
		maybeLeaveReward(get, set);
	},
	skipRewardCard: () => {
		const { reward } = get();
		if (!reward || reward.pickedCard) return;
		sfxPlay.click();
		set({ reward: {
			...reward,
			pickedCard: true
		} });
		maybeLeaveReward(get, set);
	},
	takeRelic: () => {
		const { run, reward } = get();
		if (!run || !reward || !reward.relic) return;
		sfxPlay.shop();
		addRelic(run, reward.relic);
		set({
			run: { ...run },
			reward: {
				...reward,
				pickedRelic: true,
				relic: null
			}
		});
		maybeLeaveReward(get, set);
	},
	takePotion: () => {
		const { run, reward } = get();
		if (!run || !reward || !reward.potion) return;
		if (!addPotion(run, reward.potion)) return;
		sfxPlay.heal();
		set({
			run: { ...run },
			reward: {
				...reward,
				pickedPotion: true,
				potion: null
			}
		});
		maybeLeaveReward(get, set);
	},
	skipPotion: () => {
		const { reward } = get();
		if (!reward) return;
		set({ reward: {
			...reward,
			pickedPotion: true,
			potion: null
		} });
		maybeLeaveReward(get, set);
	},
	rest: (kind) => {
		const { run } = get();
		if (!run) return;
		sfxPlay.click();
		if (kind === "heal") {
			restHeal(run);
			set({
				run: { ...run },
				screen: "map"
			});
			snapshot(get);
		} else {
			set({
				picker: {
					mode: "upgrade",
					title: "Inscribe",
					subtitle: "Upgrade a rite in your deck."
				},
				screen: "picker"
			});
			snapshot(get);
		}
	},
	pickCard: (uid) => {
		const { run, picker } = get();
		if (!run || !picker) return;
		sfxPlay.click();
		if (picker.mode === "upgrade") {
			upgradeCard(run, uid);
			set({
				run: { ...run },
				picker: null,
				screen: "map"
			});
		} else {
			removeCard(run, uid);
			if (picker.mode === "shop-remove" && run.shop) {
				run.gold -= run.shop.removePrice;
				run.shop = {
					...run.shop,
					removed: true
				};
				set({
					run: { ...run },
					picker: null,
					screen: "shop"
				});
			} else set({
				run: { ...run },
				picker: null,
				screen: "map"
			});
		}
		snapshot(get);
	},
	buyCard: (index) => {
		const { run } = get();
		if (!run?.shop) return;
		const offer = run.shop.cards[index];
		if (!offer || offer.sold || run.gold < offer.price) return;
		sfxPlay.shop();
		run.gold -= offer.price;
		addCardToDeck(run, offer.item);
		offer.sold = true;
		set({ run: {
			...run,
			shop: {
				...run.shop,
				cards: [...run.shop.cards]
			}
		} });
		snapshot(get);
	},
	buyRelic: (index) => {
		const { run } = get();
		if (!run?.shop) return;
		const offer = run.shop.relics[index];
		if (!offer || offer.sold || run.gold < offer.price) return;
		sfxPlay.shop();
		run.gold -= offer.price;
		addRelic(run, offer.item);
		offer.sold = true;
		set({ run: {
			...run,
			shop: {
				...run.shop,
				relics: [...run.shop.relics]
			}
		} });
		snapshot(get);
	},
	buyPotion: (index) => {
		const { run } = get();
		if (!run?.shop) return;
		const offer = run.shop.potions[index];
		if (!offer || offer.sold || run.gold < offer.price) return;
		if (!addPotion(run, offer.item)) return;
		sfxPlay.shop();
		run.gold -= offer.price;
		offer.sold = true;
		set({ run: {
			...run,
			shop: {
				...run.shop,
				potions: [...run.shop.potions]
			}
		} });
		snapshot(get);
	},
	shopRemove: () => {
		const { run } = get();
		if (!run?.shop || run.shop.removed || run.gold < run.shop.removePrice) return;
		sfxPlay.click();
		set({
			picker: {
				mode: "shop-remove",
				title: "Erase a name",
				subtitle: "Remove a card from your deck."
			},
			screen: "picker"
		});
	},
	leaveShop: () => {
		const { run } = get();
		if (!run) return;
		sfxPlay.click();
		set({
			run: {
				...run,
				shop: null
			},
			screen: "map"
		});
		snapshot(get);
	},
	chooseEvent: (choiceId) => {
		const { run, event } = get();
		if (!run || !event || event.resolved) return;
		const rng = restoreRng(run);
		const res = applyEventChoice(run, rng, event.defId, choiceId);
		persistRng(res.run, rng);
		sfxPlay.click();
		if (res.followUp === "remove") {
			set({
				run: res.run,
				event: {
					...event,
					resolved: true,
					result: res.message
				},
				picker: {
					mode: "remove",
					title: "Give a name",
					subtitle: "Remove a card from your deck."
				},
				screen: "picker"
			});
			snapshot(get);
			return;
		}
		if (res.followUp === "cards") {
			const cards = rollCardRewards(rng, event.defId === "bargain" ? "boss" : "normal");
			persistRng(res.run, rng);
			set({
				run: res.run,
				event: {
					...event,
					resolved: true,
					result: res.message
				},
				reward: {
					gold: 0,
					cards,
					relic: null,
					potion: null,
					pickedCard: false,
					pickedRelic: true,
					pickedPotion: true
				},
				screen: "reward"
			});
			snapshot(get);
			return;
		}
		set({
			run: res.run,
			event: {
				...event,
				resolved: true,
				result: res.message
			}
		});
		snapshot(get);
	},
	leaveEvent: () => {
		set({
			event: null,
			screen: "map"
		});
		snapshot(get);
	},
	setDeckOpen: (deckOpen) => set({ deckOpen }),
	setMenuOpen: (menuOpen) => set({ menuOpen }),
	setInspect: (inspect) => set({ inspect }),
	dismissHint: () => {
		const meta = {
			...get().meta,
			seenHint: true
		};
		saveMeta(meta);
		set({
			hint: null,
			meta
		});
	}
}));
async function runEnemyTurn(get, set) {
	busy = true;
	const { run, combat } = get();
	if (!run || !combat) {
		busy = false;
		return;
	}
	endPlayerTurn(run, combat, restoreRng(run));
	set({
		run: { ...run },
		combat: { ...combat }
	});
	const wait = reduced() ? 80 : 420;
	const living = () => (get().combat?.enemies ?? []).filter((e) => e.hp > 0);
	for (const enemy of living()) {
		await sleep(wait);
		const cur = get();
		if (!cur.run || !cur.combat) break;
		const e = cur.combat.enemies.find((x) => x.id === enemy.id);
		if (!e || e.hp <= 0) continue;
		const rng2 = restoreRng(cur.run);
		const res = stepEnemy(cur.run, cur.combat, rng2, e);
		persistRng(res.run, rng2);
		if (res.playerHurt > 0) {
			sfxPlay.hit();
			pushFloat(set, {
				text: `-${res.playerHurt}`,
				color: "hp",
				x: 0,
				y: 0
			});
			if (cur.meta.shake) set({ shake: Math.min(1, get().shake + .35) });
			set({ flashes: ["player", res.enemyId] });
			window.setTimeout(() => {
				set((s) => ({ flashes: s.flashes.filter((id) => id !== "player" && id !== res.enemyId) }));
			}, 280);
		} else if (res.blocked > 0) {
			sfxPlay.block();
			pushFloat(set, {
				text: `${res.blocked}`,
				color: "block",
				x: 0,
				y: 0
			});
		}
		set({
			run: { ...res.run },
			combat: { ...res.combat }
		});
		if (res.dead) {
			busy = false;
			finish(get, set, false);
			return;
		}
		if (res.combat.enemies.every((en) => en.hp <= 0)) {
			busy = false;
			await winCombat(get, set);
			return;
		}
	}
	await sleep(reduced() ? 40 : 180);
	const after = get();
	if (!after.run || !after.combat) {
		busy = false;
		return;
	}
	const rng3 = restoreRng(after.run);
	beginPlayerTurn(after.run, after.combat, rng3);
	persistRng(after.run, rng3);
	set({
		run: { ...after.run },
		combat: { ...after.combat }
	});
	snapshot(get);
	busy = false;
}
async function winCombat(get, set) {
	busy = true;
	sfxPlay.win();
	await sleep(reduced() ? 120 : 500);
	const { run, combat } = get();
	if (!run) {
		busy = false;
		return;
	}
	const node = run.currentNodeId ? nodeById(run.map, run.currentNodeId) : void 0;
	if (node?.type === "boss") {
		busy = false;
		finish(get, set, true);
		return;
	}
	const rng = restoreRng(run);
	const reward = afterCombat(run, rng, node?.type ?? "combat");
	persistRng(run, rng);
	set({
		run: { ...run },
		combat: combat ? {
			...combat,
			phase: "resolving"
		} : null,
		reward,
		screen: "reward"
	});
	snapshot(get);
	busy = false;
}
function finish(get, set, win) {
	const { run, meta } = get();
	const nextMeta = {
		...meta,
		wins: meta.wins + (win ? 1 : 0),
		losses: meta.losses + (win ? 0 : 1),
		bestRow: Math.max(meta.bestRow, run?.row ?? -1)
	};
	saveMeta(nextMeta);
	clearRun();
	if (win) sfxPlay.win();
	else sfxPlay.lose();
	set({
		meta: nextMeta,
		screen: win ? "victory" : "gameover",
		combat: null,
		inspect: null,
		menuOpen: false
	});
}
function maybeLeaveReward(get, set) {
	const { reward } = get();
	if (!reward) return;
	const relicDone = reward.pickedRelic || !reward.relic;
	const potionDone = reward.pickedPotion || !reward.potion;
	if (reward.pickedCard && relicDone && potionDone) {
		set({
			reward: null,
			combat: null,
			inspect: null,
			screen: "map"
		});
		snapshot(get);
	} else snapshot(get);
}
if (typeof window !== "undefined") document.addEventListener("visibilitychange", () => {
	if (document.visibilityState === "hidden") snapshot(useGame.getState);
});
var PORTRAIT = {
	mite: "/game/mite.jpg",
	acolyte: "/game/acolyte.jpg",
	archer: "/game/archer.jpg",
	wraith: "/game/wraith.jpg",
	jaw: "/game/jaw.jpg",
	sentinel: "/game/sentinel.jpg",
	priest: "/game/priest.jpg",
	warden: "/game/warden.jpg"
};
function CombatScreen() {
	const run = useGame((s) => s.run);
	const combat = useGame((s) => s.combat);
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
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "e" || e.key === "E" || e.key === "Enter") {
				if (!locked) endTurn();
			}
			if (e.key === "Escape") {
				if (combat.targetingUid || combat.targetingPotion !== null) useGame.setState({ combat: {
					...combat,
					targetingUid: null,
					targetingPotion: null
				} });
			}
			const n = Number(e.key);
			if (n >= 1 && n <= 9 && !locked) {
				const card = combat.hand[n - 1];
				if (card) play(card.uid);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		combat,
		endTurn,
		locked,
		play
	]);
	const trauma = shake * shake;
	const ox = trauma ? (Math.random() * 2 - 1) * 10 * trauma : 0;
	const oy = trauma ? (Math.random() * 2 - 1) * 8 * trauma : 0;
	const str = playerStr(run, combat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 min-h-0 flex-col relative overflow-hidden",
		style: { transform: `translate(${ox}px, ${oy}px)` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/game/chamber.jpg",
					alt: "",
					className: "size-full object-cover opacity-45"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/35" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex-1 min-h-0 flex items-end sm:items-center justify-center gap-3 sm:gap-8 px-3 py-3 overflow-auto",
				children: combat.enemies.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnemyPortrait, {
					enemy: e,
					targeting,
					locked,
					flashing: flashes.includes(e.id),
					playerVuln: combat.vulnerable,
					onClick: () => {
						if (locked) return;
						if (combat.targetingUid) play(combat.targetingUid, e.id);
						else if (combat.targetingPotion !== null) drink(combat.targetingPotion, e.id);
					}
				}, e.id))
			}),
			floats.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-[18%] flex justify-center gap-8 z-10",
				children: floats.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("font-display text-2xl tabular-nums animate-float-up", f.color === "hp" && "text-hp", f.color === "block" && "text-block", f.color === "heal" && "text-fg"),
					children: f.text
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative px-3 pb-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("mx-auto max-w-3xl rounded-lg border border-border bg-elevated/90 px-3 py-2", flashes.includes("player") && "hit-flash"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "size-4 text-hp shrink-0",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs tabular-nums mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										run.hp,
										"/",
										run.maxHp
									] }), combat.block > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-block flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
											className: "size-3",
											strokeWidth: 2
										}), combat.block]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-2 rounded-full bg-bg overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-hp transition-[width] duration-(--motion-fast) ease-(--ease-out)",
										style: { width: `${Math.max(0, run.hp / run.maxHp * 100)}%` }
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Energy, {
								energy: combat.energy,
								max: combat.maxEnergy
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex flex-wrap gap-1.5 text-[10px] uppercase tracking-wider text-muted",
						children: [
							str !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Str ", str > 0 ? `+${str}` : str] }),
							combat.weak > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Weak ", combat.weak] }),
							combat.vulnerable > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Vuln ", combat.vulnerable] }),
							combat.frail > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Frail ", combat.frail] }),
							combat.metallicize > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Metal ", combat.metallicize] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto normal-case tracking-normal text-subtle hidden sm:inline",
								children: targeting ? "Choose a target" : combat.log
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "ml-auto sm:hidden normal-case tracking-normal text-subtle tabular-nums",
								onClick: () => setInspect("draw"),
								children: [
									"Draw ",
									combat.drawPile.length,
									" · Disc ",
									combat.discardPile.length
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative hand-fan min-h-[12.5rem] items-end px-3 py-2 overflow-x-auto",
				children: [combat.hand.map((card) => {
					const ok = canPlay(run, combat, card) && !locked;
					const selected = combat.targetingUid === card.uid;
					const base = defOf(card).numbers(card.upgraded);
					const live = liveNumbers(run, combat, card);
					const tone = (live.damage ?? 0) > (base.damage ?? 0) || (live.block ?? 0) > (base.block ?? 0) ? "up" : (live.damage ?? 0) < (base.damage ?? 0) || (live.block ?? 0) < (base.block ?? 0) ? "down" : "none";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardView, {
						card,
						playable: ok,
						selected,
						dimmed: targeting && !selected,
						live,
						tone,
						onClick: () => {
							if (locked) return;
							if (selected) {
								useGame.setState({ combat: {
									...combat,
									targetingUid: null
								} });
								return;
							}
							play(card.uid);
						}
					}, card.uid);
				}), combat.hand.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted self-center w-full text-center pb-8",
					children: "Hand empty."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center gap-2 px-3 pb-[max(4.5rem,env(safe-area-inset-bottom))] pt-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1.5",
						children: run.potions.map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: !id || locked || id === "fairy",
							onClick: () => id && drink(i),
							title: id ? POTION_BY_ID[id]?.name : "Empty",
							className: cn("size-11 rounded-md border text-[10px] leading-tight px-1", id ? "border-border bg-surface text-fg" : "border-dashed border-border bg-bg/80 text-subtle", combat.targetingPotion === i && "ring-2 ring-accent"),
							children: id ? POTION_BY_ID[id]?.name.split(" ")[0] ?? "Potion" : ""
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex justify-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PileBtn, {
								kind: "draw",
								count: combat.drawPile.length,
								onOpen: setInspect
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PileBtn, {
								kind: "discard",
								count: combat.discardPile.length,
								onOpen: setInspect
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PileBtn, {
								kind: "exhaust",
								count: combat.exhaustPile.length,
								onOpen: setInspect
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: endTurn,
						disabled: locked,
						variant: "primary",
						className: "ml-auto min-w-[7.5rem]",
						children: locked ? "Resolving" : "End turn"
					})
				]
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-20 flex items-end sm:items-center justify-center bg-bg/70 p-4",
				onClick: dismissHint,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-xl border border-border bg-surface p-5",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: "The first chamber"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted leading-relaxed text-pretty",
							children: hint
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4 w-full",
							onClick: dismissHint,
							children: "Continue"
						})
					]
				})
			})
		]
	});
}
function PileBtn({ kind, count, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onOpen(kind),
		className: "hidden sm:flex items-center gap-1 rounded-md border border-border bg-surface/80 px-2 h-11 text-[11px] tabular-nums text-muted hover:text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
				className: "size-3.5",
				strokeWidth: 1.75
			}),
			kind === "draw" ? "Draw" : kind === "discard" ? "Discard" : "Exhaust",
			" ",
			count
		]
	});
}
function Energy({ energy, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1.5",
		"aria-label": `${energy} of ${max} energy`,
		children: [Array.from({ length: max }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-3.5 rotate-45 border", i < energy ? "bg-accent border-accent" : "border-border bg-transparent") }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "ml-1 text-sm tabular-nums text-fg",
			children: [
				energy,
				"/",
				max
			]
		})]
	});
}
function StatusChip({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-sm border border-border px-1.5 py-0.5 text-fg/80",
		children
	});
}
function EnemyPortrait({ enemy, targeting, locked, flashing, playerVuln, onClick }) {
	const dead = enemy.hp <= 0;
	const kind = intentKind(enemy.intent);
	const boss = enemy.defId === "warden";
	const src = PORTRAIT[enemy.defId];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		disabled: dead || locked,
		className: cn("flex flex-col items-center gap-2 min-w-[7.5rem] sm:min-w-[9rem] transition-opacity", dead && "opacity-30 pointer-events-none"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentBadge, {
				intent: enemy.intent,
				strength: enemy.strength,
				weak: enemy.weak,
				targetVuln: playerVuln,
				kind
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("relative overflow-hidden rounded-md border border-border bg-elevated", boss ? "size-32 sm:size-44" : "size-28 sm:size-36", targeting && !dead && "ring-2 ring-accent", flashing && "hit-flash"),
				children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					className: "size-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-full bg-elevated" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-center mb-1",
						children: enemy.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-[10px] tabular-nums text-muted mb-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							enemy.hp,
							"/",
							enemy.maxHp
						] }), enemy.block > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-block",
							children: enemy.block
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1 rounded-full bg-bg overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-hp/90 transition-[width] duration-(--motion-fast)",
							style: { width: `${enemy.hp / enemy.maxHp * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex justify-center gap-1 text-[9px] uppercase tracking-wider text-muted",
						children: [
							enemy.strength !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Str ", enemy.strength] }),
							enemy.weak > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Wk ", enemy.weak] }),
							enemy.vulnerable > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Vuln ", enemy.vulnerable] })
						]
					})
				]
			})
		]
	});
}
function IntentBadge({ intent, strength, weak, targetVuln, kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1 rounded-full border border-border bg-surface/90 px-2 py-0.5 text-xs tabular-nums",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(kind === "attack" || kind === "mixed" ? Swords : kind === "defend" ? Shield : kind === "buff" ? ArrowUp : kind === "debuff" ? ArrowDown : Sparkles, {
			className: "size-3.5",
			strokeWidth: 1.75
		}), intentLabel(intent, strength, weak, targetVuln)]
	});
}
var ICONS = {
	combat: Swords,
	elite: Skull,
	event: BookOpen,
	rest: Flame,
	shop: Store,
	boss: Crown
};
function MapScreen() {
	const run = useGame((s) => s.run);
	const selectNode = useGame((s) => s.selectNode);
	const rows = nodesByRow(run.map);
	const avail = new Set(availableNodes(run.map, run.currentNodeId, run.visited).map((n) => n.id));
	const visited = new Set(run.visited);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs uppercase tracking-[0.2em] text-muted mb-2",
					children: "The descent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-subtle tabular-nums mb-6",
					children: run.row < 0 ? "Choose a first landing" : `Landing ${run.row + 1} of ${rows.length}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute left-1/2 top-3 bottom-3 w-px bg-border",
						"aria-hidden": true
					}), rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex justify-center gap-4 sm:gap-8",
						children: row.map((node) => {
							const Icon = ICONS[node.type];
							const isAvail = avail.has(node.id);
							const isDone = visited.has(node.id);
							const isHere = run.currentNodeId === node.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: !isAvail,
								onClick: () => selectNode(node.id),
								className: cn("flex flex-col items-center gap-1.5 min-w-[4.5rem] group", !isAvail && !isDone && "opacity-30"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("size-12 sm:size-14 rounded-md border flex items-center justify-center transition-transform duration-(--motion-fast) ease-(--ease-out)", isAvail && "border-accent bg-elevated text-fg ring-2 ring-accent/35 group-hover:-translate-y-0.5", isHere && "border-fg bg-elevated", isDone && !isHere && "border-border bg-surface text-muted", !isAvail && !isDone && "border-border bg-bg", node.type === "boss" && "size-14 sm:size-16 rounded-lg"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										strokeWidth: 1.6
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-[10px] uppercase tracking-[0.14em]", isAvail ? "text-fg" : "text-muted"),
									children: NODE_LABEL[node.type]
								})]
							}, node.id);
						})
					}, i))]
				})
			]
		})
	});
}
function TitleScreen() {
	const meta = useGame((s) => s.meta);
	const newDescent = useGame((s) => s.newDescent);
	const continueRun = useGame((s) => s.continueRun);
	const setScreen = useGame((s) => s.setScreen);
	const toggleMute = useGame((s) => s.toggleMute);
	const [hasSave, setHasSave] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setHasSave(!!loadRun());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/game/chamber.jpg",
				alt: "",
				className: "size-full object-cover opacity-50"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/50" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WellMark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-8 font-display text-5xl sm:text-7xl tracking-tight text-balance",
					children: "Sepulcher"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-sm text-center text-muted text-pretty leading-relaxed",
					children: "A roguelike deckbuilder. Descend the sealed tomb, play your rites, and do not look back."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex w-full max-w-xs flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							className: "w-full",
							onClick: newDescent,
							children: "Descend"
						}),
						hasSave && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "secondary",
							className: "w-full",
							onClick: continueRun,
							children: "Continue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "ghost",
							className: "w-full",
							onClick: () => setScreen("howto"),
							children: "How to play"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex items-center gap-4 text-xs tabular-nums text-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						meta.wins,
						" sealed · ",
						meta.losses,
						" lost",
						meta.bestRow >= 0 ? ` · deepest ${meta.bestRow + 1}` : ""
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "size-10 flex items-center justify-center hover:text-fg",
						onClick: () => {
							unlockAudio();
							toggleMute();
						},
						"aria-label": meta.mute ? "Unmute" : "Mute",
						children: meta.mute ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
					})]
				})
			]
		})]
	});
}
function HowToScreen() {
	const setScreen = useGame((s) => s.setScreen);
	const run = useGame((s) => s.run);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg text-fg px-6 py-10 flex flex-col items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: "How to play"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-6 space-y-5 text-sm text-muted leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "Energy and rites."
						}), " Each turn you have three energy. Play cards from your hand to spend it. Attacks deal damage; skills gain Block."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "Intents."
						}), " Enemies show their next action above their portrait. Block absorbs damage before your life does, then clears at the start of your turn."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "The map."
						}), " After each chamber, choose a path: fights, elites, a merchant, a rest, or an unknown. The Pale Warden waits at the bottom."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "Relics."
						}), " Permanent gifts. Elites and the Warden drop them. Rest to heal or upgrade a card."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "Keys."
						}), " 1–9 play cards in hand. E or Enter ends the turn. Escape cancels targeting."] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-8 w-full",
					onClick: () => setScreen(run ? "map" : "title"),
					children: "Return"
				})
			]
		})
	});
}
function RewardScreen() {
	const reward = useGame((s) => s.reward);
	const pickRewardCard = useGame((s) => s.pickRewardCard);
	const skipRewardCard = useGame((s) => s.skipRewardCard);
	const takeRelic = useGame((s) => s.takeRelic);
	const takePotion = useGame((s) => s.takePotion);
	const skipPotion = useGame((s) => s.skipPotion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-center",
					children: "Spoils"
				}),
				reward.gold > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-center text-sm text-muted tabular-nums",
					children: [
						"+",
						reward.gold,
						" gold"
					]
				}),
				!reward.pickedCard && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs uppercase tracking-[0.16em] text-muted mb-4",
							children: "Choose a rite"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-3",
							children: reward.cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardView, {
								card: c,
								size: "reward",
								onClick: () => pickRewardCard(c.uid)
							}, c.uid))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								onClick: skipRewardCard,
								children: "Skip"
							})
						})
					]
				}),
				reward.relic && !reward.pickedRelic && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 mx-auto max-w-sm rounded-lg border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: "Relic"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl",
							children: RELIC_BY_ID[reward.relic]?.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: RELIC_BY_ID[reward.relic]?.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4 w-full",
							onClick: takeRelic,
							children: "Take"
						})
					]
				}),
				reward.potion && !reward.pickedPotion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 mx-auto max-w-sm rounded-lg border border-border bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: "Potion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl",
							children: POTION_BY_ID[reward.potion]?.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: POTION_BY_ID[reward.potion]?.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "flex-1",
								onClick: takePotion,
								children: "Take"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "flex-1",
								variant: "secondary",
								onClick: skipPotion,
								children: "Skip"
							})]
						})
					]
				})
			]
		})
	});
}
function ShopScreen() {
	const run = useGame((s) => s.run);
	const shop = run.shop;
	const buyCard = useGame((s) => s.buyCard);
	const buyRelic = useGame((s) => s.buyRelic);
	const buyPotion = useGame((s) => s.buyPotion);
	const shopRemove = useGame((s) => s.shopRemove);
	const leaveShop = useGame((s) => s.leaveShop);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-center",
					children: "Merchant"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-center text-sm text-muted tabular-nums",
					children: [run.gold, " gold"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs uppercase tracking-[0.16em] text-muted",
					children: "Rites"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-3 justify-center",
					children: shop.cards.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardView, {
						card: o.item,
						size: "reward",
						price: o.price,
						dimmed: o.sold || run.gold < o.price,
						playable: !o.sold && run.gold >= o.price,
						onClick: () => buyCard(i)
					}, o.item.uid))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs uppercase tracking-[0.16em] text-muted",
					children: "Relics"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: shop.relics.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferRow, {
						title: RELIC_BY_ID[o.item]?.name ?? o.item,
						text: RELIC_BY_ID[o.item]?.text ?? "",
						price: o.price,
						sold: o.sold,
						canAfford: run.gold >= o.price,
						onBuy: () => buyRelic(i)
					}, o.item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs uppercase tracking-[0.16em] text-muted",
					children: "Potions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: shop.potions.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferRow, {
						title: POTION_BY_ID[o.item]?.name ?? o.item,
						text: POTION_BY_ID[o.item]?.text ?? "",
						price: o.price,
						sold: o.sold,
						canAfford: run.gold >= o.price && run.potions.some((p) => p === null),
						onBuy: () => buyPotion(i)
					}, `${o.item}-${i}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col sm:flex-row gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						className: "flex-1",
						disabled: shop.removed || run.gold < shop.removePrice,
						onClick: shopRemove,
						children: [
							"Remove a card · ",
							shop.removePrice,
							"g"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "flex-1",
						onClick: leaveShop,
						children: "Leave"
					})]
				})
			]
		})
	});
}
function OfferRow({ title, text, price, sold, canAfford, onBuy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: sold || !canAfford,
		onClick: onBuy,
		className: cn("text-left rounded-md border border-border bg-surface p-3", (sold || !canAfford) && "opacity-40"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm tabular-nums",
				children: sold ? "Sold" : `${price}g`
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted",
			children: text
		})]
	});
}
function RestScreen() {
	const rest = useGame((s) => s.rest);
	const run = useGame((s) => s.run);
	const healAmt = Math.ceil(run.maxHp * .3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-center",
					children: "A cold hearth"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-sm text-muted",
					children: "Rest, or rewrite a rite."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						className: "w-full h-auto py-4",
						onClick: () => rest("heal"),
						children: ["Rest · heal ", healAmt]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						className: "w-full h-auto py-4",
						onClick: () => rest("upgrade"),
						children: "Inscribe · upgrade a card"
					})]
				})
			]
		})
	});
}
function EventScreen() {
	const event = useGame((s) => s.event);
	const run = useGame((s) => s.run);
	const chooseEvent = useGame((s) => s.chooseEvent);
	const leaveEvent = useGame((s) => s.leaveEvent);
	const def = EVENT_BY_ID[event.defId];
	if (!def) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: def.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted leading-relaxed text-pretty",
					children: def.body
				}),
				event.resolved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-fg",
					children: event.result
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6 w-full",
					onClick: leaveEvent,
					children: "Continue"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-2",
					children: def.choices.map((c) => {
						const locked = c.requireGold !== void 0 && run.gold < c.requireGold;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: locked,
							onClick: () => chooseEvent(c.id),
							className: "text-left rounded-md border border-border bg-surface p-3 disabled:opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: c.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted mt-0.5",
								children: c.hint
							})]
						}, c.id);
					})
				})
			]
		})
	});
}
function PickerScreen() {
	const run = useGame((s) => s.run);
	const picker = useGame((s) => s.picker);
	const pickCard = useGame((s) => s.pickCard);
	const cards = picker.mode === "upgrade" ? run.deck.filter((c) => !c.upgraded && !defOf(c).unplayable) : run.deck;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-center",
					children: picker.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-center text-sm text-muted",
					children: picker.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardView, {
						card: c,
						size: "mini",
						onClick: () => pickCard(c.uid)
					}, c.uid)), cards.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Nothing eligible."
					})]
				}),
				cards.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => useGame.getState().setScreen("map"),
						children: "Continue"
					})
				})
			]
		})
	});
}
function EndScreen({ win }) {
	const run = useGame((s) => s.run);
	const newDescent = useGame((s) => s.newDescent);
	const setScreen = useGame((s) => s.setScreen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/game/chamber.jpg",
				alt: "",
				className: "size-full object-cover opacity-40"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/55" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl sm:text-6xl text-balance",
					children: win ? "The tomb is quiet" : "Interred"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-sm text-center text-muted text-pretty",
					children: win ? "The Pale Warden falls. Your name holds. For now." : "The well keeps what it is given."
				}),
				run && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid grid-cols-2 gap-x-8 gap-y-2 text-sm tabular-nums",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Depth"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: run.row + 1 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: run.gold }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Relics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: run.relics.length }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Deck"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: run.deck.length }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Damage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: run.damageDealt })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex w-full max-w-xs flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "w-full",
						onClick: newDescent,
						children: "Descend again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "ghost",
						className: "w-full",
						onClick: () => setScreen("title"),
						children: "Title"
					})]
				})
			]
		})]
	});
}
function TopBar() {
	const run = useGame((s) => s.run);
	const setDeckOpen = useGame((s) => s.setDeckOpen);
	const setMenuOpen = useGame((s) => s.setMenuOpen);
	const meta = useGame((s) => s.meta);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center gap-3 px-3 sm:px-5 py-2.5 border-b border-border bg-bg/90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg tracking-tight",
			children: "Sepulcher"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ml-auto flex items-center gap-3 text-xs tabular-nums text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					run.hp,
					"/",
					run.maxHp
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [run.gold, "g"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "hover:text-fg",
					onClick: () => setDeckOpen(true),
					children: ["Deck ", run.deck.length]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "size-10 flex items-center justify-center hover:text-fg",
					onClick: () => setMenuOpen(true),
					"aria-label": "Menu",
					children: meta.mute ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
				})
			]
		})]
	});
}
function Overlays() {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		inspect && combat && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
			title: inspect === "draw" ? "Draw pile" : inspect === "discard" ? "Discard" : "Exhaust",
			onClose: () => setInspect(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted mb-3",
				children: inspect === "draw" ? "Order hidden." : "Newest last."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2 justify-center max-h-[60vh] overflow-y-auto",
				children: [(inspect === "draw" ? [...combat.drawPile].sort((a, b) => a.defId.localeCompare(b.defId)) : inspect === "discard" ? combat.discardPile : combat.exhaustPile).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardView, {
					card: c,
					size: "mini"
				}, c.uid)), (inspect === "draw" ? combat.drawPile : inspect === "discard" ? combat.discardPile : combat.exhaustPile).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Empty."
				})]
			})]
		}),
		deckOpen && run && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
			title: "Deck",
			onClose: () => setDeckOpen(false),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 justify-center max-h-[60vh] overflow-y-auto",
				children: run.deck.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardView, {
					card: c,
					size: "mini"
				}, c.uid))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted mb-2",
					children: "Relics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1 text-sm",
					children: run.relics.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: RELIC_BY_ID[id]?.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted",
						children: [" — ", RELIC_BY_ID[id]?.text]
					})] }, id))
				})]
			})]
		}),
		menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
			title: "Menu",
			onClose: () => setMenuOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: () => {
							unlockAudio();
							toggleMute();
						},
						children: meta.mute ? "Sound off" : "Sound on"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: toggleShake,
						children: meta.shake ? "Shake on" : "Shake off"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: () => {
							setMenuOpen(false);
							setScreen("howto");
						},
						children: "How to play"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "danger",
						onClick: abandon,
						children: "Abandon run"
					})
				]
			})
		})
	] });
}
function Modal({ title, onClose, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-bg/80",
			"aria-label": "Close",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": true,
			"aria-label": title,
			className: "relative w-full max-w-lg rounded-t-xl sm:rounded-xl border border-border bg-surface p-5 max-h-[88vh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: onClose,
					children: "Close"
				})]
			}), children]
		})]
	});
}
function WellMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 48",
		className: "w-24 text-fg/70",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.2",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 44 V22 C8 10 20 4 40 4 C60 4 72 10 72 22 V44" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 44 V26 C20 16 28 12 40 12 C52 12 60 16 60 26 V44" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 44 V30 C32 24 36 22 40 22 C44 22 48 24 48 30 V44" })
		]
	});
}
function GameApp() {
	const ready = useGame((s) => s.ready);
	const screen = useGame((s) => s.screen);
	const combat = useGame((s) => s.combat);
	const run = useGame((s) => s.run);
	const reward = useGame((s) => s.reward);
	const event = useGame((s) => s.event);
	const picker = useGame((s) => s.picker);
	const hydrate = useGame((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let last = performance.now();
		const loop = (t) => {
			const dt = Math.min(.1, (t - last) / 1e3);
			last = t;
			const s = useGame.getState().shake;
			if (s > .001) useGame.setState({ shake: Math.max(0, s - dt * 2.4) });
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, []);
	if (!ready || screen === "title") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {});
	if (screen === "howto") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowToScreen, {});
	if (screen === "gameover") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndScreen, { win: false });
	if (screen === "victory") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndScreen, { win: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			screen === "map" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapScreen, {}),
			screen === "combat" && combat && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombatScreen, {}),
			screen === "reward" && reward && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RewardScreen, {}),
			screen === "shop" && run?.shop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopScreen, {}),
			screen === "rest" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RestScreen, {}),
			screen === "event" && event && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventScreen, {}),
			screen === "picker" && picker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerScreen, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlays, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameApp, {});
}
//#endregion
export { Home as component };
