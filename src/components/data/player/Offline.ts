export class Offline {
  coins: number = 0
  salary: number = 0
  exp: Object = {}
  items: Object = {}
  time: number = 0

  constructor() {}

  public reset(): void {
    this.salary = 0
    this.coins = 0
    this.exp = {}
    this.items = {}
    //this.time = 0
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
  public setTime(value): void {
    console.log("setting time: ", value)
    console.log(typeof value)
    this.time = value
    console.log(this.time)
  }
}
