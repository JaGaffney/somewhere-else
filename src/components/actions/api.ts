import { CombatData } from "../data/CombatData"

export const setPlayerUpdated = () => dispatch => {
  return dispatch({
    type: "PLAYER_UPDATED",
  })
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
  oldTime: any,
  value: number,
  data: object
) => dispatch => {
  return dispatch({
    type: "START_ACTION",
    payload: [name, type, oldTime, value, data],
  })
}

export const resetActionTime = () => dispatch => {
  return dispatch({
    type: "STOP_ACTION",
  })
}
export const setDeltaTime = (deltatime: number) => dispatch => {
  return dispatch({
    type: "SET_DELTA_TIME",
    payload: deltatime,
  })
}

export const setCombatData = data => dispatch => {
  return dispatch({
    type: "SET_COMBAT_DATA",
    payload: data,
  })
}
