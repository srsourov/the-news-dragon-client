import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        setError("")
        setSuccess("")
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            setSuccess("Logged In Successfully")
            navigate(from, {replace: true})
        })
        .catch(error => {
                setError(error.message)
                console.log(error.message)
        })
    }


    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-success">
                     {success}
                </Form.Text>
                <Form.Text className="text-danger">
                     {error}
                </Form.Text>
                <Form.Text className="text-success">
                    <p>Dont have an account? <Link to="/register">Register Now</Link> </p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;