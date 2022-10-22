import React from "react";
import Navbar from "./Navbar/Navbar";
import Employee from "./Employees/Employee";
import Message from "./Messages/Message";
import Product from "./Product/Product";

let App = () => {
  return (
    <div>
      <Navbar />
      <Employee />
      <Message />
      <hr />
      <Product />
    </div>
  );
};
export default App;
