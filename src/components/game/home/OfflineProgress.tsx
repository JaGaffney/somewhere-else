import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { intToString, convertSecondsToReadableString } from "../../utils/generic"

// @ts-ignore
import COINS from "../../../images/items/coins.svg"
// @ts-ignore
import TRIBUTE from "../../../images/items/tribute.svg"

export const OfflineProgress = (props) => {
    const [time, setTime] = useState("")

    const dateConverter = (startDate: Date, newEndDate: Date): number => {
        const newStartDate = new Date(startDate);
        let result = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / (1000))
        if (result < 0) {
            return 0
        }
        return result
    }

    useEffect(() => {
        const utcSeconds = props.playerData.offline?.time;
        if (utcSeconds) {
            const differenceData = dateConverter(utcSeconds, new Date())
            setTime(convertSecondsToReadableString(differenceData))
        }
    }, [props.playerUpdated])

    const getColor = (value) => {
        let color = "offlineProgression-gp-negative"
        if (value > 0) {
            color = "offlineProgression-gp-positive"
        }
        if (value === 0) {
            color = ""
        }
        return color
    }

    const itemUsed = (value: number) => {
        if (value) {
            return (
                <span className="offlineProgression-gp-value offlineProgression-gp-negative">(-{value})</span>
            )
        } else {
            return null
        }
    }

    return (
        <div className="generic__container offlineProgression">
            <h3>Heres what your settlement has produced since you have been away! </h3>
            <p>{time} ago</p>

            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Coins</h4>
                <div>
                    <span><img src={COINS} alt="income" />Income</span>
                    <span className="offlineProgression-gp-positive offlineProgression-gp-value">{props.playerData.offline && intToString(props.playerData.offline.coins)}</span>
                </div>

                <div>
                    <span><img src={COINS} alt="salary" />Salary</span>
                    <span className="offlineProgression-gp-negative offlineProgression-gp-value">-{props.playerData.offline && intToString(props.playerData.offline.salary)}</span>
                </div>
            </div>

            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Experience</h4>
                {props.playerData.offline && Object.keys(props.playerData.offline.exp).map((i, k) => {
                    const icon = props.skills.getSkillIconByName("nonCombat", i)
                    return (
                        <div key={k}>
                            <span><img src={icon && icon} />{i}</span>
                            <span className={`offlineProgression-gp-value ${getColor(props.playerData.offline.exp[i])}`}>{intToString(props.playerData.offline.exp[i])}</span>
                        </div>
                    )
                })}
            </div>
            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Items</h4>
                {props.playerData.offline &&
                    <div>
                        <span><img src={TRIBUTE} />Tribute</span>
                        <span className={`offlineProgression-gp-value ${props.playerData.offline.tribute > 0 ? "offlineProgression-gp-positive" : "offlineProgression-gp-negative"}`}>{intToString(props.playerData.offline.tribute)}</span>
                    </div>
                }

                {props.playerData.offline && Object.keys(props.playerData.offline.items.itemsReceived).map((i, k) => {
                    const qtyGained = props.playerData.offline.items.itemsReceived[i]
                    const data = props.itemData.getItemById(parseInt(i))

                    let itemRemoved;
                    if (Object.keys(props.playerData.offline.items.itemsUsed).includes(i)) {
                        itemRemoved = parseInt(props.playerData.offline.items.itemsUsed[i])
                    }
                    return (
                        <div key={k}>
                            <span><img src={data && data.icon} />{data && data.name}</span>
                            <span className={`offlineProgression-gp-value ${getColor(qtyGained)}`}>{qtyGained && qtyGained} {itemUsed(itemRemoved)}</span>
                        </div>
                    )
                })}
                {props.playerData.offline && Object.keys(props.playerData.offline.items.itemsUsed).map((i, k) => {
                    if (Object.keys(props.playerData.offline.items.itemsReceived).includes(i)) {
                        return null
                    } else {

                        const qtyGained = props.playerData.offline.items.itemsUsed[i]
                        const data = props.itemData.getItemById(parseInt(i))
                        return (
                            <div key={k}>
                                <span><img src={data && data.icon} />{data && data.name}</span>
                                <span className={`offlineProgression-gp-value ${getColor(-qtyGained)}`}>{qtyGained && -qtyGained}</span>
                            </div>
                        )
                    }
                })}
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
    skills: state.skills.skillData,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OfflineProgress)