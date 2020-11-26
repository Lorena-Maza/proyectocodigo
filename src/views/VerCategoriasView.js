import React, {useState, useEffect} from 'react'
import TarjetaCategoria from '../components/TarjetaCategoria';
import {obtenerCategorias} from '../services/categoriasService';

export default function VerCategoriasView() {
 
  const [categorias, setCategorias] = useState([])
  const getCategori = async () => {
    let data = await obtenerCategorias()
    // console.log(data)
    setCategorias(data)
  }

  useEffect(()=>{
    getCategori();
  },[])  
  return (
    <div className="my-0">
    <h4>Ver Categorias</h4>  
    <div className="row">      
      {
           categorias.map((cate, i) => (
          <TarjetaCategoria categoria={cate} key={i}/>
        ))
      }
    </div>
    </div>
  )
}