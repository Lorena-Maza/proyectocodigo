import React, { useState, useEffect } from "react";


import TarjetasComoFunciona from '../components/TarjetaComoFunciona';
import Carrusel from '../components/Carrusel';

export default function HomeView() {
  return (
    <div className="mt-0">      
      <div className="col">
        <div className="mt-0">
          <Carrusel/>
          <br></br> 
          <h4>
            <p class="display-4">¿Cómo Funciona?</p></h4>           
          <TarjetasComoFunciona/>
          <br></br>            
        </div>
      </div>
    </div>

  );
}
