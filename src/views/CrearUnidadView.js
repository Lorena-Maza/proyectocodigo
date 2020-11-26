import React from 'react'
import FormularioUnidad from "../components/FormularioUnidad";
import {crearUnidad,editarUnidad} from "../services/unidadesService";
import Swal from 'sweetalert2';

export default function CrearUnidadView(props) {

  const createUnida = async (objProducto) => {
    let peticion = await crearUnidad(objProducto);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Se creo satisfactoriamente la Unidad de Medida',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }
  const editaUnida = async (id,objNewUnidad) => {
    let peticion = await editarUnidad(id,objNewUnidad);
    // console.log(peticion)
    Swal.fire({
      title:'Exito!',
      text:'Se actualiza satisfactoriamente la Unidad de Medida',
      icon:'success',
      showConfirmButton:false,
      timer:2000
    })
  }
  const unidadId = props.match.params.id; //aca obtengo el id de la URL
  console.log(unidadId);
  if (unidadId!=undefined){
    return (
      <div>
      <h1>Editar Unidad de Medida</h1>      
        <FormularioUnidad opt="e" createUnida={editaUnida} textoBoton="Editar Unidad de Medida"/>                 
    </div>
    )
  }else{
    return (
      <div>
      <h1>Crear Unidad de Medida</h1>      
        <FormularioUnidad opt="n" createUnida={createUnida} textoBoton="Crear Unidad de Medida"/>                 
    </div>
    )
  }  
}
