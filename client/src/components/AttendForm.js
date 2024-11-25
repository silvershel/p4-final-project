import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function AttendForm({ user, onAttend }) {
    const [comment, setComment] = useState("")
    const { eventId } = useParams()
    const history = useHistory()

    function handleSubmit() {
        onAttend();
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newAttendee = {
            comment: comment,
            event_id: eventId,
            user_id: user.id
          };
        console.log(newAttendee);
        onAttend(newAttendee);
        history.push(`/events/${eventId}`);
    }

    return (
        <div>
            <h1>Attend Event</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Comment:</label>
                    <input 
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AttendForm;