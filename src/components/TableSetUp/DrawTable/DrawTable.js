import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import DateTimePicker from '../../DateTime';
import '../styles.css';
import TableGeneral from '../TableType/TableGeneral';
const getAvailableTable = 'http://54.214.208.194:8989/users/tables'

export default function DrawTable(props) {
  const { date, setDate } = props
  const [tables, setTables] = useState([]);
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
    drawTable()
    loadTable()
  }, []);

  const loadTable = (newDate) => {
    if (newDate) {
      fetch(`${getAvailableTable}/${newDate.toISOString().substring(0, 10) + " " + newDate.toISOString().substring(11, 16) + ":00"}`)
        .then(response => response.json())
        .then(data => {
          for (var i = 0; i < data.length; i++) {
              allTables[data[i].id - 1].status = 'available'
          }
        })
        .then(() => drawTable());
    }
  }

  const redrawTable = (newDate) => {
    setDate(newDate)
    loadTable(newDate)
  }

  const drawTable = () => {
    let tables = []
    for (var i = 0; i <= 13; i++) {
      tables.push(<TableGeneral index={i + 1} status={allTables[i].status} bookTable={props.bookTable} unbookTable={props.unbookTable} />);
    }
    setTables(tables)
  }

  return (
    <div>
      <Form.Group controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <DateTimePicker
          startTime={date}
          setDate={redrawTable}
        />
      </Form.Group>
      <div id="floorPlan" className="mb-4 text-center">
        {tables}
      </div>
    </div>

  );
}
