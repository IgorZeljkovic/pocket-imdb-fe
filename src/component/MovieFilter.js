import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { filterMovies } from '../store/actions/MovieActions';

class MovieFilter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      genres: []
    }
  }

  async componentDidMount () {
    const { data } = await axios.get('http://localhost:8000/api/genres');

    this.setState({
      genres: data
    })
  }

  handleFilter = (event) => {
    const genreId = event.target.value;

    this.props.filterMovies({
      genre: genreId
    })
  }

  renderGenres = () => this.state.genres.map(genre => (
    <option
      value={ genre.id }
      key={ genre.id }
    >
      { genre.name }
    </option>
  ))

  render () {
    return (
      <div className="row mt-3">
        <label className="col-2">Filter by genre: </label>
        <select className="form-control col" onChange={ this.handleFilter }>
          <option value="">No filter</option>
          { this.renderGenres() }
        </select>
      </div>
    )
  }
}

const mapDispatchToProps = {
  filterMovies
}

export default connect(null, mapDispatchToProps)(MovieFilter);