const initialState = {
  playerData: [],
  activePage: null,
  actionTime: {},
  allDataLoaded: false,
}

const actionTimeHandler = (actionTime, payload) => {
  let name = payload[0]
  let type = payload[1]
  let value = payload[2]
  let data = payload[3]

  if (type === true) {
    actionTime[name] = {
      startTime: new Date().valueOf(),
      timeToComplete: value,
      data,
    }
  } else if (type === false) {
    actionTime = {}
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
        actionTime: actionTimeHandler(state.actionTime, action.payload),
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
    default:
      return state
  }
}
