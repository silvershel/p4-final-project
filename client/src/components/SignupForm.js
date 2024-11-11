import React, { useState } from "react";

function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName}/>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" value={password}/>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;