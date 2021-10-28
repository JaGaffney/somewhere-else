import { BUSHCRAFT } from "../types/skills"

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

export const getSkillDataById = id => {
  if (id !== null) {
    const value = id.split("_")
    let skill = value[0]
    let type = ""
    if (value[1] === "G") {
      type = "gathering"
    } else {
      type = "production"
    }

    let skillData
    switch (skill) {
      case "BC":
        return (skillData = BUSHCRAFT[type][id])

      default:
        break
    }
    return skillData
  }
}
