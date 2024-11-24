import React, {useState} from "react";
import EventPreview from "./EventPreview";
// import EventForm from "./EventForm";
// import ProfileEdit from "./ProfileEdit";
// import ProfileView from "./ProfileView";

function Profile({ user, events, onCreateEvent, onUpdateEvent, onDeleteEvent, onCreateAttendee, onUpdateAttendee, onDeleteAttendee}) {
    // const [isEditing, setIsEditing] = useState(false)
    // const [createEvent, setCreateEvent] = useState(false)
    const userEvents = events.filter(event => user.id === event.user_id)

    return(
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <button>Edit Profile</button>
            <button>Create Event</button>
            <h1>My Events</h1>
            <div>
                {userEvents.length > 0 ? (
                    userEvents.map((event) => (
                        <EventPreview 
                            key={event.id} 
                            user={user}
                            event={event} 
                            onUpdateEvent={onUpdateEvent}
                            onDeleteEvent={onDeleteEvent}
                        />
                    ))
                ) : (
                    <>
                    <h2>No Events Found</h2>
                    </>
                )}
                </div>
            
        </div>
    )

    // function handleProfileEditClick() {
    //     setIsEditing(prevState => !prevState)
    // }

    // function handleCreateEventClick() {
    //     setCreateEvent(prevState => !prevState);
    // }

    // if (isEditing) {
    //     return (
    //         <ProfileEdit 
    //             onEditClick={handleProfileEditClick} 
    //         />
    //     );
    // } else if (createEvent) {
    //     return (
    //         <EventForm 
    //             user={user} 
    //             onCreateClick={handleCreateEventClick} 
    //             onCreateEvent={onCreateEvent} 
    //         />
    //     );
    // } else {
    //     return (
    //         <ProfileView 
    //             user={user} 
    //             events={events} 
    //             onEditClick={handleProfileEditClick} 
    //             onCreateClick={handleCreateEventClick} 
    //             onCreateEvent={onCreateEvent}
    //             onUpdateEvent={onUpdateEvent} 
    //             onDeleteEvent={onDeleteEvent} 
    //             onCreateAttendee={onCreateAttendee}
    //             onUpdateAttendee={onUpdateAttendee}
    //             onDeleteAttendee={onDeleteAttendee}
    //         />
    //     );
    // }
}

export default Profile;