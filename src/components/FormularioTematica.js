import React, { useState, useEffect } from "react";
import { subirImagen } from "../services/tematicasService";
import { storage } from "../config/firebase";
import { useForm } from "react-hook-form";

let imagenTematica;

export default function FomularioTematica({ opt,createTematic, textoBoton }) {

  let { register, handleSubmit, errors} = useForm();

  const manejarImagen = (e) => {
    e.preventDefault();
    let miImagen = e.target.files[0];
    // console.log(miImagen);
    imagenTematica = miImagen;
  };

  const manejarSubmit = (data) => {
    // console.log(data)
    const refStorage = storage.ref(`tematicas/${imagenTematica.name}`);
    subirImagen(imagenTematica, refStorage).then((urlImagen) => {
      console.log(urlImagen);
      // setValue({...value, producto_imagen:urlImagen})
      //despues de que ya subi mi imagen
      createTematic({ ...data, tematica_imagen: urlImagen }); //mando a crear el Producto
    });
  };

  return (
    <form
      onSubmit={handleSubmit(manejarSubmit)}
    >
      <div className="form-group">
        <label htmlFor="tematica_nombre">Nombre Temática:</label>
        <input
          type="text"
          className="form-control"
          id="tematica_nombre"
          name="tematica_nombre"
          ref={register({required:true})}
        />
        {errors.tematica_nombre && errors.tematica_nombre.type === 'required' && (
          <small className="text-danger font-weight-bold">Nombre es requerido</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="tematica_descripcion">Descripción Temática:</label>
        <textarea
          className="form-control"
          id="tematica_descripcion"
          name="tematica_descripcion"
          ref={register({required:true})}
        />
        {errors.tematica_descripcion && errors.tematica_descripcion.type === 'required' && (
          <small className="text-danger font-weight-bold">Descripción es requerido</small>
        )}
      </div>
      <div className="form-group">
        <label>Elegir Imagen</label>
        <input
          type="file"
          onChange={(e) => {
            manejarImagen(e);
          }}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        {textoBoton}
      </button>
    </form>
  );
}
