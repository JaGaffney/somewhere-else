import React from 'react'
import { connect } from 'react-redux'

export const Armour = (props) => {
    return (
        <div className="catcombat__armour">
            {props.value ? props.value : "*"}
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Armour)
