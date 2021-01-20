import React, {useState} from "react";

function TableOf6(props) {
  const {bookTable, unbookTable, tableNum, status} = props
  const [tableStatus, setTableStatus] = useState('available');

  const clickHandle = () => {
    if(props.status !== 'unavailable'){
      if (tableStatus === 'booked'){
        setTableStatus('available')
        unbookTable(tableNum)
      }      
      if (tableStatus === 'available'){
        setTableStatus('booked')
        bookTable(tableNum)
      }
    }
  }

  return (
    <div id={`tableOf6_${tableNum}`} className = {status === 'unavailable' ? status : tableStatus} onClick={() => clickHandle()}>
      <h1>Table of 6 No.{tableNum}</h1>
    </div>
  );
}

export default TableOf6;
