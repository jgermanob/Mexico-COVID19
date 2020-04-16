import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


class NavBar extends React.Component{

  render(){

    return(

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">COVID-19 México</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href='/estados'>Estados</Nav.Link>
            </Nav>
            <Nav>
              {/*
              <Nav.Link eventKey={1} href="#about">
                Acerca de
                </Nav.Link>*/
                }
            </Nav>
          </Navbar.Collapse>
      </Navbar>

    );
  }


}


export default NavBar;