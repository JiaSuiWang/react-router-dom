/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2021-04-11 10:36:53
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-18 21:30:55
 * @FilePath: \react-typescript\src\App.tsx
 */
import React, { FC, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory 
} from "react-router-dom";
import { RouterList } from './router/SensorsOnRobot'
const App: FC = () => {
    const history = useHistory();
    useEffect(() => {
        console.log(history)
    }, [history])
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/connect">Connect</Link>
                            </li>
                            <li>
                                <Link to="/model">Model</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <Switch>
                        {
                            RouterList.map((item, index) => {
                                console.log(item, index)
                                return <Route path={item.path} key={index} component={item.component} />
                            })
                        }
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;