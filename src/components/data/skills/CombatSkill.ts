import { Skill } from "./Skill"

// the subclass of skills that will contain all generic data regarding combat skills which will includes things such as
export class CombatSkill extends Skill {
  constructor(name: string, seedData: Array<object>) {
    super(name, "")
    this.createClassSkills(seedData)
  }

  createClassSkills(data: object): void {
    for (const key in data) {
      const val = data[key]
      this.setIcon(val.icon)
    }
  }
}
