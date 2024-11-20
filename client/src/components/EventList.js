import React, {useEffect, useState} from "react";
import Event from "./Event";

function EventList({ user, events, onDeleteEvent, onUpdateEvent }) {

    return (
        <div>
            <h1>All Events</h1>
            {events.length > 0 ? (
                events.map((event) => (
                    <Event key={event.id} user={user} event={event} onDeleteEvent={onDeleteEvent} onUpdateEvent={onUpdateEvent} />
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