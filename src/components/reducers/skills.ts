const initialState = {
  skillData: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_SKILLS":
      return {
        ...state,
        skillData: action.payload,
      }

    default:
      return state
  }
}
