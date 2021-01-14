import React, {useState} from "react";

function TableOf6(props) {
  const [tableStatus, setTableStatus] = useState('available');

  const bookTable = () => {
    if(props.status !== 'unavailable'){
      if (tableStatus === 'booked'){
        setTableStatus('available')
      }      
      if (tableStatus === 'available'){
        setTableStatus('booked')
      }
    }
  }

  return (
    <div id={`tableOf6_${props.tableNum}`} className = {props.status === 'unavailable' ? props.status : tableStatus} onClick={() => bookTable()}>
      <h1>Table of 6 No.{props.tableNum}</h1>
    </div>
  );
}

export default TableOf6;
