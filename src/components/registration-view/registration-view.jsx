import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './registration-view.scss';

import axios from 'axios';

export function RegistrationView(props) {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const [ email, setEmail] = useState('');
  const [ birthday, setBirthday] = useState('');
  const [ values, setValues] = useState({
    usernameErr: '',
    passwordErr: '',
    emailErr: '',
  });

  // validate user inputs
  const validate =() => {
    let isReq = true;
    if (!username) {
      setValues({...values, usernameErr: 'Username required'});
      isReq = false;
    } else if (username.length < 2) {
      setValues({...values, usernameErr: 'Username must be at least 2 characters long'});
      isReq= false;
    }
    if (!password) {
      setValues({...values, passwordErr: 'Password required'});
      isReq = false;
    } else if (password.length < 6) {
      setValues({...values, passwordErr: 'Password must be at least 6 characters long'});
      isReq= false;
    }
    if (!email) {
      setValues({...values, emailErr: 'Email required'});
      isReq = false;
    } else if (email.indexOf('@') === -1) {
      setValues({...values, emailErr: 'Enter valid email'});
      isReq = false;
    }
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      console.log(username, password, email, birthday);
      axios.post('https://movie-api-93167.herokuapp.com/users', {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
      .then(response => {
        const data = response.data;
        console.log('data');
        alert('Registration successful, please login.');
        window.open('/', '_self');
      })
      .catch(e => {
        console.log('Error');
        alert('Unable to register');
      });
    }
  };

  return (
    <Container id="registration-form">
      <Row className="justify-content-center">
        <Col sm="10" md="8" lg="6">
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required/>
              {/* display validation error */}
              {values.usernameErr && <p>{values.usernameErr}</p>}
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
              {/* display validation error */}
              {values.passwordErr && <p>{values.passwordErr}</p>}
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@mail.com" required />
              {/* display validation error */}
              {values.emailErr && <p>{values.emailErr}</p>}
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="text" value={birthday} onChange={e => setBirthday(e.target.value)} placeholder="YYYY-MM-DD" />
            </Form.Group>
            <Row className="mt-3 justify-content-start">
              <Col sm="10" md="8" lg="6">
                <Button  variant="warning" type="submit" onClick={handleSubmit}>Register</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string
  }),
};