import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowDown, a as Store, c as Shield, d as ImageOff, f as Heart, g as ArrowUp, h as BookOpen, i as Swords, l as Layers, m as Crown, n as Volume2, o as Sparkles, p as Flame, s as Skull, t as VolumeX, u as Image } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B-IUzVdg.js
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
		numbers: (up) => ({ block: up ? 9 : 6 })
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
		id: "dirge",
		name: "Dirge",
		type: "attack",
		rarity: "starter",
		cost: 1,
		target: "enemy",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.weak} Weak.`,
		numbers: (up) => ({
			damage: up ? 6 : 4,
			weak: up ? 2 : 1
		})
	},
	{
		id: "fade",
		name: "Fade",
		type: "skill",
		rarity: "starter",
		cost: 1,
		target: "self",
		special: "acrobatics",
		text: (n) => `Gain ${n.block} Block. Discard a random card.`,
		numbers: (up) => ({ block: up ? 12 : 9 })
	},
	{
		id: "ember",
		name: "Ember",
		type: "skill",
		rarity: "starter",
		cost: 1,
		target: "self",
		summon: "ember",
		classId: "kindled",
		text: (n) => n.stageBonus ? "Call Ember at II. Play again to Evolve (max III). At III, Call again to Surge." : "Call Ember. Play again to Evolve (I→II→III). At III, Call again to Surge.",
		numbers: (up) => up ? { stageBonus: 1 } : {}
	},
	{
		id: "rime",
		name: "Rime",
		type: "skill",
		rarity: "starter",
		cost: 1,
		target: "self",
		summon: "rime",
		classId: "kindled",
		text: (n) => n.stageBonus ? "Call Rime at II. Play again to Evolve (max III). At III, Call again to Surge." : "Call Rime. Play again to Evolve (I→II→III). At III, Call again to Surge.",
		numbers: (up) => up ? { stageBonus: 1 } : {}
	},
	{
		id: "spark",
		name: "Spark",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		summon: "spark",
		classId: "kindled",
		text: (n) => n.stageBonus ? "Call Spark at II. Play again to Evolve (max III). At III, Call again to Surge." : "Call Spark. Play again to Evolve (I→II→III). At III, Call again to Surge.",
		numbers: (up) => up ? { stageBonus: 1 } : {}
	},
	{
		id: "gloom",
		name: "Gloom",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		summon: "gloom",
		classId: "kindled",
		text: (n) => n.stageBonus ? "Call Gloom at II. Play again to Evolve (max III). At III, Call again to Surge." : "Call Gloom. Play again to Evolve (I→II→III). At III, Call again to Surge.",
		numbers: (up) => up ? { stageBonus: 1 } : {}
	},
	{
		id: "unleash",
		name: "Unleash",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		special: "evokeLeft",
		classId: "kindled",
		text: () => "Evoke your leftmost familiar.",
		numbers: (up) => up ? { energy: 1 } : {}
	},
	{
		id: "pulse",
		name: "Pulse",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		special: "pulseFamiliars",
		classId: "kindled",
		text: () => "Your familiars pulse.",
		numbers: (up) => up ? { draw: 1 } : {}
	},
	{
		id: "feed",
		name: "Feed the Bond",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		special: "evolveAll",
		exhaust: true,
		classId: "kindled",
		text: () => "Evolve each familiar once. Exhaust.",
		numbers: () => ({})
	},
	{
		id: "twin_call",
		name: "Twin Call",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		summon: "twin",
		classId: "kindled",
		text: (n) => n.stageBonus ? "Call Ember and Rime at stage 2." : "Call Ember and Rime.",
		numbers: (up) => up ? { stageBonus: 1 } : {}
	},
	{
		id: "kennel",
		name: "Kennel",
		type: "power",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		special: "extraSlot",
		classId: "kindled",
		text: (n) => `Gain ${n.stageBonus ?? 1} familiar slot.`,
		numbers: (up) => ({ stageBonus: up ? 2 : 1 })
	},
	{
		id: "primeval",
		name: "Primeval Pack",
		type: "skill",
		rarity: "rare",
		cost: 2,
		target: "self",
		summon: "all",
		exhaust: true,
		classId: "kindled",
		text: () => "Call Ember, Rime, Gloom, and Spark. Exhaust.",
		numbers: () => ({})
	},
	{
		id: "ashen_gift",
		name: "Ashen Gift",
		type: "skill",
		rarity: "common",
		cost: 0,
		target: "self",
		exhaust: true,
		neutral: true,
		text: (n) => `Draw ${n.draw}. Exhaust.`,
		numbers: (up) => ({ draw: up ? 3 : 2 })
	},
	{
		id: "pale_coin",
		name: "Pale Coin",
		type: "skill",
		rarity: "common",
		cost: 0,
		target: "self",
		exhaust: true,
		neutral: true,
		text: (n) => `Gain ${n.gold} gold. Exhaust.`,
		numbers: (up) => ({ gold: up ? 25 : 16 })
	},
	{
		id: "pall",
		name: "Pall",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		neutral: true,
		text: (n) => `Gain ${n.block} Block. Draw ${n.draw}.`,
		numbers: (up) => ({
			block: up ? 12 : 9,
			draw: 1
		})
	},
	{
		id: "harrow",
		name: "Harrow",
		type: "skill",
		rarity: "common",
		cost: 0,
		target: "self",
		special: "discardRand",
		neutral: true,
		text: (n) => `Discard a random card. Draw ${n.draw}.`,
		numbers: (up) => ({ draw: up ? 3 : 2 })
	},
	{
		id: "jester",
		name: "Jester",
		type: "attack",
		rarity: "common",
		cost: 0,
		target: "enemy",
		exhaust: true,
		neutral: true,
		text: (n) => `Deal ${n.damage} damage. Exhaust.`,
		numbers: (up) => ({ damage: up ? 12 : 9 })
	},
	{
		id: "chime",
		name: "Chime",
		type: "skill",
		rarity: "uncommon",
		cost: 0,
		target: "self",
		exhaust: true,
		neutral: true,
		text: (n) => `Gain ${n.energy} Energy. Exhaust.`,
		numbers: (up) => ({ energy: up ? 2 : 1 })
	},
	{
		id: "omen",
		name: "Omen",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "all",
		exhaust: true,
		neutral: true,
		text: (n) => `Apply ${n.weak} Weak and ${n.vulnerable} Vulnerable to ALL. Exhaust.`,
		numbers: (up) => ({
			weak: up ? 3 : 2,
			vulnerable: up ? 3 : 2
		})
	},
	{
		id: "reprise",
		name: "Reprise",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		special: "reprise",
		neutral: true,
		text: () => "Put a random card from your discard pile into your hand.",
		numbers: () => ({})
	},
	{
		id: "last_word",
		name: "Last Word",
		type: "attack",
		rarity: "uncommon",
		cost: 1,
		target: "enemy",
		special: "lastWord",
		neutral: true,
		text: (n) => `Deal ${n.damage} damage. If Fatal, gain 2 Energy.`,
		numbers: (up) => ({ damage: up ? 14 : 11 })
	},
	{
		id: "masquerade",
		name: "Masquerade",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		special: "blockPerAttack",
		neutral: true,
		text: (n) => `Gain ${n.block} Block for each Attack in your hand.`,
		numbers: (up) => ({ block: up ? 7 : 5 })
	},
	{
		id: "the_toll",
		name: "The Toll",
		type: "attack",
		rarity: "uncommon",
		cost: 2,
		target: "enemy",
		neutral: true,
		text: (n) => `Deal ${n.damage} damage ${n.hits} times.`,
		numbers: (up) => ({
			damage: up ? 7 : 6,
			hits: 3
		})
	},
	{
		id: "gild",
		name: "Gild",
		type: "skill",
		rarity: "rare",
		cost: 1,
		target: "self",
		special: "handUpgrade",
		exhaust: true,
		neutral: true,
		text: () => "Upgrade a random card in your hand. Exhaust.",
		numbers: () => ({})
	},
	{
		id: "burial",
		name: "Burial",
		type: "attack",
		rarity: "rare",
		cost: 2,
		target: "all",
		exhaust: true,
		neutral: true,
		text: (n) => `Deal ${n.damage} damage to ALL enemies. Exhaust.`,
		numbers: (up) => ({ damage: up ? 22 : 16 })
	},
	{
		id: "cleave",
		name: "Cleave",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "all",
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
		text: (n) => `Gain ${n.block} Block. Deal ${n.damage} damage.`,
		numbers: (up) => ({
			block: up ? 8 : 6,
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
		text: (n) => `Gain ${n.block} Block. Draw 1.`,
		numbers: (up) => ({
			block: up ? 12 : 9,
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
		classId: "interred",
		text: (n) => `Gain ${n.block} Block. Exhaust a random card in your hand.`,
		numbers: (up) => ({ block: up ? 10 : 8 })
	},
	{
		id: "acrobatics",
		name: "Acrobatics",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "none",
		special: "acrobatics",
		classId: "veil",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "veil",
		text: (n) => `Gain ${n.block} Block. Ethereal.`,
		numbers: (up) => ({ block: up ? 14 : 11 })
	},
	{
		id: "bloodletting",
		name: "Bloodletting",
		type: "skill",
		rarity: "uncommon",
		cost: 0,
		target: "self",
		special: "bloodletting",
		classId: "interred",
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
		classId: "interred",
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
		classId: "veil",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
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
		classId: "interred",
		text: (n) => `Gain ${n.block} Block. Exhaust.`,
		numbers: (up) => ({ block: up ? 41 : 31 })
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
		classId: "interred",
		text: (n) => `Deal ${n.damage} damage to ALL enemies. Add a Wound to your discard. Exhaust.`,
		numbers: (up) => ({ damage: up ? 28 : 21 })
	},
	{
		id: "maul",
		name: "Maul",
		type: "attack",
		rarity: "uncommon",
		cost: 2,
		target: "enemy",
		classId: "interred",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.daze} Daze.`,
		numbers: (up) => ({
			damage: up ? 16 : 12,
			daze: 1
		})
	},
	{
		id: "flail",
		name: "Flail",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		classId: "interred",
		text: (n) => `Deal ${n.damage} damage ${n.hits} times.`,
		numbers: (up) => ({
			damage: up ? 4 : 3,
			hits: 3
		})
	},
	{
		id: "execution",
		name: "Execution",
		type: "attack",
		rarity: "rare",
		cost: 2,
		target: "enemy",
		special: "execute",
		classId: "interred",
		text: (n) => `Deal ${n.damage} damage. If Fatal, heal ${n.heal}.`,
		numbers: (up) => ({
			damage: up ? 20 : 16,
			heal: 7
		})
	},
	{
		id: "needle",
		name: "Needle",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		classId: "veil",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.toxin} Toxin.`,
		numbers: (up) => ({
			damage: up ? 5 : 3,
			toxin: up ? 4 : 3
		})
	},
	{
		id: "nightshade",
		name: "Nightshade",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "enemy",
		classId: "veil",
		text: (n) => `Apply ${n.toxin} Toxin.`,
		numbers: (up) => ({ toxin: up ? 7 : 5 })
	},
	{
		id: "bile",
		name: "Bile",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "all",
		classId: "veil",
		text: (n) => `Apply ${n.toxin} Toxin to ALL enemies.`,
		numbers: (up) => ({ toxin: up ? 4 : 3 })
	},
	{
		id: "garrote",
		name: "Garrote",
		type: "attack",
		rarity: "uncommon",
		cost: 1,
		target: "enemy",
		classId: "veil",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.daze} Daze.`,
		numbers: (up) => ({
			damage: up ? 8 : 5,
			daze: 1
		})
	},
	{
		id: "cloud",
		name: "Moth Cloud",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "all",
		classId: "veil",
		text: (n) => `Apply ${n.toxin} Toxin and ${n.weak} Weak to ALL.`,
		numbers: (up) => ({
			toxin: up ? 3 : 2,
			weak: up ? 2 : 1
		})
	},
	{
		id: "catnap",
		name: "Catnap",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "enemy",
		exhaust: true,
		classId: "veil",
		text: (n) => `Apply ${n.daze} Daze. Exhaust.`,
		numbers: (up) => ({ daze: up ? 2 : 1 })
	},
	{
		id: "venom",
		name: "Venom",
		type: "power",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		special: "envenom",
		classId: "veil",
		text: (n) => `Whenever you play an Attack, apply ${n.toxin} Toxin.`,
		numbers: (up) => ({ toxin: up ? 3 : 2 })
	},
	{
		id: "draught",
		name: "Draught",
		type: "skill",
		rarity: "common",
		cost: 0,
		target: "enemy",
		exhaust: true,
		classId: "veil",
		text: (n) => `Apply ${n.toxin} Toxin. Exhaust.`,
		numbers: (up) => ({ toxin: up ? 6 : 4 })
	},
	{
		id: "bind",
		name: "Bind",
		type: "attack",
		rarity: "rare",
		cost: 2,
		target: "enemy",
		classId: "veil",
		text: (n) => `Deal ${n.damage}. Apply ${n.daze} Daze and ${n.toxin} Toxin.`,
		numbers: (up) => ({
			damage: up ? 13 : 10,
			daze: 1,
			toxin: up ? 5 : 3
		})
	},
	{
		id: "miasma",
		name: "Miasma",
		type: "skill",
		rarity: "rare",
		cost: 2,
		target: "all",
		exhaust: true,
		classId: "veil",
		text: (n) => `Apply ${n.toxin} Toxin to ALL enemies. Exhaust.`,
		numbers: (up) => ({ toxin: up ? 10 : 7 })
	},
	{
		id: "scorch",
		name: "Scorch",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		classId: "kindled",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.cinder} Cinder.`,
		numbers: (up) => ({
			damage: up ? 8 : 6,
			cinder: up ? 4 : 3
		})
	},
	{
		id: "kindle",
		name: "Kindle",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "enemy",
		classId: "kindled",
		text: (n) => `Apply ${n.cinder} Cinder.`,
		numbers: (up) => ({ cinder: up ? 7 : 5 })
	},
	{
		id: "wildfire",
		name: "Wildfire",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "all",
		classId: "kindled",
		text: (n) => `Apply ${n.cinder} Cinder to ALL enemies.`,
		numbers: (up) => ({ cinder: up ? 4 : 3 })
	},
	{
		id: "afterburn",
		name: "Afterburn",
		type: "power",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		special: "afterburn",
		classId: "kindled",
		text: (n) => `At the end of your turn, apply ${n.cinder} Cinder to ALL enemies.`,
		numbers: (up) => ({ cinder: up ? 3 : 2 })
	},
	{
		id: "cinder_whip",
		name: "Cinder Whip",
		type: "attack",
		rarity: "uncommon",
		cost: 1,
		target: "enemy",
		special: "cinderBonus",
		classId: "kindled",
		text: (n) => `Deal ${n.damage} damage. If it has Cinder, deal ${n.damage} again.`,
		numbers: (up) => ({ damage: up ? 10 : 8 })
	},
	{
		id: "pyre_breath",
		name: "Pyre Breath",
		type: "attack",
		rarity: "rare",
		cost: 2,
		target: "all",
		classId: "kindled",
		text: (n) => `Deal ${n.damage} to ALL. Apply ${n.cinder} Cinder to ALL.`,
		numbers: (up) => ({
			damage: up ? 13 : 10,
			cinder: 3
		})
	},
	{
		id: "shield_bash",
		name: "Shield Bash",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		special: "shieldBash",
		classId: "interred",
		text: (n) => `Gain ${n.block} Block. If you gained Block this turn, deal ${n.bonus} to a random enemy.`,
		numbers: (up) => ({
			block: up ? 8 : 6,
			bonus: up ? 4 : 3
		})
	},
	{
		id: "rally",
		name: "Rally to the Front",
		type: "skill",
		rarity: "uncommon",
		cost: 2,
		target: "self",
		classId: "interred",
		text: (n) => `Gain ${n.block} Block. Gain ${n.strength} Strength.`,
		numbers: (up) => ({
			block: up ? 15 : 11,
			strength: up ? 2 : 1
		})
	},
	{
		id: "overhead",
		name: "Overhead Breaker",
		type: "attack",
		rarity: "uncommon",
		cost: 2,
		target: "enemy",
		special: "overhead",
		classId: "interred",
		text: (n) => `Deal ${n.damage} damage. If the target has Weak, deal ${n.bonus} more.`,
		numbers: (up) => ({
			damage: up ? 13 : 10,
			bonus: up ? 8 : 6
		})
	},
	{
		id: "bastion",
		name: "Bastion Protocol",
		type: "power",
		rarity: "rare",
		cost: 3,
		target: "self",
		special: "bastion",
		classId: "interred",
		text: (n) => `At the start of your turn, gain ${n.metallicize} Block. Whenever you gain Block, gain ${n.bonus} additional Block.`,
		numbers: (up) => ({
			metallicize: up ? 3 : 2,
			bonus: up ? 2 : 1
		})
	},
	{
		id: "groundbreaker",
		name: "Groundbreaker",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		classId: "interred",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.vulnerable} Vulnerable.`,
		numbers: (up) => ({
			damage: up ? 10 : 7,
			vulnerable: up ? 2 : 1
		})
	},
	{
		id: "counterfeit",
		name: "Counterfeit Confidence",
		type: "skill",
		rarity: "uncommon",
		cost: 0,
		target: "self",
		special: "counterfeit",
		classId: "veil",
		text: (n) => `Draw ${n.draw}. Gain ${n.dexterity} Dexterity. If you have 0 Energy, lose ${n.hpLoss} HP.`,
		numbers: (up) => ({
			draw: up ? 2 : 1,
			dexterity: 1,
			hpLoss: up ? 2 : 1
		})
	},
	{
		id: "backstep",
		name: "Backstep Whirl",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		special: "backstep",
		classId: "veil",
		text: (n) => `Deal ${n.damage} damage. If you have Block, deal ${n.bonus} more.`,
		numbers: (up) => ({
			damage: up ? 8 : 6,
			bonus: up ? 4 : 3
		})
	},
	{
		id: "coin_flip",
		name: "Coin-Flip Sleight",
		type: "skill",
		rarity: "uncommon",
		cost: 0,
		target: "self",
		special: "coinFlip",
		classId: "veil",
		text: (n) => `Draw ${n.draw}. Lose ${n.hpLoss} HP. 50%: gain ${n.dexterity} Dexterity.`,
		numbers: (up) => ({
			draw: up ? 3 : 2,
			hpLoss: 1,
			dexterity: up ? 2 : 1
		})
	},
	{
		id: "vial_dagger",
		name: "Vial Dagger",
		type: "attack",
		rarity: "uncommon",
		cost: 2,
		target: "enemy",
		classId: "veil",
		text: (n) => `Deal ${n.damage} damage. Apply ${n.toxin} Toxin.`,
		numbers: (up) => ({
			damage: up ? 10 : 8,
			toxin: up ? 3 : 2
		})
	},
	{
		id: "smoke",
		name: "Smoke & Mirrors",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		special: "smoke",
		classId: "veil",
		text: (n) => `Gain ${n.block} Block. Attacks this turn grant ${n.bonus} Block after they resolve.`,
		numbers: (up) => ({
			block: up ? 12 : 9,
			bonus: up ? 3 : 2
		})
	},
	{
		id: "prism_pulse",
		name: "Prism Pulse",
		type: "power",
		rarity: "uncommon",
		cost: 2,
		target: "self",
		special: "prism",
		classId: "kindled",
		text: (n) => `Gain ${n.focus} Focus. Once per turn, when you play an Attack, deal ${n.plasma} Plasma to a random enemy.`,
		numbers: (up) => ({
			focus: up ? 2 : 1,
			plasma: up ? 6 : 4
		})
	},
	{
		id: "neural_reboot",
		name: "Neural Reboot",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		special: "reboot",
		classId: "kindled",
		text: (n) => `Draw ${n.draw}. If you have no Focus, gain 1 Focus. Otherwise, gain ${n.energy} Energy.`,
		numbers: (up) => ({
			draw: up ? 3 : 2,
			focus: 1,
			energy: up ? 2 : 1
		})
	},
	{
		id: "voltage",
		name: "Voltage Surge",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		special: "voltage",
		classId: "kindled",
		text: (n) => `Deal ${n.damage} damage. If Fatal, gain ${n.strength} Strength and 1 Focus.`,
		numbers: (up) => ({
			damage: up ? 8 : 6,
			strength: up ? 2 : 1,
			focus: 1
		})
	},
	{
		id: "channel_spark",
		name: "Channeled Fracture",
		type: "skill",
		rarity: "uncommon",
		cost: 2,
		target: "self",
		special: "channelSpark",
		classId: "kindled",
		text: (n) => `Call Spark ${n.stageBonus} times. Deal ${n.bonus} damage to a random enemy.`,
		numbers: (up) => ({
			stageBonus: up ? 3 : 2,
			bonus: up ? 4 : 2
		})
	},
	{
		id: "overheat",
		name: "Overheat Loop",
		type: "power",
		rarity: "rare",
		cost: 3,
		target: "self",
		special: "overheat",
		classId: "kindled",
		text: (n) => `Whenever you play a card, gain ${n.plasma} Plasma. If you play ${n.threshold}+ cards in a turn, deal 12 to a random enemy at end of turn.`,
		numbers: (up) => ({
			plasma: up ? 2 : 1,
			threshold: up ? 2 : 3
		})
	},
	{
		id: "bolt",
		name: "Bolt",
		type: "attack",
		rarity: "starter",
		cost: 1,
		target: "enemy",
		classId: "mage",
		text: (n) => `Deal ${n.damage} damage. Gain ${n.arcana} Arcana.`,
		numbers: (up) => ({
			damage: up ? 9 : 6,
			arcana: 1
		})
	},
	{
		id: "study",
		name: "Study",
		type: "skill",
		rarity: "starter",
		cost: 1,
		target: "self",
		classId: "mage",
		text: (n) => `Draw ${n.draw}. Gain ${n.arcana} Arcana.`,
		numbers: (up) => ({
			draw: up ? 2 : 1,
			arcana: 1
		})
	},
	{
		id: "fireball",
		name: "Fireball",
		type: "attack",
		rarity: "common",
		cost: 2,
		target: "enemy",
		special: "spendArcana",
		classId: "mage",
		text: (n) => `Deal ${n.damage} damage. Gain ${n.arcana} Arcana. If you have 3+ Arcana, spend 3 and deal ${n.bonus} more.`,
		numbers: (up) => ({
			damage: up ? 14 : 10,
			bonus: up ? 16 : 12,
			arcana: 1
		})
	},
	{
		id: "blizzard",
		name: "Blizzard",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "all",
		classId: "mage",
		text: (n) => `Apply ${n.weak} Weak to ALL. Gain ${n.arcana} Arcana.`,
		numbers: (up) => ({
			weak: up ? 2 : 1,
			arcana: 1
		})
	},
	{
		id: "thunder",
		name: "Thunder",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "enemy",
		special: "thunderArcana",
		classId: "mage",
		text: (n) => `Deal ${n.damage} damage. Gain ${n.arcana} Arcana. If you have 2+ Arcana, gain 1 Energy.`,
		numbers: (up) => ({
			damage: up ? 9 : 7,
			arcana: 1
		})
	},
	{
		id: "ice_lance",
		name: "Ice Lance",
		type: "attack",
		rarity: "uncommon",
		cost: 1,
		target: "enemy",
		special: "iceLance",
		classId: "mage",
		text: (n) => `Deal ${n.damage} damage. If you have 2+ Arcana, apply ${n.daze} Daze.`,
		numbers: (up) => ({
			damage: up ? 11 : 8,
			daze: 1
		})
	},
	{
		id: "mana_font",
		name: "Mana Font",
		type: "skill",
		rarity: "common",
		cost: 0,
		target: "self",
		exhaust: true,
		classId: "mage",
		text: (n) => `Gain ${n.arcana} Arcana. Exhaust.`,
		numbers: (up) => ({ arcana: up ? 3 : 2 })
	},
	{
		id: "discharge",
		name: "Discharge",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "all",
		special: "discharge",
		classId: "mage",
		text: (n) => `Deal ${n.damage} damage to ALL for each Arcana. Set Arcana to 0.`,
		numbers: (up) => ({ damage: up ? 7 : 5 })
	},
	{
		id: "arcane_barrier",
		name: "Arcane Barrier",
		type: "skill",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		classId: "mage",
		text: (n) => `Gain ${n.block} Block. Gain ${n.arcana} Arcana.`,
		numbers: (up) => ({
			block: up ? 12 : 9,
			arcana: 1
		})
	},
	{
		id: "sage",
		name: "Sage's Boon",
		type: "power",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		special: "sage",
		classId: "mage",
		text: () => "Whenever you play a Skill, gain 1 Arcana.",
		numbers: () => ({})
	},
	{
		id: "meteor",
		name: "Meteor",
		type: "attack",
		rarity: "rare",
		cost: 3,
		target: "all",
		exhaust: true,
		classId: "mage",
		text: (n) => `Deal ${n.damage} to ALL. Gain ${n.arcana} Arcana. Exhaust.`,
		numbers: (up) => ({
			damage: up ? 32 : 24,
			arcana: 2
		})
	},
	{
		id: "bite",
		name: "Bite",
		type: "attack",
		rarity: "starter",
		cost: 1,
		target: "enemy",
		classId: "vampire",
		text: (n) => `Deal ${n.damage} damage. Heal ${n.heal} HP.`,
		numbers: (up) => ({
			damage: up ? 8 : 5,
			heal: up ? 3 : 2
		})
	},
	{
		id: "lash",
		name: "Lash",
		type: "attack",
		rarity: "starter",
		cost: 1,
		target: "enemy",
		classId: "vampire",
		text: (n) => `Lose ${n.hpLoss} HP. Deal ${n.damage} damage.`,
		numbers: (up) => ({
			hpLoss: 2,
			damage: up ? 14 : 10
		})
	},
	{
		id: "drain",
		name: "Drain",
		type: "attack",
		rarity: "common",
		cost: 1,
		target: "all",
		special: "drainAll",
		classId: "vampire",
		text: (n) => `Deal ${n.damage} to ALL. Heal ${n.heal} HP per enemy hit.`,
		numbers: (up) => ({
			damage: up ? 6 : 4,
			heal: 1
		})
	},
	{
		id: "blood_shield",
		name: "Blood Shield",
		type: "skill",
		rarity: "common",
		cost: 1,
		target: "self",
		classId: "vampire",
		text: (n) => `Lose ${n.hpLoss} HP. Gain ${n.block} Block.`,
		numbers: (up) => ({
			hpLoss: 3,
			block: up ? 16 : 12
		})
	},
	{
		id: "sanguine",
		name: "Sanguine Pact",
		type: "skill",
		rarity: "uncommon",
		cost: 0,
		target: "self",
		exhaust: true,
		classId: "vampire",
		text: (n) => `Lose ${n.hpLoss} HP. Gain ${n.energy} Energy. Draw ${n.draw}. Exhaust.`,
		numbers: (up) => ({
			hpLoss: 4,
			energy: up ? 3 : 2,
			draw: 1
		})
	},
	{
		id: "feast",
		name: "Feast",
		type: "attack",
		rarity: "uncommon",
		cost: 2,
		target: "enemy",
		special: "feast",
		classId: "vampire",
		text: (n) => `Deal ${n.damage} damage. Heal HP equal to unblocked damage.`,
		numbers: (up) => ({ damage: up ? 13 : 9 })
	},
	{
		id: "hunger",
		name: "Night's Hunger",
		type: "power",
		rarity: "uncommon",
		cost: 1,
		target: "self",
		special: "hunger",
		classId: "vampire",
		text: (n) => `Whenever you play an Attack, heal ${n.heal} HP.`,
		numbers: (up) => ({ heal: up ? 2 : 1 })
	},
	{
		id: "crimson_tide",
		name: "Crimson Tide",
		type: "attack",
		rarity: "rare",
		cost: 1,
		target: "enemy",
		classId: "vampire",
		text: (n) => `Lose ${n.hpLoss} HP. Deal ${n.damage} damage.`,
		numbers: (up) => ({
			hpLoss: 5,
			damage: up ? 28 : 22
		})
	},
	{
		id: "exsanguinate",
		name: "Exsanguinate",
		type: "attack",
		rarity: "rare",
		cost: 2,
		target: "all",
		special: "drainAll",
		exhaust: true,
		classId: "vampire",
		text: (n) => `Deal ${n.damage} to ALL. Heal ${n.heal} HP per enemy hit. Exhaust.`,
		numbers: (up) => ({
			damage: up ? 12 : 8,
			heal: 2
		})
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
function rollCardRewards(rng, bias, count = 3, classId) {
	const poolAll = CARDS.filter((c) => {
		if (c.rarity !== "common" && c.rarity !== "uncommon" && c.rarity !== "rare") return false;
		if (c.classId && c.classId !== classId) return false;
		return true;
	});
	const out = [];
	const used = /* @__PURE__ */ new Set();
	let guard = 0;
	while (out.length < count && guard++ < 40) {
		const rarity = rollRarity(rng, bias);
		const pool = poolAll.filter((c) => c.rarity === rarity && !used.has(c.id));
		const fallback = poolAll.filter((c) => !used.has(c.id));
		const pick = (pool.length ? pool : fallback)[0] ? rng.pick(pool.length ? pool : fallback) : null;
		if (!pick) break;
		used.add(pick.id);
		out.push(mintCard(pick.id));
	}
	const nameless = CARDS.filter((c) => c.neutral && (c.rarity === "common" || c.rarity === "uncommon" || c.rarity === "rare") && !used.has(c.id));
	if (out.length && nameless.length && rng.chance(.32)) {
		const slot = rng.int(0, out.length - 1);
		const rarity = rollRarity(rng, bias);
		const pool = nameless.filter((c) => c.rarity === rarity);
		out[slot] = mintCard(rng.pick(pool.length ? pool : nameless).id);
	}
	return out;
}
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
		className: cn("relative flex flex-col text-left border transition-transform duration-(--motion-fast) ease-(--ease-out)", "bg-surface border-accent/35 text-fg shrink-0", compact ? "w-[5.5rem] h-[8.25rem] rounded-sm p-1.5" : size === "reward" ? "w-[9.5rem] h-[13.5rem] rounded-lg p-3" : "w-[7.75rem] h-[11.5rem] sm:w-[8.5rem] sm:h-[12.5rem] rounded-md p-2.5", playable && onClick && "hover:-translate-y-1.5 hover:z-10", selected && "ring-2 ring-accent border-accent -translate-y-2 z-10", (dimmed || !playable) && "opacity-45", d.type === "power" && "border-accent/35", d.neutral && "border-muted bg-elevated/80", d.type === "status" && "opacity-70"),
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
					children: d.neutral ? "Nameless" : TYPE_LABEL[d.type]
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
		case "dirge": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 38 V14 L32 10 V34" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 22 H32" })]
		});
		case "fade": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			strokeDasharray: "3 3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 36 C12 20 20 12 24 8 C28 12 36 20 36 36" })
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
		case "ember": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 C18 20 16 28 20 38 H28 C32 28 30 20 24 8 Z" })
		});
		case "rime": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 V42 M10 16 L38 32 M38 16 L10 32" })
		});
		case "spark": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 6 L14 26 H24 L20 42 L36 22 H26 Z" })
		});
		case "gloom": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "12"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "4"
			})]
		});
		case "unleash": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 24 H40 M24 8 V40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 14 L34 34 M34 14 L14 34" })]
		});
		case "pulse": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "6"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "14"
			})]
		});
		case "feed": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 40 L10 22 C8 14 16 10 24 18 C32 10 40 14 38 22 Z" })
		});
		case "twin_call": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "24",
				r: "8"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "24",
				r: "8"
			})]
		});
		case "kennel": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 40 V22 L24 10 L40 22 V40 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 40 V28 H30 V40" })]
		});
		case "primeval": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "16",
					r: "5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "16",
					r: "5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "32",
					r: "5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "32",
					r: "5"
				})
			]
		});
		case "ashen_gift": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 32 H32 L24 10 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 38 H36" })]
		});
		case "pale_coin": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "12"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 16 V32 M20 20 H28 M20 28 H28" })]
		});
		case "pall": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 36 Q24 8 38 36" })
		});
		case "harrow": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 16 H36 M12 24 H36 M12 32 H28" })
		});
		case "jester": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 10 L30 22 H18 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "32",
				r: "8"
			})]
		});
		case "chime": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 16 H32 L28 34 H20 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 34 V40" })]
		});
		case "omen": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "20",
				r: "8"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 40 L24 28 L36 40" })]
		});
		case "reprise": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 24 H34" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 16 L34 24 L26 32" })]
		});
		case "last_word": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 38 L24 8 L38 38" })
		});
		case "masquerade": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 24 Q24 10 40 24 Q24 38 8 24" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "18",
					cy: "24",
					r: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "30",
					cy: "24",
					r: "2"
				})
			]
		});
		case "the_toll": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "12"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 24 L24 14 M24 24 L32 28" })]
		});
		case "gild": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 L28 20 H40 L30 28 L34 40 L24 32 L14 40 L18 28 L8 20 H20 Z" })
		});
		case "burial": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 32 H40 V38 H8 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 32 V18 H32 V32" })]
		});
		case "shield_bash": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 L38 16 V28 C38 36 30 40 24 42 C18 40 10 36 10 28 V16 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 24 L24 30 L32 18" })]
		});
		case "rally": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 V40 M16 16 L24 8 L32 16" })
		});
		case "overhead": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 12 H36 L24 40 Z" })
		});
		case "bastion": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 36 H40 V18 L24 8 L8 18 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 V36" })]
		});
		case "groundbreaker": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 V28 M16 20 L24 28 L32 20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 36 H38" })]
		});
		case "counterfeit": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "10"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 24 H28 M24 20 V28" })]
		});
		case "backstep": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M34 14 L14 24 L34 34" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 24 H38" })]
		});
		case "coin_flip": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "24",
				cy: "24",
				rx: "8",
				ry: "12"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12 V36" })]
		});
		case "vial_dagger": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 40 L24 8 L30 40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 28 H32" })]
		});
		case "smoke": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 34 Q18 20 24 28 Q30 36 38 22" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 38 Q24 26 34 38" })]
		});
		case "prism_pulse": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 L38 36 H10 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 V36" })]
		});
		case "neural_reboot": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 16 H32 V32 H16 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 24 H28 M24 20 V28" })]
		});
		case "voltage": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 6 L14 26 H24 L22 42 L36 20 H26 Z" })
		});
		case "channel_spark": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 V20 M16 14 L24 20 L32 14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 28 L30 40 M30 28 L18 40" })]
		});
		case "overheat": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 V10 M24 38 V42 M6 24 H10 M38 24 H42" })
			]
		});
		case "bolt":
		case "thunder": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 6 L14 26 H24 L22 42 L36 20 H26 Z" })
		});
		case "study":
		case "sage": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10 H36 V38 H12 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 16 H30 M18 22 H28 M18 28 H26" })]
		});
		case "fireball":
		case "meteor": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "26",
				r: "10"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 C28 14 32 16 30 22" })]
		});
		case "blizzard":
		case "ice_lance": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 6 V42 M16 14 L24 22 L32 14 M16 34 L24 26 L32 34" })
		});
		case "mana_font":
		case "discharge": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "8"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 V12 M24 36 V40 M8 24 H12 M36 24 H40" })]
		});
		case "arcane_barrier": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 L38 16 V28 C38 36 30 40 24 42 C18 40 10 36 10 28 V16 Z" })
		});
		case "bite":
		case "feast":
		case "drain":
		case "exsanguinate": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 14 L24 36 L30 14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 22 H32" })]
		});
		case "lash":
		case "crimson_tide": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 34 C20 8 28 8 36 34" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12 V38" })]
		});
		case "blood_shield": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 8 L38 16 V28 C38 36 30 40 24 42 C18 40 10 36 10 28 V16 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 18 V30 M20 24 H28" })]
		});
		case "sanguine":
		case "hunger": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 10 C18 20 16 26 16 30 C16 36 20 40 24 40 C28 40 32 36 32 30 C32 26 30 20 24 10 Z" })
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
var CLASSES = [
	{
		id: "interred",
		name: "The Interred",
		blurb: "A body that will not stay buried. Weapons, blood, and a heavy hand.",
		hp: 72,
		relic: "burning_blood",
		deck: [
			"strike",
			"strike",
			"strike",
			"strike",
			"strike",
			"guard",
			"guard",
			"guard",
			"guard",
			"brand"
		],
		portrait: "/game/interred.jpg"
	},
	{
		id: "veil",
		name: "The Veil",
		blurb: "A mourner between names. Toxin, Daze, and a shroud of Block.",
		hp: 66,
		relic: "pale_shroud",
		deck: [
			"strike",
			"strike",
			"strike",
			"strike",
			"strike",
			"guard",
			"guard",
			"guard",
			"guard",
			"guard",
			"dirge",
			"fade"
		],
		portrait: "/game/veil.jpg"
	},
	{
		id: "kindled",
		name: "The Kindled",
		blurb: "Calls tomb-beasts and sets Cinder. Same Call Evolves them I→II→III, then Surges.",
		hp: 70,
		relic: "ash_locket",
		deck: [
			"strike",
			"strike",
			"strike",
			"guard",
			"guard",
			"guard",
			"ember",
			"ember",
			"rime",
			"rime"
		],
		portrait: "/game/kindled.jpg"
	},
	{
		id: "mage",
		name: "The Mage",
		blurb: "A crystal scholar. Bank Arcana with spells, then spend it for bursts, freeze, and thunder.",
		hp: 60,
		relic: "star_crystal",
		deck: [
			"strike",
			"strike",
			"strike",
			"strike",
			"guard",
			"guard",
			"guard",
			"bolt",
			"bolt",
			"study"
		],
		portrait: "/game/mage.jpg"
	},
	{
		id: "vampire",
		name: "The Vampire",
		blurb: "Spends blood to strike. Drains life, turns wounds into Block, and heals from the kill.",
		hp: 66,
		relic: "crimson_chalice",
		deck: [
			"strike",
			"strike",
			"strike",
			"strike",
			"guard",
			"guard",
			"guard",
			"bite",
			"bite",
			"lash"
		],
		portrait: "/game/vampire.jpg"
	}
];
var CLASS_BY_ID = Object.fromEntries(CLASSES.map((c) => [c.id, c]));
function starterDeckFor(id) {
	return CLASS_BY_ID[id].deck.map((defId) => mintCard(defId));
}
var ENEMY_BY_ID = Object.fromEntries([
	{
		id: "mite",
		name: "Tomb Mite",
		hp: [16, 20],
		shuffleStart: true,
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
		shuffleStart: true,
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
		shuffleStart: true,
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
		shuffleStart: true,
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
		shuffleStart: true,
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
				vulnerable: 2,
				daze: 1
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
		hp: [100, 108],
		pattern: [
			{
				kind: "attack",
				dmg: 7,
				hits: 2
			},
			{
				kind: "buff",
				strength: 2,
				block: 10
			},
			{
				kind: "attack",
				dmg: 18
			},
			{
				kind: "debuff",
				weak: 1,
				vulnerable: 2,
				daze: 1
			},
			{
				kind: "attack",
				dmg: 6,
				hits: 3
			}
		]
	},
	{
		id: "cinder",
		name: "Cinder Host",
		hp: [28, 34],
		shuffleStart: true,
		pattern: [
			{
				kind: "attack",
				dmg: 8
			},
			{
				kind: "attack",
				dmg: 5,
				hits: 2
			},
			{
				kind: "defend",
				block: 7
			}
		]
	},
	{
		id: "coil",
		name: "Grave Coil",
		hp: [40, 48],
		shuffleStart: true,
		pattern: [
			{
				kind: "debuff",
				weak: 2
			},
			{
				kind: "attack",
				dmg: 13
			},
			{
				kind: "attackDefend",
				dmg: 8,
				block: 8
			}
		]
	},
	{
		id: "paladin",
		name: "Cinder Paladin",
		hp: [70, 78],
		pattern: [
			{
				kind: "attack",
				dmg: 9,
				hits: 2
			},
			{
				kind: "buff",
				strength: 2,
				block: 12
			},
			{
				kind: "daze",
				daze: 1
			},
			{
				kind: "defend",
				block: 18
			}
		]
	},
	{
		id: "crown",
		name: "The Ember Crown",
		hp: [128, 138],
		pattern: [
			{
				kind: "attack",
				dmg: 9,
				hits: 2
			},
			{
				kind: "buff",
				strength: 3,
				block: 12
			},
			{
				kind: "attack",
				dmg: 20
			},
			{
				kind: "debuff",
				weak: 2,
				vulnerable: 2,
				daze: 1
			},
			{
				kind: "attack",
				dmg: 7,
				hits: 3
			},
			{
				kind: "attackDefend",
				dmg: 12,
				block: 10
			}
		]
	},
	{
		id: "lurker",
		name: "Tomb Spider",
		hp: [20, 26],
		shuffleStart: true,
		pattern: [
			{
				kind: "toxin",
				toxin: 1
			},
			{
				kind: "attack",
				dmg: 7
			},
			{
				kind: "attackToxin",
				dmg: 5,
				toxin: 1
			}
		]
	},
	{
		id: "ghoul",
		name: "Wake Ghoul",
		hp: [26, 32],
		shuffleStart: true,
		pattern: [
			{
				kind: "attack",
				dmg: 9
			},
			{
				kind: "debuff",
				weak: 2
			},
			{
				kind: "attack",
				dmg: 6,
				hits: 2
			}
		]
	},
	{
		id: "ashrat",
		name: "Ash Rat",
		hp: [14, 18],
		shuffleStart: true,
		pattern: [
			{
				kind: "cinder",
				cinder: 1
			},
			{
				kind: "attack",
				dmg: 4,
				hits: 2
			},
			{
				kind: "attackCinder",
				dmg: 6,
				cinder: 1
			}
		]
	},
	{
		id: "widow",
		name: "Crypt Widow",
		hp: [36, 42],
		shuffleStart: true,
		pattern: [
			{
				kind: "toxin",
				toxin: 1
			},
			{
				kind: "attackToxin",
				dmg: 8,
				toxin: 1
			},
			{
				kind: "defend",
				block: 10
			},
			{
				kind: "attack",
				dmg: 12
			}
		]
	},
	{
		id: "howler",
		name: "Howling Wolf",
		hp: [34, 40],
		shuffleStart: true,
		pattern: [
			{
				kind: "debuff",
				weak: 2
			},
			{
				kind: "attack",
				dmg: 14
			},
			{
				kind: "attack",
				dmg: 5,
				hits: 3
			}
		]
	},
	{
		id: "saint",
		name: "Venom Saint",
		hp: [62, 70],
		pattern: [
			{
				kind: "toxin",
				toxin: 1
			},
			{
				kind: "attackToxin",
				dmg: 10,
				toxin: 1
			},
			{
				kind: "defend",
				block: 14
			},
			{
				kind: "attack",
				dmg: 16
			},
			{
				kind: "debuff",
				weak: 2,
				daze: 1
			}
		]
	},
	{
		id: "wolf",
		name: "Ash Wolf",
		hp: [66, 74],
		pattern: [
			{
				kind: "cinder",
				cinder: 1
			},
			{
				kind: "attackCinder",
				dmg: 12,
				cinder: 1
			},
			{
				kind: "buff",
				strength: 2,
				block: 8
			},
			{
				kind: "attack",
				dmg: 8,
				hits: 2
			}
		]
	}
].map((e) => [e.id, e]));
function scaleIntent(intent, row, act) {
	const extra = Math.floor(Math.max(0, row) / 3) + Math.max(0, act - 1) * 2;
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
function spawnEnemy(defId, rng, row, slot, act = 1) {
	const def = ENEMY_BY_ID[defId];
	if (!def) throw new Error(`Unknown enemy ${defId}`);
	const hp = rng.int(def.hp[0], def.hp[1]) + row * 2 + Math.max(0, act - 1) * 12;
	const start = def.shuffleStart ? rng.int(0, def.pattern.length - 1) : 0;
	const intent = scaleIntent(def.pattern[start], row, act);
	return {
		id: `${defId}-${slot}-${rng.int(10, 99)}`,
		defId,
		name: def.name,
		hp,
		maxHp: hp,
		block: 0,
		strength: 0,
		weak: 0,
		vulnerable: 0,
		patternIndex: start,
		intent,
		toxin: 0,
		cinder: 0,
		daze: 0
	};
}
function nextIntent(enemy, row, act = 1) {
	const def = ENEMY_BY_ID[enemy.defId];
	const i = (enemy.patternIndex + 1) % def.pattern.length;
	enemy.patternIndex = i;
	return scaleIntent(def.pattern[i], row, act);
}
function rollEncounter(type, rng, row, act = 1) {
	if (type === "boss") return [spawnEnemy(act >= 2 ? "crown" : "warden", rng, row, 0, act)];
	if (type === "elite") {
		if (act >= 2) {
			const r = rng.next();
			if (r < .34) return [spawnEnemy("paladin", rng, row, 0, act)];
			if (r < .67) return [spawnEnemy("wolf", rng, row, 0, act)];
			return [spawnEnemy("saint", rng, row, 0, act)];
		}
		const r = rng.next();
		if (r < .34) return [spawnEnemy("sentinel", rng, row, 0, act)];
		if (r < .67) return [spawnEnemy("priest", rng, row, 0, act)];
		return rng.chance(.5) ? [spawnEnemy("saint", rng, row, 0, act)] : [spawnEnemy("wolf", rng, row, 0, act)];
	}
	if (act >= 2) {
		const roll = rng.next();
		if (roll < .12) return [
			spawnEnemy("ashrat", rng, row, 0, act),
			spawnEnemy("ashrat", rng, row, 1, act),
			spawnEnemy("cinder", rng, row, 2, act)
		];
		if (roll < .24) return [spawnEnemy("cinder", rng, row, 0, act), spawnEnemy("cinder", rng, row, 1, act)];
		if (roll < .36) return [spawnEnemy("widow", rng, row, 0, act)];
		if (roll < .48) return [spawnEnemy("howler", rng, row, 0, act)];
		if (roll < .6) return [spawnEnemy("coil", rng, row, 0, act)];
		if (roll < .72) return [spawnEnemy("wraith", rng, row, 0, act), spawnEnemy("lurker", rng, row, 1, act)];
		if (roll < .84) return [spawnEnemy("jaw", rng, row, 0, act)];
		if (roll < .92) return [spawnEnemy("ghoul", rng, row, 0, act), spawnEnemy("ashrat", rng, row, 1, act)];
		return [spawnEnemy("archer", rng, row, 0, act), spawnEnemy("mite", rng, row, 1, act)];
	}
	const roll = rng.next();
	if (roll < .14) return [spawnEnemy("mite", rng, row, 0, act), spawnEnemy("mite", rng, row, 1, act)];
	if (roll < .24) return [spawnEnemy("lurker", rng, row, 0, act)];
	if (roll < .34) return [spawnEnemy("lurker", rng, row, 0, act), spawnEnemy("mite", rng, row, 1, act)];
	if (roll < .44) return [spawnEnemy("ghoul", rng, row, 0, act)];
	if (roll < .54) return [spawnEnemy("ashrat", rng, row, 0, act), spawnEnemy("ashrat", rng, row, 1, act)];
	if (roll < .64) return [spawnEnemy("mite", rng, row, 0, act), spawnEnemy("acolyte", rng, row, 1, act)];
	if (roll < .74) return [spawnEnemy("acolyte", rng, row, 0, act)];
	if (roll < .84) return [spawnEnemy("archer", rng, row, 0, act)];
	if (roll < .92) return [spawnEnemy("wraith", rng, row, 0, act)];
	return [spawnEnemy("jaw", rng, row, 0, act)];
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
		case "debuff":
			if (intent.daze) return "Daze";
			return "Hex";
		case "attackDefend": return `${dmg(intent.dmg)} · ${intent.block}`;
		case "toxin": return `Toxin ${intent.toxin}`;
		case "cinder": return `Cinder ${intent.cinder}`;
		case "attackToxin": return `${dmg(intent.dmg)} · Tx ${intent.toxin}`;
		case "attackCinder": return `${dmg(intent.dmg)} · Cn ${intent.cinder}`;
		case "daze": return "Daze";
	}
}
function intentKind(intent) {
	if (intent.kind === "attack" || intent.kind === "attackToxin" || intent.kind === "attackCinder") return "attack";
	if (intent.kind === "defend") return "defend";
	if (intent.kind === "buff") return "buff";
	if (intent.kind === "debuff" || intent.kind === "toxin" || intent.kind === "cinder" || intent.kind === "daze") return "debuff";
	return "mixed";
}
var NAMES = {
	ember: [
		"Ember",
		"Cinder",
		"Pyre"
	],
	rime: [
		"Rime",
		"Hoar",
		"Glacier"
	],
	gloom: [
		"Gloom",
		"Umbra",
		"Nightmaw"
	],
	spark: [
		"Spark",
		"Coil",
		"Tempest"
	]
};
var FAMILIAR_ART = {
	ember: "/game/ember.jpg",
	rime: "/game/rime.jpg",
	gloom: "/game/gloom.jpg",
	spark: "/game/spark.jpg"
};
var PASSIVE_DMG = {
	ember: [
		3,
		5,
		8
	],
	rime: [
		2,
		4,
		6
	],
	gloom: [
		4,
		6,
		9
	],
	spark: [
		2,
		3,
		4
	]
};
var EVOKE_DMG = {
	ember: [
		8,
		14,
		22
	],
	rime: [
		5,
		9,
		14
	],
	spark: [
		7,
		12,
		18
	]
};
function familiarName(f) {
	return NAMES[f.kind][f.stage - 1];
}
function familiarPassive(f) {
	const i = f.stage - 1;
	switch (f.kind) {
		case "ember": return `${PASSIVE_DMG.ember[i]} to a foe`;
		case "rime": return `+${PASSIVE_DMG.rime[i]} Block`;
		case "gloom": return `Store ${PASSIVE_DMG.gloom[i]} · ${f.stored}`;
		case "spark": return `${PASSIVE_DMG.spark[i]} to ALL`;
	}
}
function familiarEvokeHint(f) {
	const i = f.stage - 1;
	switch (f.kind) {
		case "ember": return `Evoke ${EVOKE_DMG.ember[i]} ALL`;
		case "rime": return `Evoke +${EVOKE_DMG.rime[i]} Block`;
		case "gloom": return `Evoke ${f.stored} ALL`;
		case "spark": return `Evoke ${EVOKE_DMG.spark[i]} ALL`;
	}
}
function makeFamiliar(kind, stage = 1) {
	return {
		kind,
		stage,
		stored: 0
	};
}
function clampStage(n) {
	if (n <= 1) return 1;
	if (n >= 3) return 3;
	return 2;
}
function emptyPulse() {
	return {
		damageTo: [],
		killed: [],
		blockGained: 0,
		log: ""
	};
}
function merge(a, b) {
	return {
		damageTo: a.damageTo.concat(b.damageTo),
		killed: a.killed.concat(b.killed),
		blockGained: a.blockGained + b.blockGained,
		log: [a.log, b.log].filter(Boolean).join(" · ")
	};
}
function applyHpDamage$1(hp, block, amount) {
	let left = amount;
	let b = block;
	if (b > 0) {
		const used = Math.min(b, left);
		b -= used;
		left -= used;
	}
	return {
		hp: Math.max(0, hp - left),
		block: b
	};
}
function hit(run, enemy, amount, out) {
	if (amount <= 0 || enemy.hp <= 0) return;
	const res = applyHpDamage$1(enemy.hp, enemy.block, amount);
	enemy.hp = res.hp;
	enemy.block = res.block;
	run.damageDealt += amount;
	out.damageTo.push({
		id: enemy.id,
		amount
	});
	if (enemy.hp <= 0) {
		enemy.hp = 0;
		enemy.block = 0;
		out.killed.push(enemy.id);
		run.floorKills += 1;
	}
}
function hitAll(run, combat, amount, out) {
	for (const e of combat.enemies) if (e.hp > 0) hit(run, e, amount, out);
}
function pickLiving(combat, rng) {
	const living = combat.enemies.filter((e) => e.hp > 0);
	if (!living.length) return void 0;
	return rng.pick(living);
}
function pulseOne(run, combat, rng, f) {
	const out = emptyPulse();
	const i = f.stage - 1;
	switch (f.kind) {
		case "ember": {
			const t = pickLiving(combat, rng);
			if (t) hit(run, t, PASSIVE_DMG.ember[i], out);
			out.log = `${familiarName(f)} burns`;
			break;
		}
		case "rime": {
			const b = PASSIVE_DMG.rime[i];
			combat.block += b;
			out.blockGained += b;
			out.log = `${familiarName(f)} wards`;
			break;
		}
		case "gloom":
			f.stored += PASSIVE_DMG.gloom[i];
			out.log = `${familiarName(f)} stores ${f.stored}`;
			break;
		case "spark":
			hitAll(run, combat, PASSIVE_DMG.spark[i], out);
			out.log = `${familiarName(f)} arcs`;
	}
	return out;
}
function pulseAll(run, combat, rng) {
	let acc = emptyPulse();
	for (const f of combat.familiars) acc = merge(acc, pulseOne(run, combat, rng, f));
	if (acc.log) combat.log = acc.log;
	return acc;
}
function evokeEffect(run, combat, rng, f) {
	const out = emptyPulse();
	const i = f.stage - 1;
	switch (f.kind) {
		case "ember":
			hitAll(run, combat, EVOKE_DMG.ember[i], out);
			out.log = `${familiarName(f)} erupts`;
			break;
		case "rime": {
			const b = EVOKE_DMG.rime[i];
			combat.block += b;
			out.blockGained += b;
			out.log = `${familiarName(f)} sheathes you`;
			break;
		}
		case "gloom": {
			const dmg = f.stored;
			f.stored = 0;
			hitAll(run, combat, dmg, out);
			out.log = `${familiarName(f)} empties`;
			break;
		}
		case "spark":
			hitAll(run, combat, EVOKE_DMG.spark[i], out);
			out.log = `${familiarName(f)} detonates`;
	}
	return out;
}
function evokeAt(run, combat, rng, index, keep) {
	const f = combat.familiars[index];
	if (!f) return emptyPulse();
	const out = evokeEffect(run, combat, rng, f);
	if (!keep) combat.familiars.splice(index, 1);
	if (out.log) combat.log = out.log;
	return out;
}
function evokeLeft(run, combat, rng) {
	if (!combat.familiars.length) {
		combat.log = "Nothing to unleash.";
		return emptyPulse();
	}
	return evokeAt(run, combat, rng, 0, false);
}
function makeRoom(run, combat, rng) {
	let acc = emptyPulse();
	while (combat.familiars.length >= combat.familiarSlots && combat.familiars.length) acc = merge(acc, evokeAt(run, combat, rng, 0, false));
	return acc;
}
function callFamiliar(run, combat, rng, kind, extraStages = 0) {
	const existing = combat.familiars.findIndex((f) => f.kind === kind);
	if (existing >= 0) {
		const f = combat.familiars[existing];
		if (f.stage >= 3) {
			const out = merge(evokeAt(run, combat, rng, existing, true), pulseOne(run, combat, rng, f));
			combat.log = `${familiarName(f)} surges`;
			out.log = combat.log;
			return out;
		}
		f.stage = clampStage(f.stage + 1);
		combat.log = `${familiarName(f)} evolves · ${"I".repeat(f.stage)}`;
		const out = emptyPulse();
		out.log = combat.log;
		return out;
	}
	let acc = makeRoom(run, combat, rng);
	if (combat.familiarSlots <= 0) return acc;
	const f = makeFamiliar(kind, clampStage(1 + extraStages));
	combat.familiars.push(f);
	combat.log = `${familiarName(f)} answers · ${"I".repeat(f.stage)}`;
	acc.log = [acc.log, combat.log].filter(Boolean).join(" · ");
	return acc;
}
function callMany(run, combat, rng, kinds, extraStages = 0) {
	let acc = emptyPulse();
	for (const k of kinds) acc = merge(acc, callFamiliar(run, combat, rng, k, extraStages));
	return acc;
}
function evolveAll(combat) {
	const out = emptyPulse();
	if (!combat.familiars.length) {
		combat.log = "No bond to feed.";
		out.log = combat.log;
		return out;
	}
	for (const f of combat.familiars) if (f.stage < 3) f.stage = clampStage(f.stage + 1);
	combat.log = "The pack grows.";
	out.log = combat.log;
	return out;
}
var ACT1 = [
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
	[
		"combat",
		"event",
		"combat"
	],
	[
		"elite",
		"combat",
		"shop"
	],
	[
		"combat",
		"event",
		"shop"
	],
	["rest"],
	["boss"]
];
var ACT2 = [
	[
		"combat",
		"combat",
		"combat"
	],
	[
		"combat",
		"event",
		"combat",
		"shop"
	],
	[
		"elite",
		"combat",
		"combat"
	],
	[
		"combat",
		"event",
		"rest"
	],
	[
		"shop",
		"elite",
		"combat"
	],
	[
		"combat",
		"event",
		"combat"
	],
	[
		"elite",
		"shop",
		"combat"
	],
	[
		"combat",
		"event",
		"combat"
	],
	[
		"shop",
		"elite",
		"event"
	],
	[
		"combat",
		"combat",
		"shop"
	],
	["rest"],
	["boss"]
];
function generateMap(rng, act = 1) {
	const layout = act >= 2 ? ACT2 : ACT1;
	const prefix = act >= 2 ? "b" : "n";
	const rows = layout.map((types, row) => types.map((type, col) => ({
		id: `${prefix}${row}-${col}`,
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
			if (rng.chance(.55) && nxt[j + 1]) ids.add(nxt[j + 1].id);
			if (rng.chance(.4) && nxt[j - 1]) ids.add(nxt[j - 1].id);
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
function nodeLabel(type, act = 1) {
	if (type === "boss") return act >= 2 ? "Crown" : "Warden";
	return NODE_LABEL[type];
}
var RELICS = [
	{
		id: "burning_blood",
		name: "Burning Blood",
		text: "Heal 6 HP at the end of combat.",
		rarity: "starter"
	},
	{
		id: "pale_shroud",
		name: "Pale Shroud",
		text: "Start each combat with 1 Dexterity.",
		rarity: "starter"
	},
	{
		id: "ash_locket",
		name: "Ash Locket",
		text: "Start each combat with a Spark in your rightmost slot.",
		rarity: "starter"
	},
	{
		id: "star_crystal",
		name: "Star Crystal",
		text: "At the start of your turn, gain 1 Arcana.",
		rarity: "starter"
	},
	{
		id: "crimson_chalice",
		name: "Crimson Chalice",
		text: "Whenever a card spends HP, gain 3 Block.",
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
function gainBlock(combat, amount) {
	if (amount <= 0) return 0;
	let add = amount;
	if (combat.bastion > 0) add += combat.bastion;
	combat.block += add;
	combat.blockGainedThisTurn += add;
	return add;
}
function note(combat, line) {
	if (!line) return;
	combat.log = line;
	const prev = combat.journal ?? [];
	if (prev[0] === line) return;
	combat.journal = [line, ...prev].slice(0, 8);
}
function applyEnemyToxin(combat) {
	if (combat.toxinApplied) return;
	combat.toxinApplied = true;
	combat.toxin += 1;
}
function applyEnemyCinder(combat) {
	if (combat.cinderApplied) return;
	combat.cinderApplied = true;
	combat.cinder += 1;
}
var DAZE_FOES = /* @__PURE__ */ new Set([
	"warden",
	"crown",
	"sentinel",
	"priest",
	"paladin",
	"saint",
	"wolf"
]);
function applyEnemyDaze(combat, enemy, amount) {
	if (!DAZE_FOES.has(enemy.defId) || amount <= 0) return;
	combat.daze += amount;
}
function randomLiving(combat, rng) {
	const living = combat.enemies.filter((e) => e.hp > 0);
	if (!living.length) return void 0;
	return rng.pick(living);
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
function newRun(classId = "interred", seed) {
	const s = seed ?? (Date.now() ^ Math.floor(Math.random() * 4294967295)) >>> 0;
	const rng = new Rng(s);
	setCardSeq(1);
	const cls = CLASS_BY_ID[classId];
	const deck = starterDeckFor(classId);
	const map = generateMap(rng, 1);
	return {
		run: {
			seed: s,
			rngState: rng.getState(),
			classId,
			gold: 99,
			hp: cls.hp,
			maxHp: cls.hp,
			deck,
			relics: [cls.relic],
			potions: [
				null,
				null,
				null
			],
			map,
			currentNodeId: null,
			visited: [],
			row: -1,
			act: 1,
			cardSeq: getCardSeq(),
			shop: null,
			floorKills: 0,
			damageDealt: 0,
			seenEvents: []
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
function runDepth(run) {
	return Math.max(0, run.act - 1) * 12 + Math.max(0, run.row + 1);
}
function beginAct2(run, rng) {
	run.act = 2;
	run.map = generateMap(rng, 2);
	run.currentNodeId = null;
	run.visited = [];
	run.row = -1;
	run.shop = null;
}
function startCombat(run, rng, type) {
	const enemies = rollEncounter(type, rng, Math.max(0, run.row), run.act ?? 1);
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
		dexterity: hasRelic(run, "pale_shroud") ? 1 : 0,
		weak: 0,
		vulnerable: 0,
		frail: 0,
		metallicize: 0,
		toxin: 0,
		cinder: 0,
		daze: 0,
		envenom: 0,
		afterburn: 0,
		bastion: 0,
		smokeMirrors: 0,
		focus: 0,
		plasma: 0,
		prismPulse: 0,
		prismUsed: false,
		overheatPlasma: 0,
		overheatNeed: 0,
		cardsPlayed: 0,
		blockGainedThisTurn: hasRelic(run, "anchor") ? 10 : 0,
		toxinApplied: false,
		cinderApplied: false,
		arcana: 0,
		sage: false,
		hunger: 0,
		journal: ["The chamber answers."],
		noDraw: false,
		hand: [],
		drawPile: copies,
		discardPile: [],
		exhaustPile: [],
		targetingUid: null,
		targetingPotion: null,
		attacksPlayed: 0,
		familiars: [],
		familiarSlots: run.classId === "kindled" ? 3 : 0,
		log: "The chamber answers."
	};
	drawCards(combat, rng, 5 + (hasRelic(run, "bag") ? 2 : 0));
	if (hasRelic(run, "blood_vial")) run.hp = Math.min(run.maxHp, run.hp + 2);
	if (hasRelic(run, "ash_locket") && combat.familiarSlots > 0) combat.familiars.push(makeFamiliar("spark"));
	if (hasRelic(run, "star_crystal")) combat.arcana = 1;
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
	return res.taken;
}
function dealToEnemy(run, combat, enemy, base, hits, doubleHit, killed, damageTo) {
	let taken = 0;
	for (let i = 0; i < hits; i++) {
		if (enemy.hp <= 0) break;
		const dmg = calcDamage(base, playerStr(run, combat), combat.weak, enemy.vulnerable, doubleHit);
		taken += hitEnemy(run, combat, enemy, dmg, killed, damageTo);
	}
	return taken;
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
	const energyBefore = combat.energy;
	combat.energy -= cardCost(card);
	combat.cardsPlayed += 1;
	if (combat.overheatPlasma > 0) combat.plasma += combat.overheatPlasma;
	const nums = d.numbers(card.upgraded);
	const killed = [];
	const damageTo = [];
	let playerHurt = 0;
	const target = targetId ? combat.enemies.find((e) => e.id === targetId && e.hp > 0) : void 0;
	if (nums.hpLoss && d.special !== "counterfeit") playerHurt += loseHp(run, combat, nums.hpLoss);
	if (playerHurt > 0 && hasRelic(run, "crimson_chalice")) gainBlock(combat, 3);
	if (d.special === "limitBreak") combat.strength *= 2;
	else if (nums.strength && nums.strength > 0 && d.special !== "disarm" && d.special !== "voltage") combat.strength += nums.strength;
	if (nums.metallicize) combat.metallicize += nums.metallicize;
	if (nums.energy && d.special !== "reboot") combat.energy += nums.energy;
	if (nums.dexterity && d.special !== "coinFlip") combat.dexterity += nums.dexterity;
	if (nums.focus && d.special !== "reboot" && d.special !== "voltage") combat.focus += nums.focus;
	if (nums.block && d.special !== "blockPerAttack") gainBlock(combat, calcBlock(nums.block, combat.dexterity, combat.frail));
	if (d.special === "blockPerAttack") {
		const nAtk = combat.hand.filter((c) => defOf(c).type === "attack").length;
		gainBlock(combat, calcBlock((nums.block ?? 4) * nAtk, combat.dexterity, combat.frail));
	}
	if (nums.gold) run.gold += nums.gold;
	const doubleHit = d.type === "attack" && hasRelic(run, "pen_nib") && (combat.attacksPlayed + 1) % 10 === 0;
	let drained = 0;
	if (d.special === "fiendFire") {
		const others = combat.hand.splice(0, combat.hand.length);
		const per = nums.damage ?? 7;
		if (target) for (const c of others) {
			combat.exhaustPile.push(c);
			dealToEnemy(run, combat, target, per, 1, doubleHit, killed, damageTo);
		}
		else combat.exhaustPile.push(...others);
	} else if (d.type === "attack" && nums.damage && d.special !== "discharge") {
		const hits = nums.hits ?? 1;
		if (d.target === "all") for (const e of combat.enemies.filter((en) => en.hp > 0)) drained += dealToEnemy(run, combat, e, nums.damage, hits, doubleHit, killed, damageTo);
		else if (target) drained += dealToEnemy(run, combat, target, nums.damage, hits, doubleHit, killed, damageTo);
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
	const statusTargets = d.target === "all" ? combat.enemies.filter((en) => en.hp > 0) : target ? [target] : [];
	if (d.special !== "envenom" && d.special !== "afterburn") for (const t of statusTargets) {
		if (nums.toxin) t.toxin += nums.toxin;
		if (nums.cinder) t.cinder += nums.cinder;
		if (nums.daze) t.daze += nums.daze;
	}
	if (d.type === "attack" && combat.envenom) for (const t of statusTargets) t.toxin += combat.envenom;
	if (d.special === "envenom") combat.envenom += nums.toxin ?? 2;
	if (d.special === "afterburn") combat.afterburn += nums.cinder ?? 2;
	if (d.special === "cinderBonus" && target && target.hp > 0 && target.cinder > 0) dealToEnemy(run, combat, target, nums.damage ?? 8, 1, doubleHit, killed, damageTo);
	if (d.special === "execute" && target && killed.includes(target.id) && nums.heal) run.hp = Math.min(run.maxHp, run.hp + nums.heal);
	if (d.special === "shieldBash") {
		const foe = randomLiving(combat, rng);
		if (foe && combat.blockGainedThisTurn > 0) dealToEnemy(run, combat, foe, nums.bonus ?? 3, 1, false, killed, damageTo);
	}
	if (d.special === "overhead" && target && target.hp > 0 && target.weak > 0) dealToEnemy(run, combat, target, nums.bonus ?? 6, 1, doubleHit, killed, damageTo);
	if (d.special === "backstep" && target && target.hp > 0 && combat.block > 0) dealToEnemy(run, combat, target, nums.bonus ?? 3, 1, doubleHit, killed, damageTo);
	if (d.special === "bastion") combat.bastion += nums.bonus ?? 1;
	if (d.special === "counterfeit" && energyBefore === 0 && nums.hpLoss) playerHurt += loseHp(run, combat, nums.hpLoss);
	if (d.special === "coinFlip" && rng.chance(.5) && nums.dexterity) combat.dexterity += nums.dexterity;
	if (d.special === "smoke") combat.smokeMirrors += nums.bonus ?? 2;
	if (d.special === "prism") combat.prismPulse += nums.plasma ?? 4;
	if (d.special === "reboot") {
		if (combat.focus <= 0) combat.focus += nums.focus ?? 1;
		else if (nums.energy) combat.energy = Math.min(combat.maxEnergy, combat.energy + nums.energy);
	}
	if (d.special === "voltage" && target && killed.includes(target.id)) {
		combat.strength += nums.strength ?? 1;
		combat.focus += nums.focus ?? 1;
	}
	if (d.special === "overheat") {
		combat.overheatPlasma += nums.plasma ?? 1;
		combat.overheatNeed = nums.threshold ?? 3;
	}
	if (d.special === "spendArcana" && target && target.hp > 0 && combat.arcana >= 3) {
		combat.arcana -= 3;
		dealToEnemy(run, combat, target, nums.bonus ?? 12, 1, doubleHit, killed, damageTo);
	}
	if (d.special === "discharge") {
		const stacks = combat.arcana;
		combat.arcana = 0;
		const per = nums.damage ?? 5;
		if (stacks > 0) for (const e of combat.enemies.filter((en) => en.hp > 0)) dealToEnemy(run, combat, e, per * stacks, 1, false, killed, damageTo);
	}
	if (d.special === "thunderArcana" && combat.arcana >= 2) combat.energy += 1;
	if (d.special === "iceLance" && target && combat.arcana >= 2) target.daze += nums.daze ?? 1;
	if (d.special === "sage") combat.sage = true;
	if (d.special === "hunger") combat.hunger += nums.heal ?? 1;
	if (nums.arcana) combat.arcana = Math.min(9, combat.arcana + nums.arcana);
	if (combat.sage && d.type === "skill" && d.special !== "sage") combat.arcana = Math.min(9, combat.arcana + 1);
	if (d.type === "attack" && combat.smokeMirrors > 0) gainBlock(combat, calcBlock(combat.smokeMirrors, combat.dexterity, combat.frail));
	if (d.type === "attack" && combat.prismPulse > 0 && !combat.prismUsed) {
		const foe = randomLiving(combat, rng);
		if (foe) {
			combat.prismUsed = true;
			dealToEnemy(run, combat, foe, combat.prismPulse + combat.focus, 1, false, killed, damageTo);
		}
	}
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
	const extra = nums.stageBonus ?? 0;
	let fam = null;
	if (d.summon === "twin") fam = callMany(run, combat, rng, ["ember", "rime"], extra);
	else if (d.summon === "all") fam = callMany(run, combat, rng, [
		"ember",
		"rime",
		"gloom",
		"spark"
	], extra);
	else if (d.summon) fam = callFamiliar(run, combat, rng, d.summon, extra);
	else if (d.special === "evokeLeft") fam = evokeLeft(run, combat, rng);
	else if (d.special === "pulseFamiliars") fam = pulseAll(run, combat, rng);
	else if (d.special === "evolveAll") fam = evolveAll(combat);
	else if (d.special === "channelSpark") {
		const times = nums.stageBonus ?? 2;
		let acc = emptyPulse();
		for (let i = 0; i < times; i++) acc = merge(acc, callFamiliar(run, combat, rng, "spark", 0));
		fam = acc;
		const foe = randomLiving(combat, rng);
		if (foe) dealToEnemy(run, combat, foe, nums.bonus ?? 2, 1, false, killed, damageTo);
	} else if (d.special === "extraSlot") {
		combat.familiarSlots += extra || 1;
		note(combat, "A new kennel opens.");
	}
	if (fam) {
		killed.push(...fam.killed);
		damageTo.push(...fam.damageTo);
	}
	if (d.special === "pulseFamiliars" && combat.afterburn) {
		for (const e of combat.enemies) if (e.hp > 0) e.cinder += combat.afterburn;
	}
	if (d.special === "lastWord" && target && killed.includes(target.id)) combat.energy += 2;
	if (d.type === "power" || (d.special === "limitBreak" ? !card.upgraded : Boolean(d.exhaust))) combat.exhaustPile.push(card);
	else combat.discardPile.push(card);
	if (d.special === "discardRand" && combat.hand.length) {
		const i = rng.int(0, combat.hand.length - 1);
		const [disc] = combat.hand.splice(i, 1);
		if (disc) combat.discardPile.push(disc);
	}
	if (nums.draw) drawCards(combat, rng, nums.draw);
	if (d.special === "acrobatics" && combat.hand.length) {
		const i = rng.int(0, combat.hand.length - 1);
		const [disc] = combat.hand.splice(i, 1);
		if (disc) combat.discardPile.push(disc);
	}
	if (d.special === "reprise" && combat.discardPile.length) {
		const i = rng.int(0, combat.discardPile.length - 1);
		const [back] = combat.discardPile.splice(i, 1);
		if (back) combat.hand.push(back);
	}
	if (d.special === "handUpgrade") {
		const candidates = combat.hand.filter((c) => !c.upgraded && defOf(c).rarity !== "status");
		if (candidates.length) rng.pick(candidates).upgraded = true;
	}
	if (d.special === "battleTrance") combat.noDraw = true;
	if (d.special === "feast" && drained > 0) run.hp = Math.min(run.maxHp, run.hp + drained);
	if (d.special === "drainAll") {
		const n = new Set(damageTo.map((x) => x.id)).size;
		if (n > 0) run.hp = Math.min(run.maxHp, run.hp + n * (nums.heal ?? 1));
	} else if (nums.heal && d.special !== "feast" && d.special !== "execute" && d.special !== "hunger") run.hp = Math.min(run.maxHp, run.hp + nums.heal);
	if (combat.hunger > 0 && d.type === "attack") run.hp = Math.min(run.maxHp, run.hp + combat.hunger);
	if (run.hp <= 0 && tryFairy(run)) note(combat, "The fairy shatters. You remain.");
	const won = combat.enemies.every((e) => e.hp <= 0);
	const dead = run.hp <= 0;
	if (!fam && d.special !== "extraSlot") {
		const bits = [`You play ${d.name}.`];
		if (playerHurt) bits.push(`Spend ${playerHurt} HP.`);
		for (const hit of damageTo) {
			const foe = combat.enemies.find((e) => e.id === hit.id);
			bits.push(`${foe?.name ?? "A foe"} takes ${hit.amount}.`);
		}
		if (killed.length) bits.push(killed.length === 1 ? "A foe falls." : `${killed.length} foes fall.`);
		note(combat, bits.join(" "));
	} else if (fam?.log) note(combat, fam.log);
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
		note(combat, `Potion: heal ${amt}.`);
	} else if (id === "block") {
		gainBlock(combat, 12);
		combat.log = "Gained 12 Block.";
		note(combat, "Potion: +12 Block.");
	} else if (id === "fire") {
		const t = combat.enemies.find((e) => e.id === targetId && e.hp > 0);
		if (t) {
			hitEnemy(run, combat, t, 20, killed, damageTo);
			note(combat, `Fire potion hits ${t.name} for 20.`);
		}
	} else if (id === "str") {
		combat.strength += 2;
		note(combat, "Potion: +2 Strength.");
	} else if (id === "energy") {
		combat.energy += 2;
		note(combat, "Potion: +2 Energy.");
	} else if (id === "swift") {
		drawCards(combat, rng, 3);
		note(combat, "Potion: draw 3.");
	}
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
	const pulse = combat.familiars.length ? pulseAll(run, combat, rng) : {
		damageTo: [],
		killed: [],
		blockGained: 0,
		log: ""
	};
	if (combat.afterburn) {
		for (const e of combat.enemies) if (e.hp > 0) e.cinder += combat.afterburn;
	}
	for (const e of combat.enemies) {
		if (e.hp <= 0 || e.cinder <= 0) continue;
		const amt = e.cinder;
		e.cinder -= 1;
		e.hp = applyHpDamage(e.hp, 0, amt).hp;
		run.damageDealt += amt;
		pulse.damageTo.push({
			id: e.id,
			amount: amt
		});
		if (e.hp <= 0) {
			e.hp = 0;
			e.block = 0;
			pulse.killed.push(e.id);
			run.floorKills += 1;
		}
	}
	if (hasRelic(run, "orichalcum") && combat.block === 0) gainBlock(combat, 6);
	if (combat.overheatNeed > 0 && combat.cardsPlayed >= combat.overheatNeed) {
		const foe = randomLiving(combat, rng);
		if (foe) {
			const amt = 12 + combat.focus;
			const res = applyHpDamage(foe.hp, foe.block, amt);
			foe.hp = res.hp;
			foe.block = res.block;
			run.damageDealt += amt;
			pulse.damageTo.push({
				id: foe.id,
				amount: amt
			});
			if (foe.hp <= 0) {
				foe.hp = 0;
				foe.block = 0;
				pulse.killed.push(foe.id);
				run.floorKills += 1;
			}
		}
	}
	combat.smokeMirrors = 0;
	combat.prismUsed = false;
	combat.cardsPlayed = 0;
	combat.blockGainedThisTurn = 0;
	combat.toxinApplied = false;
	combat.cinderApplied = false;
	if (combat.weak > 0) combat.weak -= 1;
	if (combat.vulnerable > 0) combat.vulnerable -= 1;
	if (combat.frail > 0) combat.frail -= 1;
	combat.noDraw = false;
	combat.phase = combat.enemies.every((e) => e.hp <= 0) ? "resolving" : "enemy";
	if (!pulse.log) note(combat, "They move.");
	else note(combat, pulse.log);
	persistRng(run, rng);
	return pulse;
}
function stepEnemy(run, combat, rng, enemy) {
	enemy.block = 0;
	let playerHurt = 0;
	let blocked = 0;
	const intent = enemy.intent;
	const str = enemy.strength;
	if (enemy.toxin > 0) {
		const amt = enemy.toxin;
		enemy.toxin -= 1;
		enemy.hp = applyHpDamage(enemy.hp, 0, amt).hp;
		run.damageDealt += amt;
		if (enemy.hp <= 0) {
			enemy.hp = 0;
			run.floorKills += 1;
			if (enemy.weak > 0) enemy.weak -= 1;
			if (enemy.vulnerable > 0) enemy.vulnerable -= 1;
			enemy.intent = nextIntent(enemy, Math.max(0, run.row), run.act ?? 1);
			persistRng(run, rng);
			note(combat, `${enemy.name} bleeds ${amt} Toxin.`);
			return {
				run,
				combat,
				playerHurt: 0,
				blocked: 0,
				dead: false,
				enemyId: enemy.id,
				kind: "toxin"
			};
		}
	}
	if (enemy.daze > 0) {
		enemy.daze -= 1;
		if (enemy.weak > 0) enemy.weak -= 1;
		if (enemy.vulnerable > 0) enemy.vulnerable -= 1;
		enemy.intent = nextIntent(enemy, Math.max(0, run.row), run.act ?? 1);
		persistRng(run, rng);
		note(combat, `${enemy.name} is dazed and skips.`);
		return {
			run,
			combat,
			playerHurt: 0,
			blocked: 0,
			dead: false,
			enemyId: enemy.id,
			kind: "daze"
		};
	}
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
		if (intent.daze) applyEnemyDaze(combat, enemy, intent.daze);
	} else if (intent.kind === "attackDefend") {
		attackOnce(intent.dmg);
		enemy.block += intent.block;
	} else if (intent.kind === "toxin") applyEnemyToxin(combat);
	else if (intent.kind === "cinder") applyEnemyCinder(combat);
	else if (intent.kind === "attackToxin") {
		attackOnce(intent.dmg);
		applyEnemyToxin(combat);
	} else if (intent.kind === "attackCinder") {
		attackOnce(intent.dmg);
		applyEnemyCinder(combat);
	} else if (intent.kind === "daze") applyEnemyDaze(combat, enemy, intent.daze);
	if (enemy.weak > 0) enemy.weak -= 1;
	if (enemy.vulnerable > 0) enemy.vulnerable -= 1;
	enemy.intent = nextIntent(enemy, Math.max(0, run.row), run.act ?? 1);
	if (run.hp <= 0 && tryFairy(run)) note(combat, "The fairy shatters. You remain.");
	const dead = run.hp <= 0;
	if (intent.kind === "attack" || intent.kind === "attackDefend" || intent.kind === "attackToxin" || intent.kind === "attackCinder") {
		const bits = [`${enemy.name} strikes.`];
		if (playerHurt) bits.push(`You take ${playerHurt}.`);
		if (blocked) bits.push(`${blocked} blocked.`);
		note(combat, bits.join(" "));
	} else if (intent.kind === "defend") note(combat, `${enemy.name} guards (+${intent.block} Block).`);
	else if (intent.kind === "buff") note(combat, `${enemy.name} grows stronger.`);
	else if (intent.kind === "debuff") note(combat, `${enemy.name} hexes you.`);
	else if (intent.kind === "toxin") note(combat, `${enemy.name} applies Toxin.`);
	else if (intent.kind === "cinder") note(combat, `${enemy.name} applies Cinder.`);
	else if (intent.kind === "daze") note(combat, `${enemy.name} dazes you.`);
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
	if (combat.metallicize) gainBlock(combat, combat.metallicize);
	combat.energy = combat.maxEnergy;
	if (hasRelic(run, "star_crystal")) combat.arcana = Math.min(9, combat.arcana + 1);
	if (combat.daze > 0) {
		combat.energy = Math.max(0, combat.energy - 1);
		combat.daze -= 1;
	}
	if (combat.toxin > 0) {
		const amt = combat.toxin;
		combat.toxin -= 1;
		loseHp(run, combat, amt);
	}
	if (combat.cinder > 0) {
		const amt = combat.cinder;
		combat.cinder -= 1;
		loseHp(run, combat, amt);
	}
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
		note(combat, "The calendar strikes.");
	} else note(combat, `Turn ${combat.turn}.`);
	persistRng(run, rng);
}
function liveNumbers(run, combat, card) {
	const d = defOf(card);
	const n = { ...d.numbers(card.upgraded) };
	const living = combat.enemies.filter((e) => e.hp > 0);
	const vuln = living.length === 1 ? living[0].vulnerable : 0;
	const doubleHit = d.type === "attack" && hasRelic(run, "pen_nib") && (combat.attacksPlayed + 1) % 10 === 0;
	if (d.special === "discharge" && n.damage) n.damage = n.damage * Math.max(0, combat.arcana);
	else if (n.damage) n.damage = calcDamage(n.damage, playerStr(run, combat), combat.weak, vuln, doubleHit);
	if (d.special === "spendArcana" && n.bonus && combat.arcana >= 3) n.damage = (n.damage ?? 0) + n.bonus;
	if (n.block) {
		n.block = calcBlock(n.block, combat.dexterity, combat.frail);
		if (combat.bastion > 0) n.block += combat.bastion;
	}
	return n;
}
function afterCombat(run, rng, type) {
	if (hasRelic(run, "burning_blood")) run.hp = Math.min(run.maxHp, run.hp + 6);
	const gold = type === "boss" ? rng.int(80, 110) : type === "elite" ? rng.int(28, 42) : rng.int(12, 22);
	run.gold += gold;
	const cards = rollCardRewards(rng, type === "boss" ? "boss" : type === "elite" ? "elite" : "normal", 3, run.classId);
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
	const cards = rollCardRewards(rng, "normal", 3, run.classId).map((card) => ({
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
		choices: [
			{
				id: "drink",
				label: "Drink",
				hint: "Heal 30% of Max HP."
			},
			{
				id: "coin",
				label: "Leave a coin",
				hint: "Gain 50 gold. Take 8 damage."
			},
			{
				id: "wash",
				label: "Wash a rite",
				hint: "Upgrade a card."
			}
		]
	},
	{
		id: "shrine",
		title: "Nameless Shrine",
		body: "The inscription has been scraped out. Something still listens.",
		choices: [
			{
				id: "kneel",
				label: "Kneel",
				hint: "Upgrade a random card."
			},
			{
				id: "cut",
				label: "Cut a palm",
				hint: "Gain 8 Max HP. Lose 8 HP."
			},
			{
				id: "spit",
				label: "Spit in the bowl",
				hint: "Gain 35 gold."
			}
		]
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
		choices: [
			{
				id: "smash",
				label: "Smash it",
				hint: "Choose 1 of 3 cards."
			},
			{
				id: "pick",
				label: "Pick the lock",
				hint: "Gain a relic. Take 12 damage."
			},
			{
				id: "leave",
				label: "Leave it bound",
				hint: "Heal 8 HP."
			}
		]
	},
	{
		id: "bargain",
		title: "The Pale Bargain",
		body: "A voice from the next landing: 'A rare rite, for a scar that does not heal.'",
		choices: [
			{
				id: "accept",
				label: "Accept",
				hint: "Gain a rare card. Add a Wound to your deck."
			},
			{
				id: "walk",
				label: "Walk on",
				hint: "Heal 12 HP."
			},
			{
				id: "counter",
				label: "Counter-offer",
				hint: "Gain 45 gold. Take 10 damage."
			}
		]
	},
	{
		id: "choir",
		title: "The Choir Below",
		body: "Voices rise through a grate. They are singing your funeral, and they are ahead of schedule.",
		choices: [
			{
				id: "join",
				label: "Join the hymn",
				hint: "Upgrade two random cards. Lose 6 HP."
			},
			{
				id: "plug",
				label: "Stop your ears",
				hint: "Gain a potion."
			},
			{
				id: "heckle",
				label: "Heckle",
				hint: "Gain 30 gold. Add a Wound."
			}
		]
	},
	{
		id: "lottery",
		title: "Bone Lottery",
		body: "A cup of finger-bones. One is gilded. The rest are not.",
		choices: [
			{
				id: "draw",
				label: "Draw a bone",
				hint: "50%: a relic. 50%: a Wound."
			},
			{
				id: "buy",
				label: "Buy the gilded one — 55g",
				hint: "Gain a relic.",
				requireGold: 55
			},
			{
				id: "pass",
				label: "Pass the cup",
				hint: "Gain 20 gold."
			}
		]
	},
	{
		id: "mirror",
		title: "The Unburied Mirror",
		body: "Your double mouths a word you have not said yet. The glass is warm.",
		choices: [
			{
				id: "smash",
				label: "Smash it",
				hint: "Remove a card from your deck."
			},
			{
				id: "copy",
				label: "Let it copy you",
				hint: "Duplicate a random card in your deck."
			},
			{
				id: "bow",
				label: "Bow",
				hint: "Heal 16 HP."
			}
		]
	},
	{
		id: "procession",
		title: "The Procession",
		body: "Pallbearers with empty hands. They have not decided who is in the box.",
		choices: [
			{
				id: "carry",
				label: "Take a handle",
				hint: "Choose 1 of 3 cards. Take 7 damage."
			},
			{
				id: "cut",
				label: "Cut across",
				hint: "Gain 40 gold. Add a Wound."
			},
			{
				id: "hide",
				label: "Step into a niche",
				hint: "Heal 14 HP."
			}
		]
	},
	{
		id: "ledger",
		title: "The Ledger",
		body: "A book of debts. Your name is already written, in a hand that is not yours.",
		choices: [
			{
				id: "sign",
				label: "Sign anyway",
				hint: "Lose 10 Max HP. Gain a relic."
			},
			{
				id: "erase",
				label: "Scratch it out — 35g",
				hint: "Remove a card.",
				requireGold: 35
			},
			{
				id: "read",
				label: "Read the other names",
				hint: "Gain 55 gold."
			}
		]
	},
	{
		id: "niche",
		title: "Hungry Niche",
		body: "A hole in the wall the size of a heart. It breathes when you do.",
		choices: [
			{
				id: "feed",
				label: "Feed it a Strike",
				hint: "Remove a Strike. Heal 12. Gain 20 gold."
			},
			{
				id: "reach",
				label: "Reach in",
				hint: "Gain a relic. Add 2 Wounds."
			},
			{
				id: "walk",
				label: "Walk on",
				hint: "Nothing happens."
			}
		]
	},
	{
		id: "guest",
		title: "The Uninvited Guest",
		body: "A table is set for one. The second chair is already pulled out.",
		choices: [
			{
				id: "dine",
				label: "Sit and eat",
				hint: "Heal 40% HP. Add a Wound."
			},
			{
				id: "pay",
				label: "Leave 25 gold",
				hint: "Gain a potion.",
				requireGold: 25
			},
			{
				id: "starve",
				label: "Refuse the plate",
				hint: "Gain 6 Max HP."
			}
		]
	},
	{
		id: "crack",
		title: "Whispering Crack",
		body: "A split in the masonry talks in your voice, a half-second late.",
		choices: [
			{
				id: "listen",
				label: "Listen",
				hint: "Gain a rare card. Take 12 damage."
			},
			{
				id: "seal",
				label: "Pack it with linen",
				hint: "Heal 18 HP."
			},
			{
				id: "answer",
				label: "Answer it",
				hint: "Duplicate a random card. Lose 8 HP."
			}
		]
	},
	{
		id: "garden",
		title: "Soot Garden",
		body: "Ash-flowers grow from a collapsed lung of earth. They turn toward you.",
		choices: [
			{
				id: "pluck",
				label: "Pluck one",
				hint: "Heal 20 HP."
			},
			{
				id: "eat",
				label: "Eat a bloom",
				hint: "Gain 10 Max HP. Add 2 Wounds."
			},
			{
				id: "burn",
				label: "Burn the bed",
				hint: "Gain 50 gold."
			}
		]
	},
	{
		id: "skull",
		title: "Crossroads Skull",
		body: "A skull on a spike, facing three ways. One jaw still has a gold tooth.",
		choices: [
			{
				id: "ask",
				label: "Ask the way",
				hint: "Choose 1 of 3 cards."
			},
			{
				id: "kick",
				label: "Kick it down",
				hint: "Gain 40 gold. Take 9 damage."
			},
			{
				id: "bury",
				label: "Bury it",
				hint: "Heal 10 HP. Gain 15 gold."
			}
		]
	},
	{
		id: "mask",
		title: "The Warden's Mask",
		body: "A pale mask hung on a nail. The inside is still warm.",
		choices: [
			{
				id: "wear",
				label: "Put it on",
				hint: "Gain 8 Max HP. Lose 15 HP."
			},
			{
				id: "hang",
				label: "Hang it facing out",
				hint: "Upgrade a card."
			},
			{
				id: "sell",
				label: "Tuck it in your coat",
				hint: "Gain 60 gold."
			}
		]
	},
	{
		id: "bell",
		title: "The Wrong Bell",
		body: "A bell with no clapper. Someone has been ringing it anyway.",
		choices: [
			{
				id: "ring",
				label: "Ring it",
				hint: "Gain 2 potions. Take 8 damage."
			},
			{
				id: "steal",
				label: "Take the bell — 20g to quiet it",
				hint: "Gain a relic.",
				requireGold: 20
			},
			{
				id: "leave",
				label: "Leave it ringing",
				hint: "Heal 8 HP. Gain 10 gold."
			}
		]
	},
	{
		id: "tithe",
		title: "Ember Tithe",
		body: "A brass plate. Coins on it are blackened. A notice: THE CROWN STILL COLLECTS.",
		act: 2,
		choices: [
			{
				id: "pay",
				label: "Pay 40 gold",
				hint: "Heal to 75% HP.",
				requireGold: 40
			},
			{
				id: "blood",
				label: "Pay in blood",
				hint: "Take 14 damage. Gain a rare card."
			},
			{
				id: "refuse",
				label: "Refuse the tax",
				hint: "Gain 70 gold. Add 2 Wounds."
			}
		]
	},
	{
		id: "second_name",
		title: "The Second Name",
		body: "A clerk without a face asks what you are called now. The first answer is already dry on the page.",
		act: 2,
		choices: [
			{
				id: "speak",
				label: "Give a new name",
				hint: "Duplicate your most expensive-feeling card. Take 8 damage."
			},
			{
				id: "silent",
				label: "Say nothing",
				hint: "Gain a relic."
			},
			{
				id: "lie",
				label: "Lie",
				hint: "Gain 80 gold. Add a Wound."
			}
		]
	}
];
var EVENT_BY_ID = Object.fromEntries(EVENTS.map((e) => [e.id, e]));
function rollEvent(rng, seen = [], act = 1) {
	const pool = EVENTS.filter((e) => !e.act || e.act <= act);
	const fresh = pool.filter((e) => !seen.includes(e.id));
	return rng.pick(fresh.length ? fresh : pool);
}
function grantRelic(run, rng) {
	const relic = rollRelic(rng, run.relics);
	if (!relic) return null;
	run.relics = [...run.relics, relic];
	if (relic === "anchor_ring") {
		run.maxHp += 8;
		run.hp += 8;
	}
	return relic;
}
function grantPotion(run, rng) {
	const i = run.potions.findIndex((p) => p === null);
	if (i < 0) return false;
	const next = [...run.potions];
	next[i] = rollPotion(rng);
	run.potions = next;
	return true;
}
function duplicateRandom(run, rng) {
	const pool = run.deck.filter((c) => c.defId !== "wound");
	if (!pool.length) return null;
	const card = rng.pick(pool);
	run.deck.push(mintCard(card.defId, card.upgraded));
	return card.defId;
}
function removeStrike(run) {
	const i = run.deck.findIndex((c) => c.defId === "strike" && !c.upgraded);
	if (i < 0) {
		const j = run.deck.findIndex((c) => c.defId === "strike");
		if (j < 0) return false;
		run.deck.splice(j, 1);
		return true;
	}
	run.deck.splice(i, 1);
	return true;
}
function applyEventChoice(run, rng, eventId, choiceId) {
	const next = {
		...run,
		deck: run.deck.map((c) => ({ ...c })),
		relics: [...run.relics],
		potions: [...run.potions],
		seenEvents: [...run.seenEvents ?? []]
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
	if (eventId === "font" && choiceId === "wash") return {
		run: next,
		message: "The water rewrites a name.",
		followUp: "upgrade"
	};
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
	if (eventId === "shrine" && choiceId === "spit") {
		next.gold += 35;
		return {
			run: next,
			message: "The shrine accepts an insult. +35 gold."
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
		if (grantRelic(next, rng)) return {
			run: next,
			message: "The lock gives. You take a relic and leave blood on the wire."
		};
		return {
			run: next,
			message: "Empty. The wire still bites."
		};
	}
	if (eventId === "cache" && choiceId === "leave") {
		heal(8);
		return {
			run: next,
			message: "You leave the wire alone. Healed 8 HP."
		};
	}
	if (eventId === "bargain" && choiceId === "accept") {
		next.deck.push(mintCard("wound"));
		return {
			run: next,
			message: "A rare rite, and a Wound.",
			followUp: "cards",
			cardBias: "boss"
		};
	}
	if (eventId === "bargain" && choiceId === "walk") {
		heal(12);
		return {
			run: next,
			message: "You keep walking. Healed 12 HP."
		};
	}
	if (eventId === "bargain" && choiceId === "counter") {
		next.gold += 45;
		dmg(10);
		return {
			run: next,
			message: "The voice laughs. +45 gold."
		};
	}
	if (eventId === "choir" && choiceId === "join") {
		dmg(6);
		const pool = next.deck.filter((c) => !c.upgraded && c.defId !== "wound");
		rng.shuffle(pool);
		for (const card of pool.slice(0, 2)) {
			const found = next.deck.find((c) => c.uid === card.uid);
			if (found) found.upgraded = true;
		}
		return {
			run: next,
			message: "The hymn takes a little blood and rewrites two rites."
		};
	}
	if (eventId === "choir" && choiceId === "plug") {
		if (grantPotion(next, rng)) return {
			run: next,
			message: "Silence. A vial rolls from the grate."
		};
		next.gold += 20;
		return {
			run: next,
			message: "Your belt is full. +20 gold instead."
		};
	}
	if (eventId === "choir" && choiceId === "heckle") {
		next.gold += 30;
		next.deck.push(mintCard("wound"));
		return {
			run: next,
			message: "They falter. +30 gold, and a Wound."
		};
	}
	if (eventId === "lottery" && choiceId === "draw") {
		if (rng.chance(.5) && grantRelic(next, rng)) return {
			run: next,
			message: "Gilded. A relic sits in the cup."
		};
		next.deck.push(mintCard("wound"));
		return {
			run: next,
			message: "Bare bone. A Wound is added to your deck."
		};
	}
	if (eventId === "lottery" && choiceId === "buy") {
		next.gold -= 55;
		if (grantRelic(next, rng)) return {
			run: next,
			message: "You buy the sure thing."
		};
		next.gold += 25;
		return {
			run: next,
			message: "No relic left. A partial refund."
		};
	}
	if (eventId === "lottery" && choiceId === "pass") {
		next.gold += 20;
		return {
			run: next,
			message: "The cup moves on. +20 gold."
		};
	}
	if (eventId === "mirror" && choiceId === "smash") return {
		run: next,
		message: "Glass and a name, both gone.",
		followUp: "remove"
	};
	if (eventId === "mirror" && choiceId === "copy") {
		duplicateRandom(next, rng);
		return {
			run: next,
			message: "A second you steps into the deck."
		};
	}
	if (eventId === "mirror" && choiceId === "bow") {
		heal(16);
		return {
			run: next,
			message: "The double nods. Healed 16 HP."
		};
	}
	if (eventId === "procession" && choiceId === "carry") {
		dmg(7);
		return {
			run: next,
			message: "The box is lighter than it should be.",
			followUp: "cards"
		};
	}
	if (eventId === "procession" && choiceId === "cut") {
		next.gold += 40;
		next.deck.push(mintCard("wound"));
		return {
			run: next,
			message: "You cross the line. +40 gold, and a Wound."
		};
	}
	if (eventId === "procession" && choiceId === "hide") {
		heal(14);
		return {
			run: next,
			message: "They pass. Healed 14 HP."
		};
	}
	if (eventId === "ledger" && choiceId === "sign") {
		next.maxHp = Math.max(20, next.maxHp - 10);
		if (next.hp > next.maxHp) next.hp = next.maxHp;
		grantRelic(next, rng);
		return {
			run: next,
			message: "The debt is witnessed. Max HP −10. A relic."
		};
	}
	if (eventId === "ledger" && choiceId === "erase") {
		next.gold -= 35;
		return {
			run: next,
			message: "Ink and gold, both spent.",
			followUp: "remove"
		};
	}
	if (eventId === "ledger" && choiceId === "read") {
		next.gold += 55;
		return {
			run: next,
			message: "Other people's ruin. +55 gold."
		};
	}
	if (eventId === "niche" && choiceId === "feed") {
		if (removeStrike(next)) {
			heal(12);
			next.gold += 20;
			return {
				run: next,
				message: "It swallows a Strike. Healed 12. +20 gold."
			};
		}
		heal(6);
		return {
			run: next,
			message: "No Strike to feed. It takes a sip anyway. Healed 6."
		};
	}
	if (eventId === "niche" && choiceId === "reach") {
		grantRelic(next, rng);
		next.deck.push(mintCard("wound"), mintCard("wound"));
		return {
			run: next,
			message: "A relic, and two Wounds clinging to your wrist."
		};
	}
	if (eventId === "niche" && choiceId === "walk") return {
		run: next,
		message: "The hole watches you go."
	};
	if (eventId === "guest" && choiceId === "dine") {
		heal(Math.ceil(next.maxHp * .4));
		next.deck.push(mintCard("wound"));
		return {
			run: next,
			message: "The meat is yours. So is the Wound."
		};
	}
	if (eventId === "guest" && choiceId === "pay") {
		next.gold -= 25;
		if (grantPotion(next, rng)) return {
			run: next,
			message: "A vial by the plate."
		};
		next.gold += 15;
		return {
			run: next,
			message: "No room for a vial. Partial coin back."
		};
	}
	if (eventId === "guest" && choiceId === "starve") {
		next.maxHp += 6;
		next.hp += 6;
		return {
			run: next,
			message: "Hunger agrees to wait. Max HP +6."
		};
	}
	if (eventId === "crack" && choiceId === "listen") {
		dmg(12);
		return {
			run: next,
			message: "It tells you a rare name.",
			followUp: "cards",
			cardBias: "boss"
		};
	}
	if (eventId === "crack" && choiceId === "seal") {
		heal(18);
		return {
			run: next,
			message: "The masonry sleeps. Healed 18 HP."
		};
	}
	if (eventId === "crack" && choiceId === "answer") {
		dmg(8);
		duplicateRandom(next, rng);
		return {
			run: next,
			message: "It repeats you into the deck."
		};
	}
	if (eventId === "garden" && choiceId === "pluck") {
		heal(20);
		return {
			run: next,
			message: "The bloom cools on your tongue. Healed 20 HP."
		};
	}
	if (eventId === "garden" && choiceId === "eat") {
		next.maxHp += 10;
		next.hp += 10;
		next.deck.push(mintCard("wound"), mintCard("wound"));
		return {
			run: next,
			message: "Max HP +10. Two Wounds take root."
		};
	}
	if (eventId === "garden" && choiceId === "burn") {
		next.gold += 50;
		return {
			run: next,
			message: "Soot money. +50 gold."
		};
	}
	if (eventId === "skull" && choiceId === "ask") return {
		run: next,
		message: "It points, with someone else's finger.",
		followUp: "cards"
	};
	if (eventId === "skull" && choiceId === "kick") {
		next.gold += 40;
		dmg(9);
		return {
			run: next,
			message: "The tooth comes free. +40 gold."
		};
	}
	if (eventId === "skull" && choiceId === "bury") {
		heal(10);
		next.gold += 15;
		return {
			run: next,
			message: "You give it earth. It gives a little back."
		};
	}
	if (eventId === "mask" && choiceId === "wear") {
		next.maxHp += 8;
		dmg(15);
		return {
			run: next,
			message: "It fits. Max HP +8."
		};
	}
	if (eventId === "mask" && choiceId === "hang") return {
		run: next,
		message: "The empty face watches a rite change.",
		followUp: "upgrade"
	};
	if (eventId === "mask" && choiceId === "sell") {
		next.gold += 60;
		return {
			run: next,
			message: "Warm ivory in the coat. +60 gold."
		};
	}
	if (eventId === "bell" && choiceId === "ring") {
		dmg(8);
		const a = grantPotion(next, rng);
		const b = grantPotion(next, rng);
		if (a || b) return {
			run: next,
			message: "The well answers in glass."
		};
		next.gold += 25;
		return {
			run: next,
			message: "No room for vials. +25 gold."
		};
	}
	if (eventId === "bell" && choiceId === "steal") {
		next.gold -= 20;
		if (grantRelic(next, rng)) return {
			run: next,
			message: "The ringing stops. A relic in its place."
		};
		return {
			run: next,
			message: "Quiet. Nothing else."
		};
	}
	if (eventId === "bell" && choiceId === "leave") {
		heal(8);
		next.gold += 10;
		return {
			run: next,
			message: "You leave it to its work."
		};
	}
	if (eventId === "tithe" && choiceId === "pay") {
		next.gold -= 40;
		const target = Math.ceil(next.maxHp * .75);
		if (next.hp < target) next.hp = target;
		return {
			run: next,
			message: "The plate is satisfied. HP set toward 75%."
		};
	}
	if (eventId === "tithe" && choiceId === "blood") {
		dmg(14);
		return {
			run: next,
			message: "The Crown drinks. A rare rite remains.",
			followUp: "cards",
			cardBias: "boss"
		};
	}
	if (eventId === "tithe" && choiceId === "refuse") {
		next.gold += 70;
		next.deck.push(mintCard("wound"), mintCard("wound"));
		return {
			run: next,
			message: "Tax evasion, tomb-style. +70 gold, two Wounds."
		};
	}
	if (eventId === "second_name" && choiceId === "speak") {
		dmg(8);
		duplicateRandom(next, rng);
		return {
			run: next,
			message: "The clerk writes it twice."
		};
	}
	if (eventId === "second_name" && choiceId === "silent") {
		if (grantRelic(next, rng)) return {
			run: next,
			message: "Silence is entered as a relic."
		};
		heal(12);
		return {
			run: next,
			message: "The clerk shrugs. Healed 12 HP."
		};
	}
	if (eventId === "second_name" && choiceId === "lie") {
		next.gold += 80;
		next.deck.push(mintCard("wound"));
		return {
			run: next,
			message: "The page blisters. +80 gold, and a Wound."
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
	seenHint: false,
	plain: false
});
function storageGet(key) {
	if (typeof window === "undefined") return null;
	try {
		const local = localStorage.getItem(key);
		if (local) return local;
	} catch {}
	try {
		return sessionStorage.getItem(key);
	} catch {
		return null;
	}
}
function storageSet(key, value) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(key, value);
	} catch {}
	try {
		sessionStorage.setItem(key, value);
	} catch {}
}
function storageRemove(key) {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(key);
	} catch {}
	try {
		sessionStorage.removeItem(key);
	} catch {}
}
function read(key) {
	try {
		const raw = storageGet(key);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function write(key, value) {
	try {
		storageSet(key, JSON.stringify(value));
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
	if (!s.run.classId) s.run.classId = "interred";
	if (!s.run.act) s.run.act = 1;
	if (!s.run.seenEvents) s.run.seenEvents = [];
	if (s.combat) {
		if (!s.combat.familiars) s.combat.familiars = [];
		if (typeof s.combat.familiarSlots !== "number") s.combat.familiarSlots = s.run.classId === "kindled" ? 3 : 0;
		s.combat.toxin ??= 0;
		s.combat.cinder ??= 0;
		s.combat.daze ??= 0;
		s.combat.envenom ??= 0;
		s.combat.afterburn ??= 0;
		s.combat.bastion ??= 0;
		s.combat.smokeMirrors ??= 0;
		s.combat.focus ??= 0;
		s.combat.plasma ??= 0;
		s.combat.prismPulse ??= 0;
		s.combat.prismUsed ??= false;
		s.combat.overheatPlasma ??= 0;
		s.combat.overheatNeed ??= 0;
		s.combat.cardsPlayed ??= 0;
		s.combat.blockGainedThisTurn ??= 0;
		s.combat.toxinApplied ??= false;
		s.combat.cinderApplied ??= false;
		s.combat.arcana ??= 0;
		s.combat.sage ??= false;
		s.combat.hunger ??= 0;
		s.combat.journal ??= s.combat.log ? [s.combat.log] : [];
		for (const e of s.combat.enemies) {
			e.toxin ??= 0;
			e.cinder ??= 0;
			e.daze ??= 0;
		}
	}
	return s;
}
function saveRun(data) {
	write(RUN_KEY, {
		...data,
		version: RUN_VERSION
	});
}
function clearRun() {
	storageRemove(RUN_KEY);
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
	if (!s.run) return;
	if (s.screen === "title" || s.screen === "select" || s.screen === "howto" || s.screen === "gameover" || s.screen === "victory") return;
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
	}, 1600);
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
		try {
			const meta = loadMeta();
			try {
				setMuted(meta.mute);
			} catch {}
			const saved = loadRun();
			if (saved?.run && saved.run.map?.length) {
				const screen = saved.screen;
				set({
					ready: true,
					meta,
					screen: screen === "combat" && !saved.combat || screen === "shop" && !saved.run.shop || screen === "reward" && !saved.reward || screen === "event" && !saved.event || screen === "picker" && !saved.picker ? "map" : screen,
					run: saved.run,
					combat: saved.combat,
					reward: saved.reward,
					event: saved.event,
					picker: saved.picker
				});
				return;
			}
			set({
				ready: true,
				meta
			});
		} catch {
			set({
				ready: true,
				screen: "title",
				run: null,
				combat: null
			});
		}
	},
	openSelect: () => {
		unlockAudio();
		sfxPlay.click();
		set({
			screen: "select",
			menuOpen: false
		});
	},
	beginRun: (classId) => {
		unlockAudio();
		sfxPlay.click();
		const { run } = newRun(classId);
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
	togglePlain: () => {
		const meta = {
			...get().meta,
			plain: !get().meta.plain
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
				hint: !get().meta.seenHint ? nextRun.classId === "kindled" ? "Familiars pulse at the end of your turn. Play the same Call again to Evolve them." : nextRun.classId === "vampire" ? "Bite heals. Lash spends HP. The Chalice turns that blood into Block." : nextRun.classId === "mage" ? "Spells bank Arcana. Spend 3 on Fireball for a burst, or Discharge the whole pool." : "Enemies telegraph their next action. Block absorbs damage before your life does." : null,
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
			const ev = rollEvent(rng, nextRun.seenEvents ?? [], nextRun.act ?? 1);
			nextRun.seenEvents = [...nextRun.seenEvents ?? [], ev.id];
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
		const hp0 = run.hp;
		const block0 = combat.block;
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
		if (res.playerHurt > 0) pushFloat(set, {
			text: `-${res.playerHurt}`,
			color: "hp",
			x: 0,
			y: 0
		});
		const healed = res.run.hp - hp0 + res.playerHurt;
		if (healed > 0) pushFloat(set, {
			text: `+${healed}`,
			color: "heal",
			x: 0,
			y: 0
		});
		const gained = res.combat.block - block0;
		if (gained > 0) pushFloat(set, {
			text: `+${gained}`,
			color: "block",
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
		const hp0 = run.hp;
		const block0 = combat.block;
		const res = usePotion(run, combat, rng, slot, targetId);
		persistRng(res.run, rng);
		if (res.needTarget) {
			set({ combat: { ...res.combat } });
			return;
		}
		sfxPlay.heal();
		const healed = res.run.hp - hp0;
		if (healed > 0) pushFloat(set, {
			text: `+${healed}`,
			color: "heal",
			x: 0,
			y: 0
		});
		const gained = res.combat.block - block0;
		if (gained > 0) pushFloat(set, {
			text: `+${gained}`,
			color: "block",
			x: 0,
			y: 0
		});
		for (const d of res.damageTo) pushFloat(set, {
			text: `-${d.amount}`,
			color: "hp",
			x: 0,
			y: 0
		});
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
		if (res.followUp === "upgrade") {
			set({
				run: res.run,
				event: {
					...event,
					resolved: true,
					result: res.message
				},
				picker: {
					mode: "upgrade",
					title: "Rewrite a rite",
					subtitle: "Upgrade a card in your deck."
				},
				screen: "picker"
			});
			snapshot(get);
			return;
		}
		if (res.followUp === "cards") {
			const cards = rollCardRewards(rng, res.cardBias ?? (event.defId === "bargain" ? "boss" : "normal"), 3, res.run.classId);
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
	const pulse = endPlayerTurn(run, combat, restoreRng(run));
	if (pulse.damageTo.length) {
		sfxPlay.hit();
		for (const d of pulse.damageTo) pushFloat(set, {
			text: `-${d.amount}`,
			color: "hp",
			x: 0,
			y: 0
		});
		set({ flashes: pulse.damageTo.map((d) => d.id) });
		window.setTimeout(() => {
			const ids = pulse.damageTo.map((d) => d.id);
			set((s) => ({ flashes: s.flashes.filter((id) => !ids.includes(id)) }));
		}, 280);
	} else if (pulse.blockGained > 0) {
		sfxPlay.block();
		pushFloat(set, {
			text: `+${pulse.blockGained}`,
			color: "block",
			x: 0,
			y: 0
		});
	}
	set({
		run: { ...run },
		combat: { ...combat }
	});
	if (combat.enemies.every((e) => e.hp <= 0)) {
		busy = false;
		await winCombat(get, set);
		return;
	}
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
				text: `+${res.blocked}`,
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
	if (node?.type === "boss" && (run.act ?? 1) >= 2) {
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
		bestRow: Math.max(meta.bestRow, run ? runDepth(run) - 1 : -1)
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
		const { run } = get();
		if (run) {
			if ((run.currentNodeId ? nodeById(run.map, run.currentNodeId) : void 0)?.type === "boss" && (run.act ?? 1) < 2) {
				const rng = restoreRng(run);
				beginAct2(run, rng);
				persistRng(run, rng);
				set({
					run: { ...run },
					reward: null,
					combat: null,
					inspect: null,
					screen: "map",
					hint: "The first seal breaks. A second map opens below."
				});
				snapshot(get);
				return;
			}
		}
		set({
			reward: null,
			combat: null,
			inspect: null,
			screen: "map"
		});
		snapshot(get);
	} else snapshot(get);
}
if (typeof window !== "undefined") {
	const persist = () => snapshot(useGame.getState);
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "hidden") persist();
	});
	window.addEventListener("pagehide", persist);
	window.addEventListener("beforeunload", persist);
}
var PORTRAIT = {
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
	wolf: "/game/wolf.jpg"
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
	const plain = useGame((s) => s.meta.plain);
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
	const trauma = plain ? 0 : shake * shake;
	const ox = trauma ? (Math.random() * 2 - 1) * 10 * trauma : 0;
	const oy = trauma ? (Math.random() * 2 - 1) * 8 * trauma : 0;
	const str = playerStr(run, combat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 min-h-0 flex-col relative overflow-hidden",
		style: { transform: `translate(${ox}px, ${oy}px)` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [!plain && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
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
					plain,
					onClick: () => {
						if (locked) return;
						if (combat.targetingUid) play(combat.targetingUid, e.id);
						else if (combat.targetingPotion !== null) drink(combat.targetingPotion, e.id);
					}
				}, e.id))
			}),
			floats.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-[22%] flex justify-center gap-6 z-20",
				children: floats.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("font-display text-4xl sm:text-5xl font-semibold tabular-nums animate-float-up", f.color === "hp" && "text-hp", f.color === "block" && "text-block", f.color === "heal" && "text-heal", f.color === "buff" && "text-accent"),
					style: {
						textShadow: "0 2px 0 rgb(0 0 0 / 0.55), 0 8px 18px rgb(0 0 0 / 0.45)",
						marginLeft: `${(i % 3 - 1) * 28}px`
					},
					children: f.text
				}, f.id))
			}),
			(combat.journal?.length ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-2 top-2 z-20 w-[11.5rem] sm:w-60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "jrpg-panel bg-bg/85 px-2 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.16em] text-accent mb-1",
						children: "Battle log"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-0.5 max-h-24 sm:max-h-36 overflow-hidden",
						children: combat.journal.slice(0, 6).map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: cn("text-[11px] leading-snug", i === 0 ? "text-fg" : "text-muted"),
							children: line
						}, `${i}-${line.slice(0, 12)}`))
					})]
				})
			}),
			combat.familiarSlots > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative px-3 pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl flex justify-center gap-2",
					children: [Array.from({ length: Math.max(0, combat.familiarSlots - combat.familiars.length) }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-14 sm:size-16 rounded-lg border border-dashed border-border bg-bg/50 shrink-0",
						"aria-label": "Empty familiar slot"
					}, `empty-${i}`)), combat.familiars.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("w-20 sm:w-24 rounded-lg border bg-elevated/90 overflow-hidden shrink-0", f.stage >= 3 ? "border-accent ring-1 ring-accent/40" : "border-border"),
						title: `${familiarPassive(f)} · ${familiarEvokeHint(f)}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 sm:h-14 overflow-hidden bg-elevated flex items-center justify-center",
							children: plain ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg text-muted",
								children: familiarName(f).slice(0, 1)
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: FAMILIAR_ART[f.kind],
								alt: "",
								className: "size-full object-cover",
								style: { filter: f.stage === 1 ? "grayscale(0.35)" : f.stage === 2 ? "none" : "contrast(1.15) saturate(1.2)" }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-1.5 py-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("font-display text-xs leading-tight truncate", f.stage >= 3 && "text-accent"),
									children: familiarName(f)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] text-muted tabular-nums truncate",
									children: f.stage >= 3 ? `III · Surge ready` : familiarPassive(f)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 flex gap-0.5 items-center",
									children: [
										1,
										2,
										3
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("rounded-full", s <= f.stage ? "bg-accent" : "bg-border", f.stage >= 3 ? "size-2" : "size-1.5") }, s))
								})
							]
						})]
					}, `${f.kind}-${i}`))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative px-3 pb-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("mx-auto max-w-3xl rounded-lg jrpg-panel bg-elevated/90 px-3 py-2", flashes.includes("player") && "hit-flash"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							!plain && CLASS_BY_ID[run.classId] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: CLASS_BY_ID[run.classId].portrait,
								alt: "",
								className: "size-12 rounded-md object-cover border border-accent/40 shrink-0"
							}),
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
							combat.dexterity !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Dex ", combat.dexterity > 0 ? `+${combat.dexterity}` : combat.dexterity] }),
							combat.weak > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Weak ", combat.weak] }),
							combat.vulnerable > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Vuln ", combat.vulnerable] }),
							combat.frail > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Frail ", combat.frail] }),
							combat.metallicize > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Metal ", combat.metallicize] }),
							combat.toxin > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Toxin ", combat.toxin] }),
							combat.cinder > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Cinder ", combat.cinder] }),
							combat.daze > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Daze ", combat.daze] }),
							combat.envenom > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Venom ", combat.envenom] }),
							combat.afterburn > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Afterburn ", combat.afterburn] }),
							combat.bastion > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Bastion ", combat.bastion] }),
							combat.smokeMirrors > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Smoke ", combat.smokeMirrors] }),
							combat.focus > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Focus ", combat.focus] }),
							combat.plasma > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Plasma ", combat.plasma] }),
							combat.prismPulse > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Prism ", combat.prismPulse] }),
							combat.overheatPlasma > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: [
								"Overheat ",
								combat.overheatNeed,
								"+"
							] }),
							combat.arcana > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Arcana ", combat.arcana] }),
							combat.sage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, { children: "Sage" }),
							combat.hunger > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StatusChip, { children: ["Hunger ", combat.hunger] }),
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
function EnemyPortrait({ enemy, targeting, locked, flashing, playerVuln, onClick, plain }) {
	const dead = enemy.hp <= 0;
	const kind = intentKind(enemy.intent);
	const boss = enemy.defId === "warden" || enemy.defId === "crown";
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
				className: cn("relative overflow-hidden rounded-md border border-border bg-elevated flex items-center justify-center", boss ? "size-32 sm:size-44" : "size-28 sm:size-36", targeting && !dead && "ring-2 ring-accent", flashing && "hit-flash"),
				children: !plain && src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					className: "size-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl sm:text-4xl text-muted px-2 text-center leading-tight",
					children: enemy.name.split(" ").map((w) => w[0]).join("")
				})
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
						className: "mt-1 flex justify-center gap-1 text-[9px] uppercase tracking-wider text-muted flex-wrap",
						children: [
							enemy.strength !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Str ", enemy.strength] }),
							enemy.weak > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Wk ", enemy.weak] }),
							enemy.vulnerable > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Vuln ", enemy.vulnerable] }),
							enemy.toxin > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Tx ", enemy.toxin] }),
							enemy.cinder > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Cn ", enemy.cinder] }),
							enemy.daze > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Dz ", enemy.daze] })
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
	const hint = useGame((s) => s.hint);
	const dismissHint = useGame((s) => s.dismissHint);
	const rows = nodesByRow(run.map);
	const avail = new Set(availableNodes(run.map, run.currentNodeId, run.visited).map((n) => n.id));
	const visited = new Set(run.visited);
	const act = run.act ?? 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 min-h-0 overflow-y-auto px-4 py-6 pb-24 relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs uppercase tracking-[0.2em] text-muted mb-2",
					children: act >= 2 ? "The second seal" : "The descent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-subtle tabular-nums mb-6",
					children: run.row < 0 ? act >= 2 ? "Choose a first landing below" : "Choose a first landing" : `Act ${act} · Landing ${run.row + 1} of ${rows.length}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute left-1/2 top-3 bottom-3 w-px bg-border",
						"aria-hidden": true
					}), rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex justify-center gap-3 sm:gap-8",
						children: row.map((node) => {
							const Icon = ICONS[node.type];
							const isAvail = avail.has(node.id);
							const isDone = visited.has(node.id);
							const isHere = run.currentNodeId === node.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: !isAvail,
								onClick: () => selectNode(node.id),
								className: cn("flex flex-col items-center gap-1.5 min-w-[3.5rem] sm:min-w-[4.5rem] group", !isAvail && !isDone && "opacity-30"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("size-12 sm:size-14 rounded-md border flex items-center justify-center transition-transform duration-(--motion-fast) ease-(--ease-out)", isAvail && "jrpg-panel bg-elevated text-fg group-hover:-translate-y-0.5", isHere && "border-fg bg-elevated", isDone && !isHere && "border-border bg-surface text-muted", !isAvail && !isDone && "border-border bg-bg", node.type === "boss" && "size-14 sm:size-16 rounded-lg"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										strokeWidth: 1.6
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-[10px] uppercase tracking-[0.14em]", isAvail ? "text-fg" : "text-muted"),
									children: nodeLabel(node.type, act)
								})]
							}, node.id);
						})
					}, i))]
				})
			]
		}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-20 flex items-end sm:items-center justify-center bg-bg/70 p-4",
			onClick: dismissHint,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md rounded-xl border border-border bg-surface p-5",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl",
						children: "A deeper well"
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
		})]
	});
}
function TitleScreen() {
	const meta = useGame((s) => s.meta);
	const openSelect = useGame((s) => s.openSelect);
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
			children: [!meta.plain && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
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
					children: "A roguelike deckbuilder. Form a party of one, play your spells and steel, and do not look back."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex w-full max-w-xs flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							className: "w-full",
							onClick: openSelect,
							children: "New Game"
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
function SelectScreen() {
	const beginRun = useGame((s) => s.beginRun);
	const setScreen = useGame((s) => s.setScreen);
	const plain = useGame((s) => s.meta.plain);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg flex flex-col items-center px-4 py-8 sm:py-12 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [!plain && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/game/chamber.jpg",
				alt: "",
				className: "size-full object-cover opacity-40"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/50" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs uppercase tracking-[0.2em] text-accent",
					children: "Choose a hero"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl sm:text-4xl text-center",
					children: "The party"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: CLASSES.map((cls) => {
						const relic = RELIC_BY_ID[cls.relic];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => beginRun(cls.id),
							className: "text-left rounded-lg jrpg-panel bg-surface/90 overflow-hidden hover:brightness-110 transition-[filter] duration-(--motion-fast) ease-(--ease-out)",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-40 sm:h-44 overflow-hidden bg-elevated flex items-center justify-center",
								children: plain ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl text-muted",
									children: cls.name.replace("The ", "").slice(0, 1)
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cls.portrait,
									alt: "",
									className: "size-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl",
										children: cls.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted leading-relaxed text-pretty",
										children: cls.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs tabular-nums",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: "Life"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: cls.hp }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: "Relic"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: relic?.name })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-subtle leading-relaxed",
										children: relic?.text
									})
								]
							})]
						}, cls.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setScreen("title"),
						children: "Return"
					})
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
							children: "Names."
						}), " The Interred heals after each fight. The Veil starts every combat with Dexterity and stacks Toxin and Daze. The Kindled calls familiars that pulse at the end of your turn — play the same Call to Evolve them I→II→III, then Surge. Kindled also applies Cinder, which burns at the end of your turn. The Mage banks Arcana with spells, then spends it on Fireball, Thunder, and Discharge. The Vampire spends HP to strike: Bite heals, Drain sips from every foe, and Blood Shield (with the Chalice) turns wounds into Block. Reward piles can also show Nameless rites, usable by any hero. A picture button in the corner hides portraits if you need a quieter table. Closing or refreshing the page returns you to the last landing."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "Energy and rites."
						}), " Each turn you have three energy. Play cards from your hand to spend it. Attacks deal damage; skills gain Block."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "Statuses."
						}), " Toxin ticks at the start of a turn, then falls by 1. Cinder burns at the end of your turn. Daze makes an enemy skip its next action, or costs you 1 Energy."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "Intents."
						}), " Enemies show their next action above their portrait. Block absorbs damage before your life does, then clears at the start of your turn."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "The map."
						}), " After each chamber, choose a path: fights, elites, a merchant, a rest, or an unknown. Twelve landings to a seal. Unknowns do not repeat in a run — each is a different chamber with three choices. The Pale Warden waits at the bottom of the first map. Defeat it, and a second seal opens — The Ember Crown waits there."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg font-medium",
							children: "Relics."
						}), " Permanent gifts. Elites and bosses drop them. Rest to heal or upgrade a card."] }),
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
	const openSelect = useGame((s) => s.openSelect);
	const setScreen = useGame((s) => s.setScreen);
	const plain = useGame((s) => s.meta.plain);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [!plain && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
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
					children: win ? "The Ember Crown falls. Both seals are quiet. Your name holds. For now." : "The well keeps what it is given."
				}),
				run && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid grid-cols-2 gap-x-8 gap-y-2 text-sm tabular-nums",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: CLASS_BY_ID[run.classId]?.name ?? "The Interred" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Depth"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: runDepth(run) }),
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
						onClick: openSelect,
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
			children: CLASS_BY_ID[run.classId]?.name ?? "Sepulcher"
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
	const togglePlain = useGame((s) => s.togglePlain);
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
						onClick: togglePlain,
						children: meta.plain ? "Pictures hidden" : "Pictures shown"
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
		className: "w-24 text-accent",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.2",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 4 L68 24 L40 44 L12 24 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 24 H68 M40 4 V44" })]
	});
}
function PlainToggle() {
	const plain = useGame((s) => s.meta.plain);
	const togglePlain = useGame((s) => s.togglePlain);
	const screen = useGame((s) => s.screen);
	const inRun = ![
		"title",
		"select",
		"howto",
		"gameover",
		"victory"
	].includes(screen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: togglePlain,
		className: cn("fixed z-50 size-11 rounded-md border border-border bg-elevated/95 text-muted hover:text-fg", inRun ? "top-14 right-3" : "top-3 right-3"),
		"aria-label": plain ? "Show pictures" : "Hide pictures",
		title: plain ? "Show pictures" : "Hide pictures",
		children: plain ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, {
			className: "mx-auto size-4",
			strokeWidth: 1.75
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
			className: "mx-auto size-4",
			strokeWidth: 1.75
		})
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
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {})] });
	if (screen === "title") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {})] });
	if (screen === "select") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScreen, {})] });
	if (screen === "howto") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowToScreen, {})] });
	if (screen === "gameover") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndScreen, { win: false })] });
	if (screen === "victory") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndScreen, { win: true })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainToggle, {}),
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
