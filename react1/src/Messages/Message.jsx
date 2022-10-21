import React, { Component } from "react";

class Message extends Component {
  state = { msg: "Hello" };
  gmHandler = () => {
    this.setState({ msg: "Good morning had your coffee" });
  };
  gaHandler = () => {
    this.setState({ msg: "Good afternoon had your lunch" });
  };
  geHandler = () => {
    this.setState({ msg: "Good evening had your snacks" });
  };
  gnhandler = () => {
    this.setState({ msg: "Good night takecare" });
  };
  render() {
    return (
      <div>
        <h1>Binding Basic Concept</h1>
        <hr />
        <h3>Message:{this.state.msg}</h3>
        <button onClick={this.gmHandler}>GM</button> &nbsp;
        <button onClick={this.gaHandler}>GA</button> &nbsp;
        <button onClick={this.geHandler}>GE</button> &nbsp;
        <button onClick={this.gnhandler}>GN</button> &nbsp;
      </div>
    );
  }
}

export default Message;
