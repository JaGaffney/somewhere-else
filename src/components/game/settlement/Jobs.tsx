import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Action from './Action'

export const Jobs = (props) => {
    const [tasks, setTasks] = useState(props.playerData.settlement.tasks)
    const [enoughManpower, setEnoughManpower] = useState(props.playerData.getActiveManpower() < props.playerData.getManpower())

    useEffect(() => {
        setTasks(props.playerData.settlement.tasks)
        setEnoughManpower(props.playerData.getActiveManpower() < props.playerData.getManpower())
    }, [props.playerUpdated])

    // TODO: bug, when removing tasks they show old data
    return (
        <div className="settlement__jobs">
            <div className="settlement__jobs-title">
                <img src={props.jobData.icon} />
                <span>{props.jobData.name}</span>
            </div>
            <div className="settlement__jobs-data">
                {Object.keys(tasks).map((i, k) => {
                    return (
                        props.jobData.actions[i] && (
                            <Action action={i} key={k} jobData={props.jobData} enoughManpower={enoughManpower} />
                        )
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

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)