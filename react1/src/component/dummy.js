import React from "react";
import Navbar from "./Navbar";
class App extends React.Component {
  render() {
    //Dought//
    return;
    <Navbar />;
  }
}
export default App;
    



import React from "react";
import ReactDOM from "react-dom";

let Navbar = () => {
  return (
    <nav className="navbar navbar-nav bg-dark text-white navbar-expand-lg">
      <a href="#" className="navbar-brand">
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
};
export default Navbar;
