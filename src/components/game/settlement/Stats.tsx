import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Balance from './Balance'

export const Stats = (props) => {

    const [exp, setExp] = useState({})

    const [income, setIncome] = useState([])
    const [incomeCash, setIncomeCash] = useState(null)

    const [outcome, setOutcome] = useState([])
    const [outcomeCash, setOutcomeCash] = useState(null)

    useEffect(() => {
        let tempItems = []
        let tempExp = {}
        for (const task in props.playerData.settlement.tasks) {
            const activeData = props.skillData.getActionDataBySkillID(task).filter((i => i !== undefined))[0]
            const activeWorkers = 1 * Math.floor(props.playerData.settlement.tasks[task] / activeData.manpower)

            const job = activeData.job
            const expGained = activeData.exp * activeWorkers
            if (tempExp[job]) {
                tempExp[job] = tempExp[job] + expGained
            } else {
                tempExp[job] = expGained
            }

            tempItems.push(handleItemCalc(activeData, activeWorkers))
        }

        if (props.playerData.getSettingValue("autoSell")) {
            setIncomeCash(tempItems.flat().reduce((a, b) => a + b, 0))
            setIncome([])
        } else {
            setIncomeCash(null)
            setIncome(tempItems.flat())
        }
        setExp(tempExp)

    }, [props.playerUpdated])

    const handleItemCalc = (activeData, amount: number) => {

        if (activeData.itemsReceived.length > 0) {
            let tempItems = []
            for (const value in activeData.itemsReceived) {
                const qty = activeData.itemsReceived[value].qty * amount
                const id = activeData.itemsReceived[value].id
                const item = props.itemData.getItemById(id)

                let tempValue = null
                if (props.playerData.getSettingValue("autoSell")) {
                    tempValue = item.price * qty
                    if (!tempValue) {
                        tempValue = 1
                    }

                } else {
                    tempValue = { id, qty }
                }
                tempItems.push(tempValue)

            }
            return tempItems
        }
    }

    return (
        <div className="settlement__stats" data-cy="settlementStats">
            <Balance title={"Income"} data={income} cash={incomeCash} exp={exp} />
            <Balance title={"Cost"} data={outcome} cash={outcomeCash} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    skillData: state.skills.skillData,
    itemData: state.items.itemData,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Stats)