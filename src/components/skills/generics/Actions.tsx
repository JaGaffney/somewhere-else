import React from 'react'
import { connect } from 'react-redux'

import Gather from "./Gather"
import Craft from "./Craft"

export const Actions = (props) => {
    return (
        <div className="actions">
            <Gather type={props.gather} />
            <Craft type={props.crafting} />
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Actions)
