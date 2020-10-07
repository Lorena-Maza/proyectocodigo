import React from "react";
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  return (
    <Carousel>
    <Carousel.Item style={{'height':"450px"}}>
      <img  style={{'height':"450px"}}  
        className="d-block w-100"
        src="/img/v3_2.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>¡Que empieze la Fiesta!</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{'height':"450px"}}>
      <img  style={{'height':"450px"}}  
        className="d-block w-100"
        src="/img/box2.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Escoge tu caja de Fiesta</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{'height':"450px"}}>
      <img  style={{'height':"450px"}}  
        className="d-block w-100"
        src="/img/halloween.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Siéntate y Relájate</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


  )
}
