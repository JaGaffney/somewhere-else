const initialState = {
  skillData: [],
  activePage: null,
  activeAction: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_SKILLS":
      return {
        ...state,
        skillData: action.payload,
      }
    case "ACTIVE_PAGE":
      return {
        ...state,
        activePage: action.payload,
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
