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
  let oldTime = payload[2]
  let data = payload[3]

  let newTime = null
  if (oldTime !== null) {
    newTime = oldTime
  } else {
    newTime = new Date().valueOf()
  }

  actionTime[name] = {
    startTime: newTime,
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
