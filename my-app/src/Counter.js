import { useState, useEffect } from "react";

function Counter({ initialValue = 0, onCounterChange }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(()=>{
    console.log('I have mounted')
    return()=>{
        console.log('I am about to be unmounted')
    }
  },[])
  
  useEffect(() => {
    onCounterChange(counter);
  }, [counter]);

  function handleCounterIncrement() {
    setCounter((counter) => counter + 1);
  }

  function reset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCounterIncrement}>increment</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
