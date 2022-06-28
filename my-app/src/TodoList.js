import React from "react";

class Todolist extends React.Component {
  state = {
    item: ["Latte", "Pane", "Carne", "Pesce"],
    addItems: "",
  };

  eventHandler = (event) => {
    this.setState((state) => {
      return { addItems: (state.addItems = event.target.value) };
    });
  };

  adder = () => {
    this.setState((state) => {
      return { item: state.item.concat(this.state.addItems), addItems: "" };
    });
  };

  remover = (item) => {
    this.setState((state) => {
      const array = state.item.filter((todo) => {
        return todo !== item;
      });
      return { item: (state.item = array) };
    });
  };

  reset = () => {
    this.setState({ item: ["Latte", "Pane", "Carne", "Pesce"] });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.item.map((item, index) => (
            <li key={index}>
              {item}
              <button
                key={index + "btn"}
                onClick={() => {
                  this.remover(item);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.addItems}
          onChange={this.eventHandler}
        />
        <button onClick={this.adder}>Aggiungi</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Todolist;
