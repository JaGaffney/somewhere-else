import { JobClass } from "./JobClass"

export class Classes {
  jobClass: Map<string, JobClass> = new Map()

  constructor(jobClassID) {
    this.createJobClasses(jobClassID)
  }

  findJobClass(itemId: string) {
    return this.jobClass.get(itemId)
  }

  createJobClasses(jobClass: Array<string>) {
    console.log("jobClass", jobClass)
    for (const job in jobClass) {
      let newJob = new JobClass()
      this.jobClass.set(jobClass[job], newJob)
      console.log(this.jobClass)
    }
  }
}
