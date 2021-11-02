import { Skill } from "./Skill"

// the subclass of skills that will contain all generic data regarding non combat skills
export abstract class NonCombatSkill extends Skill {
  production: Array<any>
  gathering: Array<any>
  recipes: Array<any>

  getSkillActionByID(id: string) {}
}
