const initialState = {
  playerData: [],
  activePage: null,
  actionTime: {},
  allDataLoaded: false,
  deltaTime: 0,
}

const actionTimeHandler = (actionTime, payload) => {
  let name = payload[0]
  let value = payload[1]
  let data = payload[2]

  actionTime[name] = {
    startTime: new Date().valueOf(),
    timeToComplete: value,
    data,
  }

  return actionTime
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOAD_PLAYER":
      return {
        ...state,
        playerData: action.payload,
      }
    case "START_ACTION":
      return {
        ...state,
        deltaTime: 0,
        actionTime: actionTimeHandler(state.actionTime, action.payload),
      }
    case "STOP_ACTION":
      return {
        ...state,
        actionTime: {},
        deltaTime: 0,
      }
    case "ACTIVE_PAGE":
      return {
        ...state,
        activePage: action.payload,
      }
    case "ALL_DATA_LOADED":
      return {
        ...state,
        allDataLoaded: action.payload,
      }
    case "SET_DELTA_TIME":
      return {
        ...state,
        deltaTime: action.payload,
      }
    default:
      return state
  }
}
