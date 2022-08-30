import React, { useState } from 'react'
import { connect } from 'react-redux'

import { CombatData } from "../../data/CombatData"

import { setCombatData } from "../../actions/api"
import { getBackgroundColor } from '../../utils/color'

// @ts-expect-error
import backgroundImage from "../../../images/combat/map.jpg"
import LEVEL from "../../../images/combat/level.svg"
import ATTACK from "../../../images/combat/attack.svg"
import DEFENCE from "../../../images/sidepanel/defence.svg"
import HEALTH from "../../../images/sidepanel/health.svg"
import STAMINA from "../../../images/sidepanel/stamina.svg"
import SPEED from "../../../images/combat/speed.svg"



export const CatMap = (props) => {
    const [areaInfo, setAreaInfo] = useState(null)

    const mapData = [
        {
            id: 1,
            name: "Goblin Village",
            description: "Village of goblins, unleash your inner goblin slayer.",
            requirements: "none",
            effect: "none",
            recommended: 1,
            enemys: [1, 2],
            x: 5,
            y: 5,
            icon: "",
        },
        {
            id: 2,
            name: "Southbay",
            description: "The port town has been destoryed, yet life somehow finds a way, at least until you got there.",
            requirements: "none",
            effect: "none",
            enemys: [3, 4, 5],
            recommended: 10,
            x: 5,
            y: 10,
            icon: "",
        },
        {
            id: 3,
            name: "Endless Lake",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Opti",
            requirements: "none",
            effect: "none",
            enemys: [1],
            recommended: 60,
            x: 16,
            y: 5,
            icon: "",
        }

    ]

    const onFightHandler = (id, data) => {
        if (props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout)) {


            const enemy = new CombatData(id)
            const values = {
                health: {
                    base: data.health,
                    current: data.health
                },
                stamina: {
                    base: data.stamina,
                    current: data.stamina
                },
                armour: {
                    base: data.defence,
                    current: data.defence
                },
                divination: {
                    base: 1,
                    current: 1
                }
            }

            enemy.status.loadStatus(values)
            props.setCombatData(enemy)
            props.onFightStart({ type: props.types.CAT_COMBAT })
        }
    }

    return (
        <div className="map__container">
            <div className="map__map" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat" }}>
                {mapData.map((i, k) => {
                    return (
                        <button
                            className="map__map-item"
                            style={{ gridColumn: i.x, gridRow: i.y }}
                            key={k}
                            onMouseEnter={() => setAreaInfo(i)}
                        >
                            {i.recommended}
                        </button>
                    )
                })
                }
            </div>

            <div className="map__info">
                {areaInfo && (
                    <div className="map__info-content">
                        <h3>{areaInfo.name} <span></span></h3>
                        <p>{areaInfo.description}</p>
                        <p>Entry requirements "{areaInfo.requirements}"</p>
                        {areaInfo.enemys.map((i, k) => {
                            const data = props.enemies.enemies.get(i)
                            return (
                                <div className="map__enemy" key={k}>

                                    <img className="map__enemy-image" src={data.image} />

                                    <div className="map__enemy-info">
                                        <div>
                                            <h3>{data.name}</h3>
                                            <p>Combat style: <strong style={{ color: getBackgroundColor(data.style) }}>{data.style}</strong></p>
                                        </div>

                                        <div className="map__enemy-buttons">
                                            <button className="generic__button generic__button-primary" onClick={() => props.onDropInfoHandler(data)}>Drops</button>
                                            <button className="generic__button generic__button-secondary" onClick={() => onFightHandler(i, data)} disabled={!props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout)}>Fight</button>
                                        </div>
                                    </div>

                                    <div className="map__enemy-stats">
                                        <div className="map__enemy-statValue">
                                            <img src={LEVEL} alt="level" />
                                            <span>{data.level}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={ATTACK} alt="attack" />
                                            <span>{data.attack}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={DEFENCE} alt="defence" />
                                            <span>{data.defence}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={HEALTH} alt="health" />
                                            <span>{data.health}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={STAMINA} alt="stamina" />
                                            <span>{data.stamina}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={SPEED} alt="speed" />
                                            <span>{data.speed}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
                }

            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    enemies: state.enemies.enemyData,
    playerData: state.player.playerData,
})

const mapDispatchToProps = {
    setCombatData
}

export default connect(mapStateToProps, mapDispatchToProps)(CatMap)
