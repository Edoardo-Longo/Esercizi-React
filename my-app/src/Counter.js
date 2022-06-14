import React from "react";

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
        <h1>Count: {this.state.count}</h1>
      </>
    );
  }
}

export default Counter;
