import React, { useState, useEffect } from "react";
import TableOf4 from "../TableType/TableOf2";
import TableOf2 from "../TableType/TableOf4";
import TableOf6 from "../TableType/TableOf6";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles.css';
const getAllEndPoint = 'http://localhost:8080/students/'

export default function TableSetUp() {
  const [reservedTables, setReservedTables] = useState([]);
  const [bookedTables, setBookedTables] = useState([]);


  return (
        <div id="floorPlan" className="mb-4 text-center">
            <TableOf4 className="bedroom" tableNum={1} />
            <TableOf4 className="bedroom" tableNum={2} />
            <TableOf4 className="bedroom" tableNum={3} />
            <TableOf6 className="bedroom" tableNum={1}/>
            <TableOf6 className="bedroom" tableNum={2}/>
            <TableOf2 className="bedroom" tableNum={1}/>
            <TableOf2 className="bedroom" tableNum={2}/>
            <TableOf2 className="bedroom" tableNum={3}/>
            <TableOf2 className="bedroom" tableNum={4}/>
            <TableOf2 className="bedroom" tableNum={5}/>
            <TableOf2 className="bedroom" tableNum={6}/>
            <TableOf4 className="bedroom" tableNum={4} />
            <TableOf4 className="bedroom" tableNum={5} />
            <TableOf4 className="bedroom" tableNum={6} />
        </div>
);
}
