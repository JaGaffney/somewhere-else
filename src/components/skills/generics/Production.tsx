import React from 'react'
import { connect } from 'react-redux'

import { Gi3DHammer } from "react-icons/gi";

export const Production = (props) => {
    return (
        <div className="actions__generic actions__production">
            <div className="actions__gather actions__title">
                <Gi3DHammer />
                <span>{props.type}</span>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Production)
