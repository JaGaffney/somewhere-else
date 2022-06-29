import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import ResearchItem from './ResearchItem'


export const ResearchPanel = (props) => {
    const onBuyHandler = (data, currentLevel: number, researchType: string): void => {
        let name = data.name
        let cost = data.cost

        if (props.validatePurchase(cost, currentLevel)) {
            props.handlePurchase(cost, currentLevel)

            if (researchType === "repeat") {
                props.playerData.research.updateResearchRepeat(name, 1)
            } else {
                props.playerData.research.updateResearchSingle(name, true)
            }

            props.setPlayerUpdated()
        }
    }

    return (
        <div className="settlement__assignments research__assignments">
            <h2>Repeatable</h2>
            <div className="research__panel">
                {props.researchData[props.researchType] && Object.keys(props.researchData[props.researchType]).map((i, k) => {
                    const data = props.researchData[props.researchType][i]
                    if (props.researchType === "singular") {
                        if (Object.keys(props.playerData.research.singular).includes(data.name)) {
                            return null
                        }
                    }

                    if (!props.researchFilter.includes(data.type)) {
                        return (
                            <ResearchItem data={data} k={k} onBuyHandler={onBuyHandler} key={k} researchType={props.researchType} validatePurchase={props.validatePurchase} />
                        )
                    }

                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    researchData: state.research.researchData,
    playerData: state.player.playerData,

})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(ResearchPanel)