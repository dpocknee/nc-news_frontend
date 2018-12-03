import React from 'react';
import PropTypes from 'prop-types';
import GroupOfArticles from './Articles/GroupOfArticles';
import IndividualArticle from './Articles/IndividualArticle';
import User from './User/User';
import BadRequest from './BadRequest';
import NotFound from './NotFound';
import { Router } from '@reach/router';

const MainWindow = props => {
  return (
    <main>
      <Router>
        <GroupOfArticles path="/" />
        <GroupOfArticles path="/articles" searchInfo={props.searchInfo} />
        <GroupOfArticles
          path="/topics/:topic_slug/articles"
          searchInfo={props.searchInfo}
        />
        <IndividualArticle path="/articles/:article_id" />
        <User path="/users/:username" />
        <BadRequest path="/error" />
        <NotFound default />
      </Router>
    </main>
  );
};

MainWindow.propTypes = {
  searchInfo: PropTypes.array,
  login: PropTypes.function
};

export default MainWindow;
