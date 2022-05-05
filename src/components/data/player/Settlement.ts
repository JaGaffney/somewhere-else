// on load creates all of the ingame data for the player.

class Task {
  taskName: string
  manpowerAssigned: number

  constructor(taskName: string, baseManpowerAssigned: number) {
    this.taskName = taskName
    this.manpowerAssigned = baseManpowerAssigned
  }

  setManpower(value: number) {
    this.manpowerAssigned += value
  }
}

export class Settlement {
  manpower: number = 0
  tasks: Array<Task> = []

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

  // tasks
  setTasks(data): void {
    for (let task in data) {
      this.createNewTask(data[task].taskName, data[task].manpowerAssigned)
    }
  }

  getActiveManpower(): number {
    let activeManpower = 0
    for (let task in this.tasks) {
      activeManpower += this.tasks[task].manpowerAssigned
    }
    return activeManpower
  }

  doesTaskExist(taskName: string): boolean {
    if (this.tasks.length <= 0) {
      return false
    } else {
      for (let task in this.tasks) {
        if (this.tasks[task].taskName === taskName) {
          return true
        }
      }
    }
    return false
  }

  createNewTask(taskName: string, baseManpowerAssigned: number): void {
    if (!this.doesTaskExist(taskName)) {
      this.tasks.push(new Task(taskName, baseManpowerAssigned))
    }
  }

  updateTask(taskName: string, manpowerAdjustment: number): void {
    // if task doesnt exsist create it
    this.createNewTask(taskName, manpowerAdjustment)

    // get tasks data
    for (let task in this.tasks) {
      if (this.tasks[task].taskName === taskName) {
        this.tasks[task].setManpower(manpowerAdjustment)
      }
    }

    // removes any task if its value is 0
    this.removeTask()
  }

  removeTask(): void {
    this.tasks = this.tasks.filter(i => i.manpowerAssigned >= 1)
  }
}
