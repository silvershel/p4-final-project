import React , { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import EventList from "./components/EventList";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [user, setUser] = useState(null)

	useEffect(() => {
		fetch("/check_session")
		.then((r) => {
		if (r.ok) {
			r.json().then((user) => setUser(user));
		}
		});
	}, [])

	function handleLogout() {
		setIsLoggedIn(false);
		setUser(null);
	};

	return (
		<Router>
		<div style={containerStyle}>
			{isLoggedIn && <NavBar onLogout={handleLogout}/>}
			
			<Switch>
			<Route path="/" exact>
				{!isLoggedIn ? (<LoginForm onLogin={setUser} />) : (<EventList />)}
			</Route>
			<Route path="/login" exact>
				{!isLoggedIn ? (<LoginForm onLogin={setUser} />) : <Redirect to="/events" />}
			</Route>
			<Route path="/signup" exact component={SignupForm} onLogin={setUser} />
			<Route path="/profile" exact component={Profile}>
				{isLoggedIn ? <Profile /> : <Redirect to="/login" />}
			</Route>
			<Route path="/events" exact component={EventList}>
				{isLoggedIn ? <EventList /> : <Redirect to="/login" />}
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
