import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello,{this.props.name}</h2>
        {(this.props.age > 18 && this.props.age < 65) && this.props.name === 'John' && <Age age={this.props.age} />}
      </div>
    );
  }
}

export default Welcome;
