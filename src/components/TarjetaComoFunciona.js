import React from 'react'
import {Card,CardColumns,Button}  from 'react-bootstrap'
import funciona1 from '../img/globo1.png'
import funciona2 from '../img/globo2.png'
import funciona3 from '../img/globo3.png'
import funciona4 from '../img/decorando.jpg'
import funciona5 from '../img/box2222.jpg'
import funciona6 from '../img/ecoparty2.jpg'



export default function Tarjeta() {
    return (
<div>
<CardColumns>  
  <Card bg="" text="black" className="text-center p-3">
    <Card.Img src="top" src={funciona1} svg class="bd-placeholder-img rounded-circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder:140x140"></Card.Img>
    <Card.Body>
      <Card.Title class="h3 text-dark">Escoje tu Caja de Fiesta</Card.Title>
      <br/>
      <Card.Text class="h5 text-black-50 text-jutified">
        Elíje entre nuestras cajas de fiestas preparadas para tí, o personaliza la tuya. Que empieza la Fiesta!!!  <br/>  <br/>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="" text="black" className="text-center p-3">
    <Card.Img variant="top" src={funciona2} svg class="bd-placeholder-img rounded-circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder:140x140"></Card.Img>
    <Card.Body>
      <Card.Title class="h3 text-dark">Siéntate y Relájate</Card.Title>
      <br/>
      <Card.Text class="h5 text-black-50  text-jutified">
        Vuelve hacer las cosas que amas, pasa momentos diverstidos mientras p reparas tu caja de fiesta.Que empieze la Fiesta!!!
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="" text="black" className="text-center p-3">
    <Card.Img variant="top" src={funciona3} svg class="bd-placeholder-img rounded-circle" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder:140x140"></Card.Img>
    <Card.Body>
      <Card.Title class="h3 text-dark">Que empiece la Fiesta!!!</Card.Title>
      <br/>
      <Card.Text class="h5 text-black-50 text-jutified">
        Su caja de fiesta llegará a la puerta de su casa, con una guía rápida para armar de manera fácil los accesorios para la fiesta.   <br/><br/>  
      </Card.Text>
    </Card.Body>
  </Card>  
</CardColumns>


<hr class="featurette-divider"></hr>

<Card class="row featurette" >
  <Card class="col-md-7"></Card>
    <Card.Img class="row featurette" class="col-md-12" variant="top"  src={funciona4}  width="140" height="500" />
    <Card.Body>
    <Card.Title class="display-4 text-dark" >Tenemos lo último en tendencia </Card.Title>
      <Card.Text class="h4 font-weight-normal text-black-50">
      Contamos con la participación de los decoradores más reconocidos a nivel nacional y mundial, y junto a ellos aprenderemos a decorar y armar. Es momento de quedarnos en casa, de divertirnos y de pasar momentos agradables...quédate con Festoshop. 
      </Card.Text>
      <Button variant="info">Más información</Button>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img class="row featurette" class="col-md-12" variant="top" src={funciona5} width="140" height="500"/>
    <Card.Body>
    <Card.Title  class="display-4 text-dark" >Productos bien protegidos y desinfectados!!</Card.Title>
      <Card.Text p class="h4 font-weight-normal text-black-50">
      Te enviámos tus productos en un box de trupán, bien embalado y sobretodo desinfectados, trabajamos con un equipo de servicio logístico muy eficiente.  #TeQueremosSano
      </Card.Text>
      <Button variant="info">Más información</Button>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img class="row featurette" class="col-md-12" variant="top" src={funciona6} width="140" height="500"/>
    <Card.Body>
    <Card.Title class="display-4 text-dark">Te cuidamos querido planeta</Card.Title>
      <Card.Text p class="h4 font-weight-normal text-black-50">
      La mayoría de nuestros productos son biodegradables y reutilizables. Lo mejor de todo también puedes utilizar para decorar los ambientes de tú hogar
      </Card.Text>
      <Button variant="info">Más información</Button>
    </Card.Body>
  </Card>

  







  {/* <Card bg="primary" text="white" className="text-center p-3">    
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>    
  </Card> */}

</div>
 )
}
