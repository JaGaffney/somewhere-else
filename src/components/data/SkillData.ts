import { GatheringSkill } from "./skills/GatheringSkill"

// seed data
import { bushcraft, metalwork } from "./seed/skillSeed"

// non-combat
// @ts-expect-error
import BUSHCRAFT from "../../images/sidepanel/bushcraft.svg"
// @ts-expect-error
import METALWORK from "../../images/sidepanel/metalwork.svg"

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
    this.buildGatheringSkill("bushcraft", BUSHCRAFT, bushcraft) // woodcutting, bushcraft
    this.buildGatheringSkill("metalwork", METALWORK, metalwork)
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

  getSkillIconByName(name: string) {
    return this.gatheringSkill[name].getIcon()
  }

  getItemIdBySkillId(name: string, actionID: string) {
    return this.gatheringSkill[name].getItemDataBySkillId(actionID)
  }
}
