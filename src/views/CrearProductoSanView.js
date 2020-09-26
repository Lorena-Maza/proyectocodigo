import React from 'react'
import FormularioProductoSan from "../components/FormularioProductoSan";
import {crearProducto} from "../services/productosSanService";

export default function CrearProductoSanView() {

  const createProduct = async (objProducto) => {
    let peticion = await crearProducto(objProducto);
    console.log(peticion)
  }

  return (
    <div>
      <FormularioProductoSan createProduct={createProduct} textoBoton="Crear Producto"/>
    </div>
  )
}
