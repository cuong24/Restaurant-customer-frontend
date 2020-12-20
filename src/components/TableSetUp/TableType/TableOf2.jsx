import React from "react";

function TableOf2(props) {
  return (
    <div id={`tableOf2_${props.tableNum}`}>
      <h1> Table of 2 No.{props.tableNum} </h1>
    </div>
  );
}

export default TableOf2;
