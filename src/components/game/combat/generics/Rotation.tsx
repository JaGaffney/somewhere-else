import React from 'react'
import { connect } from 'react-redux'

import { setCombatData } from "../../../actions/api"

import RotationItems from './RotationItems'

export const Rotation = (props) => {
    return (
        <div className="catcombat__description-rotation">
            {props.data && props.type === "player" && (
                <>
                    <p>Set your rotation for auto-combat</p>
                    <RotationItems rotation={props.data.classes.findJobClass(props.data.classes.equippedJobClass).rotation} data={props.data} editable={true} />

                    <button className="generic__button generic__button-primary generic__button-fit" onClick={() => props.onButtonHandler(true)}>Begin auto combat</button>
                </>
            )} {props.data && props.type === "enemy" && (
                <>
                    <p>Enemies rotation</p>
                    <RotationItems rotation={props.enemyData.getEnemyById(props.data.enemyID).rotation} editable={false} />

                    <button className="generic__button generic__button-primary generic__button-fit" onClick={() => props.onDropInfoHandler(props.enemyData.getEnemyById(props.data.enemyID))}>Drops</button>
                    <button className="generic__button generic__button-secondary generic__button-fit" onClick={() => props.onButtonHandler(false)}>Run away</button>
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    enemyData: state.enemies.enemyData,
})

const mapDispatchToProps = {
    setCombatData
}

export default connect(mapStateToProps, mapDispatchToProps)(Rotation)
