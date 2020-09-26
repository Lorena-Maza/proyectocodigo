import React, {Fragment} from 'react'
import {Route} from "react-router-dom";

import HomeView from './views/HomeView';
import DetailView from './views/DetailView';
import CarritoView from './views/CarritoView';
import BabyShowerView from './views/BabyShowerView'
//import DashboardView from './views/DashboardView';
import CrearProductoView from './views/CrearProductoView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

import DetailSanView from './views/DetailSanView';
import SanValentinView from './views/SanValentinView'
import CrearProductoSanView from './views/CrearProductoSanView';

export default function routes() {
  return (
    <Fragment>
       <Route exact path="/" component={LoginView} />
      <Route exact path="/home" component={HomeView} />
      <Route exact path="/tematicas/babyshower" component={BabyShowerView} />
      <Route exact path="/detalle/:id" component={DetailView} />
      <Route exact path="/carrito" component={CarritoView}/>
      <Route exact path="/admin/babyshower" component={CrearProductoView} />
      <Route exact path="/registrate" component={RegisterView} />
      
      <Route exact path="/festividades/sanvalentin" component={SanValentinView} />
      <Route exact path="/admin/sanvalentin" component={CrearProductoSanView} />
      <Route exact path="/detallesan/:id" component={DetailSanView} />
    </Fragment>
  )
}

{/*
        


  <Route exact path="/admin/dashboard" component={DashboardView} />

 */}
