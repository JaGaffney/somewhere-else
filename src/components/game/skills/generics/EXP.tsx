import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

export const EXP = (props) => {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        setPercentage(props.playerData.getSkillExp(props.activePage) / props.playerData.levelChecker.getNextLevelFromExp(props.playerData.getSkillExp(props.activePage)) * 100)
    }, [props.playerData.getSkillExp(props.activePage)])

    console.log(percentage)
    return (
        <div className="exp">
            <div className="exp__level">
                <span>Level</span>
                <span>{props.playerData.levelChecker.getLevelFromExp(props.playerData.getSkillExp(props.activePage))} / 99</span>
            </div>
            <div className="exp__progressbar">
                <div className="exp__progressbar-inner" style={{ transform: `scaleX(${percentage}%)` }}></div>
            </div>
            <div className="exp__required">
                <span>{props.playerData.getSkillExp(props.activePage)}</span>
                <span>{props.playerData.levelChecker.getNextLevelFromExp(props.playerData.getSkillExp(props.activePage))}</span>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.player.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EXP)
