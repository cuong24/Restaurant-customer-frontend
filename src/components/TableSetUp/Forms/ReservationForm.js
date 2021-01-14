import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import DrawTable from '../DrawTable/DrawTable';

export default function ReservationForm(props) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [emailName, setEmailName] = useState('')
    const [emailDomain, setEmailDomain] = useState('')
    let bookTables = []
    const [note, setNote] = useState('')
    const [date, setDate] = useState('')

    const bookTable = (x) => {
        bookTables = [...bookTables, x]
        console.log(bookTables);
    }

    const unbookTable = (x) => {
        let index = bookTables.indexOf(x);
        if (index > -1) {
            bookTables.splice(index, 1);
        }
        console.log(bookTables);
    }

    const sendForm = () => {

    }

    return (
        <Form onSubmit={() => sendForm()}>
            <Row>
                <Col><Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter phone number" onChange={e => setPhone(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Row><Col>
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Email"
                        onChange = {e => setEmailName(e.target.value)}
                    />
                </Col>
                    <Col >
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control placeholder="Domain" onChange = {e => setEmailDomain(e.target.value)}/>
                        </InputGroup>
                    </Col></Row>
            </Form.Group>
            <Form.Group controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicDate">
                <Form.Label>Note</Form.Label>
                <Form.Control as="textarea" placeholder="" onChange={e => setNote(e.target.value)} />
            </Form.Group>
            <DrawTable bookTable={bookTable} unbookTable={unbookTable} date={date}/>
            <Button variant="primary" type="submit" size="lg" disabled>
                Submit
            </Button>
        </Form>
    );
}
