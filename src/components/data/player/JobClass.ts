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
  equippedPassives: Object = {
    1: null,
    2: null,
    3: null,
    4: null,
  }
  rotation: Array<number | null> = new Array(6)

  constructor(defaultName: number) {
    this.name = defaultName.toString()
  }

  setName(name: string): void {
    this.name = name
  }

  // when data loads
  setEquippedAttacks(equippedAttacks: object): void {
    this.equippedAttacks = equippedAttacks
  }
  setRotation(rotation: Array<number>): void {
    this.rotation = rotation
  }
  setEquippedPassives(equippedPassives: object): void {
    this.equippedPassives = equippedPassives
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

  addNewPassive(passiveID: number): void {
    let iterate = true
    for (const key in this.equippedPassives) {
      if (this.equippedPassives[key] === null && iterate !== false) {
        this.equippedPassives[key] === passiveID
        iterate = false
      }
    }
  }
  changePassiveLocation(passiveID: number | null, location: number): void {
    // resets previous location if applicable
    for (const attack in this.equippedPassives) {
      if (this.equippedPassives[attack] === passiveID) {
        this.equippedPassives[attack] = null
      }
    }
    this.equippedPassives[location] = passiveID
  }
  getEquippedPassiveAtLocation(location: number): number | null {
    return this.equippedPassives[location]
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
