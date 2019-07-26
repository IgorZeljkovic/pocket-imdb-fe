import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash-es';

import { getMovies } from '../store/actions/MovieActions';

const SearchMovie = ({ getMovies }) => {
  
  const search = debounce(title => {
    getMovies({ title });
  }, 750)

  const handleSearch = (event) => {
    search(event.target.value)
  }

  return (
    <input 
      type="search"
      className="form-control"
      placeholder="Search"
      onInput={ handleSearch }
    />
  )
}

const mapDispatchToProps = {
  getMovies
}

export default connect(null, mapDispatchToProps)(SearchMovie);