import React from "react";
import Navbar from "./Navbar/Navbar";
import Employee from "./Employees/Employee";
import Message from "./Messages/Message";
import Product from "./Product/Product";
import Digital from "./digital/Digital";
import Form from "./Form/Form";

let App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <br />
      <Digital />
      <hr />
      <br />
      <Employee />
      <hr />
      <br />
      <Message />
      <hr />
      <br />
      <Product />
      <hr />
      <br />
      <Form />
    </div>
  );
};
export default App;
