import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

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
        <Row className="movie-title">
          <Col className="label">Title: </Col>
          <Col className="value">{movie.Title}</Col>
        </Row>
        <Row className="movie-description">
          <Col className="label">Description: </Col>
          <Col className="value">{movie.Description}</Col>
        </Row>
        <Row className="movie-director">
          <Col className="label">Director: </Col>
          <Col className="value">{movie.Director.Name}</Col>
        </Row>
        <Row className="movie-director">
          <Col className="label">Bio of director: </Col>
          <Col className="value">{movie.Director.Bio}</Col>
        </Row>
        <Row className="movie-genre">
          <Col className="label">Genre: </Col>
          <Col className="value">{movie.Genre.Name}</Col>
        </Row>
        <Row className="movie-genre">
          <Col className="label">Description of genre: </Col>
          <Col className="value">{movie.Genre.Description}</Col>
        </Row>
        <Button onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
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
      Birth: PropTypes.string.isRequired
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    })
  }).isRequired,
};