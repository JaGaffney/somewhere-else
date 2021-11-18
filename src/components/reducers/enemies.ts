const initialState = {
  enemyData: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_ENEMIES":
      return {
        ...state,
        enemyData: action.payload,
      }
    default:
      return state
  }
}
