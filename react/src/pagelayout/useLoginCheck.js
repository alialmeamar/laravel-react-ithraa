import { useEffect, useState } from 'react';

function useLoginCheck() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in upon component mount
        const storedToken = localStorage.getItem('token');
        setIsLoggedIn(!!storedToken);
    }, []);

    const checkLoginStatus = () => {
        const storedToken = localStorage.getItem('token');
        setIsLoggedIn(!!storedToken);
    };

    return { isLoggedIn, checkLoginStatus };
}

export default useLoginCheck;
