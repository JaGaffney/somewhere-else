// @ts-nocheck
import goblinIcon from "../../../images/enemy/goblin.svg"
import goblinBruteIcon from "../../../images/enemy/goblinBrute.svg"
import zombieCrawlIcon from "../../../images/enemy/zombieCrawl.svg"
import zombieWalkIcon from "../../../images/enemy/zombieWalk.svg"
import adamIcon from "../../../images/enemy/adam.svg"

export const enemySeed = [
  {
    id: 1,
    name: "goblin",
    level: 1,
    health: 100,
    defence: 10,
    attack: 10,
    stamina: 100,
    style: "warrior",
    speed: 10,
    coins: [0, 10, 100],
    drops: [{ id: 10001, qty: 1, chance: 100 }],
    attacks: [{}],
    image: goblinIcon,
    requirement: 0,
  },
  {
    id: 2,
    name: "goblin brute",
    level: 10,
    health: 200,
    defence: 20,
    attack: 20,
    stamina: 100,
    style: "warrior",
    speed: 10,
    coins: [0, 10, 100],
    drops: [{ id: 10001, qty: 1, chance: 100 }],
    attacks: [{}],
    image: goblinBruteIcon,
    requirement: 0,
  },
  {
    id: 3,
    name: "crawling zombie",
    level: 10,
    health: 200,
    defence: 20,
    attack: 20,
    stamina: 200,
    style: "warrior",
    speed: 1,
    coins: [0, 10, 100],
    drops: [{ id: 10001, qty: 1, chance: 100 }],
    attacks: [{}],
    image: zombieCrawlIcon,
    requirement: 0,
  },
  {
    id: 4,
    name: "shambling zombie",
    level: 10,
    health: 200,
    defence: 20,
    attack: 20,
    stamina: 200,
    style: "warrior",
    speed: 1,
    coins: [0, 10, 100],
    drops: [{ id: 10001, qty: 1, chance: 100 }],
    attacks: [{}],
    image: zombieWalkIcon,
    requirement: 0,
  },
  {
    id: 5,
    name: "Adam",
    level: 35,
    health: 200,
    defence: 20,
    attack: 20,
    stamina: 100,
    style: "warrior",
    speed: 10,
    coins: [0, 10, 100],
    drops: [{ id: 10001, qty: 1, chance: 100 }],
    attacks: [{}],
    image: adamIcon,
    requirement: 0,
  },
]
