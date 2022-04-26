import React, { useState } from 'react'

import { connect } from 'react-redux'

export const Upgrades = (props) => {
    return (
        <div className="Upgrades">
            <h1>Upgrades</h1>
            <p>Show all current upgrades for this skill as well as gathering rates</p>
        </div>
    )
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Upgrades)
