import React from 'react'
import { connect } from 'react-redux'

import EXP from "./generics/EXP"
import Talents from "./generics/Talents"
import Actions from "./generics/Actions"
import Progression from "./generics/Progression"

import { BUSHCRAFT } from "../types/skills"

export const Bushcraft = (props) => {
    console.log("got here")
    return (
        <div>
            <EXP />
            <Talents />
            <Progression />
            <Actions gather={"woodsman"} production={"fletcher"} skillData={BUSHCRAFT} />
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Bushcraft)
