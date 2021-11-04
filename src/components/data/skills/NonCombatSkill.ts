import { Skill } from "./Skill"

import { SkillAction } from "./SkillAction"
import { ProductionAction } from "./ProductionAction"

// the subclass of skills that will contain all generic data regarding non combat skills
export class NonCombatSkill extends Skill {
  gatheringName: string
  productionName: string
  production: Map<string, ProductionAction> = new Map()
  gathering: Map<string, SkillAction> = new Map()

  constructor(
    name: string,
    gatheringName: string,
    productionName: string,
    icon: string,
    seedData
  ) {
    super(name, icon)
    this.gatheringName = gatheringName
    this.productionName = productionName
    this.createGatheringData(seedData.gathering)
    this.createProductionData(seedData.production)
  }

  createProductionData(productionData: object): void {
    for (const key in productionData) {
      const val = productionData[key]
      const action = new ProductionAction(
        val.name,
        val.exp,
        val.time,
        val.level,
        val.icon,
        val.itemsRecieved,
        val.itemsRequired
      )
      let id = `${this.productionName}_${val.name}`
      this.production[id] = action
    }
  }

  createGatheringData(gatheringData: object): void {
    for (const key in gatheringData) {
      const val = gatheringData[key]
      const action = new SkillAction(
        val.name,
        val.exp,
        val.time,
        val.level,
        val.icon,
        val.itemsRecieved
      )
      let id = `${this.gatheringName}_${val.name}`
      this.gathering[id] = action
    }
  }
}
