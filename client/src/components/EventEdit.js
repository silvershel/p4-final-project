import React, {useState} from "react";

function EventEdit({ onViewClick }) {
    return(
        <div>
            <div>
                <label>Event Name:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Organized by:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Event Type:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Start Date:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>End Date:</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Event Website:</label>
                <input type="text"></input>
            </div>
            <button onClick={onViewClick}>Save Edits</button>
            <button>Delete Event</button>
        </div>
    )
}

export default EventEdit;