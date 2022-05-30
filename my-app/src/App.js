import React from "react";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={<strong>Edoardo</strong>} age={23}/>
      </div>
    );
  }
}

export default App;
