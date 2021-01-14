import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';
import TableGeneral from '../TableType/TableGeneral';
const getAvailableTable = 'http://localhost:8989/users/tables/'

export default function TableSetUp(props) {
  const [tables, setTables] = useState([]); 
  let bookedTables = []
  let allTables = [
    {
      id: 1,
      status: 'unavailable'
    },
    {
      id: 2,
      status: 'unavailable'
    },
    {
      id: 3,
      status: 'unavailable'
    },
    {
      id: 4,
      status: 'unavailable'
    },
    {
      id: 5,
      status: 'unavailable'
    },
    {
      id: 6,
      status: 'unavailable'
    },
    {
      id: 7,
      status: 'unavailable'
    },
    {
      id: 8,
      status: 'unavailable'
    },
    {
      id: 9,
      status: 'unavailable'
    },
    {
      id: 10,
      status: 'unavailable'
    },
    {
      id: 11,
      status: 'unavailable'
    },
    {
      id: 12,
      status: 'unavailable'
    },
    {
      id: 13,
      status: 'unavailable'
    },
    {
      id: 14,
      status: 'unavailable'
    }
  ]

  useEffect(() => { 
    drawTable(  )
    loadTable()
  }, []);

  const loadTable = () => {
    fetch(getAvailableTable + props.date)
      .then(response => response.json())
      .then(data => {
        for(var i = 0; i < data.length; i ++){
          if(data[i].id < 14){
            allTables[data[i].id].status = 'available'
          }
        }  
      })
      .then(() => drawTable());
  }



  const drawTable = () => {
    let tables = []
    for( var i = 0; i <= 13; i ++) {
      tables.push(<TableGeneral index={i + 1} status={allTables[i].status} bookTable={props.bookTable} unbookTable={props.unbookTable}/>);
    }
    setTables(tables)
  }

  return (
    <div id="floorPlan" className="mb-4 text-center">
      {tables}
    </div>
  );
}
