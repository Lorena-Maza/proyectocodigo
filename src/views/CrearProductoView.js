import React from 'react'
import FormularioProducto from "../components/FomularioProducto";
import {crearProducto,editarProducto} from "../services/productosService";
import Swal from 'sweetalert2';

export default function CrearProductoView(props) {

  const createProduct = async (objProducto) => {
    let peticion = await crearProducto(objProducto);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Se creo satisfactotiamente el producto',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }
  const editaProduct = async (id,objNewProducto) => {
    let peticion = await editarProducto(id,objNewProducto);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Se actualiza satisfactotiamente el producto',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }
  const productoId = props.match.params.id; //aca obtengo el id de la URL
  console.log(productoId);
  if (productoId!=undefined){
    return (
      <div>
      <h1>Editar Producto</h1>      
        <FormularioProducto opt="e" createProduct={editaProduct} textoBoton="Editar Producto"/>                 
    </div>
    )
  }else{
    return (
      <div>
      <h1>Crear Producto</h1>      
        <FormularioProducto opt="n" createProduct={createProduct} textoBoton="Crear Producto"/>                 
    </div>
    )
  }  
}
