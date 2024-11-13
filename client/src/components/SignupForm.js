import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('standard');

    const handleAccountTypeChange = (e) => {
        setAccountType(e.target.value);
      };

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label>Account Type:</label>
                    <div>
                        <input
                        type="radio"
                        id="standard"
                        name="accountType"
                        value="standard"
                        checked={accountType === 'standard'}
                        onChange={handleAccountTypeChange}
                        />
                        <label htmlFor="standard">Standard</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="business"
                        name="accountType"
                        value="business"
                        checked={accountType === 'business'}
                        onChange={handleAccountTypeChange}
                        />
                        <label htmlFor="business">Business</label>
                    </div>
                </div>
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
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </form>
        </div>
    )
}

export default SignupForm;