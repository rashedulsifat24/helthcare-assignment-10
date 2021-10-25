import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {
    const {user,logInWithGoogle,logOut}=useFirebase();
    return (
        <div>
            <Navbar bg="black" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>

                <Navbar.Brand as={Link} to="/home">
                    <img src="https://i.ibb.co/6D0bfSd/logo-white.webp" alt="" height="60px" />
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
               
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/depertment">Depertment</Nav.Link> 
                {
                    user?.email ?
                    <Button onClick={logOut} variant="link">Logout</Button>:
                    <Nav.Link as={Link} to="/login">login</Nav.Link>
                }
                
                
                <Navbar.Text>
                    Signed in as: <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    );
};

export default Header;