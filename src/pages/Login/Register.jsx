import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import { useState } from 'react';

const Register = () => {
    const {createUser,updateUserProfileData} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    // const navigate = useNavigate();
    

    const handleSubmit = (event) =>{
        event.preventDefault()

        // to create a new user account 
        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            // to update user name and photo url
            updateUserProfileData(name,photoURL);
            // to clear the all register input fields 
            event.target.reset() ;
            // to unchecked the checkbox 
            setAgreeTerms(false);
            // navigate('/category/0')
        })
        .catch(error => console.log(error.message));

    }
    
    return (
        <div className='container w-25'>
        <h3>Please Register</h3>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="photoURL">
        <Form.Label>Photo URL:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the photo URL"
          onChange={(e) => setPhotoURL(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formTermsCheckbox">
        <Form.Check
          type="checkbox"
          label={<>I agree to <Link to='/terms'>the terms and conditions</Link></>}
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
        />
      </Form.Group>
      <br />

      <Button variant="primary" disabled={!agreeTerms} type="submit">
        Sign Up
      </Button>
      <br />
      <Form.Text>
      Already have an account<Link to='/login'> Login</Link>
      </Form.Text>
      
      
    </Form>
       
   
       </div>
    );
};

export default Register;