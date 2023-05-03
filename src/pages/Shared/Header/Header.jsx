import React, { useContext } from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import { Button, Container  } from 'react-bootstrap';
import Marquee from "react-fast-marquee";




const Header = () => {


    return (
        <Container className='my-4'>
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
            <div className='my-2'>
                
            </div>
            
        </div>
        </Container>
    );
};

export default Header;