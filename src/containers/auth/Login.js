import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import { logIn } from '../../store/actions/AuthActions';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = field => event => this.setState({ [field]: event.target.value });

  submit = event => {
    event.preventDefault();

    let logInData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.logIn(logInData);
  };

  handleErrors = () => (
    _.isString(this.props.loginError)
    ? (
      <p style={{ color: "red" }}>{ this.props.loginError }</p>
    )
    : (
      _.values(this.props.loginError).map((error, index) => (
        <p style={{ color: "red" }} key={ `${error}_${index}` }>{ error }</p>
      ))
    )
  )

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <h2>Log In</h2>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange('email')}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange('password')}
          />
          <input type="submit" value="Log in" />
          { this.handleErrors() }
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.error.loginError
  };
};

const mapDispatchToProps = {
  logIn
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
