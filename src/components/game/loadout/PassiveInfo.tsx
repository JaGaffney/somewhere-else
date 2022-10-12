import React from 'react'
import { connect } from 'react-redux'
import { getBackgroundColor } from '../../utils/color'

import * as icon from "../../data/seed/icons/statSeedIcon"

export const PassiveInfo = (props) => {
    return (
        <div className="attackloadout__info catcombat__description-info" data-cy="passiveAndSkillsInformation">
            <h3>{props.selectedPassive ? props.selectedPassive.name : "Passive"}</h3>
            <div className="attacks__button">
                <img className="attacks__button-icon" src={props.selectedPassive && props.selectedPassive.icon} />
            </div>
            <div className="attacksloadout__stats">
                <span className="attacksloadout__stats-info">
                    {props.selectedPassive.description}
                </span>

                <span className="attacksloadout__stats-description">
                    Class
                    <span style={{ color: getBackgroundColor(props.selectedPassive ? props.selectedPassive.job : "default") }}>
                        {props.selectedPassive && props.selectedPassive.job.toLowerCase()}
                    </span>
                </span>
                <span className="attacksloadout__stats-description">
                    <span><img src={icon.unlocked} />unlocked</span>
                    <span>
                        level {props.selectedPassive && props.selectedPassive.levelRequired}
                    </span>
                </span>
                <span className="attacksloadout__stats-description">
                    {props.selectedPassive && Object.keys(props.selectedPassive.effect).map((i, k) => {
                        return (
                            <div className="attacksloadout__stats-description" key={k}>
                                <span><img src={icon[i]} />{i}</span>
                                <span>
                                    {props.selectedPassive.effect[i]}
                                </span>
                            </div>
                        )
                    })}
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.engine.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PassiveInfo)
