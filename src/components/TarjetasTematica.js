import React from 'react'
import TarjetaTematica from './TarjetaTematica';

export default function TarjetasTematica({tematicas}) {

  return (
    <div className="row">
      {
        tematicas.map((tema, i) => (
          <TarjetaTematica tematica={tema} key={i}/>
        ))
      }
    </div>
  )
}
