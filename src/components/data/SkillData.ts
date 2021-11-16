import { GatheringSkill } from "./skills/GatheringSkill"

// seed data
import { bushcraft, metalwork } from "./seed/skillSeed"

// on loads creates all of the ingame data.
// such as skills, items, exp etc
export class SkillData {
  classSkill: Map<string, GatheringSkill> = new Map()
  combatSkill: Map<string, GatheringSkill> = new Map()
  gatheringSkill: Map<string, GatheringSkill> = new Map()
  productionSkill: Map<string, GatheringSkill> = new Map()

  constructor() {
    this.createGatheringSkills()
  }

  createClassSkills() {}
  createCombatSkills() {}
  createProductionSkills() {}

  createGatheringSkills() {
    this.buildGatheringSkill("bushcraft", "", bushcraft) // woodcutting, bushcraft
    this.buildGatheringSkill("metalwork", "", metalwork)
  }

  buildGatheringSkill(name: string, icon, seed) {
    const skillCreate = new GatheringSkill(name, icon, seed)
    this.gatheringSkill[name] = skillCreate
  }

  getAllSkills() {
    const skillList = []
    return skillList
  }

  getAllNoncombatSkills() {
    const noncombatSkillList = []
    for (const skill in this.gatheringSkill) {
      noncombatSkillList.push(this.gatheringSkill[skill].name)
    }
    return noncombatSkillList
  }

  getNoncombatSkillByName(name: string) {
    return this.gatheringSkill[name]
  }

  getItemIdBySkillId(skillName: string, actionID: string) {
    return this.gatheringSkill[skillName].getItemDataBySkillId(actionID)
  }
}
