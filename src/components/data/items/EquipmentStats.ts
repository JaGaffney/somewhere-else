// on loads creates all of the items in game data.
export interface IEquipmentStats {
  attack: number
  defence: number
  armour: number
  weight: number
  speed: number
  crit: number | boolean
  elemental: number
  drain: number
  stun: number | boolean
  lifesteal: number
  bleed: number
  enfeeable: number
}

export const IEquipmentStatsKeys: IEquipmentStats = {
  attack: 0,
  defence: 0,
  armour: 0,
  weight: 0,
  speed: 0,
  crit: 0,
  elemental: 0,
  drain: 0,
  stun: 0,
  lifesteal: 0,
  bleed: 0,
  enfeeable: 0,
}
