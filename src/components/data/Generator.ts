// on loads creates all of the ingame data.
// such as skills, items, exp etc
export class Generator {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}
