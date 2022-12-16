import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (params) => {
  const { loginWithRedirect } = useAuth0();
  return (
    !params.isAuthenticated && (
      <div>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    )

  );
};
      
export default LoginButton;
