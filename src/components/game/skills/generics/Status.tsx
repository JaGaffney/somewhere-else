import React from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../../actions/api'

export const Status = (props) => {


    const update = () => {
        props.setPlayerUpdated()
    }

    return (
        <div className="status__item" key={props.key}>
            <img className="action__item-icon" src={props.icon} />
            <span className="status__item-title">{props.skillName}</span>
            <span className="status__item-description">description</span>
            <button onClick={() => {
                props.status[props.skillName].buyStatus()
                update()
            }}>Add {props.skillName}</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    status: state.player.playerData.status
})

const mapDispatchToProps = {
    setPlayerUpdated
}

export default connect(mapStateToProps, mapDispatchToProps)(Status)