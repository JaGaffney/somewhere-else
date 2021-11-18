//@ts-ignore
import goblinIcon from "../../../images/enemy/goblin.svg"

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
    drops: [{ id: 10001, qty: 1 }],
    attacks: [{}],
    image: goblinIcon,
    requirement: 0,
  },
]
