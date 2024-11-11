import React, {useState} from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Log In</h1>
            <form>
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