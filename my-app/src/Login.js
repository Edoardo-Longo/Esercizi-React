import React from "react";
class Login extends React.Component{
    state = {
        text : '',
        password: '',
        check: false,
        disabled: true
    }
    controlHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const check = event.target.checked
        console.log(check)
        this.setState({
            [name] : type === 'checkbox' ? check : value,
            disabled : this.state.text !== '' || this.state.password !== '' ? false : true
        })
    }
    onLogin = () => {
        console.log(this.state.text)
        console.log(this.state.password)
        console.log(this.state.check)
    }

    reset = () => {
        this.setState({
            text : '',
            password : '',
            check : false,
            disabled: true
        })
    }

    render(){

        const MyStyle={
            backgroundColor: this.state.password.length < 8 ? '#ff0000' : '#00ff00'
        }

        return(
            <>
            <form>
                <input type='text' name="text" value={this.state.text} onChange={this.controlHandler}></input>
                <input type='password' name="password" value={this.state.password} onChange={this.controlHandler}></input>
                <input type='checkbox' name="check" value={this.state.check} checked={this.state.check} onChange={this.controlHandler}></input>
            </form>
            <button disabled={this.state.disabled} onClick={this.onLogin} style={MyStyle}>Log In</button>
            <button onClick={this.reset}>Reset</button>
            </>
        )
    }
}
export default Login