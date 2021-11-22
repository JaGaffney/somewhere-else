import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EXP from "./generics/EXP"
import Talents from "./generics/Talents"
import Attack from "./generics/Attack"
import AttackLoadout from './generics/AttackLoadout'

export const CombatSkill = (props) => {
    const [activeData, setActiveData] = useState(null)

    useEffect(() => {
        if (props.skills.length !== 0) {
            setActiveData(props.skills.getSkillByName("c", props.activePage))
        }

    }, [props.skills])

    console.log(activeData)
    return (
        props.skills.length !== 0 && (
            activeData !== null &&
            (
                <div>
                    <EXP />
                    <Talents />
                    <AttackLoadout />
                    {activeData.classSkillIDs.map((i, k) => {
                        return (
                            <Attack attackID={i} />
                        )
                    })}

                </div>)
        )
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    skills: state.skills.skillData,
    activePage: state.engine.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CombatSkill)
