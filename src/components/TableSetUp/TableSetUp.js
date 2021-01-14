import React, { useState, useEffect } from "react";
import DrawTable from './DrawTable/DrawTable';
import './styles.css';
import ReservationForm from './Forms/ReservationForm';
const getAllEndPoint = 'http://localhost:8080/students/'

export default function TableSetUp() {
    const [reservedTables, setReservedTables] = useState([]);
    const [bookedTables, setBookedTables] = useState([])



    return (
        <div id='anchor' style={{ width: '50rem' }}>
            <ReservationForm/>
        </div>
    );
}
