import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import DrawTable from '../DrawTable/DrawTable';

const adminEndpoint = 'http://54.214.208.194:8989/users/reservations'

export default function ReservationForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [emailName, setEmailName] = useState('')
    const [emailDomain, setEmailDomain] = useState('')
    const [note, setNote] = useState('')
    const [bookTables, setBookTables] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [date, setNewDate] = useState(new Date())

    const setDate = (newDate) => {
        setNewDate(date => newDate)
    }

    const bookTable = (tableId) => {
        setDisabled(false)
        setBookTables((bookTables => ([...bookTables, tableId])))
    }

    const unbookTable = (tableId) => {
        // console.log(bookTables)
        // setBookTables(bookTables.filter(item => item !== tableId))
        // console.log(bookTables)
        
        setBookTables((bookTables => {
            console.log(bookTables)
            let index = bookTables.indexOf(tableId)
            if (index > -1) {
                bookTables.splice(index, 1)
                if (bookTables.length === 0) {
                    setDisabled(true)
                }
                console.log(bookTables)
                return bookTables.stringify
            }
        }))
    }

    const sendForm = () => {
        console.log(bookTables)
        // bookTables.forEach(tableId => {
        //     createReservation(tableId);
        // })
        // window.location.reload()
    }

    const createReservation = (tableId) => {
        const newReservation = convertTimeField(tableId)
        fetch(adminEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReservation)
        })
            .then(res => res.text())
    }

    const convertTimeField = (tableId) => {
        let newReservation = { name: name, email:`${emailName}@${emailDomain}`, phone: phone, tableId: tableId, startTime: date, note: note }
        const { startTime } = newReservation
        if (startTime ) {
            const convertedTime = new Date(newReservation.startTime)
            convertedTime.setSeconds(0)
            convertedTime.setMilliseconds(0)
            convertedTime.setHours(convertedTime.getHours() +7)
            newReservation = {
                ...newReservation,
                "startTime": new Date(convertedTime).toJSON()
            }
        }
        return newReservation
    }
    console.log(bookTables);

    return (
        <div>
            <h1>{bookTables}</h1>
            <h1>Book a table here!</h1>
            <DrawTable bookTable={bookTable} unbookTable={unbookTable} date={date} setDate={setDate} />
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
                        onChange={e => setEmailName(e.target.value)}
                    />
                </Col>
                    <Col >
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control placeholder="Domain" onChange={e => setEmailDomain(e.target.value)} />
                        </InputGroup>
                    </Col></Row>
            </Form.Group>
            <Form.Group controlId="formBasicDate">
                <Form.Label>Note</Form.Label>
                <Form.Control as="textarea" placeholder="" onChange={e => setNote(e.target.value)} />
            </Form.Group>
            <Button type="button" size="lg" disabled={disabled} onClick={()=>sendForm()}>
                Submit
            </Button>
        </div>
    );
}
