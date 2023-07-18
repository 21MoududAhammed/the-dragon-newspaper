import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { useState } from 'react';

const Login = (event) => {
  
  const {logIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state.from.pathname;
  // console.log(from)
  
  const handleSubmit =(event)=>{
    event.preventDefault();
      // to log in 
      logIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        setSuccessMessage('Log in process done')
        // console.log(loggedUser);
        event.target.reset();
        // it will take us where I was to go but we couldn't go because the user was not logged in 
        // Moreover, here we used {replace: true } so that browser doesn't save it as history 
        navigate(from,{replace:true})

      }).catch(error => console.log(error.message));
  }
    return (
       <div className='container w-25'>
        <h3>Please Login</h3>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      {
        <p className='text-success'><small>{successMessage}</small></p>
      }
      
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text>
        Don't have an account?<Link to='/register'> Register</Link>
      </Form.Text>
    </Form>
      
    
       </div>
    );
};

export default Login;