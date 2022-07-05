import React from "react"
import { connect } from "react-redux"

import Settlement from "./settlement/Settlement"
import Research from "./research/research"
import NoncombatSkill from "./skills/NoncombatSkill"
import CombatSkill from "./skills/CombatSkill"
import Status from "./status/Status"
import Playerbank from "./player/Playerbank"
import Combat from "./combat/Combat"
import Shop from "./shop/Shop"
import Inventory from "./inventory/Inventory"

export const Game = props => {
  const LoadComponent = () => {
    switch (props.activePage) {
      case "research":
        return <Research />
      case "settlement":
        return <Settlement />
      case "forestry":
      case "metalwork":
      case "scholar":
        return <NoncombatSkill />
      case "warrior":
      case "archer":
      case "magician":
        return <CombatSkill />
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
        //return <Shop />
        return null
      default:
        return null
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
