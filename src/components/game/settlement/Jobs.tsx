import React from 'react'
import { connect } from 'react-redux'

export const Jobs = (props) => {

    const mockData = [
        { id: "g_bamboo", assigned: 4 },
        { id: "g_beech tree", assigned: 2 },
    ]

    return (
        <div className="settlement__jobs">
            <div className="settlement__jobs-title">
                <img src={props.jobData.icon} />
                <span>{props.jobData.name}</span>
            </div>
            <div className="settlement__jobs-data">
                {mockData.map((i, k) => {
                    return (
                        <div key={k}>
                            {props.jobData.actions[i.id] && props.jobData.actions[i.id].name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)