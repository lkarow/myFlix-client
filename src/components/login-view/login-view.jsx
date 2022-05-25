import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a request to the server for authentication
    axios.post('https://movie-api-93167.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('No such user')
    });
  };

  return (
    <Container id="login-form">
      <Row className="justify-content-center">
        <Col sm="10" md="8" lg="6">
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" onChange={e => setUsername(e.target.value)} placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Row className="mt-3 justify-content-start">
              <Col sm="10" md="8" lg="6">
                <Button  variant="warning" type="submit" onClick={handleSubmit}>Login</Button>
                <Button variant="warning" className="ml-3">Register</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired
}