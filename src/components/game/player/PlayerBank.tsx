import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

export const PlayerBank = (props) => {
    console.log(props.activePage)


    const getItemDataFromID = (id) => {

    }

    return (
        <div className="game__normal">
            <div className="bank__info">
                <span>Bank Space Used {props.playerData.playerBank.bankItems.size} / {props.playerData.playerBank.bankSpace}</span>
                <span>Bank Value 69 gp</span>
            </div>
            <div className="bank__container">
                {[...props.playerData.playerBank.bankItems.keys()].map((i, k) => {
                    return (
                        <p key={k}>id: {i} qty: {props.playerData.playerBank.bankItems.get(i).qty}</p>
                    )

                })}
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.skills.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBank)
