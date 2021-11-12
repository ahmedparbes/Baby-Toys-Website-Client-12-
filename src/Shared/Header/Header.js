import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/AuthProvider/useAuth/useAuth';
import './Header.css'

const Header = () => {

    const { user, handleLogOut, } = useAuth()

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Link to="/"><img className="logo" src="https://i.ibb.co/R7hXjwN/logo-new.png" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="px-7 nav-link">
                            <Link to="/">Home</Link>
                            <Link to="/allProducts">Explore</Link>
                            <Link to="/about">About</Link>
                            {
                                !user.email && <div className="py-1 my-1">
                                    <button className="btn-danger login-btn ">
                                        <Link to="/register"><i className=" login-btn fas fa-sign-in-alt"><span className="font login-btn"> Register</span></i></Link></button>
                                </div>
                            }
                            {
                                user.email && <Link to="/dashboard"><i className="fas fa-user-shield"><span className="font">Dashboard</span></i></Link>
                            }
                            <br />
                            {
                                user.email &&
                                <button style={{ backgroundColor: 'purple', color: 'white', marginRight: '10px' }} className="font" onClick={handleLogOut} ><i className="fa fa-sign-out" aria-hidden="true"><span className="font mx-1"> Logout</span></i></button>
                            }


                            {/* {
                                user.email && <p className="user-name" ><i className=" fas fa-user-tie"><span className="font ">  {user.displayName}</span></i></p>
                            } */}

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