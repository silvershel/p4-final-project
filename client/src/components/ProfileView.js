import React from "react";
import Event from "./Event";

function ProfileView({ onEditClick, user, events }) {
    const userEvents = events.filter(event => user.id === event.user_id)

    return(
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>First Name: {user.first_name}</p>
            <p>Last Name {user.last_name}</p>
            <button onClick={onEditClick}>Edit Profile</button>
            <h2>My Events</h2>
            <div>
                {userEvents.length > 0 ? (
                    userEvents.map((event) => (
                        <Event key={event.id} event={event} />
                    ))
                ) : (
                    <>
                    <h2>No Events Found</h2>
                    <button>Create an Event</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProfileView;