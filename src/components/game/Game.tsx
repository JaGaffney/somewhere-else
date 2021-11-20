import React from "react"
import { connect } from "react-redux"

import Noncombat from "./skills/Noncombat"
import Playerbank from "./player/Playerbank"
import Combat from "./combat/Combat"
import Shop from "./shop/Shop"

export const Game = props => {
  const LoadComponent = () => {
    switch (props.activePage) {
      case "bushcraft":
      case "metalwork":
        return <Noncombat />
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
  activePage: state.player.activePage,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
