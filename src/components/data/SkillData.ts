import { NonCombatSkill } from "./skills/NonCombatSkill"

// seed data
import { bushcraft, metalwork } from "./seed/skillSeed"

// on loads creates all of the ingame data.
// such as skills, items, exp etc
export class SkillData {
  classSkill: Map<string, NonCombatSkill> = new Map()
  combatSkill: Map<string, NonCombatSkill> = new Map()
  noncombatSkill: Map<string, NonCombatSkill> = new Map()

  constructor() {
    this.createNoncombatSkills()
  }

  createClassSkills() {}
  createCombatSkills() {}
  createNoncombatSkills() {
    this.buildNonCombatSkill(
      "bushcraft",
      "woodcutting",
      "fletching",
      "",
      bushcraft
    )
    this.buildNonCombatSkill("metalwork", "mining", "smithing", "", metalwork)
  }

  buildNonCombatSkill(name, gathering, production, icon, seed) {
    const skillCreate = new NonCombatSkill(
      name,
      gathering,
      production,
      icon,
      seed
    )
    this.noncombatSkill[name] = skillCreate
  }

  getAllSkills() {
    const skillList = []

    return skillList
  }

  getAllNoncombatSkills() {
    const noncombatSkillList = []
    for (const skill in this.noncombatSkill) {
      noncombatSkillList.push(this.noncombatSkill[skill].name)
    }
    return noncombatSkillList
  }

  getNoncombatSkillByName(name: string) {
    return this.noncombatSkill[name]
  }
}
