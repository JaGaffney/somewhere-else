import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { intToString, convertSecondsToReadableString } from "../../utils/generic"

// @ts-ignore
import COINS from "../../../images/sidepanel/coins.svg"

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
                <h4>Experince</h4>
                {props.playerData.offline && Object.keys(props.playerData.offline.exp).map((i, k) => {
                    const icon = props.skills.getSkillIconByName("nonCombat", i)
                    let color = "offlineProgression-gp-negative"
                    if (props.playerData.offline.exp[i] > 0) {
                        color = "offlineProgression-gp-positive"
                    }
                    return (
                        <div key={k}>
                            <span><img src={icon && icon} />{i}</span>
                            <span className={`offlineProgression-gp-value ${color}`}>{intToString(props.playerData.offline.exp[i])}</span>
                        </div>
                    )
                })}
            </div>
            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Items</h4>
                {props.playerData.offline && Object.keys(props.playerData.offline.items).map((i, k) => {
                    const qty = props.playerData.offline.items[i]
                    const data = props.itemData.getItemById(parseInt(i))
                    let color = "offlineProgression-gp-negative"
                    if (qty > 0) {
                        color = "offlineProgression-gp-positive"
                    }
                    if (qty === 0) {
                        color = ""
                    }
                    return (
                        <div key={k}>
                            <span><img src={data && data.icon} />{data && data.name}</span>
                            <span className={`offlineProgression-gp-value ${color}`}>{qty && qty}</span>
                        </div>
                    )
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