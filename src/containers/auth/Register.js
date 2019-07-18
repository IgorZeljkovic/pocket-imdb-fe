import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { register } from '../../store/actions/AuthActions';

class Register extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    passwordConfirmation: ''
  };

  handleInputChange = field => event => this.setState({ [field]: event.target.value });

  submit = event => {
    event.preventDefault();

    let registerData = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      password_confirmation: this.state.passwordConfirmation
    };
    this.props.register(registerData);
  };

  handleErrors = () => Object.values(this.props.registerError).map((error, index) => (
    <p style={{ color: "red" }} key={ `${error}_${index}` }>{ error }</p>
  ))

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <h2>Register</h2>
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
          <input
            type="password"
            placeholder="Confirm password"
            value={this.state.passwordConfirmation}
            onChange={this.handleInputChange('passwordConfirmation')}
          />
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange('name')}
          />
          <input type="submit" value="Register" />
          <div>
          { this.handleErrors() }
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerError: state.error.registerError
  };
};

const mapDispatchToProps = {
  register
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
