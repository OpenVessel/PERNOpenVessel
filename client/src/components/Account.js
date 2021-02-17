import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from 'react-bootstrap';

const Account = () => {
return (
    <div className="jumbotron mt-5">
        <h1>Account Page</h1>
        <div className="text-center" style ={{paddingTop: "5vh"}}>
            
            <div id="logo-container">
                <div id="openVessel-logo">
                    <img alt="OpenVessel Logo" src={process.env.PUBLIC_URL + '/img/OpenVessel Logo.png'} style={{width: '70%', height: '40%'}}></img>
                </div>
            </div>

            {/* <div class="content-section">
                <div className="text-center">
		            <img alt="rounded-circle account-img" src={process.env.PUBLIC_URL + 'data:image/jpeg;charset=utf-8'} style={{width: '70%', height: '40%'}}></img>
		            <div class="media-body">
		            <h2 style='color: white;' id='username-text'>{{current_user.username }}</h2>
	                <p style='color: white;' id='email-text'>{{current_user.email }}</p>
		            </div>
                </div>
            </div> */}
            

            <div>
            <Container>
                <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <Link to="/Upload"><Button>Upload Image</Button></Link>
                </Col>
                    <Col xs lg="2">
                    <Link to="/Update"><Button>Update Profile Information</Button></Link>
                </Col>
                </Row>
            </Container>
            </div>
    </div>
    </div>
);
};

export default Account;