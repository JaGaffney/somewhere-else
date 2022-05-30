import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import { intToString } from '../../utils/generic'

import {
    researchRed,
    researchGreen,
    researchBlue,
    researchYellow,
    researchPurple,
} from "../../data/seed/icons/itemSeedIcons"

export const Controls = (props) => {
    const [researchVials, setResearchVials] = useState<Object>(props.playerData.playerBank.getResearch())

    useEffect(() => {
        setResearchVials(props.playerData.playerBank.getResearch())
    }, [props.playerUpdated])

    const researchColor = {
        red: researchRed,
        green: researchGreen,
        blue: researchBlue,
        yellow: researchYellow,
        purple: researchPurple,
    }

    const controlButtons = ["GLOBAL", "COMBAT", "JOB", "SKILL"]

    return (
        <div className="topPanel settlement__controls">
            <div className="settlement__controls-manpower research__panel-controls">
                {Object.keys(researchVials).map((i, k) => {
                    return (
                        <span key={k}><img src={researchColor[i]} />{intToString(researchVials[i])}</span>
                    )
                })}
            </div>

            <div className="settlement__controls-buttons">
                {controlButtons.map((i, k) => {
                    console.log(i)
                    return (
                        <button
                            key={k}
                            className={`generic__button ${props.researchFilter.includes(i) ? "generic__button-inactive " : "generic__button-active"}`}
                            onClick={() => props.controlHandler(i)}>
                            {i.toLocaleLowerCase()}
                        </button>
                    )
                })}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Controls)