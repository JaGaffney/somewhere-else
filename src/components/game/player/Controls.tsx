import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { intToString } from '../../utils/generic'

import {
    researchRed,
    researchGreen,
    researchBlue,
    researchYellow,
    researchPurple,
} from "../../data/seed/icons/itemSeedIcons"
import TRIBUTE from "../../../images/items/tribute.svg"


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
        <div className="topPanel topPanel__controls">
            <div className="topPanel__controls-left">
                <span>{props.playerData.playerBank.totalItemsInBank()} / {props.playerData.playerBank.bankSpace}</span>
                <div className="topPanel__controls-left-icons">
                    <span></span>
                </div>
                <div className="topPanel__controls-left-icons">
                    <span></span>
                </div>
                {researchVials && Object.keys(researchVials).map((i, k) => {
                    return (
                        <div key={k} className="topPanel__controls-left-icons" data-tip={researchVials[i] && researchVials[i]}>
                            <img src={researchColor[i]} />
                            <span>{intToString(researchVials[i])}</span>
                        </div>
                    )
                })}
                <div className="topPanel__controls-left-icons">
                    <span></span>
                </div>
                <div className="topPanel__controls-left-icons" data-tip={"Tribute"}>
                    <img src={TRIBUTE} />
                    <span>{props.playerData.playerBank.getTribute()}</span>
                </div>

                <span className="topPanel__controls-left-info">Bank Value {intToString(props.playerData.playerBank.getBankValue(props.itemData))} gp</span>
            </div>

            <div className="topPanel__controls-right">
                <form>
                    <input type="text" value={props.search} placeholder="filter..." onChange={(e) => props.setSearch(e.target.value)} />
                </form>

                <button className={`generic__button ${!props.sellMode ? "generic__button-primary" : "generic__button-secondary"}`} onClick={() => props.setSellMode(!props.sellMode)}>Toggle Sell Mode</button>
                <button className="generic__button generic__button-primary" >do something</button>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)