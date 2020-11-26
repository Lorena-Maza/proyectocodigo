import React, { useState, useEffect, useContext, Fragment } from "react";
import { obtenerProductoPorId } from "../services/productosService";
import { CarritoContext } from "../context/carritoContext";
import { CarritoFiestaContext } from "../context/carritoCajaContext";
import Count from "../components/Count";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

export default function DetailView(props) {
  // console.log("Detalle Props", props)
  const productoId = props.match.params.id; //aca obtengo el id de la URL
  //estadoLocal
  const [miProducto, setMiProducto] = useState({});
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);

   //Context
   const { carrito2, anadirProducto2 } = useContext(CarritoContext);
   //console.log("carritoDelContext", carrito);
  //Context
  const { carrito, anadirProducto } = useContext(CarritoContext);
  //console.log("carritoDelContext", carrito);

  const getProduct = async () => {
    let productoObtenido = await obtenerProductoPorId(productoId);
    // console.log(productoObtenido);
    setMiProducto(productoObtenido);
    setCargando(false);
  };

  const anadirAlCarrito = () => {
    let productoAAnadir = {
      producto_id: miProducto.producto_id,
      producto_nombre: miProducto.producto_nombre,
      producto_precio: miProducto.producto_precio,
      producto_cantidad: cantidad,
    };
    anadirProducto(productoAAnadir);

    //alerta de que se añadio el producto con exito
    Swal.fire({
      icon: "success",
      title: "Producto añadido al carrito",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const anadirACaja = () => {
    let productoAAnadirCaja = {
      producto_id: miProducto.producto_id,
      producto_nombre: miProducto.producto_nombre,
      producto_precio: miProducto.producto_precio,
      producto_cantidad: cantidad,
    };
    anadirProducto2(productoAAnadirCaja);

    //alerta de que se añadio el producto con exito
    Swal.fire({
      icon: "success",
      title: "Producto añadido al carrito",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Fragment>
      {cargando === true ? (
        <Loading />
      ) : (
        <div className="mt-3">
          <div className="row">
            <div className="col-12 col-lg-6">
              <img
                src={miProducto.producto_imagen}
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-lg-6">
              <h1>{miProducto.producto_nombre}</h1>
              <h2>Precio: {miProducto.producto_precio}</h2>
              <h4>Descripción:</h4>
              <p>{miProducto.producto_descripcion}</p>
              <button
                className="btn btn-primary btn-block mt-2"
                onClick={() => {
                  anadirAlCarrito();
                }}
              >
                Agregar al Carrito
              </button>
              <button
                className="btn btn-primary btn-block mt-2"
                onClick={() => {
                  anadirACaja();
                }}
              >
                Agregar a Caja Fiesta
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
