import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { randomInteger } from '../../utils/generic'
import EXP from './generics/EXP'

import ToolControls from './generics/ToolControls'

import * as skillIcon from "../../data/seed/icons/skillSeedIcons"

export enum ToolEnum {
    CHECK = "check",
    CUT = "cut",
    WATER = "water",
    PLANT = "plant",
    CULL = "cull",
    HARVEST = "harvest",
}


export const Farming = (props) => {
    const generateTempData = () => {
        const temp = {}
        let i = 0
        for (var x = 1; x <= 10; x++) {
            for (var y = 1; y <= 10; y++) {
                temp[i] = {
                    seed: null,
                    planted: null,
                    watered: false,
                    x, y
                }
                i++
            }
        }
        return temp
    }


    const [tempData, setTempData] = useState<Object>({})
    const [activeTool, setActiveTool] = useState<ToolEnum>(ToolEnum.CHECK)


    const farmingHandler = (key) => {
        switch (activeTool) {
            case ToolEnum.CHECK:
                console.log(tempData[key])
                break;
            case ToolEnum.CUT:
                break;
            case ToolEnum.WATER:
                setTempData({ ...tempData, [key]: { ...tempData[key], watered: true } })
                break;
            case ToolEnum.PLANT:
                setTempData({ ...tempData, [key]: { ...tempData[key], planted: new Date().getTime(), seed: 1 } })
                break;

            default:
                break;
        }

    }

    useEffect(() => {
        setTempData(generateTempData())
    }, [])

    console.log(tempData)
    return (
        <div>
            <EXP />
            <ToolControls setActiveTool={setActiveTool} activeTool={activeTool} />
            <div className="farming">
                {tempData && Object.keys(tempData).map((i, k) => {
                    return (
                        <div className={`farming-item`}
                            style={{
                                gridRow: tempData[i].x,
                                gridColumn: tempData[i].y
                            }}
                            key={k}
                            onClick={() => farmingHandler(i)}
                        >
                            <img src={skillIcon.grass}
                                style={{ backgroundColor: tempData[i].watered ? "var(--amber900)" : "var(--amber200)" }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Farming)