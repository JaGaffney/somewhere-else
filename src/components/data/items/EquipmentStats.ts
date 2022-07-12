// on loads creates all of the items in game data.
export interface IEquipmentStats {
  attack?: number
  defence?: number
  weight?: number
  speed?: number
  crit?: number
  elemental?: number
  bleed?: number
  enfeeable?: number
  lifesteal?: number
  armour?: number
}

export const IEquipmentStatsKeys: IEquipmentStats = {
  attack: 0,
  defence: 0,
  weight: 0,
  speed: 0,
  crit: 0,
  elemental: 0,
  bleed: 0,
  enfeeable: 0,
  lifesteal: 0,
  armour: 0,
}
