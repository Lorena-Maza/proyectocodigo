import React from 'react'
import {Link} from 'react-router-dom';

export default function TarjetaTematica({tematica}) {
  // console.log("tarjeta",props)
  return (    
    <div className="col-12 col-lg-6 col-xl-3">
       <div className="card mb-4 shadow-sm">
       <div className="card-header">
        <h4 className="my-0 font-weight-bold text-center"> {tematica.tematica_nombre}</h4>
      </div>
      <div className="card-body">
        <img src={tematica.tematica_imagen} className="card-img-top" width="250" height = "250"/>        
        <ul className="list-unstyled mt-3 mb-4">
          <li>{tematica.tematica_descripcion}</li>
        </ul>
        <Link className="btn btn-lg btn-block btn-outline-primary" to={`/admin/vertematica`}>Ver más...</Link>        
      </div>
       <br/>      
       </div>
     </div>
  )
}