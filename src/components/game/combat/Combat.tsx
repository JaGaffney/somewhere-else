import React, { useReducer, useState } from 'react'
import { connect } from 'react-redux'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import CatMap from './CatMap'
import CatCombat from './CatCombat'

import Drop from "./generics/Drop"

// @ts-expect-error
import COMBAT from "../../../images/sidepanel/combat.svg"
// @ts-expect-error
import GLOBE from "../../../images/combat/globe.svg"
// @ts-expect-error
import COMPASS from "../../../images/combat/compass.svg"

export const Combat = (props) => {
    const [displayDrops, setDisplayDrops] = useState<boolean>(false)
    const [dropData, setDropData] = useState(null)
    const closeModal = () => {
        setDisplayDrops(false)
        setDropData(null)
    };

    const types = {
        CAT_COMBAT: "CAT_COMBAT",
        CAT_MAP: "CAT_MAP"
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case types.CAT_COMBAT:
                return { ...state, toggle: action.type }
            case types.CAT_MAP:
                return { ...state, toggle: action.type }
        }
    }

    const initialState = {
        toggle: types.CAT_COMBAT
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    const onDropInfoHandler = (data) => {
        setDropData(data)
        setDisplayDrops(true)
    }

    return (
        <div className="game__normal">
            <div className="combat__info">
                <button onClick={() => dispatch({ type: types.CAT_COMBAT })}><img src={COMBAT} /><span>Cat Combat</span></button>
                <button onClick={() => dispatch({ type: types.CAT_MAP })}><img src={GLOBE} /><span>Cat Map</span></button>
                <button><img src={COMPASS} /> <span>Cat Adventure</span></button>
            </div>
            <Popup open={displayDrops} closeOnDocumentClick onClose={closeModal} position="right center" modal>
                <Drop dropData={dropData} />
            </Popup>
            <div className="combat__container">
                {state.toggle === types.CAT_COMBAT &&
                    <CatCombat onDropInfoHandler={onDropInfoHandler} />
                }
                {state.toggle === types.CAT_MAP &&
                    <CatMap onFightStart={dispatch} types={types} onDropInfoHandler={onDropInfoHandler} />
                }
            </div>

        </div>
    )
}


const mapStateToProps = (state) => ({
    enemies: state.enemies
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Combat)