import { Slot } from "../data/enums/Slot"

import { randomInteger } from "./generic"

import {
  IEquipmentStatsKeys,
  IEquipmentStats,
} from "../data/items/EquipmentStats"

import { Attack } from "../data/attacks/Attack"

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
