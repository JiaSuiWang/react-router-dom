/*
 * @Descripttion: 
 * @Author: Wei
 * @Date: 2021-04-17 21:07:34
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-18 21:22:37
 * @FilePath: \react-typescript\src\pages\SensorsOnRobot\components\ConnectQuery.tsx
 */
import React, { FC } from "react"
import style from "../style/connect.module.css";


const ConnectQuery: FC = () => {
    return (
        <div className={style['connect-query']}>

            <form>
                <div className={style['form-item']}>
                    <label htmlFor="">Device type:</label>
                    <select name="" id="">
                        <option value="10">All</option>
                    </select>
                </div>


                <div>
                    <label htmlFor="">Search device name:</label>
                    <input type="text" />

                    <button type="submit">anniu </button>
                </div>
            </form>


            <div>
                <button>Add</button>
                <button>Details</button>
                <button>Delete</button>
            </div>

        </div >
    )
}

export default ConnectQuery