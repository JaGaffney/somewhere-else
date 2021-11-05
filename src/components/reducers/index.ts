import { combineReducers } from "redux"
import skills from "./skills"
import items from "./items"
import player from "./player"

export default combineReducers({
  skills,
  items,
  player,
})
