import React from 'react'
import { connect } from 'react-redux'
import { getBackgroundColor, getRarityColor } from '../../../utils/color'

export const PassiveInfo = (props) => {
    return (
        <div className="attackloadout__info catcombat__description-info">
            <h3>{props.selectedPassive ? props.selectedPassive.name : "Passive"}</h3>
            <div className="attacks__button">
                <img className="attacks__button-icon" src={props.selectedPassive && props.selectedPassive.icon} />
            </div>
            <div className="attacksloadout__stats">
                <span className="attacksloadout__stats-info">
                    {props.selectedPassive.description}
                </span>

                <span className="attacksloadout__stats-description">
                    Job
                    <span style={{ color: getBackgroundColor(props.selectedPassive ? props.selectedPassive.job : "default") }}>
                        {props.selectedPassive && props.selectedPassive.job.toLowerCase()}
                    </span>
                </span>
                <span className="attacksloadout__stats-description">
                    Rarity
                    <span style={{ color: getRarityColor(props.selectedPassive ? props.selectedPassive.job : "default") }}>
                        {props.selectedPassive && props.selectedPassive.rarity}
                    </span>
                </span>
                <span className="attacksloadout__stats-description">
                    {props.selectedPassive && Object.keys(props.selectedPassive.effect).map((i, k) => {
                        return (
                            <React.Fragment key={k}>
                                {i}
                                <span>
                                    {props.selectedPassive.effect[i]}
                                </span>
                            </React.Fragment>
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
