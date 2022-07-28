export class JobClass {
  name: string = ""
  equippedAttacks: object = {
    1: 1,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  }
  rotation: Array<number | null> = new Array(6)

  constructor(defaultName: number) {
    this.name = defaultName.toString()
  }

  setName(name) {
    this.name = name
  }

  // when data loads
  setEquippedAttacks(equippedAttacks: object): void {
    this.equippedAttacks = equippedAttacks
  }
  setRotation(rotation: Array<number>): void {
    this.rotation = rotation
  }

  addNewAttack(attackID: number): void {
    let iterate = true
    for (const key in this.equippedAttacks) {
      if (this.equippedAttacks[key] === null && iterate !== false) {
        this.equippedAttacks[key] === attackID
        iterate = false
      }
    }
  }

  changeAttackLocation(attackID: number | null, location: number): void {
    // resets previous location if applicable
    for (const attack in this.equippedAttacks) {
      if (this.equippedAttacks[attack] === attackID) {
        this.equippedAttacks[attack] = null
      }
    }

    this.equippedAttacks[location] = attackID
  }

  changeRotation(attackID: number, location: number): void {
    let tempData = this.rotation
    for (let i in this.rotation) {
      if (tempData[i] === attackID) {
        tempData[i] = null
      }
    }
    tempData[location] = attackID
    this.rotation = tempData
  }

  removeAttackFromRotation(location: number): void {
    this.rotation[location] = null
  }
}
