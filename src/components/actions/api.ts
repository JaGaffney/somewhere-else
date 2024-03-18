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

export const setActionTime = (oldTime: number) => dispatch => {
  return dispatch({
    type: "START_ACTION",
    payload: oldTime,
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
export const setActiveEquipmentDrag = data => dispatch => {
  return dispatch({
    type: "SET_ACTIVE_EQUIPMENT_DRAG",
    payload: data,
  })
}

export const setHamburgerMenu = (menu: boolean) => dispatch => {
  return dispatch({
    type: "SET_ACTIVE_MENU",
    payload: menu,
  })
}
