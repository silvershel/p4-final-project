import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function NavBar({ onLogout }) {
    
    const handleLogout = (e) => {
        e.preventDefault();
        onLogout();
      };

    return (
      <div>
        <h1>Nav Bar</h1>
        <div>
          <Link to="/profile">
            View Profile
          </Link>
          <Link to="/events">
            Events
          </Link>
          <Link onClick={handleLogout}>
          Logout
          </Link>
        </div>
      </div>
    );
  };

export default NavBar;