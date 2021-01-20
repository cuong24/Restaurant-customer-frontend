import React, { useState } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function DateTimePicker(props) {
    const [time, setTime] = useState(new Date());
    let { startTime, setDate } = props
    if (startTime) {
        const startTimeFormat = new Date(startTime)
        if (!time || startTimeFormat.getTime() !== time.getTime()) {
            setTime(startTimeFormat)
        }
    }

    return (
        <DatePicker
            selected={ time }
            onChange={ date => {
                setTime(date)
                setDate( date)
            } }
            showTimeSelect
            timeFormat="p"
            timeIntervals={15}
            dateFormat="Pp"
        />
    );
};