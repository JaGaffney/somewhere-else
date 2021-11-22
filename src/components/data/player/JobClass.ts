export class JobClass {
  equippedAttacks = {
    1: 1,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  }

  constructor() {}

  addNewAttack(attackID: number) {
    let iterate = true
    for (const key in this.equippedAttacks) {
      if (this.equippedAttacks[key] === null && iterate !== false) {
        this.equippedAttacks[key] === attackID
        iterate = false
      }
    }
  }

  changeAttackLocation(attackID: number, location: number) {
    // resets previous location if applicable
    for (const attack in this.equippedAttacks) {
      if (this.equippedAttacks[attack] === attackID) {
        this.equippedAttacks[attack] = null
      }
    }

    this.equippedAttacks[location] = attackID
  }
}
