import React, { Component } from "react";

class Message1 extends Component {
  state = {
    msg: "Hello",
  };
  updateHadler = (value) => {
    this.setState({ msg: value });
  };
  render() {
    return (
      <div>
        <h1>Binding Concept</h1>
        <hr />
        <h3>New Message:{this.state.msg}</h3>
        <button className={this.updateHadler.bind(this, "Hello Good Morning")}>
          Gm
        </button>
        <button
          className={this.updateHadler.bind(this, "Hello Good Afternoon")}
        >
          Ga
        </button>
        <button className={this.updateHadler.bind(this, "Hello Good Evening")}>
          Ge
        </button>
        <button className={this.updateHadler.bing(this, "Hello Good Night")}>
          Gn
        </button>
      </div>
    );
  }
}

export default Message1;
