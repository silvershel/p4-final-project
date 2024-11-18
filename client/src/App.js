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

	if (!user) return <LoginForm onLogin={setUser} style={containerStyle}/>

	return (
		<Router>
		<div style={containerStyle}>
			<NavBar onLogout={handleLogout}/>
			
			<Switch>
			<Route path="/" exact>
				<EventList events={events}/>
			</Route>
			<Route path="/profile" exact component={Profile}>
				<Profile events={events} user={user}/>
			</Route>
			<Route path="/events" exact component={EventList}>
				<EventList events={events}/>
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
