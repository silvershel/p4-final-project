import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm({ style, onSignup }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                first_name: firstName, 
                last_name: lastName, 
                username: username, 
                password: password 
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => onSignup(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div style={style}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input 
                        type="text"
                        id="first_name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                        type="text"
                        id="last_name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text"
                        id="username"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="text" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    {errors ? "" : "error."}
                </div>
                <button>Sign Up</button>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </form>
        </div>
    )
}

export default SignupForm;