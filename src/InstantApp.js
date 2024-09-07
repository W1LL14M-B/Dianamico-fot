import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginBoton } from "./components/LoginBoton";
import { Datos } from "./components/Datos";



export const InstantApp = () => {




  return (
    <div className="container">
      <div className="row justify-content-center d-flex">
        <div className="col-12 text-center">
          <h1>Viaje Dinamico</h1>
      <LoginBoton/>
      <Datos /> 
        </div>
      </div>
    </div>
  );
};
