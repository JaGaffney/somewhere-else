// game engine tick

export type ActionObserver = (action: any) => void

export class GameEngine {
  oldActionTime: number
  timeToComplete: number = 0
  actionID: string | null = null

  private observers: ActionObserver[] = []
  private intervalID = null

  constructor(oldActionTime: number) {
    this.oldActionTime = oldActionTime
  }

  // https://javascript.plainenglish.io/react-hooks-and-the-observer-pattern-1e4274f0e5f5
  public attach(observer: ActionObserver) {
    this.observers.push(observer)
  }

  public detach(observer: ActionObserver) {
    this.observers = this.observers.filter(
      observer => observerToRemove !== observer
    )
  }

  public updateAction() {
    this.intervalID = setInterval(() => {
      const action = this.gameTick()
      this.notify()
    }, 1000)
  }

  public cleanUpdates() {
    if (this.intervalID) {
      clearInterval(this.intervalID)
      this.intervalID = null
    }
  }

  private notify(action) {
    this.observers.forEach(observer => observer(action))
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
          this.oldActionTime = currentTime
          return true
        }
      }
    }

    setTimeout(() => {
      this.gameTick()
    }, 100)
  }
}
