import React, {useState} from "react";
import { Link } from "react-router-dom";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
      };

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" value={password}/>
                </div>
                <button>Log In</button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default LoginForm;