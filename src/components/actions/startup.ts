export const loadSkills = data => dispatch => {
  return dispatch({
    type: "LOAD_SKILLS",
    payload: data,
  })
}
export const loadPlayer = data => dispatch => {
  return dispatch({
    type: "LOAD_PLAYER",
    payload: data,
  })
}
