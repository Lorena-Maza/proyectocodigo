import React, {useState, useEffect} from 'react'
import TarjetaSanValentin from './TarjetaSanValentin';
import {obtenerProductos} from '../services/productosSanService';

export default function TarjetasSanValentin() {

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
          <TarjetaSanValentin producto={prod} key={i}/>
        ))
      }
    </div>
  )
}
