import React from 'react';

const MovieGenre = ({ genre }) => {
  return (
    <span className="bg-info text-white p-1 rounded">
      <label>{ genre ? genre.name : '' }</label>
    </span>
  )
}

export default MovieGenre;