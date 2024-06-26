export class Drops {
  coins: object = {
    min: 0,
    max: 0,
    chance: 100,
  }
  drops: Array<object> = [{}] // id, qty, rate
  tribute: number

  constructor(coins: object, drops: Array<object>, tribute: number) {
    this.coins = coins
    this.drops = drops
    this.tribute = tribute
  }
}
