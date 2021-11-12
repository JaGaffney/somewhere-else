import React from 'react'
import { connect } from 'react-redux'

import Item from "./Item"

export const Gather = (props) => {
    return (
        <div className="actions__generic actions__gather">
            <div className="actions__items">
                {Object.keys(props.skillData.gathering).map((i, k) => {
                    return (
                        <Item key={k} data={props.skillData.gathering[i]} id={i} />
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Gather)
