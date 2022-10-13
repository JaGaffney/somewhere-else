import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { loadSkills, loadItems, loadResearch, loadAttacks, loadPassives, loadEnemies, loadPlayer, allDataLoaded, saveAllDataToLocalStorage, onLoadDataFromLocalStorage } from "../components/actions/startup"
import { setDeltaTime, resetActionTime, setActionTime } from "../components/actions/api"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/landing/Landing"
import Structure from "../components/game/Structure"

// data classes
import { ItemData } from "../components/data/ItemData"
import { SkillData } from "../components/data/SkillData"
import { AttackData } from "../components/data/AttackData"
import { PassiveData } from "../components/data/PassiveData"
import { EnemyData } from "../components/data/EnemyData"
import { ResearchData } from "../components/data/ResearchData"
import { PlayerData } from "../components/data/PlayerData"


// this will be loaded from local storage
// @ts-ignore
import backgroundImage from "../images/background/crystal2.jpg"
import { SkillAction } from "../components/data/skills/SkillAction"

import { costPerAction } from "../components/utils/generic"

const IndexPage = props => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    // NOTE: should be a loader somewhere else maybe inside redux
    // creates all items in the game
    const itemData = new ItemData()

    // creates all skill data not pertaining to the player
    const skillData = new SkillData()
    const attackData = new AttackData()
    const passiveData = new PassiveData()
    const enemyData = new EnemyData(attackData)
    const researchData = new ResearchData()

    // creates the default player with no data
    const playerData = new PlayerData(skillData.getAllSkills())
    const dataFromStorage = onLoadDataFromLocalStorage()

    if (dataFromStorage !== null) {
      playerData.loadPlayerData(dataFromStorage)
    }

    // loads data into redux
    props.loadSkills(skillData)
    props.loadItems(itemData)
    props.loadResearch(researchData)
    props.loadAttacks(attackData)
    props.loadPassives(passiveData)
    props.loadEnemies(enemyData)
    props.loadPlayer(playerData)

    // keeps data from action is currently in progress when closing down the game
    if (dataFromStorage !== null) {
      const actionTime = dataFromStorage.actionTime
      props.setActionTime(actionTime)
    }

    // add check if data fails to load
    props.allDataLoaded()
  }, [])

  const updateTime = (): void => {
    setTimer(timer + 1)
  }

  const realTimeCalc = (): number => {
    let retValue = 10

    if (props.playerData.research.repeat["efficiency"]) {
      let tempValue = retValue * (props.playerData.research.repeat["efficiency"] / 100)
      retValue = retValue - tempValue
    }

    // if (Object.keys(props.playerData.research.repeat).includes("efficiency")) {
    //   let tempValue = retValue * (props.playerData.research.repeat["efficiency"] / 100)
    //   retValue = retValue - tempValue
    // }

    if (retValue <= 1) {
      retValue = 1
    }

    return retValue
  }

  const randomSucess = (): number => {
    let retValue = 1

    if (props.playerData.research.repeat["production"]) {
      const random = Math.floor(Math.random() * 100) + 1
      const randomChance = props.playerData.research.repeat["production"]

      retValue = randomChance > random ? 2 : 1
    }

    return retValue
  }

  const actionTimeHandler = (currentTime: number, previousTime: number, skillData: SkillData): void => {
    let deltaTime = 0
    let time = realTimeCalc()

    deltaTime = currentTime - previousTime
    let actionTimeInMs = time * 1000


    if (deltaTime < actionTimeInMs) {
      props.setDeltaTime(Math.round(deltaTime / 1000))
    }

    if (deltaTime > actionTimeInMs) {
      props.playerData.offline.setTime(previousTime)
      // TODO: check if required level

      // TODO: check if the correct items are in the bank


      if (costPerAction(props.playerData.getActiveManpower()) <= props.playerData.playerBank.getCoins()) {
        const amount = Math.round(deltaTime / actionTimeInMs)
        // const activeData = skillData.getItemIdBySkillId(skill, id)

        props.playerData.offline.reset()
        for (const task in props.playerData.settlement.tasks) {
          const activeData = skillData.getActionDataBySkillID(task).filter((i => i !== undefined))[0]
          const activeWorkers = amount * Math.floor(props.playerData.settlement.tasks[task] / activeData.manpower)

          let requiredMaterials = true
          if (activeData.itemsRequired.length !== 0) {
            for (let i in activeData.itemsRequired) {
              const item = activeData.itemsRequired[i]
              const bankItem = props.playerData.playerBank.findItemInBank(item.id)
              if (amount * item.qty > bankItem?.qty || bankItem === undefined) {
                console.log("not enough materials")
                requiredMaterials = false
              }
            }
          }

          if (requiredMaterials) {


            // add items to bank
            handleAddToBank(activeData, activeWorkers)

            // take items from bank if applicable
            handleRemoveFromBank(activeData, activeWorkers)

            // add exp
            handleExp(activeData, activeWorkers, activeData.job)

            // salary cost
            if (Object.keys(props.playerData.settlement.tasks).length > 0) {
              const salaryCost = costPerAction(props.playerData.getActiveManpower()) * amount
              props.playerData.playerBank.removeFromCoins(salaryCost)
              props.playerData.offline.setSalary(salaryCost)
            }


          }

        }




      }

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

  const addToBankType = (type: string, id: number, qty: number, item) => {
    const name = item.name.split(" ")[0]
    let val = item.price * qty
    switch (type) {
      case ("RESEARCH"):
        props.playerData.playerBank.addToResearch(name, qty)
        props.playerData.offline.setItems(name, qty)
        break;
      case ("ESSENCE"):
        console.log("tribute being added")
        props.playerData.playerBank.addToTribute(qty)
        props.playerData.offline.setTribute(qty)
        break;
      case ("BANK"):
        props.playerData.playerBank.addToCoins(val)
        props.playerData.offline.setCoins(val)
        break;
      case ("COMMON"):
        if (props.playerData.getSettingValue("autoSell")) {
          if (!val) {
            val = 1
          }
          props.playerData.playerBank.addToCoins(val)
          props.playerData.offline.setCoins(val)
        } else {
          props.playerData.playerBank.addItemtoBank(id, qty, item)
          props.playerData.offline.setItems(id, qty)
        }
      default:
        break;
    }
  }

  const handleAddToBank = (activeData: SkillAction, amount: number): void => {
    if (activeData.itemsReceived.length > 0) {
      for (const value in activeData.itemsReceived) {

        // wont add any more items if bank is full, but will allow for items to keep being stored
        if (props.playerData.playerBank.totalItemsInBank() < props.playerData.getTotalBankSpaceWithStorage()) {

          const qty = (activeData.itemsReceived[value].qty * amount) * randomSucess() // adds random chance if applicable
          const id = activeData.itemsReceived[value].id
          const item = props.itemData.getItemById(id)

          // handle items that are added to your bank
          addToBankType(item.rarity, id, qty, item)
        }
      }
    }
  }

  const handleRemoveFromBank = (activeData, amount: number): void => {
    if (activeData.itemsRequired.length !== 0) {
      for (let i in activeData.itemsRequired) {
        const item = activeData.itemsRequired[i]
        props.playerData.playerBank.removeItemfromBank(item.id, amount)
      }
    }
  }

  const handleExp = (activeData: SkillAction, amount: number, skill: string): void => {
    const expValue = activeData.exp * amount
    props.playerData.setSkillExp(skill, expValue)
    props.playerData.offline.setExp(skill, expValue)
  }

  const handleReset = (): void => {
    // handle reset of time tick
    props.resetActionTime()
    props.setActionTime(null)
  }

  return (
    <Layout>
      <SEO title="somewhere else" />
      <section
        className="main-panel"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "inherit",
          overflowY: "auto",
          overflowX: "hidden"
        }}
      >
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
  loadSkills, loadItems, loadResearch, loadAttacks, loadPassives, loadEnemies, loadPlayer, allDataLoaded, setDeltaTime, resetActionTime, setActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

