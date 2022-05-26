// seed data
import { researchRepeat, researchSingular } from "./seed/researchSeed"

import { ResearchType } from "./enums/ResearchType"

class ResearchDataCost {
  gp: number
  researchPoints: {
    red: number
    green: number
    blue: number
  }
  other: Object

  constructor(gp: number, researchPoints, other) {
    this.gp = gp
    this.researchPoints = researchPoints
    this.other = other
  }
}

class Research {
  name: string
  cost: ResearchDataCost
  icon: string
  description: string
  type: ResearchType

  constructor(
    name: string,
    icon: string,
    cost: Object,
    description: string,
    type: ResearchType
  ) {
    this.name = name
    this.cost = new ResearchDataCost(
      cost["gp"],
      cost["researchPoints"],
      cost["other"]
    )
    this.icon = icon
    this.description = description
    this.type = type
  }
}

class ResearchSingular extends Research {
  startLevel: number
  maxLevel: number

  constructor(
    name: string,
    startLevel: number,
    maxLevel: number,
    cost: any,
    icon: string,
    description: string,
    type: ResearchType
  ) {
    super(name, cost, icon, description, type)
    this.name = name
    this.startLevel = startLevel
    this.maxLevel = maxLevel
    this.cost = new ResearchDataCost(
      cost["gp"],
      cost["researchPoints"],
      cost["other"]
    )
    this.icon = icon
    this.description = description
    this.type = type
  }
}

export class ResearchData {
  repeat: Object = {}
  singular: Object = {}
  redConstant: number = 0.1
  greenConstant: number = 0.2
  blueConstant: number = 0.3

  constructor() {
    this.createResearchRepeat(researchRepeat)
    this.createResearchSingular(researchSingular)
  }

  private createResearchRepeat(researchRepeatData) {
    for (const data in researchRepeatData) {
      let name = researchRepeatData[data].name
      let startLevel = researchRepeatData[data].startLevel
      let maxLevel = researchRepeatData[data].maxLevel
      let baseCost = researchRepeatData[data].baseCost
      let icon = researchRepeatData[data].icon
      let description = researchRepeatData[data].description
      let type = researchRepeatData[data].type

      this.repeat[name] = new ResearchSingular(
        name,
        startLevel,
        maxLevel,
        baseCost,
        icon,
        description,
        type
      )
    }
  }

  private createResearchSingular(researchRepeatData) {
    for (const data in researchRepeatData) {
      let name = researchRepeatData[data].name
      let cost = researchRepeatData[data].cost
      let icon = researchRepeatData[data].icon
      let description = researchRepeatData[data].description
      let type = researchRepeatData[data].type

      this.singular[name] = new Research(name, cost, icon, description, type)
    }
  }
}
