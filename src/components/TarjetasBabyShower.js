import React, {useState, useEffect} from 'react'
import TarjetaBabyShower from './TarjetaBabyShower';
import {obtenerProductos} from '../services/productosService';

export default function TarjetasBabyShower() {

  const [productos, setProductos] = useState([])

  const getProducts = async () => {
    let data = await obtenerProductos()
    // console.log(data)
    setProductos(data)
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div class="row">
      {
        productos.map((prod, i) => (
          <TarjetaBabyShower producto={prod} key={i}/>
        ))
      }
    </div>
  )
}
