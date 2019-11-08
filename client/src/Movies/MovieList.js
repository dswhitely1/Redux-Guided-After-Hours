import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/movieActions';

import axios from 'axios';

const MovieList = ({movies, fetchMovies}) => {
  console.log(fetchMovies)
  // const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies]);
  
  return (
    <div className="movie-list">
      {movies.movieData.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    <Link to={`/movie/${id}`}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    </Link>
  );
}
const mapStateToProps = state => {
  return {movies: state.movies}
}

const mapDispatchToProps =  {
  fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
