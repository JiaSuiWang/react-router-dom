import React, { FC } from "react"

interface IProps {
    name: string;
    age: number;
    handleChild: () => void;
}

const ChildComponent : FC<IProps> = ({name, age, handleChild}):JSX.Element =>{
    return(
        <div>
            <p>name: {name}</p>
            <p>age: { age }</p>
            <button onClick={handleChild}>返回值</button>
        </div>
    )
}

export default ChildComponent;