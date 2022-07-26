const initialState = {
  passiveData: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_PASSIVES":
      return {
        ...state,
        passiveData: action.payload,
      }
    default:
      return state
  }
}
