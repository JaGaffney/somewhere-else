import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const initialState = {
  data: [],
  activeSkill: null,
  activeAction: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case ("ACTIVE_SKILL"):
      return {
        ...state,
        activeSkill: action.payload
      }
    case ("ACTIVE_ACTION"):
      return {
        ...state,
        activeAction: action.payload
      }
    default:
      return state
  }
}

const middleware = [thunk]

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
export default createStore
