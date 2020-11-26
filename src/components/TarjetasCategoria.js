import React from 'react'
import TarjetaCategoria from './TarjetaCategoria';

export default function TarjetasCategoria({categorias}) {

  return (
    <div className="row">
      {
        categorias.map((categ, i) => (
          <TarjetaCategoria categoria={categ} key={i}/>
        ))
      }
    </div>
  )
}
