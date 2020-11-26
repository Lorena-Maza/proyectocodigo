import React, { useState } from "react";
import { registro } from "../services/authService";
import {Link} from 'react-router-dom';
import Swal from "sweetalert2";

export default function RegisterView() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const registrar = (e) => {
    e.preventDefault();
    registro(apellidos, nombres,correo, password)
      .then((rpta) => console.log(rpta))
      .catch((err) => console.log(err));
  };

  const registrarse = () => {
    Swal.fire({
      icon: "success",
      title: "cliente registrado, Tiene un 10% de descuento en todo compras!!",
      showConfirmButton: false,
      timer: 4000,
    });
    };


  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: "400px" }}>
        <div className="card mt-3">
          <div className="card-body">
            <h2 className="card-title">Crear Cuenta</h2>
            <form onSubmit={(e)=>{registrar(e)}}>
              <div className="form-group">
                <label>Apellidos:</label>
                <input
                  type="text"
                  className="form-control"
                  value={apellidos}
                  onChange={(e) => {
                    setApellidos(e.target.value);
                  }}
                />
                <label>Nombres:</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombres}
                  onChange={(e) => {
                    setNombres(e.target.value);
                  }}
                />
                <label>Correo:</label>
                <input
                  type="email"
                  className="form-control"
                  value={correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <Link className="btn btn-lg btn-block btn-outline-primary"  to='/'  onClick={() => {
                  registrarse();
                }}>Registrate</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
