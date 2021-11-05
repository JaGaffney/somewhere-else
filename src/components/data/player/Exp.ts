export class EXP {
  level = {
    1: 0,
    2: 100,
    3: 300,
    4: 700,
    5: 1300,
    6: 2000,
    7: 3400,
    8: 5000,
    9: 7200,
    10: 10000,
  }

  getLevelFromExp(exp: number): number {
    let lvl = 1
    for (const i in this.level) {
      if (exp > this.level[i]) {
        lvl = parseInt(i)
      }
    }
    return lvl
  }
}
