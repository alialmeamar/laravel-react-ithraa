import React from 'react';

function LogoutButton({ token, onLogout }) {
    const handleLogout = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                },
            });

            if (response.ok) {
                // Call the onLogout function passed as a prop
                if (typeof onLogout === 'function') {
                    onLogout();
                }
            } else {
                // Handle error
                console.log('Logout failed.');
            }
        } catch (error) {
            // Handle error
            console.log('Logout error:', error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
