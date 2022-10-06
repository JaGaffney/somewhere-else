import React from 'react'
import { connect } from 'react-redux'

import { intToString } from '../../utils/generic'

export const Controls = (props) => {
    return (
        <div className="topPanel topPanel__controls">


            <div className="topPanel__controls-left">
                <span>{props.playerData.playerBank.totalItemsInBank()} / {props.playerData.playerBank.bankSpace}</span>
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