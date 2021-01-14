import React from "react";
import TableOf2 from "./TableOf2";
import TableOf4 from "./TableOf4";
import TableOf6 from "./TableOf6";

function TableGeneral(props) {

    if(props.index <=3){
        return (
            <TableOf4 tableNum={props.index} status={props.status} bookTable={props.bookTable} unbookTable ={props.unbookTable}/>
          );
    } 
    if (props.index <= 5 && props.index >= 4){
        return ( 
            <TableOf6 tableNum={props.index} status={props.status} bookTable={props.bookTable} unbookTable ={props.unbookTable}/>
          );
    }
    if (props.index >= 6 && props.index <= 11){
        return ( 
            <TableOf2 tableNum={props.index - 5} status={props.status} bookTable={props.bookTable} unbookTable ={props.unbookTable}/>
          );
    }
    return (<TableOf4 tableNum={props.index - 8} status={props.status} bookTable={props.bookTable} unbookTable ={props.unbookTable}/>);
}

export default TableGeneral;