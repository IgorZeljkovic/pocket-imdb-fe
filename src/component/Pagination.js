import React from 'react';
import { connect } from 'react-redux';

import { getMoviesPage } from '../store/actions/MovieActions';

function Pagination ({ getMoviesPage, pagination }) {

  const isDisabled = (btn) => {
    switch (btn) {
      case 'prev':
        return pagination.current_page === 1
        ? 'page-item disabled'
        : 'page-item'
      case 'next':
        return pagination.current_page === pagination.last_page
        ? 'page-item disabled'
        : 'page-item'
      default:
        return 'page-item'
    }
  }

  return (
    <div className="container mt-3">
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={ isDisabled('prev') }>
            <button
              className="page-link"
              onClick={ () => getMoviesPage(pagination.prev_page_url) }
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <p className="page-link">
              { pagination.current_page }
            </p>
          </li>
          <li className={ isDisabled('next') }>
            <button 
              className="page-link" 
              onClick={ () => getMoviesPage(pagination.next_page_url) }
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
    pagination: state.movie.pagination
  }
}

const mapDispatchToProps = {
  getMoviesPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);