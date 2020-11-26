import React, { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import {Link} from 'react-router-dom';

export default function CarritoView() {
  const { carrito } = useContext(CarritoContext);
  const [miCarrito, setMiCarrito] = useState([]);

  const configurarCarrito = () => {
    setMiCarrito(carrito);
  };

  useEffect(() => {
    configurarCarrito();
  }, []);

  return (
    <div>
      <h1>Armando Caja!</h1>
      <br></br>
      
      <table className="table">
        <thead>
        <tr>
          Nombre
          <input
            type="text"
            className="form-control"
          />
          </tr><br></br>
          <tr>
          Descripcion
          <input
            type="text"
            className="form-control"
          />
          </tr><br></br>
           <h5 className="text-secondary">Detalle de productos</h5>
          <br></br>
          <tr>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio Unit.</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
          {miCarrito.map(
            (
              {
                producto_id,
                producto_precio,
                producto_cantidad,
                producto_nombre,
              },
              i
            ) => (
             
              <tr key={i}>
               
                <td>{i + 1}</td>
                <td>{producto_nombre}</td>
                <td>{producto_cantidad}</td>
                <td>{producto_precio}</td>
                <td>{producto_cantidad * producto_precio}</td>
              </tr>

              
            )
          )
          }

              
              <br></br>
              <Link className="btn btn-lg btn-block btn-outline-primary">Armar</Link>      
        </tbody>
      </table>
    </div>

    
  );
}
