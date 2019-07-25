import React from 'react';
import { Link } from 'react-router-dom';

import VoteButtons from './VoteButtons';

const MovieCard = ({ movie }) => {
  return (
    <div className="media movie-card">
      <img src={ movie.image_url } alt={ movie.title } className="mr-3"/>
      <div className="media-body movie-card-body">
        <div className="d-flex justify-content-between">
          <Link to={ `movie/${movie.id}` } className="h4 text-decoration-none font-weight-bold">
            { movie.title }
          </Link>
          <VoteButtons movie={movie} />
        </div>
        <div className="movie-card-description text-muted mt-3">{ movie.description }</div>
      </div>
    </div>
  );
};

export default MovieCard;
