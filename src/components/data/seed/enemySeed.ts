// @ts-nocheck
import * as icon from "./icons/enemySeedIcon"
import { ClassesEnum } from "../enums/ClassesEnum"

export const enemySeed = [
  {
    id: 1,
    name: "goblin",
    level: 1,
    stats: {
      health: 1,
      defence: 1,
      armour: 1,
      attack: 1,
      dodge: 5,
      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 32, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.goblin_icon,
    requirement: 0,
  },
  {
    id: 2,
    name: "goblin warrior",
    level: 10,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 20, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1, 2],
    rotation: [2, 1],
    image: icon.goblinWarrior_icon,
    requirement: 0,
  },
  {
    id: 3,
    name: "goblin brute",
    level: 20,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 20, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1, 2, 3],
    rotation: [3, 2, 1],
    image: icon.goblinBrute_icon,
    requirement: 0,
  },
  {
    id: 4,
    name: "crawling zombie",
    level: 10,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1, 2],
    rotation: [2, 1],
    image: icon.zombieCrawl_icon,
    requirement: 0,
  },
  {
    id: 5,
    name: "shambling zombie",
    level: 20,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.zombieWalk_icon,
    requirement: 0,
  },
  {
    id: 6,
    name: "Adam",
    level: 35,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1, 6, 3],
    rotation: [3, 2, 1],
    image: icon.adam_icon,
    requirement: 0,
  },
  {
    id: 7,
    name: "fairy",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.MAGICIAN,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [8, 9, 1],
    rotation: [8, 9, 1],
    image: icon.fairy_icon,
    requirement: 0,
  },
  {
    id: 8,
    name: "enchanted squid",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.ARCHER,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [5, 6, 7, 1],
    rotation: [6, 5, 7, 1],
    image: icon.flyingSquid_icon,
    requirement: 0,
  },
  {
    id: 9,
    name: "mummy",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.mummy_icon,
    requirement: 0,
  },
  {
    id: 10,
    name: "Vampire",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.vampireFemale_icon,
    requirement: 0,
  },
  {
    id: 11,
    name: "Vampire Lord",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.vampireMale_icon,
    requirement: 0,
  },
  {
    id: 12,
    name: "Giant",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.WARRIOR,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.giant_icon,
    requirement: 0,
  },
  {
    id: 13,
    name: "Spitting cobra",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.ARCHER,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.snake_icon,
    requirement: 0,
  },
  {
    id: 14,
    name: "Medusa",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.MAGICIAN,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.medusa_icon,
    requirement: 0,
  },
  {
    id: 15,
    name: "Ghost",
    level: 20,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.MAGICIAN,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.ghost_icon,
    requirement: 0,
  },

  {
    id: 16,
    name: "Anubis",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.MAGICIAN,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.anubis_icon,
    requirement: 0,
  },
  {
    id: 17,
    name: "Sphinx",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.MAGICIAN,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.sphinxSmall_icon,
    requirement: 0,
  },
  {
    id: 18,
    name: "The Great Sphinx",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.MAGICIAN,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.sphinxLarge_icon,
    requirement: 0,
  },
  {
    id: 19,
    name: "Unicorn",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.MAGICIAN,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.unicorn_icon,
    requirement: 0,
  },
  {
    id: 20,
    name: "Minotaur",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.MAGICIAN,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.minotaur_icon,
    requirement: 0,
  },
  {
    id: 21,
    name: "Unholy Djinn",
    level: 1,
    stats: {
      health: 10,
      defence: 3,
      armour: 1,
      attack: 2,
      dodge: 5,

      speed: 10,
      accuracy: 100,
    },
    style: ClassesEnum.MAGICIAN,
    coins: [0, 10, 100],
    tribute: 1,
    drops: [{ id: 1, qty: 1, chance: 100 }],
    armour: 1,
    attacks: [1],
    rotation: [1],
    image: icon.djinn_icon,
    requirement: 0,
  },
]
