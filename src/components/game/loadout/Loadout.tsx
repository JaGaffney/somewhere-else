import React, { useState } from 'react'
import { connect } from 'react-redux'

import Passives from "./Passives"
import AttackLoadout from './AttackLoadout'
import SkillBook from './SkillBook'
import LoadoutControls from './LoadoutControls'
import PassiveInfo from './PassiveInfo'
import AttackInfo from './AttackInfo'

// @ts-ignore
import DIVINIATION from "../../../images/sidepanel/divination.svg"
import PASSIVES from "../../../images/sidepanel/passives.svg"
import SPELLBOOK from "../../../images/sidepanel/spellbook.svg"

export const CombatSkill = (props) => {
    const [selectedSkill, setSelecetedSkill] = useState(null)
    const [selectedPassive, setSelecetedPassive] = useState(null)
    const [selectedDivination, setSelecetedDivination] = useState(null)
    const [search, setSearch] = useState<string>("")
    const [displayType, setDisplayType] = useState(0) // 0, 1, 2

    const displayData = () => {
        switch (displayType) {
            case (0):
                return <SkillBook onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} search={search} />
            case (1):
                return <Passives onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} search={search} />
            case (2):
                return null
            default:
                return null
        }
    }

    return (
        props.attackData.length !== 0 ? (
            <div>
                <LoadoutControls search={search} setSearch={setSearch} />
                <div className="combatSkill__container">
                    <AttackLoadout selectedSkill={selectedSkill} selectedPassive={selectedPassive} onSelectedSkillHandler={setSelecetedSkill} onSelectedPassiveHandler={setSelecetedPassive} />
                    {selectedPassive ? <PassiveInfo selectedPassive={selectedPassive} /> : <AttackInfo selectedSkill={selectedSkill} />}

                    <div className="attackloadout__buttons">
                        <button className={`attackloadout__buttons-button ${displayType === 0 ? "attackloadout__buttons-active" : ""}`} onClick={() => setDisplayType(0)}> <img src={SPELLBOOK} alt="divination" /><span>Skillbook</span></button>
                        <button className={`attackloadout__buttons-button ${displayType === 1 ? "attackloadout__buttons-active" : ""}`} onClick={() => setDisplayType(1)}> <img src={PASSIVES} alt="passives" /><span>Passives</span></button>
                        <button className={`attackloadout__buttons-button ${displayType === 2 ? "attackloadout__buttons-active" : ""}`} onClick={() => setDisplayType(2)}> <img src={DIVINIATION} alt="divination" /><span>Divination</span></button>
                    </div>
                    {displayData()}

                </div>
            </div>
        ) : null
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
