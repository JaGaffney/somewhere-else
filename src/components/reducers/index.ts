import { combineReducers } from "redux"
import skills from "./skills"
import items from "./items"
import research from "./research"
import attacks from "./attacks"
import passives from "./passives"
import enemies from "./enemies"
import player from "./player"
import engine from "./engine"

export default combineReducers({
  skills,
  items,
  research,
  attacks,
  passives,
  enemies,
  player,
  engine,
})
