// different effects in the game
export enum EffectEnum {
  Drain = "DRAIN", // drains X stamina
  Stun = "STUN", // stuns for X turns
  Slow = "SLOW", // increased CD for all spells by X
  Lifesteal = "LIFESTEAL", // drains hp by X
  DoT = "DOT", // deals X damage each turn
  Block = "BLOCK", // adds X armour value
  Break = "BREAK", // deals double damage to armour
  Enfeeable = "ENFEEABLE", // enemy takes 50% more damage for X turns
  Confuse = "CONFUSE", // chance to attack self for X turns
}
