import React from "react";

class Login extends React.Component{

    state = {
        text : '',
        password: '',
        check: false
    }

    controlHandler = (event) => {

        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const check = event.target.checked

        this.setState({
            [name] : type === 'checkbox' ? check : value
        })
    }

    render(){
        return(
            <>
            <form>
                <input type='text' name="text" value={this.state.text} onChange={this.controlHandler}></input>
                <input type='password' name="password" value={this.state.password} onChange={this.controlHandler}></input>
                <input type='checkbox' name="checkbox" checked onChange={this.controlHandler}></input>
            </form>
            </>
        )
    }
}
export default Login