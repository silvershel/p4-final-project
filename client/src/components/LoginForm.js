import React, {useState} from "react";
import { Link } from "react-router-dom";

function LoginForm({ onLogin, style }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    // function errorMessage() {
    //     return errors.map((err) => (
    //         <p key={err}>{err}</p>
    //       ))
    // }

    return (
        <div style={style}>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    {errors ? "" : "Error"}
                </div>
                <button type="submit">Log In</button>
                <p>Don't have an account?</p>
            </form>
        </div>
    )
}

export default LoginForm;