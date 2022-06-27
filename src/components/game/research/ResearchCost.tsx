import React from 'react'
import { connect } from 'react-redux'

import { intToString } from '../../utils/generic'

import {
    gp,
    researchRed,
    researchGreen,
    researchBlue,
    researchYellow,
    researchPurple,
} from "../../data/seed/icons/itemSeedIcons"

export const ResearchCost = (props) => {
    console.log(props.activeResearch)

    const researchColor = {
        red: researchRed,
        green: researchGreen,
        blue: researchBlue,
        yellow: researchYellow,
        purple: researchPurple

    }

    return (
        props.activeResearch ?
            (
                <div className="research__singleItem">
                    <span ><img src={gp} />{intToString(props.activeResearch.cost.gp)}</span>
                    {props.activeResearch.cost && Object.keys(props.activeResearch.cost.researchPoints).map((i, k) => {
                        const value = props.activeResearch.cost.researchPoints[i]
                        return (
                            <span key={k}><img src={researchColor[i]} />{intToString(value)}</span>
                        )
                    })}

                    {props.activeResearch.cost.other !== {} && Object.keys(props.activeResearch.cost.other).map((id, k) => {
                        const value = props.activeResearch.cost.other[id]
                        console.log(id)
                        const icon = props.itemData.getItemById(parseInt(id)).icon
                        console.log(icon)
                        return (
                            <span key={k}><img src={icon} />{intToString(value)}</span>
                        )
                    })}

                </div>
            ) : null
    )
}

const mapStateToProps = (state) => ({
    researchData: state.research.researchData,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ResearchCost)