import React from "react";

function EventView({ onEditClick, event }) {

    return(
        <div>
            <h2>{event.name}</h2>
            <p>Organized by:</p>
            <p>Event Type</p>
            <p>Start Date: {event.start_date}</p>
            <p>End Date: {event.end_date}</p>
            <p >Event Website: {event.website_link}</p>
            <button onClick={onEditClick}>Edit Event</button>
        </div>
    )
}

export default EventView;