import React , { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import EventList from "./components/EventList";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

// styles
const containerStyle = {
  textAlign: 'center'
};

function App() {
	const [user, setUser] = useState(null)
	const [events, setEvents] = useState([])
	const [attendees, setAttendees] = useState([])

	useEffect(() => {
		fetch("/check_session")
		.then((r) => {
		if (r.ok) {
			r.json().then((user) => setUser(user));
		}
		});
	}, [])

	useEffect(() => {
        fetch("/events")
        .then((r) => r.json())
        .then((events) => {
            console.log(events);
            setEvents(events);
        })
        .catch((error) => console.error('Error fetching events:', error));
    }, [])

	useEffect(() => {
        fetch("/attendees")
        .then((r) => r.json())
        .then((attendees) => {
            console.log(attendees);
            setAttendees(attendees);
        })
        .catch((error) => console.error('Error fetching events:', error));
    }, [])

	function handleLogout() {
		setUser(null);
	};

	function handleCreateEvent(newEvent) {
		fetch('/events', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(newEvent),
		})
		  .then((r) => r.json())
		  .then((newEvent) => {
			console.log(newEvent);
			setEvents((prevEvents) => [...prevEvents, newEvent]);
		  })
		  .catch((error) => {
			console.error('Error creating new event:', error);
		  });
	  };

	function handleUpdateEvent(eventId, updatedEvent) {
        fetch(`/events/${eventId}`, {
            method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedEvent),
		})
        .then((r) => r.json())
		.then((updatedEvent) => {
			setEvents((prevEvents) => 
				prevEvents.map((event) =>
					event.id === updatedEvent.id ? updatedEvent : event
				)
			);
		})
		.catch((error) => {
			console.error("Error updating event:", error);
		});
    }

	function handleDeleteEvent(eventId) {
        fetch(`/events/${eventId}`, {
            method: 'DELETE',
        })
        .then(r => {
            if (r.ok) {
				setEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));
            } else {
                console.error("Unable to delete event.");
            }
        })
        .catch(error => {
            console.error("Error deleting event:", error);
        });
    }

	function handleCreateAttendee(newAttendee) {
		fetch('/attendees', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(newAttendee),
		})
		  .then((r) => r.json())
		  .then((newAttendee) => {
			setAttendees((prevAttendees) => [...prevAttendees, newAttendee]);
		  })
		  .catch((error) => {
			console.error('Error creating new attendee:', error);
		  });
	  };

	function handleUpdateAttendee(attendeeId, updatedAttendee) {
        fetch(`/attendee/${attendeeId}`, {
            method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedAttendee),
		})
        .then((r) => r.json())
		.then((updatedAttendee) => {
			setEvents((prevAttendees) => 
				prevAttendees.map((attendee) =>
					attendee.id === updatedAttendee.id ? updatedAttendee : attendee
				)
			);
		})
		.catch((error) => {
			console.error("Error updating attendee:", error);
		});
    }

	function handleDeleteAttendee(attendeeId) {
        fetch(`/attendees/${attendeeId}`, {
            method: 'DELETE',
        })
        .then(r => {
            if (r.ok) {
				setAttendees((prevAttendees) => prevAttendees.filter(attendee => attendee.id !== attendeeId));
            } else {
                console.error("Unable to delete attendee.");
            }
        })
        .catch(error => {
            console.error("Error deleting attendee:", error);
        });
    }

	if (!user) {
		return (
			<Router>
				<Switch>
					<Route path="/login" exact>
						<LoginForm style={containerStyle} onLogin={setUser}/>
					</Route>
					<Route path="/signup" exact>
						<SignupForm style={containerStyle} onSignup={setUser} />
					</Route>
					<Route path="/" exact>
						<Redirect to="/login" />
					</Route>
					<Route path="*" style={containerStyle} component={ErrorPage} />
				</Switch>
			</Router>
		);
	}

	return (
		<Router>
		<div style={containerStyle}>
			<NavBar onLogout={handleLogout}/>
			<Switch>
				<Route path="/login" exact>
					<Redirect to="/" />
				</Route>
				<Route path="/signup" exact>
					<Redirect to="/" />
				</Route>
				<Route path="/" exact>
					<EventList 
						user={user} 
						events={events} 
						onUpdateEvent={handleUpdateEvent}
						onDeleteEvent={handleDeleteEvent} 
						onCreateAttendee={handleCreateAttendee}
						onUpdateAttendee={handleUpdateAttendee}
						onDeleteAttendee={handleDeleteAttendee}
					/>
				</Route>
				<Route path="/profile" exact component={Profile}>
					<Profile 
						user={user} 
						events={events} 
						onCreateEvent={handleCreateEvent}
						onUpdateEvent={handleUpdateEvent} 
						onDeleteEvent={handleDeleteEvent} 
						onCreateAttendee={handleCreateAttendee}
						onUpdateAttendee={handleUpdateAttendee}
						onDeleteAttendee={handleDeleteAttendee}
					/>
				</Route>
				<Route path="*" component={ErrorPage} />
			</Switch>
		</div>
		</Router>
	);
}

export default App;
