import React from "react";
import {Navbar, Nav,FormControl,Form,Button,NavDropdown} from 'react-bootstrap';

export default function Navigation() {
  return (
    <div>
      <Navbar bg="navbar navbar-expand-md navbar-dark  bg-info mb-4" expand="lg"  variant="dark">
        <Navbar.Brand href="/home">Feshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavDropdown title="Tematicas" id="basic-nav-dropdown">
            <NavDropdown.Item href="tematicas/babyshower">Baby Shower</NavDropdown.Item>
            <NavDropdown.Item href="tematicas/frozen">Frozen</NavDropdown.Item>
            <NavDropdown.Item href="tematicas/fiesta">Fiesta</NavDropdown.Item>
            <NavDropdown.Item href="tematicas/carro">Carros</NavDropdown.Item>
            <NavDropdown.Item href="tematicas/princesa">Princesas</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Festividades" id="basic-nav-dropdown">
          <NavDropdown.Item href="festividades/sanvalentin">San Valentín</NavDropdown.Item>
            <NavDropdown.Item href="festividades/madre">Día de la Madre</NavDropdown.Item>
            <NavDropdown.Item href="festividades/padre">Día del Padre</NavDropdown.Item>
            <NavDropdown.Item href="festividades/primavera">Día de la primavera</NavDropdown.Item>
            <NavDropdown.Item href="festividades/halloween">Halloween</NavDropdown.Item>
            <NavDropdown.Item href="festividades/navidad">Navidad</NavDropdown.Item>
            <NavDropdown.Item href="festividades/annionuevo">Año Nuevo</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/registrate">Regístrate</Nav.Link>
        </Nav>       
        <Navbar.Collapse className="justify-content-end">
              
              <Navbar.Text>
                Ver: <a href="/carrito">Carrito</a>
              </Navbar.Text>
            </Navbar.Collapse>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
