import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getBackgroundColor } from '../../../utils/color'

export const EnemyInfo = (props) => {
    const [enemyData, setEnemyData] = useState(null)
    console.log(enemyData)

    useEffect(() => {
        setEnemyData(props.enemies.enemies.get(props.data ? props.data.enemyID : 1))
    }, [])

    return (
        enemyData && (
            <div className="catcombat__enemy">
                <div className="catcombat__enemy-info">

                    <div className="catcombat__enemy-description">
                        {props.data && (
                            <>
                                <h3>{enemyData.name}</h3>
                                <div className="map__enemy-statValue">
                                    <img src={require("../../../../images/combat/level.svg")} alt="level" />
                                    <span>{enemyData.level}</span>
                                </div>
                            </>)}
                    </div>

                    {props.data && (
                        enemyData.attacks.map((id, k) => {
                            const attackData = props.attackData.getAttackById(id)
                            return (
                                <div className="attackloadout__equipped-slot"
                                    key={k}
                                    onClick={() => props.onSelectedSkillHandler(id)}
                                    onMouseEnter={() => props.onSelectedSkillHandler(id)}
                                >
                                    <div className="attacks__button attacks__button-general" style={{ borderColor: getBackgroundColor(attackData ? attackData.type : "default") }}
                                    >
                                        <img className="attacks__button-icon" src={attackData && attackData.icon} />
                                        {attackData &&
                                            <div className="attacks__button-stats">
                                                <span className="attacks__button-stats-topLeft">{attackData.cooldown}</span>
                                                <span className="attacks__button-stats-topRight">{attackData.stamina}</span>
                                                <span className="attacks__button-stats-bottomRight">{attackData.maxDamage}</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        }))}

                </div>
                <div className="catcombat__enemy-image">
                    {props.data && (

                        <img src={enemyData.image} />
                    )}
                </div>
            </div>
        )
    )
}

const mapStateToProps = (state) => ({
    enemies: state.enemies.enemyData,
    attackData: state.attacks.attackData,

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EnemyInfo)
