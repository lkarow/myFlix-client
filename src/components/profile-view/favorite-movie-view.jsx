import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Col, Container, From, Row } from 'react-bootstrap';

import './profile-view.scss';

export function FavoriteMoviesView(props) {
  const [user, setUser ] = useState(props.user);
  const [movies, setMovies ] = useState(props.movies);
  const [ favoriteMovies, setFavoriteMovies ] = useState('');

  const handleMovieDelete = (movieId) => {
    const currentUser = localStorage.getItem('user');
    axios.delete(`https://movie-api-93167.herokuapp.com/users/${currentUser}/movies/${movieId}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(() => {
      alert(`The movie was successfully deleted.`)
    }).
    catch(error => console.error(error))
  }

  return (
    <Fragment>
      <Row>
        {favoriteMovies.length === 0 ? (
          <Col>You have no favorite movies marked.</Col>
          ) : (
            favoriteMovies.map((movie) => {
              return (
              <Col>
                <Card>
                  <Link to={`/movies/${movie._id}`}>
                    <Card.Img variant="top" src={movie.ImagePath} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Link to={`/movies/${movie._id}`}>
                      <Button className="button" variant="outline-primary" size="sm">Open</Button>
                    </Link>
                    <Button className="button" variant="outline-primary" size="sm" onClick={handleMovieDelete(movie._id)} >Remove from list</Button>
                  </Card.Body>
                </Card>
              </Col>
              )
            })
          )
        }
      </Row>
    </Fragment>
  )
}