import React from 'react';
import PropTypes from 'prop-types';

import { Button, Col, Container, Row } from 'react-bootstrap';

import './genre-view.scss';

export class GenreView extends React.Component {
  render() {
    const { genre, movie, onBackClick } = this.props;

    return (
      <Container className="director-view">
        <Row>
          <Col className="label">Genre: </Col>
          <Col className="value">{genre.Name}</Col>
        </Row>
        <Row className="mt-3">
          <Col className="label">Description: </Col>
          <Col className="value">{genre.Description}</Col>
        </Row>
        <Button className="d-block mt-3" onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
      </Container>
    )
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired
};