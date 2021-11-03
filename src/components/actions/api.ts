export const setActiveSkill = (activeSkill: string) => dispatch => {
  return dispatch({
    type: "ACTIVE_SKILL",
    payload: activeSkill,
  })
}
export const setActiveAction = activeAction => dispatch => {
  return dispatch({
    type: "ACTIVE_ACTION",
    payload: activeAction,
  })
}
