import React from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import RepeatItem from './RepeatItem'


export const Repeat = (props) => {
    const onBuyHandler = (name) => {
        props.playerData.research.updateResearchRepeat(name, 1)
        props.setPlayerUpdated()
    }

    return (
        <div className="research__panel">
            {Object.keys(props.researchData.repeat).map((i, k) => {
                const data = props.researchData.repeat[i]
                return (
                    <RepeatItem data={data} k={k} onBuyHandler={onBuyHandler} />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    researchData: state.research.researchData,
    playerData: state.player.playerData,

})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Repeat)