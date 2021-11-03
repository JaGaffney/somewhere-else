import React from 'react'
import { connect } from 'react-redux'

import Item from "./Item"

import { GiFullMetalBucketHandle } from "react-icons/gi";

export const Gather = (props) => {
    console.log(props.skillData)
    return (
        <div className="actions__generic actions__gather">
            <div className="actions__gather actions__title">
                <GiFullMetalBucketHandle />
                <span>{props.type}</span>
            </div>

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
