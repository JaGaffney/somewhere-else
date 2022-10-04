import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Item from "./Item"

export const Actions = (props) => {
    const [enoughManpower, setEnoughManpower] = useState(props.playerData.getActiveManpower() < props.playerData.getManpower())

    useEffect(() => {
        setEnoughManpower(props.playerData.getActiveManpower() < props.playerData.getManpower())
    }, [props.playerUpdated])

    return (
        <div className="actions">
            <div className="actions__generic actions__gather">
                <div className="actions__items">
                    {Object.keys(props.skillData.actions).map((i, k) => {
                        return (
                            <Item key={k} data={props.skillData.actions[i]} id={i} enoughManpower={enoughManpower} production={props.production} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    playerUpdated: state.engine.playerUpdated

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Actions)
