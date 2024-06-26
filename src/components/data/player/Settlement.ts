// on load creates all of the ingame data for the player.
export class Settlement {
  manpower: number = 1
  tasks: Object = {}

  constructor() {}

  // manpower
  getManpower(): number {
    return this.manpower
  }

  setManpower(value: number): void {
    this.manpower = value
  }

  addManpower(amount: number): void {
    this.manpower += amount
  }

  getActiveManpower(): number {
    let activeManpower = 0
    for (let task in this.tasks) {
      activeManpower += this.tasks[task]
    }
    return activeManpower
  }

  // tasks
  setTasks(data): void {
    for (let task in data) {
      if (task) {
        this.tasks[task] = data[task]
      }
    }
  }

  createNewTask(taskName: string, baseManpowerAssigned: number): void {
    this.tasks[taskName] = baseManpowerAssigned
  }

  updateTask(taskName: string, manpowerAdjustment: number): void {
    if (this.tasks[taskName]) {
      this.tasks[taskName] = this.tasks[taskName] + manpowerAdjustment
    } else {
      this.createNewTask(taskName, manpowerAdjustment)
    }

    // removes any task if its value is 0
    if (this.tasks[taskName] === 0) {
      delete this.tasks[taskName]
    }
  }

  resetTasks(): void {
    this.tasks = {}
  }
}
