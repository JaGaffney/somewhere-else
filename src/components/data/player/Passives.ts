// on load creates all of the ingame data for the player.
export class Passives {
  unlockedPassives: Array<number> = []

  constructor() {}

  addNewUnlockedPassive(passiveID: number) {
    this.unlockedPassives.push(parseInt(passiveID))
  }
}
