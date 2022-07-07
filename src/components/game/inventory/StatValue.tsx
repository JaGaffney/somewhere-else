import React from 'react'
import { connect } from 'react-redux'

export const StatValue = (props) => {
    console.log(props.getStatDifference(props.statType))
    return (
        <div className="attacksloadout__stats-description">
            <span className="equipment__container-stats-single-current">{props.statType}:</span>
            <div>
                <span>{props.currentValue} </span>
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