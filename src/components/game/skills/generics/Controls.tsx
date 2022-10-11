import React from 'react'
import { connect } from 'react-redux'

// @ts-ignore
import DIVINIATION from "../../../../images/sidepanel/divination.svg"

export const Controls = (props) => {
    return (
        <div className="topPanel topPanel__controls topPanel__marginTop">
            <div className="topPanel__controls-left">
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeCategory === "resource" ? "generic__button-active" : ""}`} onClick={() => props.setActiveCategory("resource")}> <img src={DIVINIATION} alt="divination" /><span>Resources</span></button>
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeCategory === "1" ? "generic__button-active" : ""}`} onClick={() => props.setActiveCategory("1")}> <img src={DIVINIATION} alt="passives" /><span>Tier 1</span></button>
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeCategory === "2" ? "generic__button-active" : ""}`} onClick={() => props.setActiveCategory("2")}> <img src={DIVINIATION} alt="divination" /><span>Tier 2</span></button>
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeCategory === "3" ? "generic__button-active" : ""}`} onClick={() => props.setActiveCategory("3")}> <img src={DIVINIATION} alt="divination" /><span>Tier 3</span></button>
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeCategory === "4" ? "generic__button-active" : ""}`} onClick={() => props.setActiveCategory("4")}> <img src={DIVINIATION} alt="divination" /><span>Tier 4</span></button>

            </div>

            <div className="topPanel__controls-right">
                <form>
                    <input type="text" value={props.search} placeholder="search..." onChange={(e) => props.setSearch(e.target.value)} />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)