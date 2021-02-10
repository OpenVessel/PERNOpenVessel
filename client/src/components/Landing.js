import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from 'react-bootstrap';

const Landing = () => {
  return (
    <Container className="text-center">
            <div id="logo-container">
                <div id="openVessel-logo">
                    <img alt="OpenVessel Logo" src={process.env.PUBLIC_URL + '/img/OpenVessel Logo.png'} style={{width: '50%', height: '30%'}}></img>
                </div>
            </div>
            <div>
              <Container>
                <Row>
                  <Col>
                  <Link to="/login"><Button>Login</Button></Link>
                  </Col>
                  <Col>
                    <Link to="/register"><Button>Register</Button></Link>
                  </Col>
                </Row>
              </Container>
            </div>
    </Container>
  );
};

export default Landing;