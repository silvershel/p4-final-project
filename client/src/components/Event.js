import React, {useState} from "react";
import EventView from "./EventView";
import EventEdit from "./EventEdit";

function Event({ event, onDeleteEvent, onUpdateEvent }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(true)
    }

    function handleViewClick() {
        setIsEditing(false)
    }

    return(
        <div>
            {!isEditing ? (
                <EventView onEditClick={handleEditClick} 
                    event={event} 
                />
                ) : ( 
                <EventEdit onViewClick={handleViewClick} 
                    event={event} 
                    onDeleteEvent={onDeleteEvent} 
                    onUpdateEvent={onUpdateEvent} 
                />
            )}
        </div>
    )
}

export default Event;