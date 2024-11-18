import React, {useEffect, useState} from "react";
import Event from "./Event";

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/events")
        .then((r) => r.json())
        .then((events) => {
            console.log(events);
            setEvents(events);
        })
        .catch((error) => console.error('Error fetching events:', error));
    }, [])

    return (
        <div>
           {events.length > 0 ? (
                events.map((event) => (
                <Event key={event.id} event={event}>
                    <h2>{event.title}</h2>
                </Event>
                ))
            ) : (
                <>
                <h2>No Events Found</h2>
                <button>Create an Event</button>
                </>
            )}
        </div>
    )
}

export default EventList;