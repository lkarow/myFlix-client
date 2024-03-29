import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Col, Container, Row } from 'react-bootstrap';

import { FavoriteMoviesView } from './favorite-movie-view';
import { UpdateView } from './update-view';

import './profile-view.scss';

export function ProfileView(props) {
  const [user, setUser] = useState(props.user);
  const [movies, setMovies] = useState(props.movies);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const currentUser = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  const getUser = async () => {
    try {
      let response = await axios.get(
        `https://movie-api-pink.vercel.app/users/${currentUser}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(response.data);
      setFavoriteMovies(response.data.FavoriteMovies);
    } catch {
      (error) => console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://movie-api-pink.vercel.app/users/${currentUser}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert(`The account ${user.Username} was successfully deleted.`);
      localStorage.clear();
      window.open('/register', '_self');
    } catch {
      (error) => console.error(error);
    }
  };

  const birthdayDate = () => {
    if (user.Birthday) {
      const birthdayWithoutTime = user.Birthday.split('T')[0];
      return birthdayWithoutTime;
    }
  };

  return (
    <Container id="profile-form">
      <Row>
        <h3>Your profile</h3>
      </Row>
      <Row>
        <Col xs={5} sm={4} md={3} lg={2} className="label">
          Username:
        </Col>
        <Col xs={5} sm={4} md={3} lg={2} className="value">
          {user.Username}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={5} sm={4} md={3} lg={2} className="label">
          Password:
        </Col>
        <Col xs={5} sm={4} md={3} lg={2} className="value">
          ******
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={5} sm={4} md={3} lg={2} className="label">
          Email:
        </Col>
        <Col xs={5} sm={4} md={3} lg={2} className="value">
          {user.Email}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={5} sm={4} md={3} lg={2} className="label">
          Birthday:
        </Col>
        <Col xs={5} sm={4} md={3} lg={2} className="value">
          {birthdayDate()}
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Your favorite movies</h3>
      </Row>
      <Row className="mt-3">
        <FavoriteMoviesView
          movies={movies}
          favoriteMovies={favoriteMovies}
          currentUser={currentUser}
          token={token}
        />
      </Row>
      <UpdateView user={user} />
      <Button
        className="d-block mt-5 mb-5"
        variant="warning"
        onClick={handleDelete}
      >
        Delete profile
      </Button>
    </Container>
  );
}

ProfileView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
  }),
};
