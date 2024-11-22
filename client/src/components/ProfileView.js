import React, { useState } from "react";
import Event from "./Event";
import EventForm from "./EventForm";

function ProfileView({ user, events, onEditClick, onCreateClick, onUpdateEvent, onDeleteEvent, onCreateAttendee, onUpdateAttendee, onDeleteAttendee }) {
    const userEvents = events.filter(event => user.id === event.user_id)
    
    return(
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <button onClick={onEditClick}>Edit Profile</button>
            <button onClick={onCreateClick}>Create Event</button>
            <h1>My Events</h1>
            <div>
                {userEvents.length > 0 ? (
                    userEvents.map((event) => (
                        <Event 
                            key={event.id} 
                            user={user}
                            event={event} 
                            onUpdateEvent={onUpdateEvent}
                            onDeleteEvent={onDeleteEvent}
                        />
                    ))
                ) : (
                    <>
                    <h2>No Events Found</h2>
                    </>
                )}
                </div>
            
        </div>
    )
}

export default ProfileView;