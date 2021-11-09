// game engine tick
export class GameEngine {
  oldActionTime: number
  timeToComplete: number = 0
  actionID: string | null = null

  constructor(oldActionTime: number) {
    this.oldActionTime = oldActionTime
  }

  setOldActionTime() {
    this.oldActionTime = new Date().valueOf()
  }

  setActionID(skillId: string) {
    this.actionID = skillId
  }

  setTimeToComplete(val: number) {
    // turn value into ms
    this.timeToComplete = val * 1000
  }

  gameTick() {
    let currentTime = new Date().valueOf()
    let previousTime = this.oldActionTime
    let deltaTime = currentTime - previousTime

    if (this.timeToComplete !== 0) {
      if (deltaTime > 1000) {
        if (deltaTime >= this.timeToComplete) {
          this.actionFinishedHandler()
          this.oldActionTime = currentTime
        }
      }
    }

    setTimeout(() => {
      this.gameTick()
    }, 100)
  }

  actionFinishedHandler() {
    // do something in here
    console.log("action finished")
  }
}
