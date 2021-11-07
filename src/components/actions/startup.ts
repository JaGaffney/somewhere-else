export const loadSkills = data => dispatch => {
  return dispatch({
    type: "LOAD_SKILLS",
    payload: data,
  })
}
export const loadItems = data => dispatch => {
  return dispatch({
    type: "LOAD_ITEMS",
    payload: data,
  })
}
export const loadPlayer = data => dispatch => {
  return dispatch({
    type: "LOAD_PLAYER",
    payload: data,
  })
}
