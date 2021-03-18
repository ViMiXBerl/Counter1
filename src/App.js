import change from "./exchange.svg";
import plus from "./plus-cross.svg";
import minus from "./minus.svg";

import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleClick = () => {
    this.setState({
      index: ++this.state.index,
    });
  };
  handleClickChange = () => {
    this.setState({
      index: 0,
    });
  };

  handleClickMinus = () => {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <div className="App-counter">
        <p className="App-text">{this.state.index}</p>
        <div className="App-button">
          <button className="App-plus" onClick={this.handleClick}>
            +
          </button>
          <button className="App-change" onClick={this.handleClickChange}>
            0
          </button>
          <button className="App-minus" onClick={this.handleClickMinus}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default App;
