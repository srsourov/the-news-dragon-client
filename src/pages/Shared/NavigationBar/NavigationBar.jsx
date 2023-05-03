import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut() 
        .then()
        .catch(error => console.log(error.message))
    }

    return (
        <Container className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                    {user && <FaUserCircle style={{fontSize: "2rem"}}></FaUserCircle>}
                    
                    {user ? <Button onClick={handleLogOut} variant="dark">Logout</Button> : 
                            <Link to="/login"><Button variant="dark">Login</Button></Link>
                    }
                    
                </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    );
};

export default NavigationBar;