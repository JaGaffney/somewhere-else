import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"

import Home from "./home/Home"
import Settlement from "./settlement/Settlement"
import Research from "./research/Research"
//import NonCombatSkill from "./skills/NonCombatSkill"
import CombatSkill from "./skills/CombatSkill"
import Status from "./status/Status"
import Playerbank from "./player/PlayerBank"
import Combat from "./combat/Combat"
import JobInfo from "./job/JobInfo"
import Inventory from "./inventory/Inventory"


import Actions from './skills/generics/Actions'
import EXP from './skills/generics/EXP'


export const NonCombatSkill = (props) => {
  const [activeData, setActiveData] = useState(null)

  useEffect(() => {
    if (props.skills) {
      if (props.skills.length !== 0) {
        setActiveData(props.skills.getSkillByName("gathering", props.activePage))
      }
    }


  }, [props.skills])

  return (
    props.skills?.length !== 0 ? (
      activeData !== null ?
        (
          <div>
            <EXP />
            <Actions gather={activeData.gatheringName} skillData={activeData} />
          </div>
        ) : null
    ) : null
  )
}

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
        return <NonCombatSkill />
      case "loadout":
        return <CombatSkill />
      case "warrior":
      case "archer":
      case "magician":
        return <JobInfo />
      case "equipment":
        return <Inventory />
      // case "health":
      // case "stamina":
      // case "armour":
      // case "divination":
      //   return <Status />
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
  skills: state.skills.skillData,
  activePage: state.engine.activePage,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
