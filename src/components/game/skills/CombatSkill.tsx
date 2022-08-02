import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EXP from "./generics/EXP"
import Passives from "./generics/Passives"
import AttackLoadout from './generics/AttackLoadout'
import SkillBook from './generics/SkillBook'
import LoadoutControls from './generics/LoadoutControls'
import PassiveInfo from './generics/PassiveInfo'
import AttackInfo from './generics/AttackInfo'

export const CombatSkill = (props) => {
    const [selectedSkill, setSelecetedSkill] = useState(null)
    const [selectedPassive, setSelecetedPassive] = useState(null)

    return (
        props.attackData.length !== 0 && (
            <div>
                {/* <EXP /> */}
                <LoadoutControls />
                <div className="combatSkill__container">
                    <AttackLoadout selectedSkill={selectedSkill} selectedPassive={selectedPassive} onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} />
                    {selectedPassive ? <PassiveInfo selectedPassive={selectedPassive} /> : <AttackInfo selectedSkill={selectedSkill} />}


                    <SkillBook onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} />
                    <Passives onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} />
                </div>
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
