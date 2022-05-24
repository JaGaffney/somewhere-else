import React from 'react'
import { connect } from 'react-redux'

export const Single = (props) => {
    return (
        <div>Single</div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Single)