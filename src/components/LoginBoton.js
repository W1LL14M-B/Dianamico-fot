import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginBoton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()} className="btn btn-primary">
        Login
      </button>
      <div>
        IMAGEN
      </div>

    </div>
  );
};
