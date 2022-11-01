import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vivo Y75",
      img: "https://m.media-amazon.com/images/I/61AwGDDZd3L._SX522_.jpg",
      price: 10000,
      qty: 1,
    };
  }
  increHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };
  decreHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };

  render() {
    return (
      <div>
        <h1>Product Sales</h1>

        <div className="rows">
          <div className="col-md-12">
            <table className="table ">
              <thead className="bg-success text-white">
                <tr>
                  <th>ProductName</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Tatalcost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.name}</td>
                  <td>
                    <img src={this.state.img} alt="My Logo" width={80} />
                  </td>
                  <td>{this.state.price}</td>
                  <td>
                    <i
                      className="fa fa-minus-circle mr-2 "
                      onClick={this.decreHandler}
                    ></i>
                    {this.state.qty}
                    <i
                      className="fa fa-plus-circle ml-2 "
                      onClick={this.increHandler}
                    ></i>
                  </td>
                  <td>{this.state.qty * this.state.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
