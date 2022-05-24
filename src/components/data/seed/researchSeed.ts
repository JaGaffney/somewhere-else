import { efficiency, production, capacity } from "./icons/researchSeedIcons"

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
    description: "Increase the amount of resources gained while gathering.",
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
    description:
      "Increase the capacity of your storehouse to allow you to store more items.",
    type: ResearchType.Global,
  },
]
export const researchSingular = [
  {
    name: "archer",
    cost: {
      gp: 100,
      researchPoints: {
        red: 100,
        green: 10,
        blue: 1,
      },
      other: {},
    },
    icon: capacity,
    description: "Unlock the Archer class",
    type: ResearchType.Combat,
  },
]
