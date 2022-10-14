import React from 'react'
import { connect } from 'react-redux'


import * as skillIcon from "../../../data/seed/icons/skillSeedIcons"
import { ToolEnum } from '../Farming'

export const ToolControls = (props) => {
    return (
        <div className="topPanel topPanel__controls topPanel__marginTop topPanel__marginBottom">
            <div className="topPanel__controls-left">
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeTool === ToolEnum.CHECK ? "generic__button-active" : ""}`} onClick={() => props.setActiveTool(ToolEnum.CHECK)}> <img src={skillIcon[ToolEnum.CHECK]} alt="divination" /><span>{ToolEnum.CHECK}</span></button>
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeTool === ToolEnum.PLANT ? "generic__button-active" : ""}`} onClick={() => props.setActiveTool(ToolEnum.PLANT)}> <img src={skillIcon[ToolEnum.PLANT]} alt="passives" /><span>{ToolEnum.PLANT}</span></button>
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeTool === ToolEnum.WATER ? "generic__button-active" : ""}`} onClick={() => props.setActiveTool(ToolEnum.WATER)}> <img src={skillIcon[ToolEnum.WATER]} alt="divination" /><span>{ToolEnum.WATER}</span></button>
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeTool === ToolEnum.CUT ? "generic__button-active" : ""}`} onClick={() => props.setActiveTool(ToolEnum.CUT)}> <img src={skillIcon[ToolEnum.CUT]} alt="divination" /><span>{ToolEnum.CUT}</span></button>
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeTool === ToolEnum.CULL ? "generic__button-active" : ""}`} onClick={() => props.setActiveTool(ToolEnum.CULL)}> <img src={skillIcon[ToolEnum.CULL]} alt="divination" /><span>{ToolEnum.CULL}</span></button>
                <button className={`generic__button generic__button-primary generic__button-flex ${props.activeTool === ToolEnum.HARVEST ? "generic__button-active" : ""}`} onClick={() => props.setActiveTool(ToolEnum.HARVEST)}> <img src={skillIcon[ToolEnum.HARVEST]} alt="divination" /><span>{ToolEnum.HARVEST}</span></button>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ToolControls)