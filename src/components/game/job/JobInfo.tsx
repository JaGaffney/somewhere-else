import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EXP from "../skills/generics/EXP"
import PassivesUnlock from './PassivesUnlock'
import SkillBookUnlock from './SkillBookUnlock'
import PassiveInfo from '../skills/generics/PassiveInfo'
import AttackInfo from '../skills/generics/AttackInfo'

export const JobInfo = (props: { attackData }) => {
    const [selectedSkill, setSelecetedSkill] = useState(null)
    const [selectedPassive, setSelecetedPassive] = useState(null)

    return (
        props.attackData.length !== 0 && (
            <div>
                <EXP />
                <div className="combatSkill__container">
                    {selectedPassive ? <PassiveInfo selectedPassive={selectedPassive} /> : <AttackInfo selectedSkill={selectedSkill} />}


                    <SkillBookUnlock onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} />
                    <PassivesUnlock onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} />
                </div>
            </div>
        )
    )
}



const mapStateToProps = (state) => ({
    attackData: state.attacks.attackData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(JobInfo)
