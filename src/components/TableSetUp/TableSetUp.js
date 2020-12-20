import React, { useState, useEffect } from "react";
import TableOf4 from "./TableType/TableOf4";
import TableOf2 from "./TableType/TableOf2";
import TableOf6 from "./TableType/TableOf6";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css';
const getAllEndPoint = 'http://localhost:8080/students/'

export default function TableSetUp() {
  const [reservedTables, setReservedTables] = useState([]);
  const [bookedTables, setBookedTables] = useState([])

  

  return (
      <div >
          <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Send me a notice of the reservation" />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg" disabled>
                  Submit
              </Button>
          </Form>
          <br/>
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
      </div>
  );
}
