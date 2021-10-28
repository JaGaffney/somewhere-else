import React from 'react'
import { connect } from 'react-redux'

import Gather from "./Gather"
import Production from "./Production"

export const Actions = (props) => {
    return (
        <div className="actions">

            <Gather type={props.gather} skillData={props.skillData} />
            <Production type={props.production} />
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Actions)
