import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../api';
import Popup from 'reactjs-popup';
import '../../css/Navbar/Login.css';

class Login extends Component {
  state = {
    username: '',
    loginStatus: 'out',
    loginWindow: false,
    loggedOut: false
  };
  render() {
    return (
      <div className="loginButtonContainer">
        {localStorage.getItem('ncuser') ? (
          <div className="navbarLogin">
            <p className="loggedInText">
              Logged in as <b>{localStorage.getItem('ncuser')}</b>
            </p>
            <button
              onClick={() => {
                localStorage.clear();
                this.props.login(false);
                this.changeModal('loggedOut', true);
              }}
              className="loginButton loggedin"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbarLogin">
            <p className="notLoggedInText">
              Log in to post comments or articles.
            </p>
            <button
              onClick={() => this.changeModal('loginWindow', true)}
              className="loginButton loggedout"
            >
              Login
            </button>
          </div>
        )}
        <Popup
          open={this.state.loggedOut}
          closeOnDocumentClick
          onClose={() => this.changeModal('loggedOut', false)}
        >
          <div className="loginPopup">
            <p>You have been logged out.</p>
            <button
              onClick={() => {
                this.changeModal('loggedOut', false);
                this.changeLoginStatus('out');
              }}
            >
              OK
            </button>
          </div>
        </Popup>
        <Popup
          open={this.state.loginWindow}
          closeOnDocumentClick
          onClose={() => this.changeModal('loginWindow', false)}
          className="loginPopup"
        >
          <div className="loginPopup">
            <header>
              <h1>Login</h1>
              <p>
                Possible usernames you can use are <br /> <b>jessjelly</b>,{' '}
                <b>weegembump</b> or <b>tickle122</b>
              </p>
            </header>
            <section>
              {this.state.loginStatus !== 'in' && (
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
              )}
              {this.state.loginStatus === 'error' && (
                <p>Not a valid username.</p>
              )}
              {this.state.loginStatus === 'requestError' && (
                <p>Unable to login.</p>
              )}
              {this.state.loginStatus === 'in' && (
                <div>
                  <p>Logged in as {localStorage.getItem('ncuser')}.</p>
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
        localStorage.setItem('ncuser', this.state.username);
        localStorage.setItem('ncid', user._id);
        this.setState({ loginStatus: 'in', username: '' });
        this.props.login(true);
      })
      .catch(err => {
        this.setState({ loginStatus: 'error' });
      });
  };
  changeModal = (chosenWindow, openClose) => {
    this.setState({ [chosenWindow]: openClose });
  };

  changeLoginStatus = outOrIn => {
    this.setState({ loginStatus: outOrIn });
  };
}

Login.propTypes = {
  login: PropTypes.function
};

export default Login;
