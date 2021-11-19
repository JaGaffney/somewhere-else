import { combineReducers } from "redux"
import skills from "./skills"
import items from "./items"
import attacks from "./attacks"
import enemies from "./enemies"
import player from "./player"

export default combineReducers({
  skills,
  items,
  attacks,
  enemies,
  player,
})
