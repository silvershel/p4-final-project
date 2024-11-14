import React, {useState} from "react";

function EventView({ onEditClick, event }) {
    return(
        <div>
            <p>{event.name}</p>
            <p>Organized by</p>
            <p>Event Type</p>
            <p>Start Date</p>
            <p>End Date</p>
            <p>Event Website</p>
            <button onClick={onEditClick}>Edit Event</button>
        </div>
    )
}

export default EventView;