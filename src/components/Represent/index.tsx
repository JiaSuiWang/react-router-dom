import React, { FC, useEffect } from "react"
import { IBeesProps } from "../../interface/App";

interface IProps {
    beesList: IBeesProps[]
}
//解构：接受interface里面的对象，因为interface本质上就是一个对象用{}表示，所以解构的时候也要{}
const Represent: FC<IProps> = ({beesList}):JSX.Element=>{
    return(
        <div>
            <p><b>Lists of Bees</b></p>
            <table
                title="This is present table for bees" 
                className='an-table'
            >
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>speed</th>
                        <th>latitude</th>
                        <th>longitude</th>
                        <th>elevation</th>
                        <th>fuel</th>
                        <th>damage</th>
                        <th>nectar</th>
                        <th>honey</th>
                        <th>tansformationRate</th>
                        <th>action</th>
                    </tr>
                    {
                        beesList.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{v.id}</td> 
                                    <td>{v.speed}</td> 
                                    <td>{v.latitude}</td> 
                                    <td>{v.longitude}</td> 
                                    <td>{v.elevation}</td> 
                                    <td>{v.fuel}</td> 
                                    <td>{v.damage}</td>
                                    <td>{v.nectar}</td> 
                                    <td>{v.honey}</td> 
                                    <td>{v.tansformationRate}</td> 
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}
export default Represent;
