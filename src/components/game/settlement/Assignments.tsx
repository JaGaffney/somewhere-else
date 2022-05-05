import React from 'react'
import { connect } from 'react-redux'

import Jobs from './Jobs'

export const Assignments = (props) => {
    return (
        <div className="settlement__assignments">
            {Object.keys(props.skillData.gatheringSkill).map((i, k) => {

                return (
                    <Jobs jobData={props.skillData.gatheringSkill[i]} key={k} />
                )
            })}


        </div>
    )
}

const mapStateToProps = (state) => ({
    skillData: state.skills.skillData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Assignments)