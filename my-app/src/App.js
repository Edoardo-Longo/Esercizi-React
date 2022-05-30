import React from "react";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Edoardo" age={23}/>
      </div>
    );
  }
}

export default App;
