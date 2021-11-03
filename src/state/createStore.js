import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import rootReducer from "../components/reducers" 

const initialState = {}

const middleware = [thunk]

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
export default createStore
