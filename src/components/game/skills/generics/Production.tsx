import React from 'react'
import { connect } from 'react-redux'

import { Gi3DHammer } from "react-icons/gi";

import Item from "./Item"

export const Production = (props) => {
    return (
        <div className="actions__generic actions__production">
            <div className="actions__gather actions__title">
                <Gi3DHammer />
                <span>{props.type}</span>
            </div>

            <div className="actions__items">
                {Object.keys(props.skillData.production).map((i, k) => {
                    return (
                        <Item key={k} data={props.skillData.production[i]} id={i} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Production)
