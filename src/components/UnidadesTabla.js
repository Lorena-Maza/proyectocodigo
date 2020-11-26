import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function UnidadesTabla({ unidades, deleteUnida,editaUnida}) {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Descripción</th>            
            <th>Factor</th>            
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {unidades.map(
            (
              {
                unidad_nombre,
                unidad_descripcion,                
                unidad_factor,                
                unidad_id,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{unidad_nombre}</td>
                <td>{unidad_descripcion.slice(0, 40)} ...</td>                
                <td>{unidad_factor}</td>                
                <td>
                  <Link className="btn btn-outline-info btn-sm mr-2" to={`/admin/editarunidad/${unidad_id}`}>
                    <i className="fas fa-pen-alt"></i>
                  </Link>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>{deleteUnida(unidad_id)}}>
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