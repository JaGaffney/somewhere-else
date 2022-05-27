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
