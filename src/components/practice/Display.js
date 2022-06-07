import React from "react";
import Information from "././Information.js";

const Display = ({ info }) => {
  const { name, email, address } = info;
  console.log(info);
  return (
    <div>
      <h1>{name}</h1>
      {console.log("Hello")}
    </div>
  );
};

export default Display;
