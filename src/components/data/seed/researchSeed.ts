import { efficiency, production, capacity } from "./icons/researchSeedIcons"
// @ts-nocheck
import WARRIOR from "../../../images/classes/warrior.svg"
import ARCHER from "../../../images/classes/archer.svg"
import MAGICIAN from "../../../images/classes/magician.svg"

import { ResearchType } from "../enums/ResearchType"

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
    icon: efficiency,
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
    icon: production,
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
    icon: capacity,
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
    icon: WARRIOR,
    description: "Unlocks the Warrior class",
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
    icon: ARCHER,
    description: "Unlocks the Archer class",
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
    icon: MAGICIAN,
    description: "Unlocks the Magician class",
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
    icon: MAGICIAN,
    description: "Unlocks the summoner class",
    type: ResearchType.Combat,
  },
]
