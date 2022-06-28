import React from 'react'

class Container extends React.Component{
    render(){
        return(
            <h2 className="container">
                <div className='container-title'>{this.props.title}</div>
                {this.props.children}
            </h2>
        )
    }
}

export default Container