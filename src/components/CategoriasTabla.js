import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CategoriasTabla({ categorias, deleteCategori,editaCategori}) {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Nº</th>            
            <th>Descripción</th>            
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(
            (
              {                
                categoria_descripcion,                
                categoria_id,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>                
                <td>{categoria_descripcion.slice(0, 40)} ...</td>                
                <td>
                  <Link className="btn btn-outline-info btn-sm mr-2" to={`/admin/editarcategoria/${categoria_id}`}>
                    <i className="fas fa-pen-alt"></i>
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>{deleteCategori(categoria_id)}}>
                  <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Fragment>
  );
}