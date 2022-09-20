import React from 'react'
import { connect } from 'react-redux'

export const AttackInfo = (props) => {
    return (
        <div className="attackloadout__info catcombat__description-info" data-cy="passiveAndSkillsInformation">
            <h3>{props.selectedSkill ? props.attackData.getAttackById(props.selectedSkill).name : "Information"}</h3>
            {props.selectedSkill && (
                <>
                    <div className="attacks__button">
                        <img className="attacks__button-icon" src={props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).icon} />
                    </div>
                    <div className="attacksloadout__stats">

                        <span className="attacksloadout__stats-description">
                            unlocked
                            <span>
                                level {props.attackData.getAttackById(props.selectedSkill).levelRequired}
                            </span>
                        </span>
                        <span className="attacksloadout__stats-description" style={{ color: "var(--red500)" }}>
                            attack power
                            <span>
                                {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).power}
                            </span>
                        </span>
                        <span className="attacksloadout__stats-description">
                            accuracy
                            <span>
                                {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).accuracy}
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
                            {props.selectedSkill && Object.keys(props.attackData.getAttackById(props.selectedSkill).effect).map((i, k) => {
                                return (
                                    <React.Fragment key={k}>
                                        {i}
                                        <span>
                                            {props.attackData.getAttackById(props.selectedSkill).effect[i]}
                                        </span>
                                    </React.Fragment>
                                )
                            })}
                        </span>

                    </div>
                </>)}
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
