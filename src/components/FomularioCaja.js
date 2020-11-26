import React, { useState, useEffect } from "react";
import storage  from "../config/firebase";

export default function FomularioCaja({textoBoton}) {
  const [categorias, register,errors] = useState([]);

  // let db = storage.firestore();
  const getCategorias = () => {
    return new Promise((resolve, reject) => {
      let consulta = storage.collection("tienda");
      // console.log(consulta)
      consulta.onSnapshot((snap) => {
        //console.log(onSnapshot);
        let categoriasTmp = [];
        snap.forEach((categoria) => {
         // console.log(categoria.producto_nombre);
          let objCategoria = {
            id: categoria.id,
            descripcion: categoria.producto_nombre
          };

          categoriasTmp.push(objCategoria);
        });

        resolve(categoriasTmp);
      });
    });
  };
  return (
    <form
      // onSubmit={handleSubmit(manejarSubmit)}
    >
      {/* <div className="form-group">
        <label htmlFor="caja_nombre">Nombre Caja:</label>
        <input
          type="text"
          className="form-control"
          id="caja_nombre"
          name="caja_nombre"
          ref={register({required:true})}
        />
        {errors.caja_nombre && errors.caja_nombre.type === 'required' && (
          <small className="text-danger font-weight-bold">Nombre es requerido</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="caja_descripcion">Descripción Caja:</label>
        <textarea
          className="form-control"
          id="caja_descripcion"
          name="caja_descripcion"
          ref={register({required:true})}
        />
        {errors.caja_descripcion && errors.caja_descripcion.type === 'required' && (
          <small className="text-danger font-weight-bold">Descripción es requerido</small>
        )}
      </div> */}
      <div className="form-group">
      <label htmlFor="categoria_descripcion">Categoria:</label>
        <select>
        {/* console.log(categorias) */}
          {categorias.map((cat, i) => (
            <option key={i}>{cat.producto_nombre}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        {textoBoton}
      </button>
    </form>
  );
}
