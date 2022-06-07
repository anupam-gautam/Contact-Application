import React from "react";
import Display from "././Display.js";

const Information = ({ info }) => {
  const filterData = info.filter((info) => info.address.includes("Dh"));
  console.log(filterData);

  const sortData = info.sort((a, b) => a.id - b.id);
  console.log(sortData);

  return (
    <div>
      {info.map(({ name, email }, i) => (
        <div key={i}>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      ))}
    </div>
  );
};

export default Information;
