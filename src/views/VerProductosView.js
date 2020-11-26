import React, {useState, useEffect} from 'react'
import TarjetasProducto from '../components/TarjetasProducto';
import {obtenerProductos} from '../services/productosService';
import Slider from "@material-ui/core/Slider";

export default function VerProductosView() {
 
  const [productos, setProductos] = useState([]);  
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroTematica, setFiltroTematica] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroUnidad, setFiltroUnidad] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState([1,9999]);

  const getProducts = async () => {
    let data = await obtenerProductos()
    // console.log(data)
    setProductos(data)
  }
  function precioText(value) {
    return `S/ ${value}`;
  }
  useEffect(()=>{
    getProducts();
  },[])  
//----------------------------------------------------
  const manejarFiltroPrecio = (event, precio) => {
    setFiltroPrecio(precio);
  };

  const filtrarProductos = () => {
    let prodFiltrados = 
      productos.filter((prod) => 
        prod.producto_nombre.toLowerCase().includes(filtroNombre.toLowerCase()) === true 
        && prod.producto_tematica.toLowerCase().includes(filtroTematica.toLowerCase()) === true 
        && prod.producto_categoria.toLowerCase().includes(filtroCategoria.toLowerCase()) === true 
        && prod.producto_unidad.toLowerCase().includes(filtroUnidad.toLowerCase()) === true 
        && prod.producto_precio >= filtroPrecio[0] 
        && prod.producto_precio <= filtroPrecio[1]
      );
    setProductos(prodFiltrados);
  };
  return (
    <div className="mt-4">      
      <div className="row">
        <div className="col-12 col-md-3">
        {/* col-12 col-md-3 font-weight-bold */}
        <h3>Buscar Productos:</h3>
          <div className="form-group">
            <label htmlFor="search">Por Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba el nombre de su producto"
              value={filtroNombre}
              onChange={(e) => {
                setFiltroNombre(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="search">Por Temática:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba la temática de su producto"
              value={filtroTematica}
              onChange={(e) => {
                setFiltroTematica(e.target.value);
              }}
            />
          </div>      
          <div className="form-group">
            <label htmlFor="search">Por Categoria:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba la Categoria de su producto"
              value={filtroCategoria}
              onChange={(e) => {
                setFiltroCategoria(e.target.value);
              }}
            />
          </div>    
          <div className="form-group">
            <label htmlFor="search">Por Unidad:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escriba la Unidad de su producto"
              value={filtroUnidad}
              onChange={(e) => {
                setFiltroUnidad(e.target.value);
              }}
            />
          </div>    
          <div className="form-group">
            <label>Por Precio:</label>
            <Slider
              value={filtroPrecio}
              onChange={manejarFiltroPrecio}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={precioText}
              min={1}
              max={50}
            />
          </div>
          <button 
            className="btn btn-danger btn-sm btn-block"
            onClick={() => {
              filtrarProductos();
            }}
          >
            Buscar
          </button>
          <button className="btn btn-secondary btn-sm btn-block" onClick={()=>{getProducts()}}>Restaurar</button>
        </div>
        <div className="col-12 col-md-9">
          <h3>Lista de Productos</h3>
          <TarjetasProducto productos={productos} />
        </div>
      </div>
    </div>
  );
};