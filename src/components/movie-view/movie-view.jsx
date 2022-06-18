import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button, Col, Container, Row } from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container className="movie-view">
        <Row className="movie-title mb-4">
          <Col className="value">{movie.Title}</Col>
        </Row>
        <Row className="mb-3 gx-5">
          <Col className="movie-poster mb-4" md={5} lg={4}>
            <img src={movie.ImagePath} />
          </Col>
          <Col className="movie-description" xs={12} sm={12} md={7}>
            <Col className="label">Description: </Col>
            <Col className="value">{movie.Description}</Col>
          </Col>
        </Row>
        <Row className="movie-buttons-row">
          <Link to={`/directors/${movie.Director.Name}`} className="btn-link">
            <Button className="btn-movie d-block" variant="info">
              Director
            </Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`} className="btn-link">
            <Button className="btn-movie d-block ml-3" variant="info">
              Genre
            </Button>
          </Link>
        </Row>
        <Button
          className="d-block mt-5"
          onClick={() => {
            onBackClick(null);
          }}
          variant="warning"
        >
          Back
        </Button>
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
      Death: PropTypes.string,
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
