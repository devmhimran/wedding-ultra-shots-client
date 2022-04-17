import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default HeaderNav;