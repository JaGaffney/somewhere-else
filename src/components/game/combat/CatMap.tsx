import React, { useState } from 'react'
import { connect } from 'react-redux'

// @ts-expect-error
import backgroundImage from "../../../images/combat/map.jpg"

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
            enemys: [props.enemies.enemies.get(1), props.enemies.enemies.get(2)],
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
            enemys: [props.enemies.enemies.get(3), props.enemies.enemies.get(4), props.enemies.enemies.get(5)],
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
            enemys: [props.enemies.enemies.get(1)],
            recommended: 60,
            x: 16,
            y: 5,
            icon: "",
        }

    ]

    console.log(areaInfo)

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
                            return (
                                <div className="map__enemy" key={k}>

                                    <img className="map__enemy-image" src={i.image} />

                                    <div className="map__enemy-info">
                                        <div>
                                            <h3>{i.name}</h3>
                                            <p>Combat style: {i.style}</p>
                                        </div>

                                        <div className="map__enemy-buttons">
                                            <button className="loot">Loot</button>
                                            <button className="fight">Fight</button>
                                        </div>
                                    </div>

                                    <div className="map__enemy-stats">
                                        <div className="map__enemy-statValue">
                                            <img src={require("../../../images/combat/level.svg")} alt="level" />
                                            <span>{i.level}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={require("../../../images/combat/attack.svg")} alt="attack" />
                                            <span>{i.attack}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={require("../../../images/sidepanel/defence.svg")} alt="defence" />
                                            <span>{i.defence}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={require("../../../images/sidepanel/health.svg")} alt="health" />
                                            <span>{i.health}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={require("../../../images/sidepanel/stamina.svg")} alt="stamina" />
                                            <span>{i.stamina}</span>
                                        </div>
                                        <div className="map__enemy-statValue">
                                            <img src={require("../../../images/combat/speed.svg")} alt="speed" />
                                            <span>{i.speed}</span>
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
    enemies: state.enemies.enemyData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CatMap)
