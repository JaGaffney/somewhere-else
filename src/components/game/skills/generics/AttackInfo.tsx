import React from 'react'
import { connect } from 'react-redux'

export const AttackInfo = (props) => {
    return (
        <div className="attackloadout__info catcombat__description-info">
            <h3>{props.selectedSkill ? props.attackData.getAttackById(props.selectedSkill).name : "Attack"}</h3>
            <div className="attacks__button">
                <img className="attacks__button-icon" src={props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).icon} />
            </div>
            <div className="attacksloadout__stats">

                <span className="attacksloadout__stats-description">
                    min damage
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).minDamage}
                    </span>
                </span>
                <span className="attacksloadout__stats-description" style={{ color: "var(--red700)" }}>
                    max damage
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).maxDamage}
                    </span>
                </span>
                <span className="attacksloadout__stats-description" style={{ color: "var(--blue700)" }}>
                    cooldown
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).cooldown}
                    </span>
                </span>
                <span className="attacksloadout__stats-description" style={{ color: "var(--green600)" }}>
                    stamina
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).stamina}
                    </span>
                </span>
                <span className="attacksloadout__stats-description" style={{ color: "var(--green600)" }}>
                    speed
                    <span>
                        0
                    </span>
                </span>
                <span className="attacksloadout__stats-description">
                    Effect
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).effect.value} {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).effect.type}
                    </span>
                </span>
            </div>

            <button className="attackloadout__eqiup">Equip</button>


        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    attackData: state.attacks.attackData,
    activePage: state.engine.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AttackInfo)
