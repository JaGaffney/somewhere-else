import { Generic } from "./items/Generic"
import { Equipment } from "./items/Equipment"

import { itemSeed } from "./seed/itemSeed"
import { equipmentSeed } from "./seed/equipmentSeed"

// on loads creates all of the items in game data.
export class ItemData {
  generic: Array<Generic> = []
  equipment: Array<Equipment> = []

  constructor() {
    this.createUseableItems()
    this.createEquipmentItems()
  }

  createUseableItems() {
    for (const key in itemSeed) {
      this.generic.push(
        new Generic(
          itemSeed[key].id,
          itemSeed[key].name,
          itemSeed[key].price,
          itemSeed[key].rarity,
          itemSeed[key].consumeable
        )
      )
    }
  }

  createEquipmentItems() {
    for (const key in equipmentSeed) {
      this.equipment.push(
        new Equipment(
          equipmentSeed[key].id,
          equipmentSeed[key].name,
          equipmentSeed[key].price,
          equipmentSeed[key].rarity,
          equipmentSeed[key].requirementLevel,
          equipmentSeed[key].requirementStyle,
          equipmentSeed[key].slot,
          equipmentSeed[key].equipmentStats,
          equipmentSeed[key].effect
        )
      )
    }
  }
}
