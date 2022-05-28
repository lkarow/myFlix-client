import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { UpdateView } from './update-view';
import { FavoriteMoviesView } from './favorite-movie-view';

import './profile-view.scss';

export function ProfileView(props) {
  const [ user, setUser ] = useState(props.user);
  const [ updateUser, setUpdateUser ] = useState({});
  const [ favoriteMovies, setFavoriteMovies ] = useState ([]);
  const currentUser = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  const [movies, setMovies ] = useState(props.movies);

  const getUser = () => {
    axios.get(`https://movie-api-93167.herokuapp.com/users/${currentUser}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      setUser(response.data);
      setUpdateUser(response.data);
      // setFavoriteMovies(props.movies.filter(m => response.data.FavoriteMovies.includes(m._id)));
    })
    .catch(error => console.error(error))
  }

  useEffect(() => {
    getUser();
  })

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
      <Row>
        <Col className="label">Username: </Col>
        <Col className="value">{user.Username}</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Password: </Col>
        <Col className="value">******</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Email: </Col>
        <Col className="value">{user.Email}</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Birthday: </Col>
        <Col className="value">{user.Birthday}</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Favorite Movies: </Col>
        <Col className="value"><FavoriteMoviesView movies={movies} user={user} /></Col>
        </Row>
        <UpdateView user={user}/>
        <Button className="d-block mt-5" variant="warning" onClick={handleDelete}>Delete profile</Button>
  </Container>
  )
}