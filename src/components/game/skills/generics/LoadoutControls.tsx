import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';

import { setPlayerUpdated } from '../../../actions/api'

export const LoadoutControls = (props) => {

    const onActiveLoadoutHandler = (newLoadOutNumber: number) => {
        if (!props.combatData) {
            props.playerData.loadout.setActiveLoadout(newLoadOutNumber)
            props.setPlayerUpdated()
        }
    }

    const addNewLoadOut = () => {
        props.playerData.loadout.createNewLoadout()
        props.setPlayerUpdated()
        console.log("addNewLoadOut")
    }

    const onRenameHandler = () => {
        console.log("onRenameHandler")
    }

    return (
        <div className="topPanel topPanel__controls">
            <div className="topPanel__controls-left">
                {Object.keys(props.playerData.loadout.loadout).map((i, k) => {
                    return (
                        <button key={k} className={`topPanel__controls-left-icons topPanel__controls-left-smallIcons ${i === props.playerData.loadout.activeLoadout ? "generic__button-active" : "generic__button-primary"}`} onClick={() => onActiveLoadoutHandler(i)}>
                            <span>{props.playerData.loadout.loadout[i].name}</span>
                        </button>
                    )
                })}
                <button className="topPanel__controls-left-icons topPanel__controls-left-smallIcons topPanel__controls-left-smallIconsAlt" onClick={addNewLoadOut}>
                    <span>+</span>
                </button>
            </div>

            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />

            <div className="topPanel__controls-right">
                <button
                    className={`generic__button generic__button-primary`}
                    onClick={onRenameHandler}>
                    rename
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    playerUpdated: state.engine.playerUpdated,
    combatData: state.engine.combatData
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutControls)