import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EXP from "./generics/EXP"
import Passives from "./generics/Passives"
import Attack from "./generics/Attack"
import AttackLoadout from './generics/AttackLoadout'

export const CombatSkill = (props) => {
    const [selectedSkill, setSelecetedSkill] = useState(null)
    const [selectedPassive, setSelecetedPassive] = useState(null)

    return (
        props.attackData.length !== 0 && (
            <div>
                <EXP />
                <AttackLoadout selectedSkill={selectedSkill} selectedPassive={selectedPassive} onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} />
                <div className="attacks__container">
                    {[...props.attackData.attacks.keys()].map((i, k) => {

                        return (
                            <Attack attackID={i} key={k} onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} />
                        )
                    })}
                </div>
                <Passives onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} />
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
