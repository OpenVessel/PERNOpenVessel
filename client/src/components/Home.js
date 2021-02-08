import React from 'react';
import { Container, Button } from 'react-bootstrap';


const Home = () => {
    return(
        <Container className="text-center">
            <div className="pt-3 pb-1" id="logo-container">
                <div id="openVessel-logo">
                    <img alt="OpenVessel Logo"></img>
                </div>
            </div>
            <div>
                <div className='text-center' style={{paddingBottom: "3%"}}>
                    <Button className='btn btn-main' style={{width: "20%", height: "50px", paddingRight: "20px"}}>Login</Button>
                    <Button className='btn btn-main' style={{width: "20%", height: "50px"}}>Register</Button>
                </div>
            </div>
        </Container>
    )
}

export default Home;