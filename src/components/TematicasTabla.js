import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function TematicasTabla({ tematicas, deleteTematic,editaTematic}) {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Descripción</th>            
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tematicas.map(
            (
              {
                tematica_nombre,
                tematica_descripcion,                
                tematica_id,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{tematica_nombre}</td>
                <td>{tematica_descripcion.slice(0, 40)} ...</td>                
                <td>
                  <Link className="btn btn-outline-info btn-sm mr-2" to={`/admin/editartematica/${tematica_id}`}>
                    <i className="fas fa-pen-alt"></i>
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>{deleteTematic(tematica_id)}}>
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