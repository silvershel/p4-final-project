import React, {useState} from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";

function Profile({ user, events }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(true)
    }

    function handleViewClick() {
        setIsEditing(false)
    }

    return(
        <div>
            {!isEditing ? (<ProfileView onEditClick={handleEditClick} user={user} events ={events} />) :( <ProfileEdit onViewClick={handleViewClick}/>)}
        </div>
    )
}

export default Profile;