import React, { useState, useEffect } from "react";
import { subirImagen } from "../services/categoriasService";
import { storage } from "../config/firebase";
import { useForm } from "react-hook-form";


let imagenCategoria;

export default function FomularioCategoria({ opt,createCategori, textoBoton }) {

  let { register, handleSubmit, errors} = useForm();

  const manejarImagen = (e) => {
    e.preventDefault();
    let miImagen = e.target.files[0];
    // console.log(miImagen);
    imagenCategoria = miImagen;
  };

  const manejarSubmit = (data) => {
    // console.log(data)
    const refStorage = storage.ref(`categorias/${imagenCategoria.name}`);
    subirImagen(imagenCategoria, refStorage).then((urlImagen) => {
      console.log(urlImagen);
      // setValue({...value, producto_imagen:urlImagen})
      //despues de que ya subi mi imagen
      createCategori({ ...data, categoria_imagen: urlImagen }); //mando a crear el Producto
    });
  };

  return (
    <form
      onSubmit={handleSubmit(manejarSubmit)}
    >      
      <div className="form-group">
        <label htmlFor="categoria_descripcion">Descripción Categoria:</label>
        <textarea
          className="form-control"
          id="categoria_descripcion"
          name="categoria_descripcion"
          ref={register({required:true})}
        />
        {errors.categoria_descripcion && errors.categoria_descripcion.type === 'required' && (
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
