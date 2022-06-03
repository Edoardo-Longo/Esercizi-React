import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello,{this.props.name}</h2>
        {this.props.age && <Age age={this.props.age} />}
      </div>
    );
  }
}

export default Welcome;
