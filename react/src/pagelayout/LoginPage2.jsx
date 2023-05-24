import React, { useState, useEffect } from 'react';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    useEffect(() => {
        // Check if the user is already logged in upon component mount
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (isLoggedIn) {
            setLoginStatus('User is already logged in.');
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const loginData = { email, password };

            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                // Successful login
                localStorage.setItem('isLoggedIn', 'true');
                setLoginStatus('Login successful!');
                // Perform any necessary actions (e.g., store token in local storage, redirect, etc.)
            } else {
                // Failed login
                const error = await response.json();
                setLoginStatus('Login failed. Please check your email and password.');
                console.log('Login error:', error);
            }
        } catch (error) {
            setLoginStatus('An error occurred during login.');
            console.log('Login error:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setLoginStatus('Logged out successfully.');
        // Perform any necessary actions (e.g., clear token, redirect, etc.)
    };

    return (
        <div>
            {loginStatus ? (
                <div>
                    <p>{loginStatus}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
}



export default LoginPage;
