import React from 'react'
import { connect } from 'react-redux'

import Controls from "./Controls"
import StatusItem from './StatusItem'

export const Status = (props) => {
    // TODO: divination
    // can reset each one at the cost of coins, can only have 1  on at a time
    // 1 focus on dmg at the cost of defence
    // 1 focus on defence at the csot of damage
    // 1 focus on killing things effiecntly (drop rate increase etc)
    return (
        <div className="game__normal">
            <Controls />
            <div className="settlement__actions">


                {props.skills.getAllStatusSkills().map((i, k) => <StatusItem key={k} skillName={i} icon={props.skills.getSkillIconByName("status", i)} type={"status"} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    status: state.player.playerData.status,
    skills: state.skills.skillData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Status)