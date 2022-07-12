import { Item } from "./Item"
import { IEquipmentStats } from "./EquipmentStats"

import { Rarity } from "../enums/Rarity"
import { RequirementStyle } from "../enums/RequirementStyle"
import { Slot } from "../enums/Slot"
import { enumFromValue } from "../enums/enumFromValue"

// used to handle the data for all items that can equipped to the player character
// this will contain the checks to see if the character is at the correct level to use the item
// as well as the effects of wearing the item, either stats of passive bonuses
// as well as the generic information that all items have such a name, price etc
export class Equipment extends Item {
  requirementLevel: number
  requirementStyle: RequirementStyle
  slot: Slot
  equipmentStats: IEquipmentStats

  constructor(
    name: string,
    price: number,
    icon: string,
    description: string,
    rarity: string,
    itemType: string,
    requirementLevel: number,
    slot: string,
    equipmentStats: IEquipmentStats
  ) {
    super(name, price, icon, description, rarity, itemType)
    this.requirementLevel = requirementLevel
    this.slot = enumFromValue(slot, Slot)
    this.equipmentStats = equipmentStats
  }
}
