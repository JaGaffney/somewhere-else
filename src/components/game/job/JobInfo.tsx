import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useTour } from '@reactour/tour'

import EXP from "../skills/generics/EXP"
import PassivesUnlock from './PassivesUnlock'
import SkillBookUnlock from './SkillBookUnlock'
import PassiveInfo from '../skills/generics/PassiveInfo'
import AttackInfo from '../skills/generics/AttackInfo'

export const JobInfo = (props: { attackData }) => {
    const { setSteps, setCurrentStep } = useTour();

    useEffect(() => {
        setCurrentStep(0);
        setSteps([
            {
                selector: '[data-cy="classSkillbook"]',
                content: "Displays all Actions & Skills you have currently unlocked for a Class.",
            },
            {
                selector: '[data-cy="classPassive"]',
                content: "Displays all Passives you have currently unlocked for a Class.",
            },
            {
                selector: '[data-cy="exp"]',
                content: "Shows your current exp for the equipped Class and how much exp to you need until your next level. Exp is gained from using the releveant actions & spells in combat.",
            },
            {
                selector: '[data-cy="passiveAndSkillsInformation"]',
                content: "Shows your current exp for the equipped Class and how much exp to you need until your next level. Exp is gained from using the releveant actions & spells in combat.",
            },
            {
                selector: '[data-cy="attack"]',
                content: "This is an Action you can use in combat.",
            },
            {
                selector: '[data-cy="cooldown"]',
                content: "This icon indicates the Actions cooldown: how many turns you will need to wait in combat in order to use it again.",
            },
            {
                selector: '[data-cy="stamina"]',
                content: "This icon indicates the Actions stamina: how much stamina you will need in order to use the Action.",
            },
            {
                selector: '[data-cy="damage"]',
                content: "This icon indicates the Actions damage: how much damage you are likely to do with this attack in combat.",
            },
        ]);
    }, []);

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
