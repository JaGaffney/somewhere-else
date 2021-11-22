import { Skill } from "./Skill"

// the subclass of skills that will contain all generic data regarding status skills which will includes things such as
// melee, magic etc
export abstract class StatusSkill extends Skill {
  actions: Map<string, any> = new Map()

  constructor(name: string, icon: string, seedData: Array<object>) {
    super(name, icon)
    this.createClassSkills(seedData)
  }

  createClassSkills(data): void {}
}
