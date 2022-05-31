import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { intToString } from '../../utils/generic'

import Controls from './Controls'
import Storage from './Storage'
import Details from './Details'


export const PlayerBank = (props) => {
    const [activeBankItem, setActiveBankItem] = useState(null)
    const [activeItemID, setActiveItemID] = useState<number>(0)

    useEffect(() => {
    }, [props.playerData.playerBank.bankItems, props.playerUpdated])

    const bankItemSelectedHandler = (itemData) => {
        setActiveBankItem(itemData)
    }


    console.log({ activeItemID })

    return (
        <div className="game__normal">
            <Controls />

            <div className="bank__container">
                {props.playerData.playerBank !== null && (
                    <Storage setActiveItemID={setActiveItemID} bankItemSelectedHandler={bankItemSelectedHandler} />
                )}

                <Details activeBankItem={activeBankItem} activeItemID={activeItemID} bankItemSelectedHandler={bankItemSelectedHandler} />

            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBank)
