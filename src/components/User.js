import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return <div />;
  }
}

User.propTypes = {};

export default User;
