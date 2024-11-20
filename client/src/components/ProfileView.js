import React, { useState } from "react";
import Event from "./Event";
import EventForm from "./EventForm";

function ProfileView({ user, events, onEditClick, onDeleteEvent, onUpdateEvent, onCreateEvent }) {
    const [createEvent, setCreateEvent] = useState(false)

    const userEvents = events.filter(event => user.id === event.user_id)

    function handleCreateEventClick() {
        setCreateEvent(prevState => !prevState);
    }

    return(
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>First Name: {user.first_name}</p>
            <p>Last Name {user.last_name}</p>
            <button onClick={onEditClick}>Edit Profile</button>
            <h1>My Events</h1>
            {!createEvent ? <button onClick={handleCreateEventClick}>Create Event</button> : null}
            {!createEvent ? <div>
                {userEvents.length > 0 ? (
                    userEvents.map((event) => (
                        <Event 
                            key={event.id} 
                            event={event} 
                            onDeleteEvent={onDeleteEvent} 
                            onUpdateEvent={onUpdateEvent}
                        />
                    ))
                ) : (
                    <>
                    <h2>No Events Found</h2>
                    </>
                )}
                </div> : 
                    <EventForm 
                        user={user}
                        onCreateEvent={onCreateEvent}
                        createEventClick={handleCreateEventClick}
                    />
            }
            
        </div>
    )
}

export default ProfileView;