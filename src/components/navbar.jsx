import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './about';
import Portfolio from './portfolio';
import Resume from './resume';
import Home from './home';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom';

class NavBar extends Component {

    render(){
        return (
            <Router>
                <Navbar className="nav-bar">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Navbar>
                <Switch>
                    <Route path = '/about' component={About}/>
                    <Route path = '/portfolio' component={Portfolio}/>
                    <Route path = '/resume' component={Resume}/>
                    <Route path = '/' component={Home}/>
                </Switch>
            </Router>
        );
    }
}



export default NavBar;
