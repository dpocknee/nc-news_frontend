import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupOfComments from './GroupOfComments';
import '../css/User.css';
import * as api from '../api';

class User extends Component {
  state = {
    user: {}
  };
  render() {
    const user = this.state.user;
    return (
      <section className="userPage">
        <header>
          <figure>
            <img src={user.avatar_url} alt={`Avatar for ${user.username}`} />
          </figure>
          <section>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            {/* <p>Maybe stick some info here about posting frequency etc.</p> */}
            <div className="userInfo">
              <p>Number of articles: ??</p>
              <p>Number of posts: ??</p>

              {/* <h3>List of posts</h3> */}
              {/* <GroupOfComments /> */}
            </div>
          </section>
        </header>
      </section>
    );
  }
  componentDidMount() {
    const typeOfInfo = `users/${this.props.username}`;
    api
      .getInfo(typeOfInfo)
      .then(user => {
        this.setState({ user, isLoading: false });
      })
      .catch(console.log);
  }
}

User.propTypes = {};

export default User;
