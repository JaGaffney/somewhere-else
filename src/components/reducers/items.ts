const initialState = {
  itemData: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_ITEMS":
      return {
        ...state,
        itemData: action.payload,
      }
    default:
      return state
  }
}
