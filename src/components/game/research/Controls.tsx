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

    return (
        <div className="topPanel settlement__controls">
            <div className="settlement__controls-manpower research__panel-controls">
                {Object.keys(researchVials).map((i, k) => {
                    return (
                        <span key={k}><img src={researchColor[i]} />{intToString(researchVials[i])}</span>
                    )
                })}
                <span className="settlement__controls-manpower-info">Current research</span>
            </div>

            <div className="settlement__controls-buttons">
                <button onClick={() => props.controlHandler("GLOBAL")}>Global</button>
                <button onClick={() => props.controlHandler("SKILL")}>Skill</button>
                <button onClick={() => props.controlHandler("JOB")}>Job</button>
                <button onClick={() => props.controlHandler("COMBAT")}>Combat</button>
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