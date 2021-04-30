/*
 * @Descripttion: 
 * @Author: Wei
 * @Date: 2021-04-17 20:49:10
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-17 22:43:33
 * @FilePath: \react-typescript\src\pages\SensorsOnRobot\Connect.tsx
 */
import React, { FC } from "react"
import ConnectQuery from "./components/ConnectQuery"
import ConnectTable from "./components/ConnectTable"
import style from './style/connect.module.css';
const Connect:FC = () => {
    return (
    <div>
        <p  className={style['connect-title']}>Device Manager application V01</p>
        <ConnectQuery />
        <ConnectTable />
    </div>
    
    )
}

export default Connect