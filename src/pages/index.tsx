import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { loadSkills, loadItems, loadPlayer, allDataLoaded, saveAllDataToLocalStorage, onLoadDataFromLocalStorage } from "../components/actions/startup"
import { setDeltaTime, resetActionTime, setActionTime } from "../components/actions/api"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/landing/Landing"
import Structure from "../components/game/Structure"

// data classes
import { ItemData } from "../components/data/ItemData"
import { SkillData } from "../components/data/SkillData"
import { PlayerData } from "../components/data/PlayerData"

// this will be loaded from local storage
// @ts-ignore
import backgroundImage from "../images/background/cat.jpg"

const IndexPage = props => {
  const [timer, setTimer] = useState(0)
  const updateTime = () => setTimer(timer + 1)

  useEffect(() => {
    // NOTE: should be a loader somewhere else maybe inside redux
    // creates all items in the game
    const itemData = new ItemData()
    // creates all skill data not pertaining to the player
    const skillData = new SkillData()
    const skillNames = skillData.getAllNoncombatSkills()

    // creates the default player with no data
    const playerData = new PlayerData(skillNames)
    const dataFromStorage = onLoadDataFromLocalStorage()

    if (dataFromStorage !== null) {
      playerData.loadPlayerData(dataFromStorage, itemData)
    }
    // loads data into redux
    props.loadSkills(skillData)
    props.loadItems(itemData)
    props.loadPlayer(playerData)

    if (dataFromStorage !== null) {
      for (const current in dataFromStorage.actionTime) {
        const actionData = dataFromStorage.actionTime[current]

        const id = actionData.data.id
        const skill = actionData.data.skill
        const time = actionData.timeToComplete
        const startTime = actionData.startTime
        props.setActionTime(current, time, startTime, { id, skill })
      }
    }

    // add check if data fails to load
    props.allDataLoaded()
  }, [])



  const actionTimeHandler = (currentTime, data, skillData) => {
    let previousTime = 0
    let deltaTime = 0

    for (const current in data) {
      const actionData = data[current]
      previousTime = actionData.startTime
      deltaTime = currentTime - previousTime
      let actionTimeInMs = actionData.timeToComplete * 1000

      if (deltaTime < actionData.timeToComplete * 1000) {
        props.setDeltaTime(Math.round(deltaTime / 1000))
      }

      if (deltaTime > actionTimeInMs) {
        // check if required level

        const amount = Math.round(deltaTime / actionTimeInMs)
        const id = actionData.data.id
        const skill = actionData.data.skill
        const activeData = skillData.getItemIdBySkillId(skill, id)

        // add items to bank
        handleAddToBank(activeData, amount)

        // take items from bank if applicable
        // handleRemoveFromBank(activeData, amount)

        // add exp
        handleExp(activeData, amount, skill)

        // reset value to current time
        handleReset(skill, id, actionData.timeToComplete, current)
      }
    }
  }


  useEffect(() => {
    const intervalRefresh = setInterval(() => {
      updateTime()
      let currentTime = new Date().valueOf()
      actionTimeHandler(currentTime, props.actionTime, props.skillData)
      if (timer > 10) {
        console.log("SAVING")
        saveAllDataToLocalStorage(props.playerData, props.actionTime)
        setTimer(0)
      }

    }, 1000);
    return () => clearInterval(intervalRefresh);
  }, [props.skillData, props.actionTime, timer]);


  const handleAddToBank = (activeData, amount: number) => {
    if (activeData.itemsReceived.length > 0) {
      for (const value in activeData.itemsReceived) {
        const qty = activeData.itemsReceived[value].qty * amount
        const id = activeData.itemsReceived[value].id
        const item = props.itemData.getItemById(id)
        props.playerData.playerBank.addItemtoBank(id, qty, item)
      }
    }
  }

  const handleRemoveFromBank = (activeData, amount: number) => {
    if (activeData.itemsRequired.length > 0) {
      for (const item in activeData.itemsRequired) {
        const qty = activeData.itemsRequired[item].qty * amount
        props.playerData.playerBank.removeItemfromBank(activeData.itemsReceived[item].id, qty)
      }
    }
  }


  const handleExp = (activeData, amount: number, skill: "string") => {
    props.playerData.setSkillExp(skill, activeData.exp * amount)
  }
  const handleReset = (skill: string, id, time: number, name: string) => {
    props.resetActionTime()
    props.setActionTime(name, time, null, { id, skill })
  }

  return (
    <Layout>
      <SEO title="somewhere else" />
      <section className="main-panel" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        {/* <Landing /> */}
        <Structure />
      </section>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  actionTime: state.player.actionTime,
  allDataLoaded: state.player.allDataLoaded,
  playerData: state.player.playerData,
  skillData: state.skills.skillData,
  itemData: state.items.itemData
})


const mapDispatchToProps = {
  loadSkills, loadItems, loadPlayer, allDataLoaded, setDeltaTime, resetActionTime, setActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

