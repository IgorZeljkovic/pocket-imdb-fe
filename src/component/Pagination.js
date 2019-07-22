import React from 'react';
import { connect } from 'react-redux';
import { toPairs } from 'lodash-es';

import { getPaginatedMovies } from '../store/actions/MovieActions';

function Pagination ({ getPaginatedMovies, pagination, query }) {

  const buttonClasses = (btn) => {
    switch (btn) {
      case 'prev':
        return hasPrevious()
        ? 'page-item'
        : 'page-item disabled'
      case 'next':
        return hasNext()
        ? 'page-item'
        : 'page-item disabled'
      default:
        return 'page-item'
    }
  }

  const hasNext = () => pagination.current_page !== pagination.last_page;
  const hasPrevious = () => pagination.current_page !== 1;

  const queryParams = () => toPairs(query).map(([key, value]) => `&${key}=${value}`)

  return (
    <div className="container mt-3">
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={ buttonClasses('prev') }>
            <button
              className="page-link"
              onClick={ () => getPaginatedMovies(pagination.prev_page_url + queryParams()) }
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <p className="page-link">
              { pagination.current_page }
            </p>
          </li>
          <li className={ buttonClasses('next') }>
            <button 
              className="page-link" 
              onClick={ () => getPaginatedMovies(pagination.next_page_url + queryParams()) }
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pagination: state.movies.pagination
  }
}

const mapDispatchToProps = {
  getPaginatedMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);