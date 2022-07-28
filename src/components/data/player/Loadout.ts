import { JobClass } from "./JobClass"

export class Loadout {
  loadout: Object = { 1: new JobClass(1) } // default
  activeLoadout: number = 1

  constructor() {}

  public loadLoadout(data) {
    this.activeLoadout = data.activeLoadout
    for (const loadout in data.loadout) {
      const loadoutNumber = parseInt(loadout)
      this.loadout[loadoutNumber] = new JobClass(loadoutNumber)
      this.loadout[loadoutNumber].name = data.loadout[loadoutNumber].name
      this.loadout[loadoutNumber].equippedAttacks =
        data.loadout[loadoutNumber].equippedAttacks
      this.loadout[loadoutNumber].rotation =
        data.loadout[loadoutNumber].rotation
    }
  }

  public getLoadoutByNumber(loadout: number): JobClass {
    return this.loadout[loadout]
  }

  public createNewLoadout() {
    const currentTotalLoadouts: number = Object.keys(this.loadout).length + 1
    const newLoadout = new JobClass(currentTotalLoadouts)
    this.loadout[currentTotalLoadouts] = newLoadout
  }

  public setActiveLoadout(layout: number): void {
    this.activeLoadout = layout
  }
}
