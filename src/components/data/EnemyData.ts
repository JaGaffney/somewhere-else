import { Enemy } from "./enemy/Enemy"

import { enemySeed } from "./seed/enemySeed"

// on loads creates all of the enemy in game data.
export class EnemyData {
  enemies: Map<number, Enemy> = new Map()

  constructor() {
    this.createEnemies()
  }

  createEnemies() {
    for (const key in enemySeed) {
      this.enemies.set(
        enemySeed[key].id,
        new Enemy(
          enemySeed[key].name,
          enemySeed[key].level,
          enemySeed[key].health,
          enemySeed[key].defence,
          enemySeed[key].attack,
          enemySeed[key].stamina,
          enemySeed[key].style,
          enemySeed[key].speed,
          enemySeed[key].drops,
          enemySeed[key].attacks,
          enemySeed[key].image,
          enemySeed[key].requirement
        )
      )
    }
  }

  getEnemyById(id: number) {
    return this.enemies.get(id)
  }
}
