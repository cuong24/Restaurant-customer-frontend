import React, {useState} from "react";

function TableOf2(props) {
  const [tableStatus, setTableStatus] = useState('available');

  const bookTable = () => {
    if(props.status !== 'unavailable'){
      if (tableStatus === 'booked'){
        setTableStatus('available')
        props.unbookTable(props.tableNum + 5);
      }      
      if (tableStatus === 'available'){
        setTableStatus('booked')   
        props.bookTable(props.tableNum + 5);
      }
    }
  }

  return (
    <div id={`tableOf2_${props.tableNum}`} className = {props.status === 'unavailable' ? props.status : tableStatus} onClick={() => bookTable()}>
      <h1> Table of 2 No.{props.tableNum} </h1>
    </div>
  );
}

export default TableOf2;
