import React from 'react';
import { Link } from 'react-router-dom';

import VoteButtons from './VoteButtons';
import MovieVisits from './MovieVisits';

const MovieCard = ({ movie }) => {
  return (
    <div className="media movie-card">
      <img src={ movie.image_url } alt={ movie.title } className="mr-3"/>
      <div className="media-body movie-card-body">
        <div className="d-flex justify-content-between">
          <span>
            <Link to={ `movie/${movie.id}` } className="h4 text-decoration-none font-weight-bold mr-4">
              { movie.title }
            </Link>
            <MovieVisits visitsNumber={ movie.visits_number } />
          </span>
          <VoteButtons movie={movie} />
        </div>
        <div className="movie-card-description text-muted mt-3">{ movie.description }</div>
      </div>
    </div>
  );
};

export default MovieCard;
