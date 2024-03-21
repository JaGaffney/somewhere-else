import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useTour } from '@reactour/tour'
import { FiHelpCircle, FiMenu } from "react-icons/fi";

import { setActivePage, setHamburgerMenu } from '../actions/api';
import { getTextColor, getBackgroundColor } from '../utils/color'


function getWindowDimensions() {
    if (typeof window !== "undefined") {
        const { innerWidth: width, } = window;
        return {
            width
        };
    } else {
        return 1200
    }

}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        if (typeof window !== "undefined") {
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }


    }, []);

    return windowDimensions;
}

export const Header = (props) => {
    const { setIsOpen } = useTour()
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width > 1200) {
            props.setHamburgerMenu(true)
        } else {
            props.setHamburgerMenu(false)
        }
    }, [width]);


    // TEMP Debug mode
    const debug = false
    const healTesting = () => {
        props.playerData.status.health.setCurrent(props.playerData.status.health.getBase())
        props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getBase() + 100)
        props.playerData.status.armour.setCurrent(props.playerData.status.armour.getBase())
    }
    const killPlayer = () => {
        props.playerData.status.health.setCurrent(1)
        props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getBase())
        props.playerData.status.armour.setCurrent(0)
    }

    const killTesting = () => {
        props.combatData.status.health.setCurrent(1)
        props.combatData.status.armour.setCurrent(0)
    }

    const addStuff = () => {
        props.playerData.playerBank.addToResearch("red", 1000000)
        props.playerData.playerBank.addToResearch("green", 1000000)
        props.playerData.playerBank.addToResearch("blue", 1000000)
        props.playerData.playerBank.addToCoins(1000000)
    }




    return (
        <div className="header__container">
            <div className="header__container-title" style={{ background: getBackgroundColor(props.activePage), color: getTextColor(props.activePage) }}>
                <span onClick={() => props.setActivePage(null)}>Somewhere else</span>
            </div>
            <div className="header__container-info" style={{ background: getBackgroundColor(props.activePage), color: getTextColor(props.activePage) }}>


                <span>{props.activePage}</span>
                {debug && (
                    <div>
                        <span>Debug Mode</span>
                        <button onClick={healTesting}>Heal player</button>
                        <button onClick={killPlayer}>Kill player</button>
                        <button onClick={killTesting}>Kill</button>
                        <button onClick={addStuff}>Add stuff</button>

                    </div>)}



                <div>
                    <button onClick={() => setIsOpen(true)} className="generic__button-icon" data-cy="helpToggle"><FiHelpCircle /></button>
                </div>

                <div className="header__container-hamburger">
                    <button onClick={() => props.setHamburgerMenu(!props.hamburgerMenu)} className="generic__button-icon"><FiMenu /></button>
                </div>

            </div>

        </div>
    )
}


const mapStateToProps = (state) => ({
    activePage: state.engine.activePage,
    combatData: state.engine.combatData,
    playerData: state.player.playerData,
    hamburgerMenu: state.engine.hamburgerMenu,
})

const mapDispatchToProps = {
    setActivePage, setHamburgerMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
