import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

export const EXP = (props) => {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const previousLevelExp = props.playerData.levelChecker.level[props.playerData.levelChecker.getLevelFromExp(props.playerData.getSkillExp(props.activePage))]
        const nextLevelExp = props.playerData.levelChecker.getNextLevelFromExp(props.playerData.getSkillExp(props.activePage))
        const currentExp = props.playerData.getSkillExp(props.activePage)

        const totalExp = nextLevelExp - previousLevelExp
        const initialExp = currentExp - previousLevelExp

        let percentageNormliased = initialExp / totalExp * 100

        if (percentageNormliased > 100) {
            percentageNormliased = 100
        }
        setPercentage(percentageNormliased)
    }, [props.playerData.getSkillExp(props.activePage), props.playerUpdated])

    return (
        <div className="topPanel exp">
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
    activePage: state.engine.activePage,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EXP)
