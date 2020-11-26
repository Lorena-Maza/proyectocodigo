// import React, { useState, useEffect, useContext } from "react";
// import { CarritoFiestaContext } from "../context/carritoCajaContext";
// import {Link} from 'react-router-dom';

// export default function CajaFiestaView() {
//   const { carrito2 } = useContext(CarritoFiestaContext);
//   const [miCarrito2, setMiCarrito] = useState([]);

//   const configurarCarrito = () => {
//     setMiCarrito(carrito2);
//   };
  
//   useEffect(() => {
//     configurarCarrito();
//   }, []);

//   return (
//     <div>
//       <h1>Armando Caja de Fiesta!</h1>
//       <br></br>
      
//       <table className="table">
//         <thead>
//         <tr>
//           Nombre
//           <input
//             type="text"
//             className="form-control"
//           />
//           </tr><br></br>
//           <tr>
//           Descripción
//           <input
//             type="text"
//             className="form-control"
//           />
//           </tr><br></br>
//            <h5 className="text-secondary">Detalle de productos</h5>
//           <br></br>
//           <tr>
//             <th>Nº</th>
//             <th>Nombre</th>
//             <th>Cantidad</th>
//             <th>Precio Unit.</th>
//             <th>Precio Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {miCarrito2.map(
//             (
//               {
//                 producto_id,
//                 producto_precio,
//                 producto_cantidad,
//                 producto_nombre,
//               },
//               i
//             ) => (
             
//               <tr key={i}>
               
//                 <td>{i + 1}</td>
//                 <td>{producto_nombre}</td>
//                 <td>{producto_cantidad}</td>
//                 <td>{producto_precio}</td>
//                 <td>{producto_cantidad * producto_precio}</td>
//               </tr>

              
//             )
//           )
//           }

              
//               <br></br>
//               <Link className="btn btn-lg btn-block btn-outline-primary">Armar Caja</Link>      
//         </tbody>
//       </table>
//     </div>

    
//   );
// }
