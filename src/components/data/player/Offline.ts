export class Offline {
  coins: number = 0
  salary: number = 0
  exp: Object = {}
  items: Object = {}

  constructor() {}

  public reset(): void {
    this.salary = 0
    this.coins = 0
    this.exp = {}
    this.items = {}
  }

  public setSalary(value: number): void {
    this.salary = value
  }
  public setCoins(value: number): void {
    this.coins = value
  }
  public setExp(key, value): void {
    this.exp[key] = value
  }
  public setItems(key, value): void {
    this.items[key] = value
  }
}
