import { useState } from "react";

const Example = () => {
    const [count,setCount] = useState(0);
    const CountUp = () => {
        setCount(count + 1);
        setCount(prevstate => prevstate + 1);
    }
    const CountDown = () => {
        setCount(count - 1);
    }
    return(
        <>
            <p>現在のカウント数: {count}</p>
            <button onClick={CountUp}>+</button>
            <button onClick={CountDown}>-</button>
        </>
    ) 
};

export default Example;
