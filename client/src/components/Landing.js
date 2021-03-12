import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from 'react-bootstrap';

const Landing = () => {
  return (
    <div className="text-center" style ={{paddingTop: "25vh"}}>
            
            <div id="logo-container">
                <div id="openVessel-logo">
                    <img alt="OpenVessel Logo" src={process.env.PUBLIC_URL + '/img/OpenVessel Logo.png'} style={{width: '70%', height: '40%'}}></img>
                </div>
            </div>

            <div>
              <Container>
                <Row className="justify-content-md-center">
                  <Col xs lg="2">
                    <Link to="/login"><Button>Login</Button></Link>
                  </Col>
                    <Col xs lg="2">
                    <Link to="/register"><Button>Register</Button></Link>
                  </Col>
                </Row>
              </Container>
            </div>
    </div>




  );
};

export default Landing;