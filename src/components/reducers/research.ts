const initialState = {
  researchData: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_RESEARCH":
      return {
        ...state,
        researchData: action.payload,
      }
    default:
      return state
  }
}
