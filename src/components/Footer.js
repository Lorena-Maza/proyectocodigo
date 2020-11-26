import React from "react";
import styled from "styled-components";
import facebook from '../img/facebook.svg';
import youtube from '../img/youtube.svg';
import istagram from '../img/istagram.svg';
import twiter from '../img/twiter.svg';
import Map  from '../img/map.png';
import {Link} from "react-router-dom";
import {Nav} from 'react-bootstrap';

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;

function Footer() {
    return (
     <FooterContainer className="main-footer">
      <div className="footer-middle">
      <div className="container">
       <div className="row">
        {/*Column1*/}
        <div className="col-12 col-lg-6 col-xl-3">        
        <h6><b>Nosotros</b></h6>
        <ul className="list-unstyled">
            <li>Equipo</li>
            <li>Responsabilidad</li>
            <li>Nuestros amigos</li>
            {/* <li>Otros</li> */}
        </ul>        
       </div> 
       {/*Column2*/}
       <div className="col-12 col-lg-6 col-xl-3">
        <h6><b>Información</b></h6>
        <ul className="list-unstyled">
            {/* <li>Contáctanos</li> */}
            <li>Envío y devolución</li>
            <li>Política y Privacidad</li>
            <li>Términos y Condiciones</li>
        </ul>        
       </div> 
       {/*Column3*/}
       {/* <div className="col-12 col-lg-6 col-xl-3">
        <h6><b>Nuestras Redes Sociales</b></h6>
        <ul className="list-unstyled">
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>Twiter</li>
        </ul>        
       </div>              */}
       <div className="col-12 col-lg-8 col-xl-5">         
        <h6><b>Contáctanos en:</b></h6>
        <ul className="list-unstyled">
        <Nav.Link>
            <lu><img src={facebook} width="30" height="30" className="d-inline-block align-top mr-md-4 mr-3" alt="Facebook"/></lu>
            <lu><img src={youtube} width="30" height="30" className="d-inline-block align-top mr-md-4 mr-3" alt="Youtube"/></lu>
            <lu><img src={istagram} width="30" height="30" className="d-inline-block align-top mr-md-4 mr-3" alt="Istagram"/></lu>
            <lu><img src={twiter} width="30" height="30" className="d-inline-block align-top mr-md-4 " alt="Twiter"/></lu>
            <lu><Link to='/contactanos'><img src={Map} width="30" height="30" className="d-inline-block align-top mr-md-4 " alt="Contactanos"/></Link></lu>
            </Nav.Link>
        </ul>        
       </div>  
      </div>
      {/*Footer Bottom*/}      
      <div className="footer-bottom">
        <p className="text-xs-center">
        &copy;{new Date().getFullYear()}Todos los Derechos Reservados - 2020
        </p>
      </div>
      </div>
     </div>
    </FooterContainer>
  );
}
export default Footer;


