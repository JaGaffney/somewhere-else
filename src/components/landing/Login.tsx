import React from 'react'
import { connect } from 'react-redux'

export const Login = (props) => {
    return (
        <div className="landing__login">
            <button>Click me</button>
        </div>
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
