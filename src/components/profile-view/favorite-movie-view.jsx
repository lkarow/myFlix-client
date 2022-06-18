import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Button, Card, Col } from 'react-bootstrap';

import './profile-view.scss';

export function FavoriteMoviesView(props) {
  const { movies, favoriteMovies, currentUser, token } = props;

  const favoriteMoviesId = favoriteMovies.map((m) => m._id);

  const favoriteMoviesList = movies.filter((m) => {
    return favoriteMoviesId.includes(m._id);
  });

  const handleMovieDelete = async (movieId) => {
    try {
      await axios.delete(
        `https://movie-api-93167.herokuapp.com/users/${currentUser}/movies/${movieId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert(`The movie was successfully deleted.`);
      window.open('/users/:username', '_self');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      {favoriteMoviesList.length === 0 ? (
        <p>You have no favorite movies yet.</p>
      ) : (
        favoriteMoviesList.map((movie) => {
          return (
            <Col sm={6} md={6} lg={4} xl={3} key={movie._id} className="mb-4">
              <Card id="movie-card">
                <Link to={`/movies/${movie._id}`}>
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={movie.ImagePath}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Description}</Card.Text>
                  <Link to={`/movies/${movie._id}`}>
                    <Button
                      className="button btn-open"
                      variant="outline-primary"
                      size="sm"
                    >
                      Open
                    </Button>
                  </Link>
                  <Button
                    className="button btn-remove ml-2"
                    variant="outline-primary"
                    size="sm"
                    onClick={() => {
                      handleMovieDelete(movie._id);
                    }}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      )}
    </Fragment>
  );
}

FavoriteMoviesView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
