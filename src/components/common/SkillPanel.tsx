import React from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/api';

import { GiCoins } from "react-icons/gi";


export const SkillPanel = (props) => {
    return (
        <button className="skillpanel" onClick={() => props.setActivePage(props.skillName)}>
            <span className="skillpanel__icon">{props.icon ? props.icon : <GiCoins />}</span>
            <span className={`skillpanel__name ${props.activePage === props.skillName ? "skillpanel__name-active" : null}`}>{props.skillName}</span>
            {props.playerData.length !== 0 && (
                <span className="skillpanel__level">{props.playerData.levelChecker.getLevelFromExp(props.playerData.skillExp.getCurrentExp(props.skillName))}{props.seperator}{props.skillLevelTotal}</span>
            )}
        </button>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.player.activePage
})

const mapDispatchToProps = {
    setActivePage
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPanel)
