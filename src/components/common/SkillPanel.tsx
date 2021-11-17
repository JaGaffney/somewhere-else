import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/api';


export const SkillPanel = (props) => {
    useEffect(() => {
    }, [props.playerUpdated])

    return (
        <button className="skillpanel" onClick={() => props.setActivePage(props.skillName)}>
            <img className="skillpanel__icon" src={props.icon} />
            <span className={`skillpanel__name ${props.activePage === props.skillName ? "skillpanel__name-active" : null}`}>{props.skillName}</span>
            {props.playerData.length !== 0 && (
                <span className="skillpanel__level">{props.playerData.levelChecker.getLevelFromExp(props.playerData.skillExp.getCurrentExp(props.skillName))}{props.seperator}{props.skillLevelTotal}</span>
            )}
        </button>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.player.activePage,
    playerUpdated: state.player.playerUpdated
})

const mapDispatchToProps = {
    setActivePage
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPanel)
