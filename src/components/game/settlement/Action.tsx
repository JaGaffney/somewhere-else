import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'


export const Action = (props) => {

    const [manpower, setManpower] = useState<number>(props.playerData.settlement.tasks[props.action])

    const handleManpowerChange = (name: string, value: number): void => {
        props.playerData.settlement.updateTask(name, value)
        setManpower(manpower + value)
        props.setPlayerUpdated()
    }

    return (
        <div className="settlement__jobs-data-action" key={props.key}>
            <img src={props.jobData.actions[props.action].icon} />
            <div className="settlement__jobs-data-action-data">
                <span className="settlement__jobs-data-action-title">{props.jobData.actions[props.action].name} ({manpower})</span>
                <div className="settlement__jobs-data-action-controls">
                    <button onClick={() => handleManpowerChange(props.action, -1)}>[ - ]</button>
                    <button onClick={() => handleManpowerChange(props.action, 1)}>[ + ]</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Action)