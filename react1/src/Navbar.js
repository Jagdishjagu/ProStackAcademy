import React from "react";
import ReactDOM from "react-dom";
import Image from "./images/img2.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="#" className="navbar-brand ">
          Welcome to React
        </a>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-list">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
