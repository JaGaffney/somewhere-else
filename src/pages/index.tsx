import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { loadSkills, loadItems, loadAttacks, loadEnemies, loadPlayer, allDataLoaded, saveAllDataToLocalStorage, onLoadDataFromLocalStorage } from "../components/actions/startup"
import { setDeltaTime, resetActionTime, setActionTime } from "../components/actions/api"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/landing/Landing"
import Structure from "../components/game/Structure"

// data classes
import { ItemData } from "../components/data/ItemData"
import { SkillData } from "../components/data/SkillData"
import { AttackData } from "../components/data/AttackData"
import { EnemyData } from "../components/data/EnemyData"
import { PlayerData } from "../components/data/PlayerData"

// this will be loaded from local storage
// @ts-ignore
import backgroundImage from "../images/background/cat.jpg"

const IndexPage = props => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    // NOTE: should be a loader somewhere else maybe inside redux
    // creates all items in the game
    const itemData = new ItemData()

    // creates all skill data not pertaining to the player
    const skillData = new SkillData()
    const attackData = new AttackData()
    const enemyData = new EnemyData(attackData)

    // creates the default player with no data
    const playerData = new PlayerData(skillData.getAllSkills(), skillData.getAllCombatSkills())
    const dataFromStorage = onLoadDataFromLocalStorage()

    if (dataFromStorage !== null) {
      playerData.loadPlayerData(dataFromStorage, itemData)
    }

    // loads data into redux
    props.loadSkills(skillData)
    props.loadItems(itemData)
    props.loadAttacks(attackData)
    props.loadEnemies(enemyData)
    props.loadPlayer(playerData)

    // keeps data from action is currently in progress when closing down the game
    if (dataFromStorage !== null) {
      const actionTime = dataFromStorage.actionTime
      props.setActionTime(actionTime)
      //props.setActionTime(1652162390941)

    }

    // add check if data fails to load
    props.allDataLoaded()
  }, [])

  const updateTime = () => {
    setTimer(timer + 1)
  }

  const actionTimeHandler = (currentTime, previousTime, skillData) => {
    let deltaTime = 0

    let TEMPTIME = 5 // needs to be from skill

    deltaTime = currentTime - previousTime
    let actionTimeInMs = TEMPTIME * 1000


    if (deltaTime < actionTimeInMs) {
      console.log("got here less than")
      props.setDeltaTime(Math.round(deltaTime / 1000))
    }

    if (deltaTime > actionTimeInMs) {
      // check if required level
      console.log("got here - do action")
      const amount = Math.round(deltaTime / actionTimeInMs)
      // const activeData = skillData.getItemIdBySkillId(skill, id)

      for (const task in props.playerData.settlement.tasks) {
        const activeData = skillData.getActionDataBySkillID(task)[1]

        const activeWorkers = amount * Math.floor(props.playerData.settlement.tasks[task] / activeData.manpower)

        // add items to bank
        handleAddToBank(activeData, activeWorkers)

        // add exp
        handleExp(activeData, activeWorkers, activeData.job)
      }


      // NOTE: doesnt work for trees for some reaosn but works for stones


      // take items from bank if applicable
      // handleRemoveFromBank(activeData, amount)



      // reset value to current time
      handleReset()
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
    console.log(activeData)
    if (activeData.itemsReceived.length > 0) {
      for (const value in activeData.itemsReceived) {
        console.log(value)
        const qty = activeData.itemsReceived[value].qty * amount
        const id = activeData.itemsReceived[value].id
        const item = props.itemData.getItemById(id)
        console.log(id)
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


  const handleExp = (activeData, amount: number, skill: string) => {
    props.playerData.setSkillExp(skill, activeData.exp * amount)
  }
  const handleReset = () => {
    props.resetActionTime()
    props.setActionTime(null)
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
  actionTime: state.engine.actionTime,
  allDataLoaded: state.engine.allDataLoaded,
  playerData: state.player.playerData,
  skillData: state.skills.skillData,
  itemData: state.items.itemData
})


const mapDispatchToProps = {
  loadSkills, loadItems, loadAttacks, loadEnemies, loadPlayer, allDataLoaded, setDeltaTime, resetActionTime, setActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

