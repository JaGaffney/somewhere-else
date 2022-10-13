export class Offline {
  coins: number = 0
  salary: number = 0
  exp: Object = {}
  items: Object = {}
  time: number = 0
  tribute: number = 0

  constructor() {}

  public reset(): void {
    this.salary = 0
    this.coins = 0
    this.exp = {}
    this.items = {}
    this.tribute = 0
    //this.time = 0
  }

  public setSalary(value: number): void {
    this.salary = value
  }
  public setCoins(value: number): void {
    this.coins = value
  }
  public setTribute(value: number): void {
    this.tribute = value
  }
  public setExp(key, value): void {
    this.exp[key] = value
  }
  public setItems(key, value): void {
    this.items[key] = value
  }
  public setTime(value): void {
    this.time = value
  }
}
