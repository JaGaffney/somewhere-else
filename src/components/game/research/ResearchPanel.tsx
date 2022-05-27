import React from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import ResearchItem from './ResearchItem'


export const ResearchPanel = (props) => {

    const onBuyHandler = (data, currentLevel: number): void => {
        let name = data.name
        let cost = data.cost


        if (props.validatePurchase(cost, currentLevel)) {
            props.handlePurchase(cost, currentLevel)

            props.playerData.research.updateResearchRepeat(name, 1)
            props.setPlayerUpdated()
        }
    }

    return (
        <div className="research__panel">
            {props.researchData[props.researchType] && Object.keys(props.researchData[props.researchType]).map((i, k) => {
                const data = props.researchData[props.researchType][i]

                if (props.researchType === "singular") {
                    if (data.name in Object.keys(props.playerData.research.singular)) {
                        return null
                    }
                }
                return (
                    <ResearchItem data={data} k={k} onBuyHandler={onBuyHandler} key={k} researchType={props.researchType} validatePurchase={props.validatePurchase} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ResearchPanel)