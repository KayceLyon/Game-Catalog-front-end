import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (params) => {
  const { logout } = useAuth0();

  return (
    params.isAuthenticated && (
        <div>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
        </div>
      )
    
  );
};

export default LogoutButton;