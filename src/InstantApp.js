import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginBoton } from "./components/LoginBoton";
import { Datos } from "./components/Datos";
import { LogoutBoton } from "./components/LogoutBoton";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "react-bootstrap";

export const InstantApp = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="row justify-content-center d-flex"> 
        <div className="col-12 text-center">
          <h1>Viaje Dinámico</h1>
          {isAuthenticated ? <LogoutBoton /> : <LoginBoton />}
          <br/>
          <Datos />
        </div>
      </div>
    </div>
  );
};


