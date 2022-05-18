import React from 'react';
import { MovieCard } from '../movie-card/movie-cards';
import { MovieView } from '../movie-view/movie-view';

class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        { 
          _id: 1, 
          Title: 'Kikujiro',
          Description: 'A young, naive boy sets out alone on the road to find his wayward mother. Soon he finds an unlikely protector in a crotchety man and the two have a series of unexpected adventures along the way.',
          Director: 'Takeshi Kitano',
          Genre: 'Drama',
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BM2IyMzNkYzMtMmYzNC00MDFhLTkxN2EtNGNmMmQyMjY3NTg1XkEyXkFqcGdeQXVyOTcyNDU5MDA@._V1_FMjpg_UX1000_.jpg'
        },
        { 
          _id: 2, 
          Title: 'Ghost in the Shell',
          Description: 'A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.',
          Director: 'Mamoru Oshii',
          Genre: 'Animated',
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BYWRiYjQyOGItNzQ1Mi00MGI1LWE3NjItNTg1ZDQwNjUwNDM2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg'
        },
        { 
          _id: 3, 
          Title: 'Shoplifters',
          Description: 'A family of small-time crooks take in a child they find outside in the cold.',
          Director: 'Hirokazu Koreeda',
          Genre: 'Drama',
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BMWUyMTA3YmQtMDE4My00NzEyLTlhMTAtYjA2Yzk0YTM3NDVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
        }
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie 
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }
  
}

export default MainView;