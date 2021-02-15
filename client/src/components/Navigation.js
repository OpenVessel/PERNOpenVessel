import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'


const Navigation = () => (
    <div>
    <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand as={Link} to="/">
        <img src={process.env.PUBLIC_URL + 'img/OpenVessel Logo.png'} width={70} alt="OpenVessel Logo"></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <NavigationNonAuth/>
    </Navbar.Collapse>
    </Navbar>
    </div>
);

// const NavigationAuth = () => (
//     <Nav className="mr-auto">
//         <Nav.Link as={Link} to={"/signout"}>Sign Out</Nav.Link>
        
//     </Nav>
//     );

const NavigationNonAuth = () => (
    <Nav className="mr-auto">
        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
        <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
    </Nav>
);


export default Navigation;