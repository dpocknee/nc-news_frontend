import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupOfArticles from './GroupOfArticles';
import IndividualArticle from './IndividualArticle';
import User from './User';
import { Router } from '@reach/router';

class MainWindow extends Component {
  state = {
    
  };
  render() {
    return (
      <main>
        <Router>
          <GroupOfArticles path="/" />
          <GroupOfArticles path="/articles" />
          <IndividualArticle path="/articles/:article_id" />
          <User path="/users/:username" />
        </Router>
      </main>
    );
  }
}

MainWindow.propTypes = {};

export default MainWindow;
