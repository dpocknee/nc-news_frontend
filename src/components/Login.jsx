import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class Login extends Component {
  state = {
    username: '',
    loginStatus: 'out'
  };
  render() {
    return (
      <div>
        <header>
          <h1>Login</h1>
        </header>
        <section>
          <form>
            <label htmlFor="usernameInput">Username: </label>
            <input
              type="text"
              name="usernameInput"
              id="usernameInput"
              onChange={this.handleInput}
            />
            <input type="submit" value="Login" onClick={this.handleSubmit} />
          </form>

          {this.state.loginStatus === 'error' && <p>Not a valid username.</p>}
          {this.state.loginStatus === 'requestError' && <p>Unable to login.</p>}
          {this.state.loginStatus === 'in' && (
            <p>Logged in as {this.state.username}.</p>
          )}
        </section>
      </div>
    );
  }
  handleInput = event => {
    const inputText = event.target.value;
    this.setState({ username: inputText });
  };
  handleSubmit = event => {
    event.preventDefault();
    api
      .getInfo(`users/${this.state.username}`)
      .then(user => {
        this.setState({ loginStatus: 'in' });
        localStorage.setItem('ncuser', this.state.username);
        localStorage.setItem('ncid', user._id);
        this.props.login(true);
      })
      .catch(this.setState({ loginStatus: 'error' }));
  };
}

Login.propTypes = {};

export default Login;
