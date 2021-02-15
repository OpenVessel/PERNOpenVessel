import React, { Fragment, useState } from "react";

import { Form, Button, Container, Jumbotron } from 'react-bootstrap';

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Container className="pt-3">
        <Jumbotron>
          <h1>Login</h1>
          <Form onSubmit={onSubmitForm} className="pb-3">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Enter email" 
              name="email"
              onChange={e => onChange(e)}/>
              <Form.Text className="text-muted">
                Enter your email
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Password" 
              name="password"
              onChange={e => onChange(e)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <h5>Don't have an account? Click <a href="/register">here</a> to register</h5>
        </Jumbotron>
        
      </Container>
      
    </Fragment>
  );
};

export default Login;
