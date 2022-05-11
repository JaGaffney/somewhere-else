import { Skill } from "./Skill"

import { SkillAction } from "./SkillAction"

// the subclass of skills that will contain all generic data regarding non combat skills
export class GatheringSkill extends Skill {
  actions: Map<string, SkillAction> = new Map()

  constructor(name: string, icon: string, seedData: Array<object>) {
    super(name, icon)
    this.createGatheringData(seedData)
  }

  createGatheringData(gatheringData: object): void {
    for (const key in gatheringData) {
      const val = gatheringData[key]
      const action = new SkillAction(
        val.name,
        val.exp,
        val.time,
        val.manpower,
        val.level,
        val.icon,
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
