import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter((c) => c + 1);
  }

  function decrement() {
    setCounter((c) => c - 1);
  }

  function reset() {
    setCounter(initialValue);
  }

  return { increment, decrement, reset, counter };
}
