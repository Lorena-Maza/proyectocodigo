import React, { useState, useEffect } from "react";
import Caja from '../components/FomularioCaja';
import {obtenerCategorias} from '../services/categoriasService';

export default function HomeView() {
  
  const [misCategorias, SetMisCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  const getCategorias = async () => {
    const categorias = await obtenerCategorias();
    SetMisCategorias(categorias);
    setCargando(false);
  };

  useEffect(() => {
    getCategorias();    
  }, []);
  
  return (
    <div className="mt-0">      
      <div className="col">
        <div className="mt-0">
          <Caja/>
                  
        </div>
      </div>
    </div>

  );
}
