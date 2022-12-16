import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (params) => {
  const { loginWithRedirect } = useAuth0();
  return (
    
      <div>
        <button className="log" onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    )

};
      
export default LoginButton;
