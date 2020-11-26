import { rgbToHex } from '@material-ui/core';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from "react-router-dom";
import carrusel1 from "../img/carrusel1.jpg";
import carrusel2 from "../img/carrusel2.jpg";
import carrusel3 from "../img/carrusel3.jpg";

export default function Carrusel() {
    return (
<div>
<Carousel>    
    <Carousel.Item>        
        <img
        className="d-block w-100" width="700" height="600"
        src={carrusel1}
        alt="Firest slide"         
        />
        <Carousel.Caption  style={{background: '#E5E7E9', opacity: .5}}>
        <h3  style={{color: '#78281F', textDecoration: 'none'}}>Boo!! Halloween diseños exclusivos</h3>
        <p  style={{color: '#943126', textDecoration: 'none'}}> Tenemos los diseños más divertidos para que tengas una fiesta terriblemente espectacular</p>        
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"  width="700" height="600"
        src={carrusel2}
        alt="Third slide"
        />
        <Carousel.Caption style={{background: '#E5E7E9', opacity: .7}}>   
        <h3 style={{color: '#78281F', textDecoration: 'none'}}>Que empieze la Fiesta!!!</h3>
        <p style={{color: '#943126', textDecoration: 'none'}}>Pasa los mejores momentos con tus familiares...</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"  width="700" height="600"
        src={carrusel3}
        alt="Deja que tu creatividad se desarrolle..."
        />
        <Carousel.Caption   style={{background: '#E5E7E9', opacity: .7}}>
        <h3 style={{color: '#78281F', textDecoration: 'none'}}>Disfruta la Fiesta!!!</h3>
        <p style={{color: '#943126', textDecoration: 'none'}}>Son la nueva forma de celebrar cada momento especial...</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>
    )
}
