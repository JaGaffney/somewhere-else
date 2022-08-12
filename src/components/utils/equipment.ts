import { Slot } from "../data/enums/Slot"

import { randomInteger } from "./generic"

import {
  IEquipmentStatsKeys,
  IEquipmentStats,
} from "../data/items/EquipmentStats"

import { Attack } from "../data/attacks/Attack"

// gets stats from passives
export const currentPassiveStatCalculator = (
  loadout,
  passiveData
): IEquipmentStats => {
  const totalPassiveStats = {}
  if (loadout) {
    const equippedPassives = loadout.equippedPassives
    for (const passive in equippedPassives) {
      if (equippedPassives[passive] !== null) {
        const data = passiveData.getPassiveById(equippedPassives[passive])
        for (const effect in data.effect) {
          const effectData = data.effect[effect]
          if (totalPassiveStats[effect]) {
            totalPassiveStats[effect] = totalPassiveStats[effect] + effectData
          } else {
            totalPassiveStats[effect] = effectData
          }
        }
      }
    }
  }

  return totalPassiveStats
}

// gets stats from equipped gear/items
export const currentStatCalculator = (itemData, inventory): IEquipmentStats => {
  const totalEquippedStats = {}
  for (const [key, value] of Object.entries(Slot)) {
    const id = inventory.getEquippedItem(value.replace(/\s/g, ""))
    if (id !== 0 && id !== undefined) {
      const data = itemData.getItemById(id)
      const stats = data.equipmentStats
      for (let stat in stats) {
        if (totalEquippedStats[stat]) {
          totalEquippedStats[stat] = totalEquippedStats[stat] + stats[stat]
        } else {
          totalEquippedStats[stat] = stats[stat]
        }
      }
    }
  }
  return totalEquippedStats
}

// calcualtes the players damage based on all parameters: gear, level, attack data, enemy defence
export const calculateDamage = (
  playerStats: IEquipmentStats,
  enemyStats,
  attackData: Attack,
  jobLevel: number,
  damageDisplay: boolean
) => {
  const damageData = {}
  // https://gamerant.com/pokemon-damage-calculation-help-guide/
  const levelMultiplyer = (2 * jobLevel) / 5 + 2

  let damageRange = randomInteger(attackData.minDamage, attackData.maxDamage)

  const effects = calculateEffect(attackData, playerStats)
  const preModifiers = (levelMultiplyer * damageRange * effects.attack) / 50 + 2

  // if just displaying damage no need to show crits
  let crit = false
  let critDamage = 1
  if (!damageDisplay) {
    crit = randomInteger(1, 100) < effects.crit
    if (crit) {
      critDamage = 2
    }
  }

  // TODO: work this out
  // is this correct maths, prob not
  const defence = (preModifiers * critDamage) / enemyStats.defence / 100
  const damageDone = preModifiers * critDamage - defence

  for (const effect in effects) {
    damageData[effect] = effects[effect]
  }

  damageData["attack"] = damageDone
  damageData["crit"] = critDamage
  return damageData
}

// calcualtes the enemys damage based on all parameters: gear, level, attack data, players defence
const calculateEffect = (attackData: Attack, playerStats: IEquipmentStats) => {
  const effects = playerStats

  for (const effect in attackData.effect) {
    let item = playerStats[effect] === undefined ? 0 : playerStats[effect]
    let att =
      attackData.effect[effect] === undefined ? 0 : attackData.effect[effect]

    effects[effect] = item + att
  }
  return effects
}

export const calculateEnemyDamage = (
  enemyStats,
  playerStats: IEquipmentStats,
  attackData: Attack
) => {
  const damageData = {}

  // https://gamerant.com/pokemon-damage-calculation-help-guide/
  const levelMultiplyer = (2 * enemyStats.level) / 5 + 2

  let damageRange = randomInteger(attackData.minDamage, attackData.maxDamage)

  const preModifiers =
    (levelMultiplyer * damageRange * enemyStats.attack) / 50 + 2

  const defence = preModifiers / playerStats.defence / 100

  const damageDone = preModifiers - defence

  damageData["attack"] = damageDone
  return damageData
}

export const statMerge = (object1: Object, object2: Object): Object => {
  const returnValue = {}
  for (const stat in IEquipmentStatsKeys) {
    if (object1[stat]) {
      returnValue[stat] = parseInt(object1[stat])
    }
    if (object2[stat]) {
      if (returnValue[stat]) {
        returnValue[stat] = returnValue[stat] + parseInt(object2[stat])
      } else {
        returnValue[stat] = parseInt(object2[stat])
      }
    }
  }
  return returnValue
}
