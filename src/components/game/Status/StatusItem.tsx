import React from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

export const StatusItem = (props) => {


    const update = () => {
        props.setPlayerUpdated()
    }

    return (
        <div className="action__item" key={props.key}>
            <img className="action__item-icon" src={props.icon} />
            <div className="action__item-content">
                <span className="action__item-name">{props.skillName}</span>
                <span className="action__item-level">description</span>

                <div className="action__item-buttons">
                    <span>cost</span>
                    <button onClick={() => {
                        props.status[props.skillName].buyStatus()
                        update()
                    }}>[ + ]</button>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    status: state.player.playerData.status
})

const mapDispatchToProps = {
    setPlayerUpdated
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusItem)