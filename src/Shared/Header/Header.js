import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/AuthProvider/useAuth/useAuth';
import './Header.css'

const Header = () => {

    const { user, handleLogOut, handleGoogleSignIn } = useAuth()

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Link to="/"><img className="logo" src="https://i.ibb.co/VpFMJ41/Group-33092.png" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="px-7 nav-link">
                            <Link to="/">Home</Link>
                            <Link to="/team">Our Team</Link>
                            <Link to="/portfolio">Our Portfolio</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/dashboard">DashBoard</Link>
                            {
                                !user.email && <Button onClick={handleGoogleSignIn} className="logIn">Log In</Button>

                            }

                            {
                                user.email && <Button onClick={handleLogOut} className="logIn">Log Out</Button>
                            }
                        </Nav>
                        <Navbar.Text>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </>
    );
};

export default Header;