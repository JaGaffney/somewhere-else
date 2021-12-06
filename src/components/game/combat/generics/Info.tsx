import React from 'react'
import { connect } from 'react-redux'

import { getBackgroundColor } from '../../../utils/color'

export const Info = (props) => {
    return (
        <div className="catcombat__description-info">
            <h3>{props.selectedSkill ? props.attackData.getAttackById(props.selectedSkill).name : "Attack"}</h3>
            <div className="attacks__button" style={{ borderColor: props.selectedSkill && getBackgroundColor(props.attackData.getAttackById(props.selectedSkill).type) }}>
                <img className="attacks__button-icon " src={props.selectedSkill ? props.attackData.getAttackById(props.selectedSkill).icon : null} />
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
                <span className="attacksloadout__stats-description">
                    Effect
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).effect.value} {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).effect.type}
                    </span>
                </span>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Info)
