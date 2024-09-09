import React from "react";
import ReactDOM from "react-dom/client";
import { InstantApp } from "./InstantApp";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qx2kgsnhweq8skcc.us.auth0.com"
      clientId="O0lVJIlPnqDvPfJSzQcVMwzoDaJtJV7S"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <InstantApp />
    </Auth0Provider>
  </React.StrictMode>
);
