import React from 'react'
import { connect } from 'react-redux'
import { setActiveSkill } from '../actions/api';

import { GiCoins } from "react-icons/gi";


export const SkillPanel = (props) => {
    return (
        <div className="skillpanel" onClick={() => props.setActiveSkill(props.skillName)}>
            <span className="skillpanel__icon">{props.icon ? props.icon : <GiCoins />}</span>
            <span className={`skillpanel__name ${props.activeSkill === props.skillName ? "skillpanel__name-active" : null}`}>{props.skillName}</span>
            {props.playerData.length !== 0 && (
                <span className="skillpanel__level">{props.playerData.levelChecker.getLevelFromExp(props.playerData.skillExp.getCurrentExp(props.skillName))}{props.seperator}{props.skillLevelTotal}</span>
            )}
        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activeSkill: state.skills.activeSkill
})

const mapDispatchToProps = {
    setActiveSkill
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPanel)
