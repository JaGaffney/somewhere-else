import { Enemy } from "./enemy/Enemy"
import { Drops } from "./enemy/Drops"

import { enemySeed } from "./seed/enemySeed"

// on loads creates all of the enemy in game data.
export class EnemyData {
  enemies: Map<number, Enemy> = new Map()

  constructor(attackData) {
    this.createEnemies(attackData)
  }

  createEnemies(attackData) {
    // add the attacks from here
    for (const key in enemySeed) {
      const coins = {
        min: enemySeed[key].coins[0],
        max: enemySeed[key].coins[1],
        chance: enemySeed[key].coins[2],
      }
      const drops = new Drops(
        coins,
        enemySeed[key].drops,
        enemySeed[key].tribute
      )
      this.enemies.set(
        enemySeed[key].id,
        new Enemy(
          enemySeed[key].name,
          enemySeed[key].level,
          enemySeed[key].stats,
          enemySeed[key].style,
          drops,
          enemySeed[key].attacks,
          enemySeed[key].rotation,
          enemySeed[key].image,
          enemySeed[key].requirement
        )
      )
    }
  }

  getEnemyById(id: number) {
    return this.enemies.get(id)
  }

  getEnemyByName(name: string) {
    let retVal = null
    this.enemies.forEach((data: any, id: number) => {
      if (data.name === name) {
        retVal = id
      }
    })
    return retVal
  }
}
