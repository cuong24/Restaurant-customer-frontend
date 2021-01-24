import React, { useState } from "react";
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
    const [nameError, setNameError] = useState("")
    const [tableError, setTableError] = useState("No table selected")
    const [phoneError, setPhoneError] = useState("")
    const [startTimeError, setStartTimeError] = useState("")

    const setDate = (newDate) => {
        setNewDate(date => newDate)
    }

    const bookTable = (tableId) => {
        setTableError("")
        setDisabled(false)
        setBookTables((bookTables => ([...bookTables, tableId])))
    }

    const unbookTable = (tableId) => {
        setBookTables((bookTables => {
            let index = bookTables.indexOf(tableId)
            if (index > -1) {
                bookTables.splice(index, 1)
                if (bookTables.length === 0) {
                    setTableError("No table selected")
                    setDisabled(true)
                }
                return bookTables
            } else {
                return bookTables
            }
        }))
    }

    const sendForm = async () => {
        if (validate()) {
            for (const tableId of bookTables) {
                const newReservation = convertTimeField(tableId)
                await fetch(adminEndpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newReservation)
                })
                    .then(res => res.text())
            }
            alert("Your tables have been successfully reserved!")
            window.location.reload()
        } else {
            alert("Fail to reserve your tables :< Please try again")
        }
    }

    const validate = () => {
        resetError()
        const phoneNoRegex = /^\d{10,20}$/
        const nameRegex = /[A-Za-z]+/
        let valid = 1
        if (!phone.match(phoneNoRegex)){
            setPhoneError("Phone must have 10 - 20 digits")
            valid = 0
        }
        if (!name.match(nameRegex)){
            setNameError("Name must not be empty.")
            valid = 0
        }
        if (date === null) {
            setStartTimeError("Start time must have format MM/DD/YYYY, HH:MM AM/PM")
            valid = 0
        }
        return valid
    }

    const resetError = () => {
        setNameError("")
        setPhoneError("")
        setStartTimeError("")
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

    return (
        <div className="reservation">
            <h1 className="reservationHeader"><em>Book a table here! Click click!!</em></h1>
            <div className = { "errorLog" }>{ startTimeError }</div>
            <DrawTable bookTable={bookTable} unbookTable={unbookTable} date={date} setDate={setDate} />
            <Row>
                <Col><Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <div className = { "errorLog" }>{ nameError }</div>
                    <Form.Control type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <div className = { "errorLog" }>{ phoneError }</div>
                        <Form.Control type="number" placeholder="Enter phone number" onChange={e => setPhone(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Row><Col>
                    <Form.Label htmlFor="inlineFormInput" srOnly/>
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
            <div className = { "errorLog" }>{tableError}</div>
        </div>
    );
}
