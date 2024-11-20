import React, {useState} from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";
import EventForm from "./EventForm";

function Profile({ user, events, onDeleteEvent, onUpdateEvent, onCreateEvent }) {
    const [isEditing, setIsEditing] = useState(false)
    const [createEvent, setCreateEvent] = useState(false)

    function handleProfileEditClick() {
        setIsEditing(prevState => !prevState)
    }

    function handleCreateEventClick() {
        setCreateEvent(prevState => !prevState);
    }

    if (isEditing) {
        return <ProfileEdit onEditClick={handleProfileEditClick} />;
    } else if (createEvent) {
        return <EventForm user={user} onCreateClick={handleCreateEventClick} onCreateEvent={onCreateEvent} />;
    } else {
        return (
            <ProfileView 
                user={user} 
                events={events} 
                onEditClick={handleProfileEditClick} 
                onCreateClick={handleCreateEventClick} 
                onDeleteEvent={onDeleteEvent} 
                onUpdateEvent={onUpdateEvent} 
                onCreateEvent={onCreateEvent} 
            />
        );
    }
}

export default Profile;