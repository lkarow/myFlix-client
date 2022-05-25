import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Card id="movie-card">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title id="card-title">{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button className="button" onClick={() => onMovieClick(movie)} variant="outline-primary" size="sm">Open</Button>
        </Card.Body>
      </Card>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};