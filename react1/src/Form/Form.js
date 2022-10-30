import React, { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  updateHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Form Validation</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="container-fluid">
          <div className="rows">
            <div className="col-md-4">
              <div className="form-group">
                <form onSubmit={this.submitHandler}>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.updateHandler}
                    name="name"
                    placeholder="Username"
                  />
                  <br />

                  <input
                    type="text"
                    className="form-control"
                    onChange={this.updateHandler}
                    placeholder="Email"
                    name="email"
                  />
                  <br />

                  <input
                    type="text"
                    className="form-control"
                    onChange={this.updateHandler}
                    placeholder="Password"
                    name="password"
                  />
                  <br />

                  <input type="Submit" className="btn btn-success" />
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
