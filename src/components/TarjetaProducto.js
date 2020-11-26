import React from 'react'
import {Link} from 'react-router-dom';

export default function Tarjeta({producto}) {
  // console.log("tarjeta",props)
  return (    
    <div className="col-12 col-lg-6 col-xl-3">
       <div className="card mb-4 shadow-sm">
       <div className="card-header">
        <h4 className="my-0 font-weight-bold text-center"> {producto.producto_nombre}</h4>
      </div>
      <div className="card-body">
        <img src={producto.producto_imagen} className="card-img-top" width="250" height = "250"/>
        <h1 className="card-title pricing-card-title text-center">Precio S/ {producto.producto_precio}</h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{producto.producto_descripcion}</li>
        </ul>
        <Link className="btn btn-lg btn-block btn-outline-primary" to={`/detalle/${producto.producto_id}`}>Detalle</Link>               
      </div>
       <br/>      
       </div>
     </div>
  )
}