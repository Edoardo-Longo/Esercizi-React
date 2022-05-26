import React from "react";
import HelloWorld from "./Hello";

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    <HelloWorld/>
                </h1>
            </div>
        )
    }
}

export default App