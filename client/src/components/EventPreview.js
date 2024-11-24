import React, { useState } from "react";
import { Link } from "react-router-dom";
import AttendForm from "./AttendForm";

function EventPreview({ user, event }) {
    const [isAttending, setIsAttending] = useState(false)

    function handleAttendClick() {
        setIsAttending(prevState => !prevState)
    }

    if (isAttending) {
        return (
            <AttendForm 
                onAttendClick={handleAttendClick} 
            />
        );
    } else {
        return (
            <div>
                <h2>{event.name}</h2>
                <p>Organized by:</p>
                <p>{event.start_date} – {event.end_date}</p>
                <button onClick={handleAttendClick}>Attend Event</button>
                <Link to={`/events/${event.id}`}>
                    <button>View Details</button>
                </Link>
            </div>
        );
    }
}

export default EventPreview;