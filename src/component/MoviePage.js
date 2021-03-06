import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { movieByIdSelector } from '../store/selectors/movieSelector';
import VoteButtons from './VoteButtons';
import MovieVisits from './MovieVisits';
import { visitMovie } from '../store/actions/MovieActions';

class MoviePage extends Component {
  componentDidMount () {
    this.props.visitMovie(this.props.match.params.id);
  }
  
  render () {
    const { id } = this.props.match.params;
    const movie = this.props.getMovieById(id);

    return movie ? (
      <div className="row">
        <div className="col-md-10">
          <div className="container p-4">
            <h3 className="font-weight-bold">{ movie.title }</h3>
            <div>
              <MovieVisits visitsNumber={ movie.visits_number } />
            </div>
            <VoteButtons movie={ movie } />
            
            <div className="row">
              <div className="col-sm-4 conteiner">
                <img src={ movie.image_url } alt={ movie.title } className="movie-poster img-responsive" />
              </div>
              <div className="col-sm-8 container">
                <p className="text-muted">{ movie.description }</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          related movies
        </div>
      </div>
    ) : (
      <Redirect to="../home" />
    )
  }
}

const mapDispatchToProps = {
  visitMovie
}

const mapStateToProps = (state) => {
  return {
    getMovieById: movieByIdSelector(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);