import React from 'react'
import { connect } from 'react-redux'

import * as icon from "../../data/seed/icons/statSeedIcon"

export const StatValue = (props) => {
    return (
        <div className="attacksloadout__stats-description">
            <span className="equipment__container-stats-single-current"><img src={icon[props.statType]} />{props.statType}:</span>
            <div>
                <span>{props.currentValue ? props.currentValue : 0} </span>
                {props.getStatDifference(props.statType) !== null && props.getStatDifference(props.statType) !== 0 ? (
                    props.getStatDifference(props.statType) > 0 ? (
                        <span className="equipment__container-stats-single-difference equipment__container-stats-single-difference-positive">(+{props.getStatDifference(props.statType)})</span>
                    ) : (
                        <span className="equipment__container-stats-single-difference equipment__container-stats-single-difference-negative">(-{props.getStatDifference(props.statType)})</span>
                    )) : null}

            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(StatValue)