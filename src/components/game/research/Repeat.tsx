import React from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import RepeatItem from './RepeatItem'


export const Repeat = (props) => {


    const validatePurchase = (gp: number, costValue): boolean => {
        let retValue = true
        if (gp > props.playerData.playerBank.getCoins()) {
            return false
        }

        for (const cost in costValue) {
            if (costValue[cost] > props.playerData.playerBank.getResearchByColor(cost)) {
                retValue = false
            }
        }
        return retValue
    }

    const handlePurchase = (gp: number, costValue) => {
        props.playerData.playerBank.removeFromCoins(gp)

        for (const cost in costValue) {
            props.playerData.playerBank.removeFromResearch(cost, costValue[cost])
        }
    }

    const onBuyHandler = (data, currentLevel: number): void => {
        let name = data.name
        let cost = data.cost

        let costValue = {}
        Object.keys(cost.researchPoints).map(i => {
            let value = 1
            if (currentLevel !== undefined) {
                value = currentLevel
            }
            value = Math.floor((cost.researchPoints[i] * value) / props.researchData.multiplier[i])
            costValue[i] = value
        })

        if (validatePurchase(cost.gp, costValue)) {
            handlePurchase(cost.gp, costValue)

            props.playerData.research.updateResearchRepeat(name, 1)
            props.setPlayerUpdated()
        }
    }

    return (
        <div className="research__panel">
            {Object.keys(props.researchData.repeat).map((i, k) => {
                const data = props.researchData.repeat[i]
                return (
                    <RepeatItem data={data} k={k} onBuyHandler={onBuyHandler} key={k} />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    researchData: state.research.researchData,
    playerData: state.player.playerData,

})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Repeat)