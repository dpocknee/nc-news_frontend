import React from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';
import GroupOfArticles from './Articles/GroupOfArticles';
import IndividualArticle from './Articles/IndividualArticle';
import User from './User/User';
import BadRequest from './BadRequest';
import NotFound from './NotFound';

const MainWindow = props => {
  const { searchInfo } = props;
  return (
    <main>
      <Router>
        <GroupOfArticles path="/" />
        <GroupOfArticles path="/articles" searchInfo={searchInfo} />
        <GroupOfArticles path="/topics/:topicSlug/articles" searchInfo={searchInfo} />
        <IndividualArticle path="/articles/:articleId" />
        <User path="/users/:username" />
        <BadRequest path="/error" />
        <NotFound default />
      </Router>
    </main>
  );
};

MainWindow.propTypes = {
  searchInfo: PropTypes.string,
};

MainWindow.defaultProps = {
  searchInfo: null,
};

export default MainWindow;
