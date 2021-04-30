import React, { ChangeEvent, FC, useState } from "react"
import { IBeesProps } from "../../interface/App"
import Add from "./Add"


interface IParamsProps {
    fuel: string;
    damage: string;
}

interface IProps {
    setBeesList: React.Dispatch<React.SetStateAction<IBeesProps[]>>;
    beesList: IBeesProps[]
}

//IProps意思是该函数接受一个这种类型的参数 <参数类型>
//(参数名) 用这个参数名的形参，来接受实际参数
const Query: FC<IProps> = ({ setBeesList, beesList }) => {

    //定义变量
    const [params, setParams] = useState<IParamsProps>({
        fuel: '1',
        damage: '2'
    })

    //定义响应的API1 
    //绑定在onChange事件的函数一定有一个ChangeEvent<HTMLInputElement>类型的参数
    //这个函数有两个功能：1.触发视图更新 2.修改变量的值
    const handleChange = (event: ChangeEvent<HTMLInputElement>, key: string): void => {
        //这里触发的输入框的视图更新
        setParams({
            ...params, //解构 看ES6
            [key]: event.target.value //获取到更新的对象的值  //[key]代表解构出来对象名为key的键
        })
        // Object.assign(params, { fuel: event.target.value })
        //对象合并，后面的覆盖掉，其他不动
    }

    //定义响应的API2
    const handleEearch = (): void => {
        console.log(params)
        const a: any[] = [{
            id: 1,
            speed: 1.1,
            latitude: 2,
            longitude: 3,
            elevation: 4,
            fuel: 5,
            damage: 6,
            nectar: 7,
            honey: 8,
            tansformationRate: 10,
        }]
        setBeesList(a)
    }

    const handleAdd = () => {
        //添加了以后一定要查询一下，因为满足条件的条目会多一些
        let arr: IBeesProps[] = [
            {
                id: Number(Math.random().toFixed(2)),
                speed: Number(Math.random().toFixed(2)),
                latitude: Number(Math.random().toFixed(2)),
                longitude: Number(Math.random().toFixed(2)),
                elevation: Number(Math.random().toFixed(2)),
                fuel: Number(Math.random().toFixed(2)),
                damage: Number(Math.random().toFixed(2)),
                nectar: Number(Math.random().toFixed(2)),
                honey: Number(Math.random().toFixed(2)),
                tansformationRate: Number(Math.random().toFixed(2))
            }
        ]
        setBeesList(beesList.concat(arr)); //把原来的数组和现在的arr合并一下
    }

    const handleReset = () => {
        setParams({
            fuel: '',
            damage: ''
        })
        handleEearch()
    }


    //listen 监听函数
    // useEffect(() => {
    //     const fetch = () => {
    //         //做请求
    //         console.log("请求数据")
    //     }
    //     fetch();
    // }, [params])


    return (
        <div>
            <p><b>Search</b></p>
            <form action="">
                <label htmlFor="">Fuel({'<'}%)</label>
                {/* params.fuel */}
                {/* onChange={(e) => handleChange(e, 'fuel')} */}
                <input type="text" value={params.fuel} onChange={(e) => handleChange(e, 'fuel')} />
                <label htmlFor="">Damage({'>'}%)</label>
                <input type="text" value={params.damage} onChange={(e) => handleChange(e, 'damage')} />
            </form>
            <button onClick={handleEearch}>search</button>
            <button onClick={handleReset}>reset</button> 
            <button onClick={handleAdd}>add</button> 
            <Add 
                handleAdd={handleAdd}
            />
        </div>
    )
}
export default Query;
