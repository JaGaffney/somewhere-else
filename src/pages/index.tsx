import React, { useEffect } from "react"
import { connect } from "react-redux"
import { loadSkills, loadPlayer } from "../components/actions/startup"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/landing/Landing"

import Structure from "../components/game/Structure"


import { ItemData } from "../components/data/ItemData"
import { SkillData } from "../components/data/SkillData"
import { PlayerData } from "../components/data/PlayerData"

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
    playerData.loadPlayerData(playerSeed)

    console.log(playerData.levelChecker.getLevelFromExp(playerData.skillExp.getCurrentExp("bushcraft")))
    // loads data into redux
    props.loadSkills(skillData)
    props.loadPlayer(playerData)


  }, [])


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

const mapStateToProps = ({ data }) => {
  return { data }
}

const mapDispatchToProps = {
  loadSkills, loadPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

