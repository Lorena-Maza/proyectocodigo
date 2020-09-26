import React from 'react'
import {Link} from 'react-router-dom';

export default function TarjetaSanValentin({producto}) {
  // console.log("tarjeta",props)
  return (
    
    <div style={{ width: "300px", display: "flex", alignItems: "center"}}>
       <div class="card mb-4 shadow-sm">
       <div class="card-header">
        <h4 class="my-0 font-weight-normal"> {producto.producto_nombre}</h4>
      </div>
      <div class="card-body">
        <img src={producto.producto_imagen} class="card-img-top" width="250" height = "250"/>
        <h1 class="card-title pricing-card-title">Precio S/ {producto.producto_precio}</h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>{producto.producto_descripcion}</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary" to={`/detallesan/${producto.producto_id}`}>Detalle</button>
      </div>
      <br />
         {/* <div className="card-body">
           <h3 className="card-title">
             {producto.producto_nombre}
           </h3>
             <p className="card-text">
             Precio: {producto.producto_precio}
           </p>
           <Link className="btn btn-primary btn-sm" to={`/detalle/${producto.producto_id}`}>Detalle</Link>
         </div> */}
       </div>
     </div>
  )
}
