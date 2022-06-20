import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {

  state = {
    count: this.props.initialValue,
  }
  
  componentDidMount() {
    setInterval(() => {
        this.setState((state) => {
            return {  count: this.state.count + this.props.incrementBy };
        })
    }, this.props.interval)
}

  render() {
    return (
      <>
        <CounterDisplay count={this.state.count}/>
      </>
    );
  }
}

export default Counter;