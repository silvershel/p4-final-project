import React, {useState} from "react";

function ProfileView({onEditClick}) {
    return(
        <div>
            <h1>Welcome, Username!</h1>
            <p>First Name</p>
            <p>Last Name</p>
            <button onClick={onEditClick}>Edit Profile</button>
        </div>
    )
}

export default ProfileView;