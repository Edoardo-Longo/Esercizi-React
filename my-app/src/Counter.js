import React from "react";
import CounterDisplay from "./CounterDispaly";

class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props){
    super(props)
    setInterval(()=>{
        this.setState({
            count: this.state.count + this.props.incrementBy
        })
    },this.props.interval)
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
