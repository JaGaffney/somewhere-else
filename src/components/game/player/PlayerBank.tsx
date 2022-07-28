import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Controls from './Controls'
import Storage from './Storage'
import Details from './Details'


export const PlayerBank = (props) => {
    const [activeBankItem, setActiveBankItem] = useState(null)
    const [activeBankItemID, setActiveBankItemID] = useState(null)
    const [activeItemID, setActiveItemID] = useState<number>(0)
    const [sellMode, setSellMode] = useState<boolean>(false)

    useEffect(() => {
    }, [props.playerData.playerBank.bankItems, props.playerUpdated])

    const bankItemSelectedHandler = (itemData, id) => {
        setActiveBankItem(itemData)
        setActiveBankItemID(id)
    }

    console.log(activeBankItem)

    return (
        <div className="game__normal">
            <Controls setSellMode={setSellMode} sellMode={sellMode} />

            <div className="bank__container">
                {props.playerData.playerBank !== null && (
                    <Storage setActiveItemID={setActiveItemID} bankItemSelectedHandler={bankItemSelectedHandler} sellMode={sellMode} />
                )}

                <Details activeBankItem={activeBankItem} activeBankItemID={activeBankItemID} activeItemID={activeItemID} bankItemSelectedHandler={bankItemSelectedHandler} />

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
