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

    }, [])

    // TODO: get this working
    return (
        <div className="equipment__container-equipment offlineProgression">
            <h3>Heres what your settlement has produced since you have been away! </h3>
            <p>{time} ago</p>

            <div className="offlineProgression-gp">
                <span>Income <img src={COINS} alt="income" />{props.playerData.offline && intToString(props.playerData.offline.coins)}</span>
                <span className="offlineProgression-gp-negative">Salary<img src={COINS} alt="salary" />-{props.playerData.offline && intToString(props.playerData.offline.salary)}</span>
                <span className={`${props.playerData.offline && props.playerData.offline.coins - props.playerData.offline.salary > 0 ? "" : "offlineProgression-gp-negative"}`}>
                    Total<img src={COINS} alt="total" />{props.playerData.offline && intToString(props.playerData.offline.coins - props.playerData.offline.salary)}
                </span>
            </div>

            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Experince gained</h4>
                {props.playerData.offline && Object.keys(props.playerData.offline.exp).map((i, k) => {
                    const icon = props.skills.getSkillIconByName("gathering", i)
                    return (
                        <div key={k}>
                            <span><img src={icon} />{i}</span>
                            <span style={{ textAlign: "right" }}>{props.playerData.offline.exp[i]}</span>
                        </div>
                    )
                })}
            </div>
            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Items gained</h4>
                {props.playerData.offline && Object.keys(props.playerData.offline.items).map((i, k) => {
                    const qty = props.playerData.offline.items[i]
                    const data = props.itemData.getItemById(parseInt(i))
                    return (
                        <div key={k}>
                            <span><img src={data.icon} />{data.name}</span>
                            <span style={{ textAlign: "right" }}>{qty}</span>
                        </div>
                    )
                })}
            </div>







            OfflineProgress
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
    skills: state.skills.skillData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OfflineProgress)