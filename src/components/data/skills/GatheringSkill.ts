import { Skill } from "./Skill"

import { SkillAction } from "./SkillAction"

// the subclass of skills that will contain all generic data regarding non combat skills
export class GatheringSkill extends Skill {
  actions: Map<string, SkillAction> = new Map()

  constructor(name: string, icon: string, seedData: Array<object>) {
    super(name, icon)
    console.log(seedData)
    this.createGatheringData(seedData)
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
      let id = `g_${val.name}`
      this.actions[id] = action
    }
  }

  getItemDataBySkillId(skillId: string) {
    return this.actions[skillId]
  }
}
