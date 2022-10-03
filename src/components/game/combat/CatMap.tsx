import React, { useState } from 'react'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip';

import { CombatData } from "../../data/CombatData"

import { setCombatData } from "../../actions/api"
import { getBackgroundColor } from '../../utils/color'


import * as icon from "../../data/seed/icons/statSeedIcon"
import { mapSeed } from "../../data/seed/mapSeed"
import { getEnemyBaseHealth } from './CatCombat.util';

export const CatMap = (props) => {
    const [areaInfo, setAreaInfo] = useState(null)

    const onFightHandler = (id, data) => {
        if (props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout)) {
            const enemy = new CombatData(id)
            const values = {
                health: {
                    base: getEnemyBaseHealth(data.level, data.stats.health),
                    current: getEnemyBaseHealth(data.level, data.stats.health)
                },
                stamina: {
                    base: 100,
                    current: 100
                },
                armour: {
                    base: data.stats.armour,
                    current: data.stats.armour
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
            {/* <div className="map__map" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat" }}>
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
            </div> */}
            <div style={{ width: "75%" }}>

                <div className="map__areas">
                    {mapSeed && mapSeed.map((i, k) => {
                        return (
                            <div key={k} className={`map__areas-area ${areaInfo?.name === i.name ? "areaActive" : ""}`} onClick={() => setAreaInfo(i)}>
                                <img src={i.icon} alt={i.name} />

                                <h3>{i.name}</h3>
                                <div className="map__enemy-statValue map__areas-areaLevel">
                                    <img src={icon.level} alt="level" />
                                    <span>{i.recommended}</span>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>

            <div className="map__info">
                {areaInfo && (
                    <div className="map__info-content">
                        <h3>{areaInfo.name} <span></span></h3>
                        <p>{areaInfo.description}</p>
                        <p>Area Effect: <i>{areaInfo.effect}</i></p>

                        {areaInfo.enemys.map((i, k) => {
                            const data = props.enemies.enemies.get(i)
                            return (
                                <div className="map__enemy" key={k}>

                                    <img className="map__enemy-image" src={data.image} />

                                    <div className="map__enemy-info">
                                        <div>
                                            <h3>{data.name}</h3>
                                            <p><strong style={{ color: getBackgroundColor(data.style) }}>{data.style}</strong></p>
                                        </div>

                                        <div className="map__enemy-buttons">
                                            <button className="generic__button generic__button-primary" onClick={() => props.onDropInfoHandler(data)}>Drops</button>
                                            <button className="generic__button generic__button-secondary" onClick={() => onFightHandler(i, data)} disabled={!props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout)}>Fight</button>
                                        </div>
                                    </div>

                                    <div className="map__enemy-stats">
                                        <div className="map__enemy-statValue" data-tip={"Level"}>
                                            <img src={icon.level} alt="level" />
                                            <span>{data.level}</span>
                                        </div>
                                        {Object.keys(data.stats).map((ii, kk) => {
                                            const capitalized =
                                                ii.charAt(0).toUpperCase()
                                                + ii.slice(1)
                                            return (
                                                <div className="map__enemy-statValue" key={kk} data-tip={ii && capitalized}>
                                                    <img src={icon[ii]} alt={ii} />
                                                    <span>{data.stats[ii]}</span>
                                                </div>)
                                        })}
                                    </div>
                                    <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
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
