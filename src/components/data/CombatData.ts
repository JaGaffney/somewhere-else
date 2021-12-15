import { Status } from "./player/Status"

export class CombatData {
  enemyID: number | null
  status: Status = new Status()

  constructor(enemyID: number | null) {
    this.enemyID = enemyID
  }

  setDefaultStatus(status): void {
    this.status.loadStatus(status)
  }

  resetData(): void {
    this.enemyID = null
    this.status = new Status()
  }
}
