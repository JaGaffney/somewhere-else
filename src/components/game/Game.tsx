import React from "react"
import { connect } from "react-redux"

import Home from "./home/Home"
import Settlement from "./settlement/Settlement"
import Research from "./research/Research"
import NoncombatSkill from "./skills/NoncombatSkill"
import CombatSkill from "./skills/CombatSkill"
import Status from "./status/Status"
import Playerbank from "./player/Playerbank"
import Combat from "./combat/Combat"
import JobInfo from "./job/JobInfo"
import Inventory from "./inventory/Inventory"


export const Game = props => {
  const LoadComponent = () => {
    switch (props.activePage) {
      case "research":
        return Research ? <Research /> : null
      case "settlement":
        return <Settlement />
      case "forestry":
      case "metalwork":
      case "scholar":
        return NoncombatSkill ? <NoncombatSkill /> : null
      case "loadout":
        return <CombatSkill />
      case "warrior":
      case "archer":
      case "magician":
        return JobInfo ? <JobInfo /> : null
      case "equipment":
        return <Inventory />
      case "health":
      case "stamina":
      case "armour":
      case "divination":
        return <Status />
      case "bank":
        return <Playerbank />
      case "combat":
        return <Combat />
      case "shop":
        return null
      default:
        return <Home />
    }
  }

  return (
    <section className="game__container">
      <LoadComponent />
    </section>
  )
}
const mapStateToProps = state => ({
  activePage: state.engine.activePage,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
