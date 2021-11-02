import { Item } from "./Item"

import { Rarity } from "../enums/Rarity"
import { RequirementStyle } from "../enums/RequirementStyle"
import { Slot } from "../enums/Slot"

// used to handle the data for all items that can equipped to the player character
// this will contain the checks to see if the character is at the correct level to use the item
// as well as the effects of wearing the item, either stats of passive bonuses
// as well as the generic information that all items have such a name, price etc
class Equipment extends Item {
  requirementLevel: number
  requirementStyle: RequirementStyle
  slot: Slot

  constructor(
    rarity: Rarity,
    requirementLevel: number,
    requirementStyle: RequirementStyle,
    slot: Slot
  ) {
    super(rarity)
    this.requirementLevel = requirementLevel
    this.requirementStyle = requirementStyle
    this.slot = slot
  }
}
