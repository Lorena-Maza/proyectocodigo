import React from 'react'
import TarjetaProducto from './TarjetaProducto';


export default function TarjetasProducto({productos}) {
  return (
    <div className="row">
      {
        productos.map((prod, i) => (
          <TarjetaProducto producto={prod} key={i}/>
        ))
      }
    </div>
  )
}
