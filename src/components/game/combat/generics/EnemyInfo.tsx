import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getBackgroundColor } from '../../../utils/color'

import LEVEL from "../../../../images/combat/level.svg"
import { calculateEnemyDamage } from '../../../utils/equipment'

export const EnemyInfo = (props) => {
    const [enemyData, setEnemyData] = useState(null)

    useEffect(() => {
    }, [props.attackSelectedID])


    useEffect(() => {
        setEnemyData(props.enemies.enemies.get(props.data ? props.data.enemyID : 1))
    }, [])

    return (
        enemyData && (
            <div className="catcombat__enemy">
                <div className="catcombat__enemy-info">



                    {props.data && (
                        enemyData && enemyData.attacks.map((id, k) => {
                            const attackData = props.attackData.getAttackById(id)
                            let cooldownRemaining;
                            if (props.cooldowns) {
                                for (const attack in props.cooldowns["enemy"]) {
                                    if (props.cooldowns["enemy"][attack]) {
                                        if (props.cooldowns["enemy"][attack].id === id) {
                                            cooldownRemaining = props.cooldowns["enemy"][attack].cooldown.current
                                        }
                                    }

                                }
                            }
                            return (
                                <div className="attackloadout__equipped-slot"
                                    key={k}
                                    onClick={() => props.onSelectedSkillHandler(id)}
                                    onMouseEnter={() => props.onSelectedSkillHandler(id)}
                                >
                                    <div className="attacks__button attacks__button-general" style={{ borderColor: getBackgroundColor(attackData ? attackData.type : "default"), transform: `${props.attackSelectedID === id ? "scale(1.1)" : "scale(1)"}` }}
                                    >
                                        <img className="attacks__button-icon" src={attackData && attackData.icon} />
                                        {attackData &&
                                            <div className="attacks__button-stats">
                                                <span className="attacks__button-stats-topLeft">{attackData.cooldown}</span>
                                                <span className="attacks__button-stats-topRight">{attackData.stamina}</span>
                                                <span className="attacks__button-stats-bottomRight">{calculateEnemyDamage(enemyData, props.playerStats, attackData).attack}</span>
                                                {cooldownRemaining !== 0 && (<span className="attacks__button-stats-overlay">{cooldownRemaining}</span>)}
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        }))}

                </div>
                <div className="catcombat__enemy-image">
                    {props.data && (
                        <>
                            <div className="catcombat__enemy-description">
                                {props.data && (
                                    <>
                                        <h3>{enemyData?.name}</h3>
                                        <div className="map__enemy-statValue">
                                            <img src={LEVEL} alt="level" />
                                            <span>{enemyData?.level}</span>
                                        </div>
                                    </>)}

                            </div>
                            <img src={enemyData.image} />
                        </>
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
