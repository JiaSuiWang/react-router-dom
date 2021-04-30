/*
 * @Descripttion: "This is the add table"
 * @Author: Wang
 * @Date: 2021-04-12 23:03:01
 * @LastEditors: xiao wang
 * @LastEditTime: 2021-04-14 12:14:56
 * @FilePath: \react-typescript\src\components\Query\SubQuery\index.tsx
 */

//1.要在form里面显示值“value = {params.speed}”，就需要定义变量params（一个对象）
//2.要想定义param这个对象，就需要定义它的规范也就是接口 
//接口名称第一个I
//显示都用string类型
//3.经过以上两步，就可以给每一个表单加上一个value的attribute，来与对象params的里面的值分别绑定
//4.为了让表单里的数可以编辑，要绑定onChange事件，注意不是onClick事件
//逻辑,主动作用：通过event handler来更新params的值，由于params是用useState定义，所以会触发视图更新
//逻辑,被动作用：又由于value attribute已经和params绑定在一起,所以显示也会更新！
//5.那么onChange的event handler如何写呢，我们的目的是更新对应表单的值所以
//1.要知道更改谁，所以需要找到绑定在这个表单上面的变量，所以要传入它的名字，这是函数的第一个参数
//2.要知道更改后的值是什么，用event.target.value来获取，所以需要获得event是什么，这是第二个参数
//因此写成 onChange={(ev) => {handleChange(ev, 'speed')}}，这里我们用handleChange来帮我们调用setParams来更改
//6.那么handleChange函数又怎么写呢
//1.首先它是一个箭头函数，其次这个函数的功能就是调用setParams
//2.其次他的传入参数比较复杂，
//1.event,在Typescrip里面，所有的变量都应该有类型，它是ChangeEvent<HTMLInputElement>，鼠标放在ev上就能显示
//2.key，是一个string类型
//3.setParams函数用到了解构的方法，
//1.只修改键为[key]的值，并用event.target.value为其赋予了修改后的值
//2.其他保持不变，语法为...params
//7.最后写click的event handler,也就是handleOK
//因为subQuery的父组件已经有handleAdd方法了，所以思路就是把它引进来
//1.在父组件中使用子组件SubQery时，应该将handleAdd，引入， <SubQuery handleAdd={handleAdd}/>
//2.在子组件里面，应该有一个参数去接受它，这里应该定义一个接口!
//1.接口定义IProps，里面只有一个函数，普通函数的类型都是 handleAdd:()=>void;
//2.更改component的传入参数，
//需要在FC后面用尖括号写上传入的类型<接口名称>，
//以及在圆括号里面将接口进行解构，解构的内容记得用圆括号！！！
//const SubQuery:FC = () =>{} 到const SubQuery:FC<IProps> = ({handleAdd}) =>{}

//3.写handleOK函数
import React, { ChangeEvent, FC, useState } from "react"
import { Button } from 'antd';

interface IParamsNewBee {
    speed: string;
    latitude: string;
    longitude: string;
    elevation: string;
    fuel: string,
    damage: string
}

interface IProps {
    handleAdd: () => void;
}

const SubQuery: FC<IProps> = ({ handleAdd }) => {

    //定义变量
    const [params, setParams] = useState<IParamsNewBee>({
        speed: "7.0",
        latitude: "36.7",
        longitude: "67.9",
        elevation: "3.2",
        fuel: "36.7",
        damage: "5"
    })


    const handleChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
        setParams({
            ...params,
            [key]: event.target.value
        })
    }

    const handleOK = () => {
        console.log(params)
        handleAdd()
    }

    return (
        <div>
            <p>
                <b>ADD</b>
            </p>

            <form>
                <div>
                    <label>speed</label>
                    <input
                        type="text"
                        value={params.speed}
                        onChange={(event) => { handleChange(event, 'speed') }}
                    />
                </div>
                <div>
                    <label>latitude</label>
                    <input
                        type="text"
                        value={params.latitude}
                        onChange={(event) => { handleChange(event, "latitude") }}
                    />
                </div>
                <div>
                    <label>longitude</label>
                    <input
                        type="text"
                        value={params.longitude}
                        onChange={(event) => { handleChange(event, "longitude") }}
                    />
                </div>
                <div>
                    <label>elevation</label>
                    <input
                        type="text"
                        value={params.elevation}
                        onChange={(event) => { handleChange(event, "elevation") }}
                    />
                </div>
                <div>
                    <label>fuel</label>
                    <input
                        type="text"
                        value={params.fuel}
                        onChange={(event) => { handleChange(event, "fuel") }}
                    />
                </div>
                <div>
                    <label htmlFor="">damage</label>
                    <input
                        type="text"
                        value={params.damage}
                        onChange={(event) => { handleChange(event, "damage") }}
                    />
                </div>
            </form>
            {/* <button onClick={handleOK}>OK</button> */}
            {/* <Button type="primary">Cancel</Button> */}
    
        </div>
    )
}



export default SubQuery

