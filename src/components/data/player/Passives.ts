// on load creates all of the ingame data for the player.
export class Passives {
  unlockedPassives: Map<number, boolean> = new Map()
  equippedPassives: Object = { 1: null, 2: null, 3: null, 4: null }

  constructor() {}

  addNewUnlockedPassive(passiveId: number) {
    this.unlockedPassives[passiveId] = true
  }
  getUnlockedPassive(id: number) {
    return this.unlockedPassives[id]
  }

  getAllUnlockedPassivesID(): Array<number> {
    const unlockedPassiveID = []
    Object.values(this.equippedPassives).forEach(function (key: number, val) {
      unlockedPassiveID.push(key)
    })

    return unlockedPassiveID
  }

  changeEquippedPassives(location: number, id: number) {
    if (!Object.values(this.equippedPassives).includes(id)) {
      this.equippedPassives[location] = id
    }
  }

  getEquippedPassiveAtLocation(location: number): number | null {
    return this.equippedPassives[location]
  }
}
