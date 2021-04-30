/*
 * @Descripttion: 
 * @Author: xiao wang
 * @Date: 2021-04-17 20:48:58
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-18 21:34:56
 * @FilePath: \react-typescript\src\pages\SensorsOnRobot\Model.tsx
 */
import React, { FC } from "react"
import {
    useHistory 
} from "react-router-dom";

const Model:FC = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/connect')
    }
    return (
        <div>Model
            <button onClick={handleClick}>go connect</button>
        </div>
    )
}

export default Model;