import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
    return (
        <Container>
        <div>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do, YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex justify-center'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50} className='text-danger mx-2'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Profile</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <Button variant="dark">Login</Button>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
            
        </div>
        </Container>
    );
};

export default Header;