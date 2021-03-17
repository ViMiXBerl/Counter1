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
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    let valid = this.state.index;

    if (valid < 0) {
      valid = 0;
      <p className="App-text">{valid}</p>;
    } else {
    }
    return (
      <div className="App-counter">
        <p className="App-text">{valid}</p>
        <div className="App-button">
          <button className="App-plus" onClick={this.handleClick}>
            <img src={plus} alt={"plus"}></img>
          </button>
          <button className="App-change" onClick={this.handleClickChange}>
            <img src={change} alt={"change"}></img>
          </button>
          <button className="App-minus" onClick={this.handleClickMinus}>
            <img src={minus} alt={"minus"}></img>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
