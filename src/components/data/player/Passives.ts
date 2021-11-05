// on load creates all of the ingame data for the player.
export class Passives {
  unlockedPassives: Map<string, boolean> = new Map()
  equippedPassives: object = { 1: "", 2: "", 3: "", 4: "" }

  constructor() {}

  addNewUnlockedPassive(passiveId: string) {
    this.unlockedPassives[passiveId] = true
  }
  getUnlockedPassive(id: string) {
    return this.unlockedPassives[id]
  }

  changeEquippedPassives(location: number, id: string) {
    if (!Object.values(this.equippedPassives).includes(id)) {
      this.equippedPassives[location] = id
    }
  }

  getEquippedPassiveAtLocation(location: number): object {
    return this.equippedPassives[location]
  }
}
