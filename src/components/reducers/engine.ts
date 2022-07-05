const initialState = {
  activePage: null,
  actionTime: null,
  allDataLoaded: false,
  deltaTime: 0,
  playerUpdated: false,
  combatData: null,
  activeEquipmentDrag: null,
}

const actionTimeHandler = (oldTime: number) => {
  let newTime = null
  if (oldTime !== null) {
    newTime = oldTime
  } else {
    newTime = new Date().valueOf()
  }
  return newTime
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "PLAYER_UPDATED":
      return {
        ...state,
        playerUpdated: !state.playerUpdated,
      }
    case "START_ACTION":
      return {
        ...state,
        deltaTime: 0,
        actionTime: actionTimeHandler(action.payload),
        playerUpdated: !state.playerUpdated,
      }
    case "STOP_ACTION":
      return {
        ...state,
        actionTime: null,
        deltaTime: 0,
        playerUpdated: !state.playerUpdated,
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
    case "LOAD_COMBAT_DATA":
      return {
        ...state,
        combatData: action.payload,
      }
    case "SET_COMBAT_DATA":
      return {
        ...state,
        combatData: action.payload,
      }
    case "SET_ACTIVE_EQUIPMENT_DRAG":
      return {
        ...state,
        activeEquipmentDrag: action.payload,
      }
    default:
      return state
  }
}
