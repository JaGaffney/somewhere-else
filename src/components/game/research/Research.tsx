import React from 'react'
import { connect } from 'react-redux'

import Controls from './Controls'
import Repeat from './Repeat'
import Single from './Single'

export const Research = (props) => {
    return (
        <div className="game__normal">
            <Controls />
            <Repeat />
            <Single />
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Research)