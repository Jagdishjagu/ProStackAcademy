import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "Hey login and enjoy" };
  }

  render() {
    return (
      <div>
        <h1>Form Validation</h1>
        <h3>Form Message:{this.state.msg}</h3>
        <div className="container">
          <div className="rows">
            <div className="col-md-4">
              <div className="form-group">
                <form>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  ></input>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Password"
                  ></input>
                  <br />
                  <button className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
