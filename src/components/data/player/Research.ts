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

  public updateResearchRepeat(key: string, value: number): void {
    if (this.repeat === undefined) {
      this.repeat = {}
    }

    if (this.repeat[key]) {
      this.repeat[key] = this.repeat[key] + value
    } else {
      this.repeat[key] = value
    }
  }

  public updateResearchSingle(key: string, value: boolean): void {
    if (this.singular === undefined) {
      this.singular = {}
    }

    this.singular[key] = value
  }
}
