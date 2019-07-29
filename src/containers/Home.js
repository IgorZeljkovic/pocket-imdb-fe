import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';
import Pagination from '../component/Pagination';
import MovieFilter from '../component/MovieFilter';

class Home extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  renderMovies = () => {
    return this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />);
  };

  render() {
    return (
      <div className="container">
        <div className="container">
          <MovieFilter />
        </div>
        <Pagination />
        <div className="container">
          { this.renderMovies() }
        </div>
        <Pagination />
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.all,
    pagination: state.movies.pagination
  };
};

const mapDispatchToProps = {
  getMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
