import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="media movie-card">
      <img src={ movie.image_url } className="mr-3"/>
      <div className="media-body movie-card-body">
        <h5 className="mt-0">{ movie.title }</h5>
        <div class="movie-card-description">{ movie.description }</div>
      </div>
    </div>
  );
};

export default MovieCard;
