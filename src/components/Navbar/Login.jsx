import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import * as api from '../../api';
import '../../css/Navbar/Login.css';

class Login extends Component {
  state = {
    username: '',
    loginStatus: 'out',
    loginWindow: false,
    loggedOut: false,
  };

  handleInput = event => {
    const inputText = event.target.value;
    this.setState({ username: inputText });
  };

  handleSubmit = event => {
    const { username } = this.state;
    const { login } = this.props;
    event.preventDefault();
    return api
      .getInfo(`users/${username}`)
      .then(user => {
        localStorage.setItem('ncuser', username);
        localStorage.setItem('ncid', user._id);
        this.setState({ loginStatus: 'in', username: '' });
        login(true);
      })
      .catch(() => {
        this.setState({ loginStatus: 'error' });
      });
  };

  changeModal = (chosenWindow, openClose) => {
    this.setState({ [chosenWindow]: openClose });
  };

  changeLoginStatus = outOrIn => {
    this.setState({ loginStatus: outOrIn });
  };

  render() {
    const { login } = this.props;
    const { loggedOut, loginWindow, loginStatus } = this.state;
    return (
      <div className="loginButtonContainer">
        {localStorage.getItem('ncuser') ? (
          <div className="navbarLogin">
            <p className="loggedInText">
              Logged in as
              {' '}
              <b>{localStorage.getItem('ncuser')}</b>
            </p>
            <button
              type="button"
              onClick={() => {
                localStorage.clear();
                login(false);
                this.changeModal('loggedOut', true);
              }}
              className="loginButton loggedin"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbarLogin">
            <p className="notLoggedInText">Log in to post comments or articles.</p>
            <button
              type="button"
              onClick={() => this.changeModal('loginWindow', true)}
              className="loginButton loggedout"
            >
              Login
            </button>
          </div>
        )}
        <Popup
          open={loggedOut}
          closeOnDocumentClick
          onClose={() => this.changeModal('loggedOut', false)}
        >
          <div className="loginPopup">
            <p>You have been logged out.</p>
            <button
              type="button"
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
          open={loginWindow}
          closeOnDocumentClick
          onClose={() => this.changeModal('loginWindow', false)}
          className="loginPopup"
        >
          <div className="loginPopup">
            <header>
              <h1>Login</h1>
              <p>
                Possible usernames you can use are
                <br />
                <b>jessjelly</b>
                {', '}
                <b>weegembump</b>
                {', '}
                or
                {' '}
                <b>tickle122</b>
.
              </p>
            </header>
            <section>
              {loginStatus !== 'in' && (
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
              )}
              {loginStatus === 'error' && <p>Not a valid username.</p>}
              {loginStatus === 'requestError' && <p>Unable to login.</p>}
              {loginStatus === 'in' && (
                <div>
                  <p>{`Logged in as ${localStorage.getItem('ncuser')}.`}</p>
                  <button type="button" onClick={() => this.changeModal('loginWindow', false)}>
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
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
