import React, {useState} from "react";
import EventView from "./EventView";
import EventEdit from "./EventEdit";
import AttendForm from "./AttendForm";

function Event({ user, event, onDeleteEvent, onUpdateEvent }) {
    const [isEditing, setIsEditing] = useState(false)
    const [isAttending, setIsAttending] = useState(false)

    function handleEditClick() {
        setIsEditing(prevState => !prevState)
    }

    function handleAttendingClick() {
        setIsAttending(prevState => !prevState)
    }

    if (isEditing) {
        return (
            <EventEdit 
                onViewClick={handleEditClick} 
                event={event} 
                onDeleteEvent={onDeleteEvent} 
                onUpdateEvent={onUpdateEvent} 
            />
        );
    } else if (isAttending) {
        return (
            <AttendForm 
                onAttendClick={handleAttendingClick} 
            />
        );
    } else {
        return (
            <EventView 
                user={user} 
                event={event}
                onEditClick={handleEditClick}
                onAttendClick={handleAttendingClick}
            />
        );
    }
}

export default Event;