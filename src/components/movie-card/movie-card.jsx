import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { Button, Card } from 'react-bootstrap/';

import './movie-card.scss';

export class MovieCard extends React.Component {

  addToFavoriteList(movieId) {
    const currentUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    axios.put(`https://movie-api-93167.herokuapp.com/users/${currentUser}/movies/${movieId}`, 
    {},
    {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then((response) => {
      console.log(response.data)
      alert(`The movie was successfully add to your list.`)
    }).
    catch(error => console.error(error))
  }

  render() {
    const { movie } = this.props;

    return (
      <Card id="movie-card">
        <Link to={`/movies/${movie._id}`}>
          <Card.Img variant="top" src={movie.ImagePath} />
        </Link>
        <Card.Body>
          <Card.Title id="card-title">{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button className="button" variant="outline-primary" size="sm">Open</Button>
          </Link>
          <Button className="button ml-2" variant="outline-primary" size="sm" onClick={() => this.addToFavoriteList(movie._id) }>Add</Button>
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
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    })
  }).isRequired,
};