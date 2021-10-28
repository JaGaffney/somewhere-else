import React, { useState } from 'react'

import { connect } from 'react-redux'

export const Talents = (props) => {
    const [show, setShow] = useState(false)

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
