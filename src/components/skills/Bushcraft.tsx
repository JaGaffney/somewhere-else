import React from 'react'
import { connect } from 'react-redux'

import EXP from "./generics/EXP"
import Talents from "./generics/Talents"
import Actions from "./generics/Actions"


export const Bushcraft = (props) => {
    return (
        <div>
            <EXP />
            <Talents />
            <Actions gather={"woodsman"} crafting={"fletcher"} />
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Bushcraft)
