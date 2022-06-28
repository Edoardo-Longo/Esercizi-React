import React from 'react'

class Todolist extends React.Component {
    
    state = {
        item: [
            'Latte', 'Pane', 'Carne', 'Pesce'
        ],
        addItems: ''
    }

    eventHandler = (event) => {
        this.setState((state) => {
            return { addItems: state.addItems = event.target.value }
        })
    }

    eventSaver = () => {
        this.setState((state) => {
            return { item: state.item.concat(this.state.addItems) }
        })
    }


    render() {
        return (
            <div>
                <ul>{this.state.item.map((item, index) => (<li key={index}>{item}</li>))}</ul>
                <input type="text" value={this.state.addItems} onChange={this.eventHandler} />
                <button onClick={this.eventSaver}>Aggiungi</button>
            </div>
        )
    }
}

export default Todolist