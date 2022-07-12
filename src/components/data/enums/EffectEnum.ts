// different effects in the game
export enum EffectEnum {
  ATTACK = "Base damage per attack",
  DEFENCE = "Reduces damage taken",
  ARMOUR = "Increase shield", // adds X armour value
  WEIGHT = "Reduces stamina regeneration",
  SPEED = "Determines who attacks first",
  CRIT = "Increased your chance to deal double damage",
  ELEMENTAL = "Deals increased damage to armour", // deals double damage to armour
  DRAIN = "Drains the enemeys stamina and gives it to you", // drains X stamina
  STUN = "Change to stun the enemy for a turn", // stuns for X turns
  LIFESTEAL = "Damage deal restores your health", // drains hp by X
  DOT = "Enemy takes damage on their turn", // deals X damage each turn
  ENFEEABLE = "Enemy takes increased damage", // enemy takes 50% more damage for X turns
}
