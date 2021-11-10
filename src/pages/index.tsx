import React, { useEffect } from "react"
import { connect } from "react-redux"
import { loadSkills, loadItems, loadPlayer } from "../components/actions/startup"

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

// Game engine
import { GameEngine } from "../components/data/GameEngine"

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
    playerData.loadPlayerData(playerSeed)

    // loads data into redux
    props.loadSkills(skillData)
    props.loadItems(itemData)
    props.loadPlayer(playerData)

    // game engine tick
    // on load will use old data
    // let intialtime = new Date().getTime()

    // const gameEngine = new GameEngine(intialtime)
    // gameEngine.setTimeToComplete(0)

    // // start game
    // gameEngine.gameTick()
  }, [])

  useEffect(() => {
    const intervalRefresh = setInterval(() => {

      let currentTime = new Date().valueOf()

      for (const current in props.actionTime) {
        let previousTime = props.actionTime[current].startTime
        let deltaTime = currentTime - previousTime

        if (deltaTime > props.actionTime[current].timeToComplete * 1000) {
          console.log("//// ACTION FIN")

        }

      }
    }, 1000);
    return () => clearInterval(intervalRefresh);
  }, []);






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
  actionTime: state.player.actionTime
})


const mapDispatchToProps = {
  loadSkills, loadItems, loadPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

