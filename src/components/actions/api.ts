export const setActiveSkill = (activeSkill: string) => dispatch => {
  return dispatch({
    type: "ACTIVE_SKILL",
    payload: activeSkill,
  })
}
