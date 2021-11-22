const initialState = {
  playerData: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_PLAYER":
      return {
        ...state,
        playerData: action.payload,
      }
    default:
      return state
  }
}
