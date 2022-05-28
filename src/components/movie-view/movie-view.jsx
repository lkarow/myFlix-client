import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button, Col, Container, Row } from 'react-bootstrap/';

import './movie-view.scss';

export class MovieView extends React.Component {
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container className="movie-view">
        <Row className="movie-poster">
          <img src={movie.ImagePath} />
        </Row>
        <Row className="movie-title mt-3">
          <Col className="label">Title: </Col>
          <Col className="value">{movie.Title}</Col>
        </Row>
        <Row className="movie-description mt-3">
          <Col className="label">Description: </Col>
          <Col className="value">{movie.Description}</Col>
        </Row>
        <Link to={`/directors/${movie.Director.Name}`}>
          <Button className="d-block mt-3" variant="info">Director</Button>
        </Link>
        <Link to={`/genres/${movie.Genre.Name}`}>
          <Button className="d-block mt-3" variant="info">Genre</Button>
        </Link>
          <Button className="d-block mt-3" onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
       </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    })
  }).isRequired,
};