import React, { useState } from "react";

function EventEdit({ event, onViewClick, onUpdateEvent, onDeleteEvent }) {
    const [name, setName] = useState(event.name);
    const [startDate, setStartDate] = useState(event.start_date);
    const [endDate, setEndDate] = useState(event.end_date);
    const [websiteLink, setWebsiteLink] = useState(event.website_link);

    function handleSubmit(e) {
        e.preventDefault();
        const updatedEvent = {
            name: name,
            start_date: startDate,
            end_date: endDate,
            website_link: websiteLink,
          };
          console.log(updatedEvent);
        onUpdateEvent(event.id, updatedEvent)
        onViewClick()
    }

    function handleDelete() {
        onDeleteEvent(event.id);
    }

    return (
        <div>
            <h2>Edit Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Event Website</label>
                    <input
                        type="text"
                        name="websiteLink"
                        value={websiteLink}
                        onChange={(e) => setWebsiteLink(e.target.value)}
                    />
                </div>
                <button type="submit">Save Edits</button>
                <button onClick={handleDelete} type="submit">Delete Event</button>
            </form>
        </div>
    );
}

export default EventEdit;