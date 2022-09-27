import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import ResearchItem from './ResearchItem'

export const ResearchPanel = (props) => {
    return (
        <div className="settlement__assignments research__assignments">
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
                            <ResearchItem data={data} k={k} onBuyHandler={props.onBuyHandler} key={k} researchType={props.researchType} validatePurchase={props.validatePurchase} />
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