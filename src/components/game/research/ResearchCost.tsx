import React from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';

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
                    <button className="generic__button generic__button-fit generic__button-primary">Purchase</button>

                    <h4 className="research__singleItem-title">Currency</h4>
                    <span ><img src={gp} />{intToString(props.activeResearch.cost.gp)}</span>

                    <div className="research__singleItem-items">
                        <h4 className="research__singleItem-title">Research</h4>
                        {props.activeResearch.cost.researchPoints && Object.keys(props.activeResearch.cost.researchPoints).map((i, k) => {
                            const value = props.activeResearch.cost.researchPoints[i]
                            return (
                                <span key={k}><img src={researchColor[i]} />{intToString(value)}</span>
                            )
                        })}
                    </div>

                    <div className="research__singleItem-items">
                        <h4 className="research__singleItem-title">Items</h4>
                        {props.activeResearch.cost.other !== {} && Object.keys(props.activeResearch.cost.other).map((id, k) => {
                            const value = props.activeResearch.cost.other[id]
                            const data = props.itemData.getItemById(parseInt(id))
                            return (
                                <span key={k} data-tip={data && data.name}><img src={data.icon} />{intToString(value)}</span>
                            )
                        })}
                    </div>



                    <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
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