import React from "react";
import {CardGroup, Card } from 'react-bootstrap';



export default function Home() {
  return (
    <CardGroup>  
<Card>
  <Card.Img variant="top" src="/img/globo1.jpg" />
  <Card.Body>
    <Card.Title>Escoge tu caja de Fiesta</Card.Title>
    <Card.Text>
      Escoge entre nuestras cajas de fiestas temáticas o personaliza tu propia caja.
    </Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src="/img/globo2.jpg" />
  <Card.Body>
    <Card.Title>Siéntate y Relájate</Card.Title>
    <Card.Text>
     Vuelve hacer las cosas que amas, mientras preparas tu caja de fiesta.
    </Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src="/img/globo3.jpg" />
  <Card.Body>
    <Card.Title>Que empieze la fiesta!!!</Card.Title>
    <Card.Text>
      Su caja de Fiesta llegará a la puerta de tu casa con una guía rápida para armar de manera fácil los accesorios.
    </Card.Text>
  </Card.Body>
</Card>
</CardGroup> 
  )
}
