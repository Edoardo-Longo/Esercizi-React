import {useState} from 'react'


function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter(counter => counter + 1)
    }

    function reset(){
        setCounter(initialValue)
    }

    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleCounterIncrement}>increment</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter