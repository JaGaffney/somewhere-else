export class EXP {
  // temp exp levels
  level = {
    1: 83,
    2: 174,
    3: 276,
    4: 388,
    5: 512,
    6: 650,
    7: 801,
    8: 969,
    9: 1154,
    10: 1358,
    11: 1584,
    12: 1833,
    13: 2107,
    14: 2411,
    15: 2746,
    16: 3115,
    17: 3523,
    18: 3973,
    19: 4470,
    20: 5018,
    21: 5624,
    22: 6291,
    23: 7028,
    24: 7842,
    25: 8740,
    26: 9730,
    27: 10824,
    28: 12031,
    29: 13363,
    30: 14833,
    31: 16456,
    32: 18247,
    33: 20224,
    34: 22406,
    35: 24815,
    36: 27473,
    37: 30408,
    38: 33648,
    39: 37224,
    40: 41171,
    41: 45529,
    42: 50339,
    43: 55649,
    44: 61512,
    45: 67983,
    46: 75127,
    47: 83014,
    48: 91721,
    49: 101333,
    50: 111945,
    51: 123660,
    52: 136594,
    53: 150872,
    54: 166636,
    55: 184040,
    56: 203254,
    57: 224466,
    58: 247886,
    59: 273742,
    60: 302288,
    61: 333804,
    62: 368599,
    63: 407015,
    64: 449428,
    65: 496254,
    66: 547953,
    67: 605032,
    68: 668051,
    69: 737627,
    70: 814445,
    71: 899257,
    72: 992895,
    73: 1096278,
    74: 1210421,
    75: 1336443,
    76: 1475581,
    77: 1629200,
    78: 1798808,
    79: 1986068,
    80: 2192818,
    81: 2421087,
    82: 2673114,
    83: 2951373,
    84: 3258594,
    85: 3597792,
    86: 3972294,
    87: 4385776,
    88: 4842295,
    89: 5346332,
    90: 5902831,
    91: 6517253,
    92: 7195629,
    93: 7944614,
    94: 8771558,
    95: 9684577,
    96: 10692629,
    97: 11805606,
    98: 13034431,
    99: 20000000,
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

  getNextLevelFromExp(exp: number): number {
    let currentLevel = this.getLevelFromExp(exp)
    let val = currentLevel + 1
    if (val < 100) {
      return this.level[val]
    } else {
      return this.level[99]
    }
  }
}
