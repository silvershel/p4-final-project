import React, {useState} from "react";

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
            </form>
        </div>
    )
}

export default LoginForm;