import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export function Navbar({user}) {

  const isAuth = () => {
    let accessToken = localStorage.getItem('token');
    if (accessToken) {
      return accessToken;
    } else {
      return false;
    }
  };

  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  }

  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse>
          <Nav className="me-auto">
          {isAuth() &&
          <Fragment>
              <Nav.Link className="color-nav" href="/">Home</Nav.Link>
              <Nav.Link href={`/users/${user}`}>Profil</Nav.Link>
              <Nav.Link onClick={onLoggedOut}>Sign-out</Nav.Link>
            </Fragment>
          }
          {!isAuth() &&
          <Fragment>
            <Nav.Link href={'/login'}>Sign-in</Nav.Link>
            <Nav.Link href={'/register'}>Sign-up</Nav.Link>
          </Fragment>
          }
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}