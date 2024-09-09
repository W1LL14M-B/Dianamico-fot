import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import leon from ".././assets/images/photo11.jpg";
import tre from ".././assets/images/photo12.jpg";
import pik from ".././assets/images/photo13.jpg";

export const LoginBoton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()} className="btn btn-primary">
        Login
      </button>
      <br />
      <br />


      <div className="image-container">
        <img src={tre} className="img-tre" />
        <img src={leon} />
        <img src={pik} className="img-pik" />
      </div>
    </div>
  );
};
