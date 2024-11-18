import React, {useState} from "react";
import Event from "./Event";

function ProfileView({onEditClick, events, user}) {
    const userEvents = events.filter(event => event.user_id === user.id);

    return(
        <div>
            <h1>Welcome, {user.first_name}</h1>
            <p>First Name</p>
            <p>Last Name</p>
            <button onClick={onEditClick}>Edit Profile</button>
            <h2>My Events</h2>
            <div>
                {userEvents.length > 0 ? (
                    userEvents.map((event) => (
                    <Event key={event.id}>
                        <h2>{event.name}</h2>
                    </Event>
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