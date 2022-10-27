import React, { Component } from "react";

class Digital extends Component {
  constructor(props) {
    super(props);
    this.state = { currenttime: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ currenttime: new Date().toLocaleTimeString() });
    }, [1000]);
  }
  render() {
    return (
      <div>
        <h1>Time:{this.state.currenttime}</h1>
      </div>
    );
  }
}

export default Digital;
