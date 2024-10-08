import { useAuth0 } from "@auth0/auth0-react";

import React from "react";
import { Gallery } from "./Gallery";

export const Datos = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Gallery />
      </div>
      
    )

  );
};
