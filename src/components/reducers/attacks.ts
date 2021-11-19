const initialState = {
  attackData: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_ATTACKS":
      return {
        ...state,
        attackData: action.payload,
      }
    default:
      return state
  }
}
