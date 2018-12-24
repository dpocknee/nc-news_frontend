import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/User/User.css';
import * as api from '../../api';
import * as utils from '../../utils/utils';
import UserArticlesOrComments from './UserArticlesOrComments';

class User extends Component {
  state = {
    user: {},
    articles: [],
    comments: [],
    isLoading: true,
    placeHolder: true,
  };

  componentDidMount() {
    const { username } = this.props;
    const userUrl = `users/${username}`;
    return Promise.all([
      api.getInfo(userUrl),
      api.getInfo(`${userUrl}/articles`),
      api.getInfo(`${userUrl}/comments`),
    ])
      .then(([user, articles, comments]) => Promise.all([user, articles, comments]))
      .then(([user, articles, comments]) => {
        this.setState({
          user,
          articles,
          comments,
          isLoading: false,
        });
      })
      .catch(err => {
        utils.errorHandler(err);
      });
  }

  checkImage = val => {
    this.setState({ placeHolder: val });
  };

  render() {
    const {
      user, isLoading, placeHolder, articles, comments,
    } = this.state;
    return (
      <>
        <section className="userPage">
          {isLoading ? (
            <section>
              <h1 className="userLoading">...Loading...</h1>
            </section>
          ) : (
            <header>
              <figure>
                {placeHolder ? (
                  <img
                    src={user.avatar_url}
                    onLoad={() => this.checkImage(true)}
                    onError={() => this.checkImage(false)}
                    alt={`Avatar for ${user.username}`}
                  />
                ) : (
                  <i className="fas fa-user-circle profilePlaceholder" />
                )}
              </figure>
              <section>
                <h1>{user.name}</h1>
                <h2>{user.username}</h2>
                <div className="userInfo">
                  <p>
                    Number of articles posted:
                    {' '}
                    <b>{articles.length}</b>
                  </p>
                  <p>
                    Number of comments posted:
                    {' '}
                    <b>{comments.length}</b>
                  </p>
                </div>
              </section>
            </header>
          )}
        </section>
        <section>
          <UserArticlesOrComments
            isLoading={isLoading}
            articlesOrComments={articles}
            contentType="Articles"
          />
          <UserArticlesOrComments
            isLoading={isLoading}
            articlesOrComments={comments}
            contentType="Comments"
          />
        </section>
      </>
    );
  }
}

User.propTypes = {
  username: PropTypes.string,
};

User.defaultProps = {
  username: undefined,
};

export default User;
