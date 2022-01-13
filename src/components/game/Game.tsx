import React from "react"
import { connect } from "react-redux"

import NoncombatSkill from "./skills/NoncombatSkill"
import CombatSkill from "./skills/CombatSkill"
import StatusSkill from "./skills/StatusSkill"
import Playerbank from "./player/Playerbank"
import Combat from "./combat/Combat"
import Shop from "./shop/Shop"

export const Game = props => {
  const LoadComponent = () => {
    switch (props.activePage) {
      case "forestry":
      case "metalwork":
        return <NoncombatSkill />
      case "warrior":
      case "archer":
      case "magician":
        return <CombatSkill />
      case "health":
      case "stamina":
      case "armour":
      case "divination":
        return <StatusSkill />
      case "bank":
        return <Playerbank />
      case "combat":
        return <Combat />
      case "shop":
        return <Shop />
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
