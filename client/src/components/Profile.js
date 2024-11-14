import React, {useState} from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";

function Profile() {
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(true)
    }

    function handleViewClick() {
        setIsEditing(false)
    }

    return(
        <div>
            {!isEditing ? (<ProfileView onEditClick={handleEditClick}/>) :( <ProfileEdit onViewClick={handleViewClick}/>)}
        </div>
    )
}

export default Profile;