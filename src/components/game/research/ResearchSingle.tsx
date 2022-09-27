import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import ResearchCost from './ResearchCost'

import { getResearchBorderColor } from "../../utils/color"

export const ResearchSingle = (props) => {
    const [activeResearch, setActiveResearch] = useState<Object | null>(null)

    const onActiveResearchHandler = (name: string): void => {
        setActiveResearch(props.researchData["singular"][name])
    }

    useEffect(() => {
    }, [props.playerUpdated])

    return (
        <div className="settlement__assignments research__assignments">
            <div className="research__panel-single">
                <div className="research__panel-single-cost">
                    <ResearchCost activeResearch={activeResearch} onBuyHandler={props.onBuyHandler} validatePurchase={props.validatePurchase} setActiveResearch={setActiveResearch} />
                </div>

                <div className="research__panel">
                    {props.researchData["singular"] && Object.keys(props.researchData["singular"]).map((i, k) => {
                        const data = props.researchData["singular"][i]
                        if (Object.keys(props.playerData.research.singular).includes(data.name)) {
                            return null
                        }


                        if (!props.researchFilter.includes(data.type)) {
                            return (
                                <div key={k}
                                    className="research__panel-single-item research__panel-data-action"
                                    onClick={() => onActiveResearchHandler(data.name)}
                                    style={{ borderColor: getResearchBorderColor(data.type) }}
                                >
                                    <img className="action__item-icon" src={data.icon} />
                                    <div className="research__panel-data-action-data">
                                        <span className="research__panel-data-action-title">{data.name} {props.playerData.research["singular"][data.name]}</span>
                                        <span className="research__panel-data-action-description">"{data.description}"</span>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>


            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    researchData: state.research.researchData,
    playerData: state.player.playerData,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(ResearchSingle)