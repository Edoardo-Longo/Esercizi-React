import { createStore } from "@reduxjs/toolkit"
import { counterReducer } from "./CounterState"
export const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})