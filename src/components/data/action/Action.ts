export class Action {
  name: string = "idle"
  timeOfLastAction: number = 0

  constructor() {}

  getActiveAction() {}

  setActiveAction(name, time) {
    let deltaTime = this.timeOfLastAction - time
  }
}
