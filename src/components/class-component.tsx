/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: 静哥哥
 * @Date: 2021-04-07 08:34:42
 * @LastEditors: 静哥哥
 * @LastEditTime: 2021-04-07 08:52:24
 * @FilePath: \my-app\src\components\class-component.tsx
 */
import React from 'react';

interface IProps {
    name?: string;
    age?: number
}

interface IState {
    count: number
}

// 这里是class写法
class ClassComponent extends React.Component<IProps> {
    state: IState = {
        count: 1
    };

    // 生命周期
    componentDidMount() {
        console.log("一般在这里请求数据, 但是这里只会执行一次")
    }

    // 定义方法
    handleClikc = (): void => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div style={{ border: '1px solid red', margin: '20px 0', padding: 20, width: 600 }}>
                <p>{this.props.name}: {this.props.age}</p>
                <p style={{ color: 'red' }}>这里是子组件，跟父组件的功能一样，只是写法是class写法</p>
                <p>点击这按钮，然后看看控制台，谷歌浏览器点击F12, 查看console</p>
                <button onClick={this.handleClikc}>这里是count的值{this.state.count}</button>
            </div>
        )
    }
}

export default ClassComponent;