import { Skill } from "./Skill"

import { SkillAction } from "./SkillAction"
import { ProductionAction } from "./ProductionAction"

// the subclass of skills that will contain all generic data regarding non combat skills
export class NonCombatSkill extends Skill {
  gatheringName: string
  productionName: string
  production: Array<ProductionAction> = []
  gathering: Array<SkillAction> = []

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

  createProductionData(productionData) {
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
      this.production.push(action)
    }
  }

  createGatheringData(gatheringData) {
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
      this.gathering.push(action)
    }
  }

  createRecipes() {}
}
