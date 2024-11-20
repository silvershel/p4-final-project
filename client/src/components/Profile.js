import React, {useState} from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";

function Profile({ user, events, onDeleteEvent, onUpdateEvent, onCreateEvent }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleClick() {
        setIsEditing(prevState => !prevState)
    }

    return(
        <div>
            {!isEditing ? (
                <ProfileView 
                    onEditClick={handleClick} 
                    user={user} 
                    events ={events} 
                    onDeleteEvent={onDeleteEvent} 
                    onUpdateEvent={onUpdateEvent} 
                    onCreateEvent={onCreateEvent} 
                />) : (
                <ProfileEdit 
                    onViewClick={handleClick}
                />
            )}
        </div>
    )
}

export default Profile;