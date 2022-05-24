// on load creates all of the ingame data for the player.
export class Research {
  repeat: Object = {}
  singular: Object = {}

  constructor() {}

  public setRepeat(data): void {
    this.repeat = data
  }
  public setSingular(data): void {
    this.singular = data
  }

  public updateResearch(repeat: boolean, key: string, value): void {
    if (repeat) {
      if (this.repeat === undefined) {
        this.repeat = {}
      }
      this.repeat[key] = value
    } else {
      if (this.singular === undefined) {
        this.singular = {}
      }
      this.singular[key] = value
    }
  }
}
