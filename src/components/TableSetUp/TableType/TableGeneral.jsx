import React from "react";
import TableOf2 from "./TableOf2";
import TableOf4 from "./TableOf4";
import TableOf6 from "./TableOf6";

function TableGeneral(props) {
    const {index, status, bookTable, unbookTable} = props
    if(index <=3){
        return (
            <TableOf4 tableNum={index} status={status} bookTable={bookTable} unbookTable ={unbookTable}/>
          );
    } 
    if (index <= 5 && index >= 4){
        return ( 
            <TableOf6 tableNum={index} status={status} bookTable={bookTable} unbookTable ={unbookTable}/>
          );
    }
    if (index >= 6 && index <= 11){
        return ( 
            <TableOf2 tableNum={index} status={status} bookTable={bookTable} unbookTable ={unbookTable}/>
          );
    }
    return (<TableOf4 tableNum={index} status={status} bookTable={bookTable} unbookTable ={unbookTable}/>);
}

export default TableGeneral;