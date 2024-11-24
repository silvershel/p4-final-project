import React, {useEffect, useState} from "react";
import EventPreview from "./EventPreview";

function EventList({ user, events, onUpdateEvent, onDeleteEvent }) {

    return (
        <div>
            <h1>All Events</h1>
            {events.length > 0 ? (
                events.map((event) => (
                    <EventPreview key={event.id} user={user} event={event} onUpdateEvent={onUpdateEvent} onDeleteEvent={onDeleteEvent} />
                ))
            ) : (
                <>
                <h2>No Events Found</h2>
                </>
            )}
        </div>
    )
}

export default EventList;