import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, loginWithPopup, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <div>
                <button onClick={() => loginWithRedirect()}>Log In WITH REDIRECT</button>
                <button onClick={() => loginWithPopup()}>Log In WITH POPUP</button>
            </div>
        )
    )
}

export default LoginButton;