// on loads creates all of the items in game data.
export interface IEquipmentStats {
  attack?: number
  defence?: number
  dodge?: number
  armour?: number
  regen?: number
  accuracy?: number
  weight?: number
  speed?: number
  crit?: number
  elemental?: number
  drain?: number
  stun?: number
  bleed?: number
  enfeeable?: number
}

export const IEquipmentStatsKeys: IEquipmentStats = {
  attack: 0,
  defence: 0,
  dodge: 0,
  armour: 0,
  regen: 0,
  accuracy: 0,
  weight: 0,
  speed: 0,
  crit: 0,
  elemental: 0,
  drain: 0,
  stun: 0,
  bleed: 0,
  enfeeable: 0,
}
