import React from 'react'
import { connect } from 'react-redux'
import { getValidCombatSkills } from '../../utils/equipment'
import { validFilterQuery } from '../../utils/generic'

import Attack from './Attack'

export const SkillBook = (props) => {

  const validSkill = (attackData, currentLevel): boolean => {
    let valid = false
    if (validFilterQuery(attackData.name, props.search) || validFilterQuery(attackData.type, props.search)) {
      if (currentLevel >= attackData.levelRequired) {
        if (getValidCombatSkills(props.skills, props.playerData).includes(attackData.type.toLowerCase())) {
          valid = true
        }

      }
    }
    return valid
  }

  return (
    <div className="attacks__container attacks__container-skillbook">
      {[...props.attackData.attacks.keys()].map((i, k) => {
        const attackData = props.attackData.getAttackById(i)
        const currentLevel = props.playerData.levelChecker.getLevelFromExp(props.playerData.skillExp.getCurrentExp(attackData.type.toLowerCase()))
        if (validSkill(attackData, currentLevel)) {
          return (
            <div className="attackloadout__equipped-slot" key={k}>
              <Attack attackID={i} key={k} onSelectedSkillHandler={props.onSelectedSkillHandler} onSelectedPassiveHandler={props.onSelectedPassiveHandler} />
            </div>)
        }



      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  attackData: state.attacks.attackData,
  playerData: state.player.playerData,
  skills: state.skills.skillData
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SkillBook)