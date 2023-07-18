import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
    const {user,logOut} = useContext(AuthContext);
   
    
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            
                                <Link className='text-decoration-none m-2'  to='/'>Home</Link>
                                <Link className='text-decoration-none m-2' to='/#'>About</Link>
                                <Link className='text-decoration-none m-2' to='/#'>Career</Link>
                            
                           
                        </Nav>
                        <Nav>
                            {
                                user && 
                                <div className='d-flex me-2 gap-2 align-items-center '>
                                <p className='my-auto'>{user.displayName}</p>
                                 <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
                                </div>
                            }
                            
                            {
                                user ?  <Link><Button onClick={()=> logOut()} className='text-white ' variant="primary">Log Out</Button></Link> :
                               
                                <Link to="/login">
                                <Button className='text-white' variant="primary">Login</Button>
                                </Link>
                               
                                
                            }
                             <Link to='/register'>
                                <Button className='ms-2 text-white'     variant="primary">Register</Button>
                                </Link>
                              
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;