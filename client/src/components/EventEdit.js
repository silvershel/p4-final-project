import React, {useState} from "react";

function EventEdit() {
    const [eventType, setEventType] = useState('');
    const [eventName, setEventName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [eventWebsite, setEventWebsite] = useState('');

    const handleEventTypeChange = (e) => {
        setEventType(e.target.value);
      };

    const handleVisibility = (e) => {
        setEventType(e.target.value);
    };

    return (
        <div>
            <h1>Edit Event</h1>
            <form>
                <div>
                    <label>Event Type:</label>
                    <div>
                        <input
                        type="radio"
                        id="festival"
                        name="eventType"
                        value="festival"
                        checked={eventType === 'festival'}
                        onChange={handleEventTypeChange}
                        />
                        <label htmlFor="festival">Festival</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="retreat"
                        name="eventType"
                        value="retreat"
                        checked={eventType === 'retreat'}
                        onChange={handleEventTypeChange}
                        />
                        <label htmlFor="retreat">Retreat</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="localMeetup"
                        name="eventType"
                        value="localMeetup"
                        checked={eventType === 'localMeetup'}
                        onChange={handleEventTypeChange}
                        />
                        <label htmlFor="localMeetup">Local Meetup</label>
                    </div>
                </div>
                <div>
                    <label>Event Name:</label>
                    <input type="text" value={eventName}/>
                </div>
                <div>
                    <label>Start Date:</label>
                    <input type="text" value={startDate}/>
                </div>
                <div>
                    <label>End Date:</label>
                    <input type="text" value={endDate}/>
                </div>
                <div>
                    <label>Event Website:</label>
                    <input type="text" value={eventWebsite}/>
                </div>
                <div>
                    <label>Visibility:</label>
                    <div>
                        <input
                        type="radio"
                        id="public"
                        name="visibility"
                        value="public"
                        checked={eventType === 'public'}
                        onChange={handleVisibility}
                        />
                        <label htmlFor="festival">Public</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="private"
                        name="visibility"
                        value="private"
                        checked={eventType === 'private'}
                        onChange={handleVisibility}
                        />
                        <label htmlFor="private">Private</label>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EventEdit;