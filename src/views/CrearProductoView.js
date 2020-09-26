import React from 'react'
import FormularioProducto from "../components/FomularioProducto";
import {crearProducto} from "../services/productosService";

export default function CrearProductoView() {

  const createProduct = async (objProducto) => {
    let peticion = await crearProducto(objProducto);
    console.log(peticion)
  }

  return (
    <div>
      <FormularioProducto createProduct={createProduct} textoBoton="Crear Producto"/>
    </div>
  )
}
