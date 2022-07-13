import { Slot } from "../data/enums/Slot"

import { randomInteger } from "./generic"

export const currentStatCalculator = (itemData, inventory) => {
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
  jobLevel: number,
  movePower: number,
  itemAttack: number,
  enemyDefence: number,
  critChance: number
): number => {
  // https://gamerant.com/pokemon-damage-calculation-help-guide/
  const levelMultiplyer = (2 * jobLevel) / 5 + 2

  const preModifiers = (levelMultiplyer * movePower * itemAttack) / 50 + 2

  const crit = randomInteger(1, 100) < critChance

  let critDamage = 1
  if (crit) {
    critDamage = 2
  }

  // TODO: work this out
  // is this correct maths, prob not
  const defence = (preModifiers * critDamage) / enemyDefence / 100

  return preModifiers * critDamage - defence
}
