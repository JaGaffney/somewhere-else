import React from 'react'
import { connect } from 'react-redux'

import * as icon from "../../data/seed/icons/statSeedIcon"
import { maxDamgeCalc } from '../../utils/equipment'

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

                        {!props.playerStats && <span className="attacksloadout__stats-description">
                            <span><img src={icon.unlocked} />unlocked</span>
                            <span>
                                level {props.attackData.getAttackById(props.selectedSkill).levelRequired}
                            </span>
                        </span>}

                        {props.playerStats && <span className="attacksloadout__stats-description" style={{ color: "var(--red700)" }}>
                            <span><img src={icon.damage} />damage</span>
                            <span>
                                {props.selectedSkill && maxDamgeCalc(props.playerData, props.attackData.getAttackById(props.selectedSkill), props.itemData)}
                            </span>
                        </span>}

                        <span className="attacksloadout__stats-description" style={{ color: "var(--red500)" }}>
                            <span><img src={icon.attack} />power</span>
                            <span>
                                {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).power}
                            </span>
                        </span>
                        <span className="attacksloadout__stats-description">
                            <span><img src={icon.accuracy} />accuracy</span>
                            <span>
                                {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).accuracy}
                            </span>
                        </span>
                        <span className="attacksloadout__stats-description" style={{ color: "var(--blue700)" }}>
                            <span><img src={icon.cooldown} />cooldown</span>
                            <span>
                                {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).cooldown}
                            </span>
                        </span>
                        <span className="attacksloadout__stats-description" style={{ color: "var(--green600)" }}>
                            <span><img src={icon.stamina} />stamina</span>
                            <span>{props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).stamina + props.playerStats?.weight >= 0 ? props.attackData.getAttackById(props.selectedSkill).stamina + props.playerStats?.weight : props.attackData.getAttackById(props.selectedSkill).stamina}
                            </span>
                        </span>

                        <span className="attacksloadout__stats-description">
                            {props.selectedSkill && Object.keys(props.attackData.getAttackById(props.selectedSkill).effect).map((i, k) => {
                                return (
                                    <React.Fragment key={k}>
                                        <span><img src={icon[i]} />{i}</span>
                                        <span>
                                            {props.attackData.getAttackById(props.selectedSkill).effect[i]}
                                            {props.playerStats ? props.playerStats[i] && (
                                                <span className="equipment__container-stats-single-difference equipment__container-stats-single-difference-positive"> (+{props.playerStats[i]})</span>
                                            ) : null
                                            }
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
    activePage: state.engine.activePage,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AttackInfo)
