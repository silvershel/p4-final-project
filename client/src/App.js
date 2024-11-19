import React , { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import EventList from "./components/EventList";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

function App() {
	const [user, setUser] = useState(null)
	const [events, setEvents] = useState([])

	function handleLogout() {
		setUser(null);
	};

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
			setEvents((prevEvents) => {
			  const updatedEvents = [...prevEvents, newEvent];
			  return updatedEvents;
			});
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
                console.log("Event deleted.");
            } else {
                console.error("Unable to delete event.");
            }
        })
        .catch(error => {
            console.error("Error deleting event:", error);
        });
    }

	if (!user) return <LoginForm onLogin={setUser} style={containerStyle}/>

	return (
		<Router>
		<div style={containerStyle}>
			<NavBar onLogout={handleLogout}/>
			<Switch>
			<Route path="/" exact>
				<EventList events={events} onDeleteEvent={handleDeleteEvent} onUpdateEvent={handleUpdateEvent} />
			</Route>
			<Route path="/profile" exact component={Profile}>
				<Profile events={events} user={user} onDeleteEvent={handleDeleteEvent} onUpdateEvent={handleUpdateEvent} onCreateEvent={handleCreateEvent} />
			</Route>
			<Route path="*" component={ErrorPage} />
			</Switch>
		</div>
		</Router>
	);

}

const containerStyle = {
  textAlign: 'center'
};

export default App;
