import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import Popup from 'reactjs-popup';
import { Link } from '@reach/router';

class Login extends Component {
  state = {
    username: '',
    loginStatus: 'out',
    loginWindow: false,
    loggedOut: false
  };
  render() {
    return (
      <div>
        {localStorage.getItem('ncuser') ? (
          <button
            onClick={() => {
              localStorage.clear();
              this.props.login(false);
              this.changeModal('loggedOut', true);
            }}
          >
            Logout
          </button>
        ) : (
          <button onClick={() => this.changeModal('loginWindow', true)}>
            Login
          </button>
        )}
        <Popup
          open={this.state.loggedOut}
          closeOnDocumentClick
          onClose={() => this.changeModal('loggedOut', false)}
        >
          <div>
            <p>Logged Out.</p>
            <button onClick={() => this.changeModal('loggedOut', false)}>
              OK
            </button>
          </div>
        </Popup>
        <Popup
          open={this.state.loginWindow}
          closeOnDocumentClick
          onClose={() => this.changeModal('loginWindow', false)}
        >
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
                <input
                  type="submit"
                  value="Login"
                  onClick={this.handleSubmit}
                />
              </form>

              {this.state.loginStatus === 'error' && (
                <p>Not a valid username.</p>
              )}
              {this.state.loginStatus === 'requestError' && (
                <p>Unable to login.</p>
              )}
              {this.state.loginStatus === 'in' && (
                <div>
                  <p>Logged in as {this.state.username}.</p>
                  <button
                    onClick={() => this.changeModal('loginWindow', false)}
                  >
                    OK
                  </button>
                </div>
              )}
            </section>
          </div>
        </Popup>
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
  changeModal = (chosenWindow, openClose) => {
    this.setState({ [chosenWindow]: openClose });
  };
}

Login.propTypes = {};

export default Login;
