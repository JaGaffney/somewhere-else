import React from 'react'
import { connect } from 'react-redux'

export const Jobs = (props) => {

    const mockData = [
        { id: "g_bamboo", assigned: 4 },
        { id: "g_beech tree", assigned: 2 },
    ]

    console.log(props.playerData.settlement.tasks)

    return (
        <div className="settlement__jobs">
            <div className="settlement__jobs-title">
                <img src={props.jobData.icon} />
                <span>{props.jobData.name}</span>
            </div>
            <div className="settlement__jobs-data">
                {props.playerData.settlement.tasks.map((i, k) => {
                    return (
                        <div key={k}>
                            {props.jobData.actions[i.taskName] && `${props.jobData.actions[i.taskName].name} assigned: ${i.manpowerAssigned}`}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)