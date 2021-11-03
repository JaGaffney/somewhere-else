const initialState = {
  skillData: [],
  activeSkill: null,
  activeAction: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_SKILLS":
      return {
        ...state,
        skillData: action.payload,
      }
    case "ACTIVE_SKILL":
      return {
        ...state,
        activeSkill: action.payload,
      }
    case "ACTIVE_ACTION":
      return {
        ...state,
        activeAction: action.payload,
      }
    default:
      return state
  }
}
