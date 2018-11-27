import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupOfComments from './GroupOfComments';
import '../css/User.css';

class User extends Component {
  state = {
    user: {
      _id: '5be8440b17324b27109088cd',
      username: 'tickle122',
      name: 'Tom Tickle',
      avatar_url:
        'https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg',
      __v: 0
    }
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
            <h1>Username: {user.username}</h1>
            <h2>Name: {user.name}</h2>
            <p>Maybe stick some info here about posting frequency etc.</p>
          </section>
        </header>
        <h3>List of posts</h3>
        <GroupOfComments />
      </section>
    );
  }
}

User.propTypes = {};

export default User;
