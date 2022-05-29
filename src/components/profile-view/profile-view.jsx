import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Col, Container, Row } from 'react-bootstrap';

import { FavoriteMoviesView } from './favorite-movie-view';
import { UpdateView } from './update-view';

import './profile-view.scss';

export function ProfileView(props) {
  const [ user, setUser ] = useState(props.user);
  const [ movies, setMovies ] = useState(props.movies);
  const [ favoriteMovies, setFavoriteMovies ] = useState([]);
  const currentUser = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  const getUser = () => {
    axios.get(`https://movie-api-93167.herokuapp.com/users/${currentUser}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      setUser(response.data);
      setFavoriteMovies(response.data.FavoriteMovies)
    })
    .catch(error => console.error(error))
  }

  useEffect(() => {
    getUser();
  }, [])

  const handleDelete = () => {
    axios.delete(`https://movie-api-93167.herokuapp.com/users/${currentUser}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(() => {
      alert(`The account ${user.Username} was successfully deleted.`)
      localStorage.clear();
      window.open('/register', '_self');
    }).
    catch(error => console.error(error))
  }

  return (
    <Container id="profile-form">
      <Row><h4>Your profile</h4></Row>
      <Row>
        <Col className="label">Username:</Col>
        <Col className="value">{user.Username}</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Password:</Col>
        <Col className="value">******</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Email:</Col>
        <Col className="value">{user.Email}</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Birthday:</Col>
        <Col className="value">{user.Birthday}</Col>
        </Row>
        <Row className="mt-5"><h4>Your favorite movies</h4></Row>
        <Row className="mt-3">
          <FavoriteMoviesView 
          movies={movies} 
          favoriteMovies={favoriteMovies} 
          currentUser={currentUser} 
          token={token}/>
        </Row>
        <UpdateView user={user}/>
        <Button className="d-block mt-5" variant="warning" onClick={handleDelete}>Delete profile</Button>
    </Container>
  )
}