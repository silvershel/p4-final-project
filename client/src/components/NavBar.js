import React from "react";

function NavBar({ onLogout }) {
    
    const handleLogout = (e) => {
        e.preventDefault();
        onLogout();
      };

    return (
      <div>
        <h1>Nav Bar</h1>
        <div>
          <button>My Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  };

export default NavBar;