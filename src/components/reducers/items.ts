const initialState = {
  itemData: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_ITEMS":
      console.log("got here")
      console.log(action.payload)
      return {
        ...state,
        itemData: action.payload,
      }
    default:
      return state
  }
}
