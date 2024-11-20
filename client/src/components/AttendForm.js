import React from "react";

function AttendForm({ onAttendClick }) {

    function handleSubmit() {
        onAttendClick();
    }

    return (
        <div>
            <h1>Attend Event</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Comment:</label>
                    <input type="text" value=""/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AttendForm;