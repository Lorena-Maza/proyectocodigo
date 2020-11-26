import React, {Fragment} from 'react'
import {Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import HomeView from './views/HomeView';
import VerTematicasView from './views/VerTematicasView';
import VerProductosView from './views/VerProductosView';
import DetailView from './views/DetailView';
import CarritoView from './views/CarritoView';
import CajaFiestaView from './views/CajaFiestaView';
import DashboardView from './views/DashboardView';
import CrearProductoView from './views/CrearProductoView';
import CrearTematicaView from './views/CrearTematicaView';
import CrearCategoriaView from './views/CrearCategoriaView';
import CrearUnidadView from './views/CrearUnidadView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import VerCategoriasView from './views/VerCategoriasView';
import Contactanos from './views/MapView';

import CrearCajaView from './views/CrearCajaView';

export default function routes() {

  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/detalle/:id" component={DetailView} />
      <Route exact path="/carrito" component={CarritoView}/>
      <Route exact path="/cajaFiesta" component={CajaFiestaView}/>
      <Route exact path="/login" component={LoginView} /> 
      <Route exact path="/Registro" component={RegisterView} />
      
      <Route exact path="/admin/crearproducto" component={CrearProductoView} />
      <Route exact path="/admin/creartematica" component={CrearTematicaView} />
      <Route exact path="/admin/crearcategoria" component={CrearCategoriaView} />            
      <Route exact path="/admin/crearunidad" component={CrearUnidadView} />           
      <Route exact path="/admin/editarproducto/:id" component={CrearProductoView} />
      <Route exact path="/admin/editartematica/:id" component={CrearTematicaView} />
      <Route exact path="/admin/editarcategoria/:id" component={CrearCategoriaView} />
      <Route exact path="/admin/editarunidad/:id" component={CrearUnidadView} />
      <ProtectedRoute exact path="/admin/dashboard" component={DashboardView} />      
      <Route exact path="/admin/verproductos" component={VerProductosView} />
      <Route exact path="/admin/vertematicas" component={VerTematicasView} />
      <Route exact path="/admin/vercategorias" component={VerCategoriasView} />

      <Route exact path="/admin/crearcaja" component={CrearCajaView} />
      <Route exact path="/contactanos" component={Contactanos} />
    </Fragment>
  )
};
