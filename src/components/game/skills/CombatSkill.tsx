import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EXP from "./generics/EXP"
import Talents from "./generics/Talents"
import Attack from "./generics/Attack"
import AttackLoadout from './generics/AttackLoadout'

export const CombatSkill = (props) => {
    const [selectedSkill, setSelecetedSkill] = useState(null)

    const onSelectedSkillHandler = (data) => {
        setSelecetedSkill(data)
    }

    return (
        props.attackData.length !== 0 && (
            <div>
                <EXP />
                <AttackLoadout selectedSkill={selectedSkill} onSelectedSkillHandler={onSelectedSkillHandler} />
                <div className="attacks__container">
                    {[...props.attackData.attacks.keys()].map((i, k) => {

                        return (
                            <Attack attackID={i} key={k} onSelectedSkillHandler={onSelectedSkillHandler} />
                        )
                    })}
                </div>
                <Talents />
            </div>
        )
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.engine.activePage,
    attackData: state.attacks.attackData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CombatSkill)
