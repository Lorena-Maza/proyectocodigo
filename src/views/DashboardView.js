import React, { Fragment, useState, useEffect } from "react";
import { obtenerProductos, borrarProducto } from "../services/productosService";
import { obtenerTematicas, borrarTematica } from "../services/tematicasService";
import { obtenerCategorias, borrarCategoria } from "../services/categoriasService";
import { obtenerUnidades, borrarUnidad } from "../services/unidadesService";
import ProductosTabla from "../components/ProductosTabla";
import TematicasTabla from "../components/TematicasTabla";
import CategoriasTabla from "../components/CategoriasTabla";
import UnidadesTabla from "../components/UnidadesTabla";
import Loading from "../components/Loading";
import Grafico from "../components/Grafico";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function DashboardView() {
  const [misProductos, SetMisProductos] = useState([]);  
  const [misTematicas, SetMisTematicas] = useState([]);  
  const [misCategorias, SetMisCategorias] = useState([]);  
  const [misUnidades, SetMisUnidades] = useState([]);  
  const [cargando, setCargando] = useState(true);

  const getProductos = async () => {
    const productos = await obtenerProductos();
    SetMisProductos(productos);
    setCargando(false);
  };

  const getTematicas = async () => {
    const tematicas = await obtenerTematicas();
    SetMisTematicas(tematicas);
    setCargando(false);
  };

  const getCategorias = async () => {
    const categorias = await obtenerCategorias();
    SetMisCategorias(categorias);
    setCargando(false);
  };

  const getUnidades = async () => {
    const unidades = await obtenerUnidades();
    SetMisUnidades(unidades);
    setCargando(false);
  };

 const deleteProduct = (id) => {
    Swal.fire({
      icon: "danger",
      title: "Esta seguro eliminar el producto?",
      showConfirmButton: true,
      confirmButtonText: "Si, Eliminar",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if(resultSwal.isDismissed === true){ //si es que doy click a cancelar no haga nada
        return;
      }
      setCargando(true); //comienzo a cargar porque mi peticion demora
      const productoEliminado = await borrarProducto(id); //borro, va a demorar
      console.log(productoEliminado);
      getProductos();
    });
  }; 

  const deleteTematic = (id) => {
    Swal.fire({
      icon: "danger",
      title: "Esta seguro eliminar la temática?",
      showConfirmButton: true,
      confirmButtonText: "Si, Eliminar",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if(resultSwal.isDismissed === true){ //si es que doy click a cancelar no haga nada
        return;
      }
      setCargando(true); //comienzo a cargar porque mi peticion demora
      const tematicaEliminado = await borrarTematica(id); //borro, va a demorar
      console.log(tematicaEliminado);
      getTematicas();
    });
  }; 

  const deleteCategori = (id) => {
    Swal.fire({
      icon: "danger",
      title: "Esta seguro eliminar la categoria?",
      showConfirmButton: true,
      confirmButtonText: "Si, Eliminar",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if(resultSwal.isDismissed === true){ //si es que doy click a cancelar no haga nada
        return;
      }
      setCargando(true); //comienzo a cargar porque mi peticion demora
      const categoriaEliminado = await borrarCategoria(id); //borro, va a demorar
      console.log(categoriaEliminado);
      getCategorias();
    });
  }; 

  const deleteUnida = (id) => {
    Swal.fire({
      icon: "danger",
      title: "Esta seguro eliminar la unidad de medida?",
      showConfirmButton: true,
      confirmButtonText: "Si, Eliminar",
      showCancelButton: true,
    }).then(async (resultSwal) => {
      if(resultSwal.isDismissed === true){ //si es que doy click a cancelar no haga nada
        return;
      }
      setCargando(true); //comienzo a cargar porque mi peticion demora
      const unidadEliminado = await borrarUnidad(id); //borro, va a demorar
      console.log(unidadEliminado);
      getUnidades();
    });
  }; 


  useEffect(() => {
    getProductos();    
  }, []);

  useEffect(() => {
    getTematicas();    
  }, []);

  useEffect(() => {
    getCategorias();    
  }, []);

  useEffect(() => {
    getUnidades();    
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <div>
          <h1>Dashboard</h1>         
          <Link className="btn btn-primary mb-3" to="/admin/creartematica">
            Agregar Nueva Temática
          </Link>
          <Link className="btn btn-primary mb-3" to="/admin/crearcategoria">
            Agregar Nueva Categoria
          </Link>
          <Link className="btn btn-primary mb-3" to="/admin/crearunidad">
            Agregar Nueva Unidad de Medida
          </Link>
          <Link className="btn btn-primary mb-3" to="/admin/crearproducto">
            Agregar Nuevo Producto
          </Link>
          <Link className="btn btn-primary mb-3" to="/admin/crearCaja">
            Agregar Nueva Caja
          </Link>

          <ProductosTabla
            productos={misProductos}
            deleteProduct={deleteProduct} 
            // editaProduct={editarProduct}                                
          />          
          <TematicasTabla
            tematicas={misTematicas}
            deleteTematic={deleteTematic} 
            // editaTematic={editarTematic}           
                      
          />          
          <CategoriasTabla
            categorias={misCategorias}
            deleteCategori={deleteCategori} 
            // editaCategori={editarCategori}           
                      
          />
          <UnidadesTabla
            unidades={misUnidades}
            deleteUnida={deleteUnida} 
            // editaCategori={editarCategori}           
                      
          />
          <Grafico productos={misProductos}/>        
        </div>
      )}
    </Fragment>
  );
}
