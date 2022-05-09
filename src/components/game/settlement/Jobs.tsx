import React from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

export const Jobs = (props) => {
    const handleManpowerChange = (name: string, value: number): void => {
        props.playerData.settlement.updateTask(name, value)
        props.setPlayerUpdated()
    }

    return (
        <div className="settlement__jobs">
            <div className="settlement__jobs-title">
                <img src={props.jobData.icon} />
                <span>{props.jobData.name}</span>
            </div>
            <div className="settlement__jobs-data">
                {Object.keys(props.playerData.settlement.tasks).map((i, k) => {
                    return (
                        props.jobData.actions[i] && (
                            <div className="settlement__jobs-data-action" key={k}>
                                <img src={props.jobData.actions[i].icon} />
                                <div className="settlement__jobs-data-action-data">
                                    <span className="settlement__jobs-data-action-title">{props.jobData.actions[i].name} ({props.playerData.settlement.tasks[i]})</span>
                                    <div className="settlement__jobs-data-action-controls">
                                        <button onClick={() => handleManpowerChange(i, -1)}>[ - ]</button>
                                        <button onClick={() => handleManpowerChange(i, 1)}>[ + ]</button>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)