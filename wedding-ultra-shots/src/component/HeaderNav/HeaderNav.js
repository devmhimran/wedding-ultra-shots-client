import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css';
import logo from '../../Assets/Wedding-Ultrashots-logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'
import auth from '../firebase.init';
const HeaderNav = () => {
    const [user]= useAuthState(auth);
    const logout = () => {
        // Added signout system
        signOut(auth);
      };
      
    //   Header Navbar
    return (
        <Navbar className='header__nav' expand="lg">
            <Container>
                <Navbar.Brand href="/"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav__link">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {
                            user ?
                            <Nav.Link onClick={logout}>Logout</Nav.Link> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;