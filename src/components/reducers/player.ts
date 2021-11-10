const initialState = {
  playerData: [],
  actionTime: {},
}

const actionTimeHandler = (actionTime, payload) => {
  let name = payload[0]
  let type = payload[1]
  let value = payload[2]

  if (type === true) {
    actionTime[name] = {
      startTime: new Date().valueOf(),
      timeToComplete: value,
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
    default:
      return state
  }
}
