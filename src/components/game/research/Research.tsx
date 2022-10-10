import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import Controls from './Controls'
import ResearchPanel from './ResearchPanel'
import ResearchSingle from './ResearchSingle'

// @ts-ignore
import DIVINIATION from "../../../images/sidepanel/divination.svg"
// @ts-ignore
import SINGLE from "../../../images/research/single.svg"
// @ts-ignore
import REPEAT from "../../../images/research/repeat.svg"

export const Research = (props) => {
    const [researchFilter, setResearchFilter] = useState([])
    const [displayType, setDisplayType] = useState(0) // 0, 1, 2

    const displayData = () => {
        switch (displayType) {
            case (0):
                return <ResearchSingle validatePurchase={validatePurchase} onBuyHandler={onBuyHandler} data={props.researchData.singular} researchFilter={researchFilter} />
            case (1):
                return <ResearchPanel validatePurchase={validatePurchase} onBuyHandler={onBuyHandler} data={props.researchData.repeat} researchType={"repeat"} researchFilter={researchFilter} />
            case (2):
                return null
            default:
                return null
        }
    }


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

    const onBuyHandler = (data, currentLevel: number, researchType: string, setActiveResearch): void => {
        let name = data.name
        let cost = data.cost

        if (validatePurchase(cost, currentLevel)) {
            handlePurchase(cost, currentLevel)

            if (researchType === "repeat") {
                props.playerData.research.updateResearchRepeat(name, 1)
            } else {
                props.playerData.research.updateResearchSingle(name, true)
                setActiveResearch(null)
            }

            props.setPlayerUpdated()

        }
    }


    const controlHandler = (value: string) => {
        if (researchFilter.includes(value)) {
            setResearchFilter([researchFilter.filter(i => i !== value)])
        } else {
            setResearchFilter([...researchFilter, value])
        }
    }

    return (
        <div className="game__normal">
            <Controls controlHandler={controlHandler} researchFilter={researchFilter} />
            <div className="attackloadout__buttons">
                <button className={`attackloadout__buttons-button ${displayType === 0 ? "attackloadout__buttons-active" : ""}`} onClick={() => setDisplayType(0)}> <img src={SINGLE} alt="Single" /><span>One time buy</span></button>
                <button className={`attackloadout__buttons-button ${displayType === 1 ? "attackloadout__buttons-active" : ""}`} onClick={() => setDisplayType(1)}> <img src={REPEAT} alt="Repeatable" /><span>Repeatable</span></button>
                <button className={`attackloadout__buttons-button ${displayType === 2 ? "attackloadout__buttons-active" : ""}`} onClick={() => setDisplayType(2)}> <img src={DIVINIATION} alt="divination" /><span>Divination</span></button>
            </div>
            {displayData()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    researchData: state.research.researchData,
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Research)