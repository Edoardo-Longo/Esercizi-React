import React from 'react'

class ClickTracker extends React.Component{

    state = {
        name: ''
    }

    handlerButtonIncrement = (event) => {
        console.log(event)
        this.setState((state) => {
            return { name: event.target.innerText }
        })
    }

    render(){
        return(
            <div>
                <h1> Pulsante clickato: {this.state.name}</h1>
                <button name="1" onClick={this.handlerButtonIncrement}>1</button>
                <button name="2" onClick={this.handlerButtonIncrement}>2</button>
                <button name="3" onClick={this.handlerButtonIncrement}>3</button>

            </div>
        )
    }
}

export default ClickTracker