import React from "react";
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="/img/box2222.jpg"
        alt="First slide"
       
      />
      <Carousel.Caption >
        <h3>Arma tu Box</h3>
        <p>Visita nuestas Temáticas</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="/img/caballitos-boys.jpeg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>te ayudamos a decorar</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/img/llamaparty22.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Que comience la fiesta!</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

    

  );
}
