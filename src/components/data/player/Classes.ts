import { JobClass } from "./JobClass"

export class Classes {
  jobClass: Map<string, JobClass> = new Map()
  equippedJobClass: string = "warrior"

  constructor(jobClassID) {
    this.createJobClasses(jobClassID)
  }

  public findJobClass(itemId: string) {
    return this.jobClass.get(itemId)
  }

  private createJobClasses(jobClass: Array<string>) {
    for (const job in jobClass) {
      let newJob = new JobClass()
      this.jobClass.set(jobClass[job], newJob)
    }
  }

  public setEquippedJobClass(name: string): void {
    this.equippedJobClass = name
  }
}
