import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupOfArticles from './GroupOfArticles';
import IndividualArticle from './IndividualArticle';
import User from './User';
import Login from './Login';
import { Router } from '@reach/router';

class MainWindow extends Component {
  state = {};
  render() {
    return (
      <main>
        <Router>
          <GroupOfArticles path="/" />
          <GroupOfArticles
            path="/articles"
            searchInfo={this.props.searchInfo}
          />
          <GroupOfArticles
            path="/topics/:topic_slug/articles"
            searchInfo={this.props.searchInfo}
          />
          <IndividualArticle path="/articles/:article_id" />
          <User path="/users/:username" />
          <Login path="/login" login={this.props.login} />
        </Router>
      </main>
    );
  }
}

MainWindow.propTypes = {};

export default MainWindow;
