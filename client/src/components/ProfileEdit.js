import React, { useState } from "react";

function ProfileEdit({onEditClick}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    return (
        <div>
            <h1>Edit Profile</h1>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName}/>
                </div>
                <button onClick={onEditClick}>Submit</button>
            </form>
        </div>
    )
}

export default ProfileEdit;