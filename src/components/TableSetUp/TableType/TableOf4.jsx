import React from "react";

function TableOf4(props) {
  return (
    <div id={`tableOf4_${props.tableNum}`}>
      <h1>Table of 4 No.{props.tableNum}</h1>
    </div>
  );
}

export default TableOf4;
