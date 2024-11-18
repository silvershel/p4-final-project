import React, {useEffect, useState} from "react";
import Event from "./Event";

function EventList({ events }) {

    return (
        <div>
           {events.length > 0 ? (
                events.map((event) => (
                    <Event key={event.id} event={event} />
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