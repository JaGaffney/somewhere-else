import React from 'react'
import { connect } from 'react-redux'

export const Controls = (props) => {
    return (
        <div className="topPanel settlement__controls">
            <div className="settlement__controls-manpower">
                <span>0 / 1 Manpower</span>
                <span className="settlement__controls-manpower-info">100 GP an action</span>
            </div>


            <div className="settlement__controls-buttons">
                <button className="generic__button generic__button-primary">Hire 100000 GP</button>
                <button className="generic__button generic__button-primary">Auto Sell</button>
                <button className="generic__button generic__button-secondary">Reset</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)