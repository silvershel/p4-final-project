import React from "react";
import { Link } from "react-router-dom";

function NavBar({ onLogout }) {

	function handleLogout(e) {
		fetch("/logout", { method: "DELETE" })
		.then((r) => {
			if (r.ok) {
				onLogout()
			}
		});
	};

	return (
		<div>
			<h1>Nav Bar</h1>
			<div>
				<Link to="/profile">Profile</Link>
				<Link to="/events">Events</Link>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
};

export default NavBar;