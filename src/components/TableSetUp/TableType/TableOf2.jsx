import React, {useState} from "react";

function TableOf2(props) {
  const {bookTable, unbookTable, status, tableNum} = props
  const [tableStatus, setTableStatus] = useState('available');

  const handleClick = () => {
    if(props.status !== 'unavailable'){
      if (tableStatus === 'booked'){
        setTableStatus('available')
        unbookTable(tableNum);
      }      
      if (tableStatus === 'available'){
        setTableStatus('booked')   
        bookTable(tableNum);
      }
    }
  }

  return (
    <div id={`tableOf2_${tableNum}`} className = {status === 'unavailable' ? status : tableStatus} onClick={() => handleClick()}>
      <h1> Table of 2 No.{tableNum} </h1>
    </div>
  );
}

export default TableOf2;
