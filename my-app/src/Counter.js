import React from "react";
import { useCounter } from "./useCounter";
export default function Counter(){
    const {increment,decrement,reset,counter}=useCounter()
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}