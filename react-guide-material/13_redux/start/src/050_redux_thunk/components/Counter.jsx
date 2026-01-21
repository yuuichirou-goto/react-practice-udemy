import { useSelector } from "react-redux";
import { add, minus, addAsync, minusAsync, addAsyncWithStatus } from "../store/modules/counter"

import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
    const status = useSelector(state => state.counter.status);
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreater={add}/>
            <CounterButton step={2} calcType="-" actionCreater={minus}/>
            <CounterButton step={2} calcType="非同期(+)" actionCreater={addAsyncWithStatus}/>
            <CounterButton step={2} calcType="非同期(-)" actionCreater={minusAsync}/>
            <h3>{status}</h3>
        </>
    )
}
export default Counter;