import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavBar extends React.Component{

  render(){

    return(
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">COVID-19 México</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Estados</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Acerca de
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>  
    );
  }


}


export default NavBar;