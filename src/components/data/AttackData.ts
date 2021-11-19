import { Attack } from "./attacks/Attack"
import { Effect } from "./attacks/Effect"

import { enumFromValue } from "./enums/enumFromValue"
import { ClassesEnum } from "./enums/ClassesEnum"

import { attackSeed } from "./seed/attackSeed"

// on loads creates all of the attacks into game data.
export class AttackData {
  attacks: Map<number, Attack> = new Map()

  constructor() {
    this.createAttacks()
  }

  createAttacks() {
    for (const key in attackSeed) {
      this.attacks.set(
        attackSeed[key].id,
        new Attack(
          attackSeed[key].name,
          enumFromValue(attackSeed[key].type, ClassesEnum),
          attackSeed[key].minDamage,
          attackSeed[key].maxDamage,
          attackSeed[key].cooldown,
          attackSeed[key].stamina,
          new Effect(attackSeed[key].effect.type, attackSeed[key].effect.value),
          attackSeed[key].icon
        )
      )
    }
  }

  getAttackById(id: number) {
    return this.attacks.get(id)
  }
}
