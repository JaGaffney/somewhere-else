import React from 'react'

import { connect } from 'react-redux'

export const Talents = (props) => {
    return (
        <div className="talents">
            <h1>Talents</h1>
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Talents)
