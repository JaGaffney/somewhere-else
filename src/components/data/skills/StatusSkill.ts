import { Skill } from "./Skill"

// the subclass of skills that will contain all generic data regarding status skills which will includes things such as
// melee, magic etc
export class StatusSkill extends Skill {
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
