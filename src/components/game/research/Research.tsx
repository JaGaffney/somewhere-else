import React from 'react'
import { connect } from 'react-redux'

import Controls from './Controls'
import ResearchPanel from './ResearchPanel'

export const Research = (props) => {
    const validatePurchase = (cost, currentLevel): boolean => {
        let retValue = true
        if (cost.gp > props.playerData.playerBank.getCoins()) {
            return false
        }

        const costValue = costValueHandler(cost, currentLevel)
        for (const cost in costValue) {
            if (costValue[cost] > props.playerData.playerBank.getResearchByColor(cost)) {
                retValue = false
            }
        }
        return retValue
    }

    const handlePurchase = (cost, currentLevel): void => {
        props.playerData.playerBank.removeFromCoins(cost.gp)

        const costValue = costValueHandler(cost, currentLevel)
        for (const cost in costValue) {
            props.playerData.playerBank.removeFromResearch(cost, costValue[cost])
        }
    }

    const costValueHandler = (cost, currentLevel): Object => {
        let costValue = {}
        Object.keys(cost.researchPoints).map(i => {
            let value = 1
            if (currentLevel !== undefined) {
                value = currentLevel
            }
            value = Math.floor((cost.researchPoints[i] * value) / props.researchData.multiplier[i])
            costValue[i] = value
        })
        return costValue
    }


    return (
        <div className="game__normal">
            <Controls />
            <ResearchPanel validatePurchase={validatePurchase} handlePurchase={handlePurchase} data={props.researchData.repeat} researchType={"repeat"} />
            <ResearchPanel validatePurchase={validatePurchase} handlePurchase={handlePurchase} data={props.researchData.singular} researchType={"singular"} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    researchData: state.research.researchData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Research)