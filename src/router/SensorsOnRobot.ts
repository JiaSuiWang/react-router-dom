/*
 * @Descripttion: 
 * @Author: Wei
 * @Date: 2021-04-18 20:02:27
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-18 21:13:32
 * @FilePath: \react-typescript\src\router\SensorsOnRobot.ts
 */
import React from "react";
import Connect from "../pages/SensorsOnRobot/Connect"
import Model from "../pages/SensorsOnRobot/Model";

interface IProps {
    path: string;
    component: React.FunctionComponent;
}


export const RouterList: IProps[] = [
    {
        path: '/connect',
        component: Connect
    },
    {
        path: '/model',
        component: Model
    }
]