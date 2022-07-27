// on load creates all of the ingame data for the player.
export class Passives {
  unlockedPassives: Array<number> = []
  equippedPassives: Object = { 1: null, 2: null, 3: null, 4: null }

  constructor() {}

  addNewUnlockedPassive(passiveID: number) {
    this.unlockedPassives.push(parseInt(passiveID))
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
