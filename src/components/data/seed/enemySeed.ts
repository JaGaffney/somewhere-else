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
    health: 10,
    defence: 3,
    attack: 10,
    stamina: 0,
    style: "warrior",
    speed: 10,
    coins: [0, 10, 100],
    drops: [
      { id: 10001, qty: 1, chance: 100 },
      { id: 10002, qty: 1, chance: 100 },
      { id: 10003, qty: 5, chance: 100 },
    ],
    attacks: [1],
    rotation: [1],
    image: goblinIcon,
    requirement: 0,
  },
  {
    id: 2,
    name: "goblin brute",
    level: 10,
    health: 5,
    defence: 20,
    attack: 20,
    stamina: 10,
    style: "warrior",
    speed: 10,
    coins: [0, 10, 100],
    drops: [{ id: 10001, qty: 1, chance: 100 }],
    attacks: [1],
    rotation: [1],
    image: goblinBruteIcon,
    requirement: 0,
  },
  {
    id: 3,
    name: "crawling zombie",
    level: 10,
    health: 20,
    defence: 0,
    attack: 20,
    stamina: 20,
    style: "warrior",
    speed: 1,
    coins: [0, 10, 100],
    drops: [{ id: 10001, qty: 1, chance: 100 }],
    attacks: [1, 2],
    rotation: [2, 1],
    image: zombieCrawlIcon,
    requirement: 0,
  },
  {
    id: 4,
    name: "shambling zombie",
    level: 10,
    health: 20,
    defence: 20,
    attack: 20,
    stamina: 200,
    style: "warrior",
    speed: 1,
    coins: [0, 10, 100],
    drops: [{ id: 10001, qty: 1, chance: 100 }],
    attacks: [1],
    rotation: [1],
    image: zombieWalkIcon,
    requirement: 0,
  },
  {
    id: 5,
    name: "Adam",
    level: 35,
    health: 50,
    defence: 0,
    attack: 20,
    stamina: 100,
    style: "warrior",
    speed: 10,
    coins: [0, 10, 100],
    drops: [{ id: 10001, qty: 1, chance: 100 }],
    attacks: [1, 2, 3],
    rotation: [3, 2, 1],
    image: adamIcon,
    requirement: 0,
  },
]
