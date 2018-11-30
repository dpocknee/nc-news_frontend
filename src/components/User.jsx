import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupOfComments from './GroupOfComments';
import '../css/User.css';
import * as api from '../api';
import * as utils from '../utils/utils';

class User extends Component {
  state = {
    user: {},
    articles: [],
    comments: [],
    isLoading: true
  };
  render() {
    const user = this.state.user;
    // console.log(this.state);
    return (
      <>
        <section className="userPage">
          {this.state.isLoading ? (
            <section>
              <h1 className="userLoading">...Loading...</h1>
            </section>
          ) : (
            <header>
              <figure>
                <img
                  src={user.avatar_url}
                  alt={`Avatar for ${user.username}`}
                />
              </figure>
              <section>
                <h1>{user.name}</h1>
                <h2>{user.username}</h2>
                {/* <p>Maybe stick some info here about posting frequency etc.</p> */}
                <div className="userInfo">
                  <p>
                    Number of articles posted:{' '}
                    <b>{this.state.articles.length}</b>
                  </p>
                  <p>
                    Number of comments posted:{' '}
                    <b>{this.state.comments.length}</b>
                  </p>
                </div>
              </section>
            </header>
          )}
        </section>
        <section>
          <h3>List of articles</h3>
          {/* <GroupOfComments /> */}
        </section>
      </>
    );
  }
  componentDidMount() {
    const userUrl = `users/${this.props.username}`;
    return Promise.all([
      api.getInfo(userUrl),
      api.getInfo(`${userUrl}/articles`),
      api.getInfo(`${userUrl}/comments`)
    ])
      .then(([user, articles, comments]) => {
        console.log('BACK:', user, articles, comments);
        this.setState({ user, articles, comments, isLoading: false });
      })
      .catch(err => utils.errorHandler(err));
  }
}

User.propTypes = {};

export default User;
