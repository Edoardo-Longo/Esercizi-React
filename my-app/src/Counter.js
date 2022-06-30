import { store } from "./state/Store"
import { incrementCounter, decrementCounter, resetCounter } from "./state/CounterState"
import { useState } from "react"
export default function Counter() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        store.dispatch(incrementCounter(1))
        setCounter(store.getState())
    }

    const decrement = () => {
        store.dispatch(decrementCounter(1))
        setCounter(store.getState())
    }

    const reset = () => {
        store.dispatch(resetCounter())
        setCounter(store.getState())
    }
    return (
        <>   <h1>
            Counter: {counter}
        </h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </>
    )
}