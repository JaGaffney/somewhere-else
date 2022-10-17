// @ts-nocheck
import { ClassesEnum } from "../enums/ClassesEnum"
import * as icon from "./icons/attackSeedIcon"

import placeholder from "../../../images/placeholder.svg"

export const attackSeed = [
  {
    id: 1,
    name: "basic attack",
    type: "general",
    power: 20,
    accuracy: 90,
    cooldown: 0,
    stamina: 0,
    effect: { crit: 10 },
    icon: icon.basic,
    levelRequired: 1,
    exp: 1,
  },
  {
    id: 2,
    name: "shield bash",
    type: ClassesEnum.WARRIOR,
    power: 50,
    accuracy: 90,
    cooldown: 2,
    stamina: 50,
    effect: {
      drain: 25,
    },
    icon: icon.shieldBash,
    levelRequired: 1,
    exp: 1,
  },
  {
    id: 3,
    name: "rend",
    type: ClassesEnum.WARRIOR,
    power: 40,
    accuracy: 90,
    cooldown: 2,
    stamina: 50,
    effect: {
      bleed: 10,
    },
    icon: icon.rend,
    levelRequired: 10,
    exp: 1,
  },
  {
    id: 4,
    name: "shield block",
    type: ClassesEnum.WARRIOR,
    power: 0,
    accuracy: 0,
    cooldown: 2,
    stamina: 50,
    effect: {
      armour: 10,
    },
    icon: icon.shieldBlock,
    levelRequired: 20,
    exp: 35,
  },
  {
    id: 5,
    name: "Lightning Arrow",
    type: ClassesEnum.ARCHER,
    power: 1,
    accuracy: 90,
    cooldown: 2,
    stamina: 50,
    effect: {
      elemental: 10,
    },
    icon: icon.arrowLightning,
    levelRequired: 1,
    exp: 1,
  },
  {
    id: 6,
    name: "Leeching Arrow",
    type: ClassesEnum.ARCHER,
    power: 1,
    accuracy: 90,
    cooldown: 2,
    stamina: 50,
    effect: {
      regen: 3,
    },
    icon: icon.arrowLeech,
    levelRequired: 10,
    exp: 1,
  },
  {
    id: 7,
    name: "Tincture",
    type: ClassesEnum.ARCHER,
    power: 0,
    accuracy: 0,
    cooldown: 2,
    stamina: 50,
    effect: {
      regen: 50,
    },
    icon: icon.arrowLeech,
    levelRequired: 20,
    exp: 35,
  },
  {
    id: 8,
    name: "Arcane Blast",
    type: ClassesEnum.MAGICIAN,
    power: 10,
    accuracy: 90,
    cooldown: 1,
    stamina: 50,
    effect: { elemental: 2 },
    icon: icon.arcaneBlast,
    levelRequired: 1,
    exp: 1,
  },
  {
    id: 9,
    name: "Arcane Missle",
    type: ClassesEnum.MAGICIAN,
    power: 10,
    accuracy: 90,
    cooldown: 2,
    stamina: 50,
    effect: { elemental: 7 },
    icon: icon.arcaneMissle,
    levelRequired: 10,
    exp: 1,
  },
  {
    id: 10,
    name: "Arcane Power",
    type: ClassesEnum.MAGICIAN,
    power: 1,
    accuracy: 90,
    cooldown: 2,
    stamina: 100,
    effect: { elemental: 30 },
    icon: icon.arcanePower,
    levelRequired: 20,
    exp: 1,
  },
  {
    id: 11,
    name: "Flash of light",
    type: ClassesEnum.CLERIC,
    power: 1,
    accuracy: 90,
    cooldown: 2,
    stamina: 25,
    effect: { regen: 3 },
    icon: placeholder,
    levelRequired: 10,
    exp: 1,
  },
  {
    id: 12,
    name: "Hand of light",
    type: ClassesEnum.CLERIC,
    power: 5,
    accuracy: 90,
    cooldown: 2,
    stamina: 50,
    effect: { regen: 3 },
    icon: placeholder,
    levelRequired: 10,
    exp: 1,
  },
  {
    id: 12,
    name: "Lay on Hands",
    type: ClassesEnum.CLERIC,
    power: 0,
    accuracy: 0,
    cooldown: 4,
    stamina: 100,
    effect: { regen: 30, armour: 10 },
    icon: placeholder,
    levelRequired: 20,
    exp: 35,
  },
  {
    id: 13,
    name: "Roll the dice I",
    type: ClassesEnum.GAMBLER,
    power: 0,
    accuracy: 90,
    cooldown: 0,
    stamina: 25,
    effect: { crit: 10 },
    icon: placeholder,
    levelRequired: 1,
    exp: 1,
  },
  {
    id: 14,
    name: "Roll the dice II",
    type: ClassesEnum.GAMBLER,
    power: 0,
    accuracy: 90,
    cooldown: 0,
    stamina: 25,
    effect: { crit: 20 },
    icon: placeholder,
    levelRequired: 10,
    exp: 1,
  },
  {
    id: 15,
    name: "Roll the dice III",
    type: ClassesEnum.GAMBLER,
    power: 0,
    accuracy: 90,
    cooldown: 0,
    stamina: 25,
    effect: { crit: 30 },
    icon: placeholder,
    levelRequired: 20,
    exp: 1,
  },
  {
    id: 16,
    name: "Backstab",
    type: ClassesEnum.ASSASSIN,
    power: 25,
    accuracy: 100,
    cooldown: 0,
    stamina: 10,
    effect: { bleed: 5 },
    icon: placeholder,
    levelRequired: 1,
    exp: 1,
  },
  {
    id: 17,
    name: "Evasion",
    type: ClassesEnum.ASSASSIN,
    power: 0,
    accuracy: 0,
    cooldown: 5,
    stamina: 50,
    effect: { dodge: 100 },
    icon: placeholder,
    levelRequired: 10,
    exp: 50,
  },
  {
    id: 19,
    name: "Blind",
    type: ClassesEnum.ASSASSIN,
    power: 0,
    accuracy: 90,
    cooldown: 0,
    stamina: 50,
    effect: { stun: 1 },
    icon: placeholder,
    levelRequired: 20,
    exp: 50,
  },
]
