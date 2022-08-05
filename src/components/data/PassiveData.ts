import { Passive } from "./passive/Passive"

import { passiveSeed } from "./seed/passiveSeed"

// on loads creates all of the items in game data.
export class PassiveData {
  passives: Map<number, Passive> = new Map()

  constructor() {
    this.createPassives()
  }

  private createPassives(): void {
    for (const key in passiveSeed) {
      this.passives.set(
        passiveSeed[key].id,
        new Passive(
          passiveSeed[key].name,
          passiveSeed[key].job,
          passiveSeed[key].icon,
          passiveSeed[key].description,
          passiveSeed[key].rarity,
          passiveSeed[key].effect,
          passiveSeed[key].levelRequired
        )
      )
    }
  }

  getPassiveById(id: number) {
    return this.passives.get(id)
  }
}
