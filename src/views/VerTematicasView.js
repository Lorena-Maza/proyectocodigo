import React, {useState, useEffect} from 'react'
import TarjetaTematica from '../components/TarjetaTematica';
import {obtenerTematicas} from '../services/tematicasService';

export default function VerTematicaView() {
 
  const [tematicas, setTematicas] = useState([])
  const getTematic = async () => {
    let data = await obtenerTematicas()
    // console.log(data)
    setTematicas(data)
  }

  useEffect(()=>{
    getTematic();
  },[])  
  return (
    <div className="my-0">
    <h4>Ver Temáticas</h4>  
    <div className="row">      
      {
           tematicas.map((tema, i) => (
          <TarjetaTematica tematica={tema} key={i}/>
        ))
      }
    </div>
    </div>
  )
}