import React from 'react'
import { connect } from 'react-redux'

export const News = (props) => {
    return (
        <div>News</div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(News)