import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    
    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const photo = form.photo.value;

           createUser(email, password)
           .then(result => {
                const createdUser = result.user;
                createdUser.displayName = name;
                createdUser.photoURL = photo;
                console.log(createdUser)
           })
           .catch(error => {
                console.log(error.message)
           })
            
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Name" required />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Paste Photo URL" required />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                    onClick={handleAccepted}
                    name='accept' 
                    type="checkbox" 
                    label={<>Accept {<Link to="/terms">Terms & Conditions</Link>}</>} required/>
            </Form.Group>
            <Button disabled={!accepted} variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-success">
                 
            </Form.Text>
            <Form.Text className="text-danger">
                 
            </Form.Text>
            <Form.Text className="text-success">
                <p>Already have an account? <Link to="/login">Login Now</Link> </p>
            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;