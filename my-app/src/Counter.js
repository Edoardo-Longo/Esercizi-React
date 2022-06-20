import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {

  state = {
    count: this.props.initialValue,
  }

  handleCounterIncrement = () => {
    this.setState((state) => {
        return{
            count: state.count + this.props.incrementBy
        }
    })
  }

  render() {
    return (
      <>
        <CounterDisplay count={this.state.count}/>
        <button onClick={this.handleCounterIncrement}>Increment</button>
      </>
    );
  }
}

export default Counter;