import React from 'react'
import FormularioCategoria from "../components/FormularioCategoria";
import {crearCategoria,editarCategoria} from "../services/categoriasService";
import Swal from 'sweetalert2';

export default function CrearCategoriaView(props) {

  const createCategori = async (objProducto) => {
    let peticion = await crearCategoria(objProducto);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Se creo satisfactotiamente la categoria',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }
  const editaCategori = async (id,objNewCategoria) => {
    let peticion = await editarCategoria(id,objNewCategoria);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Se actualiza satisfactotiamente la categoria',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }
  const categoriaId = props.match.params.id; //aca obtengo el id de la URL
  console.log(categoriaId);
  if (categoriaId!=undefined){
    return (
      <div>
      <h1>Editar Categoria</h1>      
        <FormularioCategoria opt="e" createCategori={editaCategori} textoBoton="Editar Categoria"/>                 
    </div>
    )
  }else{
    return (
      <div>
      <h1>Crear Categoria</h1>      
        <FormularioCategoria opt="n" createCategori={createCategori} textoBoton="Crear Categoria"/>                 
    </div>
    )
  }  
}
