import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';
import Pagination from '../component/Pagination';

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
        <Pagination />
        <div className="container">
          {this.renderMovies()}
        </div>
        <Pagination />
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.all,
    pagination: state.movie.pagination
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
