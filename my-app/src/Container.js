import React from 'react'

class Container extends React.Component{
    render(){
        return(
            <h2 className="container">
                {this.props.children}
            </h2>
        )
    }
}

export default Container