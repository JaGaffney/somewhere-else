export class Bankslot {
  itemId: number
  qty: number
  bankLocation: number

  constructor(itemId: number, qty: number, bankLocation: number) {
    this.itemId = itemId
    this.qty = qty
    this.bankLocation = bankLocation
  }
}
