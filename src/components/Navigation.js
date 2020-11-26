import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import register from '../img/registrarse.svg';
import carrito from '../img/car.png';
import login  from '../img/iniciarsesion.svg';

// const navbar = {backgroundColor: '#f30fb5', color:'white'};
const navbar = {backgroundColor: '#E9136D '};


export default function Navigation() {
  return (
    <div>   
      <Navbar style={navbar}  variant="dark" >
      <Navbar.Brand href="/">FestoShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link><Link to='/QuienesSomos' style={{color: 'white', textDecoration: 'none'}}>Inicio</Link></Nav.Link>                           */}
          {/* <NavDropdown title="Cajas Temáticas" id="basic-nav-dropdown" >
            <NavDropdown.Item href="Caja/BabyShower">BabyShower</NavDropdown.Item>
            <NavDropdown.Item href="Caja/Cumpleaños">Cumpleaños</NavDropdown.Item>
            <NavDropdown.Item href="Caja/Despedida de Soltero">Despedida de Soltero</NavDropdown.Item>          
          </NavDropdown> */}
        
          <Nav.Link><Link to='/admin/verproductos' style={{color: 'white', textDecoration: 'none'}}>Productos</Link></Nav.Link>                                   
          <Nav.Link><Link to='/admin/vertematicas' style={{color: 'white', textDecoration: 'none'}}>Temáticas</Link></Nav.Link>                                   
          <Nav.Link><Link to='/admin/vercategorias' style={{color: 'white', textDecoration: 'none'}}>Categorias</Link></Nav.Link>                                   
        </Nav>
        <Navbar.Collapse className="justify-content-end">              
                <Nav.Link><Link to='/Registro' style={{color: 'white', textDecoration: 'none', stroke:'white'}}><img src={login} width="30" height="30" className="d-inline-block align-top" alt="Iniciar Sesión"/>Regístrarse</Link></Nav.Link>
                {/* <Nav.Link><Link to='/cajaFiesta' style={{color: 'white', textDecoration: 'none'}}><img src={register} width="30" height="30" className="d-inline-block align-top" alt="Regístrate"/>Cajas de Fiesta</Link></Nav.Link>                 */}
                <Nav.Link><Link to='/carrito' style={{color: 'white', textDecoration: 'none'}}><img src={carrito} width="30" height="30" className="d-inline-block align-top" alt="Carrito"/>Carrito</Link></Nav.Link>                
        </Navbar.Collapse> 
        <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button variant="outline-light">Buscar</Button>
    </Form>      
      </Navbar.Collapse>
    </Navbar> 
    </div>
  );
}
