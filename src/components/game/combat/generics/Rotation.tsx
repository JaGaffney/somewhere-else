import React from 'react'
import { connect } from 'react-redux'

import RotationItems from './RotationItems'

export const Rotation = (props) => {
    return (
        <div className="catcombat__description-rotation">
            {props.data && props.type === "player" && (
                <>
                    <p>Set your rotation for auto-combat</p>
                    <RotationItems data={props.data.classes.findJobClass(props.data.classes.equippedJobClass).rotation} editable={true} />

                    <button>Being auto combat</button>
                </>
            )} {props.data && props.type === "enemy" && (
                <>
                    <p>Enemies rotation</p>
                    <RotationItems data={props.enemyData.getEnemyById(props.data.enemyID).rotation} editable={false} />

                    <button>Drops</button>
                    <button>Run away</button>
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    enemyData: state.enemies.enemyData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Rotation)
