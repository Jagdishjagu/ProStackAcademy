import React, { useState } from "react";

function Usestate() {
  let [msg, setmsg] = useState("Hello");

  let gmHandler = () => {
    setmsg("Hey Good Morning to function concept");
  };
  let gnHandler = () => {
    setmsg("Hey Good Night to function concept");
  };
  return (
    <div>
      <h1>Function use concept</h1>
      <h3>{msg}</h3>
      <button onClick={gmHandler}>GM</button>&nbsp;&nbsp;
      <button onClick={gnHandler}>GN</button>
    </div>
  );
}

export default Usestate;
