import { ResearchType } from "../enums/ResearchType"

import * as icon_research from "./icons/researchSeedIcons"
import * as icon_class from "./icons/classesSeedIcon"

export const researchRepeat = [
  {
    name: "efficiency",
    startLevel: 1,
    maxLevel: 99,
    baseCost: {
      gp: 100,
      researchPoints: {
        red: 100,
        green: 10,
        blue: 1,
      },
      other: {},
    },
    icon: icon_research.efficiency,
    description: "Reduce the time required for all non-combat actions.",
    type: ResearchType.Job,
  },
  {
    name: "production",
    startLevel: 1,
    maxLevel: 99,
    baseCost: {
      gp: 100,
      researchPoints: {
        red: 100,
        green: 10,
        blue: 1,
      },
      other: {},
    },
    icon: icon_research.production,
    description: "Increase the chance of gaining more resources.",
    type: ResearchType.Job,
  },
  {
    name: "capacity",
    startLevel: 10,
    maxLevel: 999,
    baseCost: {
      gp: 100,
      researchPoints: {
        red: 100,
        green: 10,
        blue: 1,
      },
      other: {},
    },
    icon: icon_research.capacity,
    description: "Increase the amount of things you can store.",
    type: ResearchType.Global,
  },
]
export const researchSingular = [
  {
    name: "warrior",
    cost: {
      gp: 0,
      researchPoints: {
        red: 0,
        green: 0,
        blue: 0,
      },
      other: {},
    },
    icon: icon_class.icon_warrior,
    description:
      "Unlocks the Warrior class, the default class for all adventurers.",
    type: ResearchType.Combat,
  },
  {
    name: "archer",
    cost: {
      gp: 1000,
      researchPoints: {
        red: 1000,
        green: 100,
        blue: 10,
      },
      other: {},
    },
    icon: icon_class.icon_archer,
    description:
      "Unlocks the Archer class, which has a focus for critical strikes and stamina regeneration.",
    type: ResearchType.Combat,
  },
  {
    name: "magician",
    cost: {
      gp: 10000,
      researchPoints: {
        red: 5000,
        green: 1000,
        blue: 100,
      },
      other: {},
    },
    icon: icon_class.icon_magician,
    description:
      "Unlocks the Magician class, which has a focus on reducing cooldowns and hitting through armour.",
    type: ResearchType.Combat,
  },
  {
    name: "summoner",
    cost: {
      gp: 10000,
      researchPoints: {
        red: 5000,
        green: 1000,
        blue: 5000000,
      },
      other: {
        1: 100,
        2: 21,
      },
    },
    icon: icon_class.icon_magician,
    description: "Unlocks the summoner class",
    type: ResearchType.Combat,
  },
  {
    name: "cleric",
    cost: {
      gp: 10000,
      researchPoints: {
        red: 5000,
        green: 1000,
        blue: 5000000,
      },
      other: {
        1: 100,
        2: 21,
      },
    },
    icon: icon_class.icon_cleric,
    description:
      "Unlocks the Cleric class, which has a focus on restoring health and defence",
    type: ResearchType.Combat,
  },
  {
    name: "gambler",
    cost: {
      gp: 10000,
      researchPoints: {
        red: 5000,
        green: 1000,
        blue: 5000000,
      },
      other: {
        1: 100,
        2: 21,
      },
    },
    icon: icon_class.icon_gambler,
    description:
      "Unlocks the Gambler class, which has a focus on dealing random damage.",
    type: ResearchType.Combat,
  },
]
