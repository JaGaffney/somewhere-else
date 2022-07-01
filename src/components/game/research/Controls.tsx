import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';

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
        <div className="topPanel topPanel__controls">
            <div className="topPanel__controls-left">
                {Object.keys(researchVials).map((i, k) => {
                    return (
                        <div key={k} className="topPanel__controls-left-icons" data-tip={researchVials[i] && researchVials[i]}>
                            <img src={researchColor[i]} />
                            <span>{intToString(researchVials[i])}</span>
                        </div>
                    )
                })}
            </div>

            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />

            <div className="topPanel__controls-right">
                {controlButtons.map((i, k) => {
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