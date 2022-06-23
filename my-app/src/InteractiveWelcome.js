import React from 'react'
import Welcome from './Welcome'

class InteractiveWelcome extends React.Component{

    state = {
        name: ''
    }

    eventInputChange = (event) =>{
        console.log(event)
        this.setState((state) => {
            return { name: state.name = event.target.value }
        })
    }

    render(){
        return(
            <>
            <form>
                <input type='text' value={this.state.name} onChange={this.eventInputChange}></input>
                <Welcome name={this.state.name}/>
            </form>
            </>
        )
    }
}

export default InteractiveWelcome