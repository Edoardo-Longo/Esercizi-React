import { useState, useEffect } from "react";

function useCounter(initialValue = 0){
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter((counter) => counter + 1);
      }
    
      function handleCounteDecrement() {
        setCounter((counter) => counter - 1);
      }
    
      function reset() {
        setCounter(initialValue);
      }

      return{
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounteDecrement,
        onReset: reset
      }
}

function Counter({ initialValue = 0, onCounterChange }) {
 const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

  
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>reset</button>
    </div>
  );
}
export default Counter;