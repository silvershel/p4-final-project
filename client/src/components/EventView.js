import React, { useState } from "react";

function EventView({ user, event, onEditClick, onAttendClick }) {
    

    return(
        <div>
            <h2>{event.name}</h2>
            <p>Organized by:</p>
            <p>Event Type</p>
            <p>Start Date: {event.start_date}</p>
            <p>End Date: {event.end_date}</p>
            <p >Event Website: {event.website_link}</p>
            <button>View Event</button>
            <button onClick={onAttendClick}>Attend Event</button>
            {user.id === event.user_id ? <button onClick={onEditClick}>Edit Event</button> : null}
        </div>
    )
}

export default EventView;