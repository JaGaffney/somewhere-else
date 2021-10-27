import React from 'react'
import { connect } from 'react-redux'

import Progression from "./Progression"
import Item from "./Item"

import { GiFullMetalBucketHandle } from "react-icons/gi";

export const Gather = (props) => {
    return (
        <div className="actions__gather">
            <div className="actions__gather actions__title">
                <GiFullMetalBucketHandle />
                <span>{props.type}</span>
            </div>

            <Progression />

            <div className="actions__items">
                {Array.from(Array(6).keys()).map((i, k) => {
                    return (
                        <Item key={k} />
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
