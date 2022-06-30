import { createStore, combineReducers } from "@reduxjs/toolkit"
import { counterReducer } from "./CounterState"
import { todoReducer } from "./todoState"
const rootReducer=combineReducers({
    counter: counterReducer,
    todo: todoReducer
})
export const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})