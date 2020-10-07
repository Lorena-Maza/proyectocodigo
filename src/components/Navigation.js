import React from "react";
import {Navbar, Nav,FormControl,Form,Button,NavDropdown} from 'react-bootstrap';

export default function Navigation() {
  return (
      <Navbar bg="dark" expand="lg"  variant="dark">
        <Navbar.Brand>FESTOSHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav  className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <NavDropdown title="Tematicas" id="basic-nav-dropdown">
            <NavDropdown.Item href="tematicas/babyshower">Baby Shower</NavDropdown.Item>
            <NavDropdown.Item href="tematicas/frozen">Frozen</NavDropdown.Item>
            <NavDropdown.Item href="tematicas/fiesta">Fiesta</NavDropdown.Item>
            <NavDropdown.Item href="tematicas/carro">Carros</NavDropdown.Item>
            <NavDropdown.Item href="tematicas/princesa">Princesas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item href="festividades/sanvalentin">San Valentín</NavDropdown.Item>
            <NavDropdown.Item href="festividades/madre">Día de la Madre</NavDropdown.Item>
            <NavDropdown.Item href="festividades/padre">Día del Padre</NavDropdown.Item>
            <NavDropdown.Item href="festividades/primavera">Día de la primavera</NavDropdown.Item>
            <NavDropdown.Item href="festividades/halloween">Halloween</NavDropdown.Item>
            <NavDropdown.Item href="festividades/navidad">Navidad</NavDropdown.Item>
            <NavDropdown.Item href="festividades/annionuevo">Año Nuevo</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="festividades/sanvalentin">San Valentín</NavDropdown.Item>
            <NavDropdown.Item href="festividades/madre">Día de la Madre</NavDropdown.Item>
            <NavDropdown.Item href="festividades/padre">Día del Padre</NavDropdown.Item>
            <NavDropdown.Item href="festividades/primavera">Día de la primavera</NavDropdown.Item>
            <NavDropdown.Item href="festividades/halloween">Halloween</NavDropdown.Item>
            <NavDropdown.Item href="festividades/navidad">Navidad</NavDropdown.Item>
            <NavDropdown.Item href="festividades/annionuevo">Año Nuevo</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          
          <Form inline> 
        <Navbar>
          <Navbar.Brand href="/registrate">
          <img
            src="/img/v6_8.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Regístrate"
          />Regístrate
          </Navbar.Brand>
        </Navbar>
        <Navbar>
          <Navbar.Brand href="/carrito">
          <img
            src="/img/v15_0.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Carrito"
          />Ver Carrito
          </Navbar.Brand>
        </Navbar> 
        </Form></Navbar>
  );
}
