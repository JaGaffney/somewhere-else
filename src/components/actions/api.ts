import { GameEngine } from "../data/GameEngine"

export const startGameEngine = actionTime => {
  let intialtime = new Date().getTime()

  const gameEngine = new GameEngine(intialtime)
  gameEngine.setTimeToComplete(actionTime)

  // start game
  console.log("//////////////before")
  const createAction = gameEngine.gameTick()
  console.log(createAction)
  console.log("//////////////after")
}

export const setActivePage = (activePage: string) => dispatch => {
  return dispatch({
    type: "ACTIVE_PAGE",
    payload: activePage,
  })
}

export const setActionTime = (
  name: string,
  type: boolean,
  value: number,
  data: object
) => dispatch => {
  return dispatch({
    type: "START_ACTION",
    payload: [name, type, value, data],
  })
}
