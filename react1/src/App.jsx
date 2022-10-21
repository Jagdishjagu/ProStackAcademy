import React from "react";
import Navbar from "./Navbar/Navbar";
import Employee from "./Employees/Employee";
import Message from "./Messages/Message";

let App = () => {
  return (
    <div>
      <Navbar />
      <Employee />
      <Message />

      <hr />
    </div>
  );
};
export default App;
