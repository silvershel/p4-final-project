import React, { useState } from "react";

function EventForm({ user, onCreateClick, onCreateEvent }) {
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newEvent = {
            name: name,
            start_date: startDate,
            end_date: endDate,
            website_link: websiteLink,
            user_id: user.id
          };
        console.log(newEvent);
        onCreateClick()
        onCreateEvent(newEvent);
    }

    return (
        <div>
            <h2>Create Event</h2>
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
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default EventForm;