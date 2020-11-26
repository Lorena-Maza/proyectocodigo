import React from 'react'
import FormularioTematica from "../components/FormularioTematica";
import {crearTematica,editarTematica} from "../services/tematicasService";
import Swal from 'sweetalert2';

export default function CrearTematicaView(props) {

  const createTematic = async (objProducto) => {
    let peticion = await crearTematica(objProducto);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Se creo satisfactotiamente la tematica',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }
  const editaTematic = async (id,objNewTematica) => {
    let peticion = await editarTematica(id,objNewTematica);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Se actualiza satisfactotiamente la tematica',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }
  const tematicaId = props.match.params.id; //aca obtengo el id de la URL
  console.log(tematicaId);
  if (tematicaId!=undefined){
    return (
      <div>
      <h1>Editar Producto</h1>      
        <FormularioTematica opt="e" createTematic={editaTematic} textoBoton="Editar Tematica"/>                 
    </div>
    )
  }else{
    return (
      <div>
      <h1>Crear Temática</h1>      
        <FormularioTematica opt="n" createTematic={createTematic} textoBoton="Crear Tematica"/>                 
    </div>
    )
  }  
}
