import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const [ email, setEmail] = useState('');
  const [ birthday, setBirthday] = useState('');

  handleRegister = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
  }

  return (
    <Container id="registration-form">
      <Row className="justify-content-center">
        <Col sm="10" md="8" lg="6">
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required/>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@mail.com" required />
            </Form.Group>

            <Form.Group controlId="formBirthday">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="text" value={birthday} onChange={e => setBirthday(e.target.value)} placeholder="YYYY-MM-DD" />
            </Form.Group>
            
            <Row className="mt-3 justify-content-start">
              <Col sm="10" md="8" lg="6">
                <Button  variant="warning" type="submit" onClick={handleRegister}>Register</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

RegistrationView.PropTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string
  }).isRequired
}