export const loadSkills = data => dispatch => {
  return dispatch({
    type: "LOAD_SKILLS",
    payload: data,
  })
}
export const loadItems = data => dispatch => {
  return dispatch({
    type: "LOAD_ITEMS",
    payload: data,
  })
}
export const loadAttacks = data => dispatch => {
  return dispatch({
    type: "LOAD_ATTACKS",
    payload: data,
  })
}
export const loadEnemies = data => dispatch => {
  return dispatch({
    type: "LOAD_ENEMIES",
    payload: data,
  })
}
export const loadPlayer = data => dispatch => {
  return dispatch({
    type: "LOAD_PLAYER",
    payload: data,
  })
}

export const allDataLoaded = () => dispatch => {
  return dispatch({
    type: "ALL_DATA_LOADED",
    payload: true,
  })
}

export const onLoadDataFromLocalStorage = () => {
  if (typeof Storage !== "undefined") {
    let retrievedObject = null
    if (typeof window !== "undefined") {
      retrievedObject = localStorage.getItem("data")
    } else {
      return null
    }
    if (retrievedObject === null) {
      return null
    }
    const returnedData = JSON.parse(retrievedObject)
    if (returnedData !== undefined) {
      return returnedData
    }
  } else {
    return null
  }
}

export const saveAllDataToLocalStorage = (
  { playerBank, skillExp, passives, inventory },
  actionTime
) => {
  const playerData = {
    ...playerBank,
    bankItems: JSON.stringify([...playerBank.bankItems]),
  }
  const skillData = skillExp.skillExp

  const data = {
    skillExp: skillData,
    playerBank: playerData,
    passives,
    inventory,
    actionTime,
  }
  localStorageSave(data)
}

const localStorageSave = data => {
  if (typeof window !== "undefined") {
    localStorage.setItem("data", JSON.stringify(data))
  }
}
