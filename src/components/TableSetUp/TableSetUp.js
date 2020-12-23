import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DrawTable from './DrawTable/DrawTable';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles.css';
const getAllEndPoint = 'http://localhost:8080/students/'

export default function TableSetUp() {
    const [reservedTables, setReservedTables] = useState([]);
    const [bookedTables, setBookedTables] = useState([])



    return (
        <div id='anchor' style={{ width: '50rem' }}>
            <Form>
                <Row>
                    <Col><
                        Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter phone number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>

                    <Row><Col>
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                            Name
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                        />
                    </Col>
                        <Col >
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control placeholder="Username" />
                            </InputGroup>
                        </Col></Row>

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
            <br />
            <DrawTable></DrawTable>
        </div>
    );
}
