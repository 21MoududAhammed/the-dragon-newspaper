import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                                <Link className='text-decoration-none m-2 font-weight-bold' to='/'>Home</Link>
                                <Link className='text-decoration-none m-2 font-weight-bold' to='/#'>About</Link>
                                <Link className='text-decoration-none m-2 font-weight-bold' to='/#'>Career</Link>
                           
                        </Nav>
                        <Nav>
                            {
                                user && 
                                <Nav.Link href="#deets">
                                    <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
                                </Nav.Link>
                            }
                            
                            {
                                user ? <Button variant="secondary">LogOut</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default NavigationBar;