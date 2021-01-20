import React, {useState} from "react";

function TableOf4(props) {
  const {bookTable, unbookTable, tableNum, status} = props
  const [tableStatus, setTableStatus] = useState('available');

  const clickHandle = () => {
    if(props.status !== 'unavailable'){
      if (tableStatus === 'booked'){
        unbookTable(tableNum)
        setTableStatus('available')
      }      
      if (tableStatus === 'available'){
        setTableStatus('booked')
        bookTable(tableNum)
      }
    }
  }

  return (
    <div id={`tableOf4_${tableNum}`} className = {status === 'unavailable' ? status : tableStatus} onClick={() => clickHandle()}>
      <h1>Table of 4 No.{tableNum}</h1>
    </div>
  );
}

export default TableOf4;
