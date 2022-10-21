import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useTour } from "@reactour/tour"

import Controls from "./Controls"
import Stats from "./Stats"
import Assignments from "./Assignments"
import Progression from "../skills/generics/Progression"


export const Settlement = props => {
    const [tributeCost, setTributeCost] = useState(parseFloat((props.playerData.getActiveManpower() * 0.08).toFixed(2)))
    const { setSteps, setCurrentStep } = useTour();

    useEffect(() => {
        setCurrentStep(0);
        setSteps([
            {
                selector: '[data-cy="settlementControls"]',
                content: "The management area for your settlement.",
            },
            {
                selector: '[data-cy="settlementControls-manpower"]',
                content: "Dsiplays how many workers you currently have, how many are not working and how much it you to pay these workers.",
            },
            {
                selector: '[data-cy="settlementControls-hire"]',
                content: "Hires a new worker.",
            },
            {
                selector: '[data-cy="settlementControls-sell"]',
                content: "Toggles auto sell, so any items gained from your Settlement are automatically sold.",
            },
            {
                selector: '[data-cy="settlementControls-reset"]',
                content: "Resets all currently assigned tasks.",
            },
            {
                selector: '[data-cy="settlementAssignment"]',
                content: "The assignment area of your Settlement, where you can quickly view who is working on what.",
            },
            {
                selector: '[data-cy="settlementStats"]',
                content: "The statistics area of your Settlement.",
            },
        ]);
    }, []);

    useEffect(() => {
        setTributeCost(parseFloat((props.playerData.getActiveManpower() * 0.08).toFixed(2)))
    }, [props.playerUpdated])



    const realTimeCalc = (): number => {
        let retValue = 10

        if (props.playerData.research.repeat["efficiency"]) {
            let tempValue = retValue * (props.playerData.research.repeat["efficiency"] / 100)
            retValue = retValue - tempValue
        }

        if (retValue <= 1) {
            retValue = 1
        }

        return retValue
    }

    return (
        <div className="game__normal">
            <Controls realTimeCalc={realTimeCalc} tributeCost={tributeCost} />
            <Progression realTimeCalc={realTimeCalc} />
            <div className="settlement__actions">
                <Assignments />
                <Stats tributeCost={tributeCost} />
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
    activePage: state.skills.activePage,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Settlement)
