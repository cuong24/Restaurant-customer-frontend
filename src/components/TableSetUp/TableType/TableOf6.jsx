import React from "react";

function TableOf6(props) {
  return (
    <div id={`tableOf6_${props.tableNum}`}>
      <h1>Table of 6 No.{props.tableNum}</h1>
    </div>
  );
}

export default TableOf6;
