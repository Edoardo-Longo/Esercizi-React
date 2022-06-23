import React from "react";

class UncontrolledLogin extends React.Component{

    eventHandler = (event) =>{
        const username = event.target.elements.text.value
        const password = event.target.elements.password.value
        const check = event.target.elements.check.checked

        console.log(`${username}, ${password}, ${check}`)
    }

    render(){
        return(
            <>
            <form onSubmit={this.eventHandler}>
                <input type='text' name="text"></input>
                <input type='password' name="password"></input>
                <input type='checkbox' name="check"></input>
            <button type="submit">Log In</button>
            </form>
            <button>Reset</button>
            </>
        )
    }
}
export default UncontrolledLogin