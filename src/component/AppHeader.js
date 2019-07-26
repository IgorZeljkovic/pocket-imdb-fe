import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/AuthActions';
import SearchMovie from './SearchMovie';

function AppHeader({ user, logout }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link className="navbar-brand" to="/home">Pocket IMDB</Link>
      <div className="collapse navbar-collapse justify-content-end">
        
          {
            user
            ? (
              <ul className="navbar-nav ">
                <SearchMovie />
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#"
                    onClick={ logout }
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            )
          }
      </div>
    </nav>
  )
}

const mapDispatchToProps = {
  logout
}

export default connect(null, mapDispatchToProps)(AppHeader);