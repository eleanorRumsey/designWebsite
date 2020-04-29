import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {

    render(){
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href='/'>Eleanor Rumsey Designs</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://github.com/eleanorRumsey">
                            <i className ="fab fa-github"></i>
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/eleanorrumsey/">
                            <i className ="fab fa-linkedin"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}



export default NavBar;
