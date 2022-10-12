import { Skill } from "./Skill"

import { SkillAction } from "./SkillAction"

// the subclass of skills that will contain all generic data regarding non combat skills
export class NonCombatSkill extends Skill {
  actions: Map<string, SkillAction> = new Map()

  constructor(name: string, icon: string, seedData: Array<object>) {
    super(name, icon)
    this.createNonCombatData(seedData)
  }

  createNonCombatData(nonCombatskillData: object): void {
    for (const key in nonCombatskillData) {
      const val = nonCombatskillData[key]
      const action = new SkillAction(
        val.name,
        val.exp,
        val.manpower,
        val.category,
        val.level,
        val.icon,
        val.itemsRequired,
        val.itemsRecieved,
        this.name
      )
      let id = `g_${val.name}`
      id = id.replace(" ", "_")
      this.actions[id] = action
    }
  }

  getItemDataBySkillId(skillID: string) {
    return this.actions[skillID]
  }
}
