import React from "react";
import './styles.css';
import ReservationForm from './Forms/ReservationForm';

export default function TableSetUp() {
    return (
        <div id='anchor' style={{ width: '50rem' }}>
            <ReservationForm/>
        </div>
    );
}
