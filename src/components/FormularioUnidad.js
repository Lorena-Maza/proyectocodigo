import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function FomularioUnidad({ opt,createUnida, textoBoton }) {
  let { register, handleSubmit, errors} = useForm();

  const manejarSubmit = (data) => {
      // console.log(data)
      // setValue({...value, producto_imagen:urlImagen})
      //despues de que ya subi mi imagen
      createUnida({ ...data }); //mando a crear el Producto
    };
 

  return (
    <form
      onSubmit={handleSubmit(manejarSubmit)}
    >
      <div className="form-group">
        <label htmlFor="unidad_nombre">Nombre Unidad:</label>
        <input
          type="text"
          className="form-control"
          id="unidad_nombre"
          name="unidad_nombre"
          ref={register({required:true})}
        />
        {errors.unidad_nombre && errors.unidad_nombre.type === 'required' && (
          <small className="text-danger font-weight-bold">Nombre es requerido</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="unidad_descripcion">Descripción Unidad:</label>
        <textarea
          className="form-control"
          id="unidad_descripcion"
          name="unidad_descripcion"
          ref={register({required:true})}
        />
        {errors.tematica_descripcion && errors.unidad_descripcion.type === 'required' && (
          <small className="text-danger font-weight-bold">Descripción es requerido</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="unidad_factor">Factor Unidad:</label>
        <input
          type="text"
          className="form-control"
          id="unidad_factor"
          name="unidad_factor"
          ref={register({required:true})}
        />
        {errors.unidad_factor && errors.unidad_factor.type === 'required' && (
          <small className="text-danger font-weight-bold">Factor es requerido</small>
        )}
      </div>  
      <div className="form-group">
        <label htmlFor="unidad_descripcion">Observación Unidad:</label>
        <textarea
          className="form-control"
          id="unidad_observacion"
          name="unidad_observacion"
          ref={register({required:true})}
        />
        {errors.unidad_descripcion && errors.unidad_descripcion.type === 'required' && (
          <small className="text-danger font-weight-bold">Descripción es requerido</small>
        )}
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        {textoBoton}
      </button>
    </form>
  );
}
