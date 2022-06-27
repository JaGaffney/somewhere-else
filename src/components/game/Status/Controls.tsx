import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'



export const Controls = (props) => {
    return (
        <div className="topPanel topPanel__controls">
            <div className="topPanel__controls-left">
                <span>Status</span>
                <span className="topPanel__controls-left-info">info</span>
            </div>


            <div className="topPanel__controls-right">

                <button className="generic__button generic__button-primary">do something</button>
                <button className="generic__button generic__button-secondary" >do something</button>
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