import React, { Component } from "react";

class Messageone extends Component {
  state = {
    msg: "Hello",
  };
  updateHandler = (value) => {
    this.setState({ msg: value });
  };
  render() {
    return (
      <div>
        <h1>Binding Concept</h1>
        <hr />
        <h3>New Message:{this.state.msg}</h3>
        <button onClick={this.updateHandler.bind(this, "Good Morning")}>
          Gm
        </button>
        <button onClick={this.updateHandler.bind(this, "Hello Good Afternoon")}>
          Ga
        </button>
        <button onClick={this.updateHandler.bind(this, "Hello Good Evening")}>
          Ge
        </button>
        <button onClick={this.updateHandler.bing(this, "Hello Good Night")}>
          Gn
        </button>
      </div>
    );
  }
}

export default Messageone;
