import React, {useState} from "react";
import EventList from "./EventList";

function ProfileView({onEditClick}) {
    return(
        <div>
            <h1>Welcome, Username!</h1>
            <p>First Name</p>
            <p>Last Name</p>
            <button onClick={onEditClick}>Edit Profile</button>
            <h2>My Events</h2>
            <EventList />
        </div>
    )
}

export default ProfileView;