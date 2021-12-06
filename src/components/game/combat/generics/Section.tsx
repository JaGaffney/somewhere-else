import React, { useState } from 'react'
import { connect } from 'react-redux'

import StatusBar from './statusBar'
import Armour from "./Armour"

import Hotbar from './Hotbar'
import EnemyInfo from "./EnemyInfo"

import Rotation from './Rotation'
import Info from './Info'

export const Section = (props) => {
    const [selectedSkill, setSelecetedSkill] = useState(null)

    const onSelectedSkillHandler = (id) => {
        setSelecetedSkill(id)
    }

    return (
        <div className="catcombat__section">
            <div className="catcombat__status">
                <StatusBar type="health" maxValue={props.data && props.data.status.getValue("health").getBase()} currentValue={props.data && props.data.status.getValue("health").getCurrent()} />
                <Armour value={props.data && props.data.status.getValue("armour").getCurrent()} />
                <StatusBar type="stamina" maxValue={props.data && props.data.status.getValue("stamina").getBase()} currentValue={props.data && props.data.status.getValue("stamina").getCurrent()} />
            </div>

            {props.type === "player" ? (
                <div className="catcombat__hotbar">
                    <Hotbar onSelectedSkillHandler={onSelectedSkillHandler} onAttackHandler={props.onAttackHandler} />
                </div>
            ) : (
                <EnemyInfo data={props.data ? props.data : null} onSelectedSkillHandler={onSelectedSkillHandler} />
            )}

            <div className="catcombat__description">
                <Info selectedSkill={selectedSkill} />
                <Rotation type={props.type} data={props.data} />
            </div>


        </div>
    )
}

const mapStateToProps = (state) => ({
    enemies: state.enemies,
    playerData: state.player.playerData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Section)
