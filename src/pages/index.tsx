import React, { useEffect } from "react"
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
import { playerSeed } from "../components/data/seed/playerSeed"

const IndexPage = props => {
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
      playerData.loadPlayerData(dataFromStorage)
    }
    // loads data into redux
    props.loadSkills(skillData)
    props.loadItems(itemData)
    props.loadPlayer(playerData)

    // add check if data fails to load
    props.allDataLoaded()
  }, [])

  useEffect(() => {
    const intervalRefresh = setInterval(() => {
      let currentTime = new Date().valueOf()
      let previousTime = 0
      let deltaTime = 0

      for (const current in props.actionTime) {
        const actionData = props.actionTime[current]
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
          const activeData = props.skillData.getItemIdBySkillId(skill, id)

          // add items to bank
          handleBank(activeData, amount)

          // take items from bank if applicable

          // add exp
          handleExp(activeData, amount, skill)

          // reset value to current time
          handleReset(skill, id, actionData.timeToComplete, current)
        }
      }

      // save every 10 seconds
      if (currentTime % 10 < 0.5) {
        console.log("SAVING")
        // saveAllDataToLocalStorage(props.playerData)
      }


    }, 1000);
    return () => clearInterval(intervalRefresh);
  }, [props.skillData, props.actionTime]);

  const handleBank = (activeData, amount: number) => {
    if (activeData.itemsReceived.length > 0) {
      for (const item in activeData.itemsReceived) {
        const qty = activeData.itemsReceived[item].qty * amount
        props.playerData.playerBank.addItemtoBank(activeData.itemsReceived[item].id, qty)
      }
    }
  }

  const handleExp = (activeData, amount: number, skill: "string") => {
    props.playerData.setSkillExp(skill, activeData.exp * amount)
  }

  const handleReset = (skill: string, id, time: number, name: string) => {
    props.resetActionTime()
    props.setActionTime(name, time, { id, skill })
  }

  return (
    <Layout>
      <SEO title="somewhere else" />
      <section className="main-panel">
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
})


const mapDispatchToProps = {
  loadSkills, loadItems, loadPlayer, allDataLoaded, setDeltaTime, resetActionTime, setActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

