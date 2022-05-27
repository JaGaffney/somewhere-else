import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


import { getResearchBorderColor } from "../../utils/color"
import { intToString } from '../../utils/generic'

import {
    gp,
    researchRed,
    researchGreen,
    researchBlue,
    researchYellow,
    researchPurple,
} from "../../data/seed/icons/itemSeedIcons"

export const ResearchItem = (props) => {
    const [currentLevel, setCurrentLevel] = useState<number>(props.playerData.research[props.researchType][props.data.name])

    useEffect(() => {
        setCurrentLevel(props.playerData.research[props.researchType][props.data.name])
    }, [props.playerUpdated])


    const researchColor = {
        red: researchRed,
        green: researchGreen,
        blue: researchBlue,

    }

    return (
        <div className="research__panel-data-action" key={props.k} style={{ borderColor: getResearchBorderColor(props.data.type) }}>
            <img className="action__item-icon" src={props.data.icon} />
            <div className="research__panel-data-action-data">
                <span className="research__panel-data-action-title">{props.data.name} {props.playerData.research[props.researchType][props.data.name] && `(${currentLevel})`}</span>
                <span className="research__panel-data-action-description">"{props.data.description}"</span>
                <div className="research__panel-data-action-cost">
                    <span><img src={gp} />{currentLevel ? intToString((props.data.cost.gp * currentLevel) * props.researchData.multiplier["gp"]) : props.data.cost.gp}GP</span>
                    {Object.keys(props.data.cost.researchPoints).map((ii, kk) => {
                        let value = 1
                        if (currentLevel !== undefined) {
                            value = currentLevel
                        }
                        value = Math.floor((props.data.cost.researchPoints[ii] * value) / props.researchData.multiplier[ii])
                        return (
                            <span key={kk}><img src={researchColor[ii]} />{intToString(value)}</span>
                        )
                    })}
                </div>

                <div className="research__panel-data-action-controls">

                    <button disabled={!props.validatePurchase(props.data.cost, currentLevel)} onClick={() => props.onBuyHandler(props.data, currentLevel)}>[ Buy ]</button>



                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    playerUpdated: state.engine.playerUpdated,
    researchData: state.research.researchData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ResearchItem)