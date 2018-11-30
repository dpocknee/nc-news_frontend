import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import * as utils from '../utils/utils';
import '../css/Article.css';
import '../css/User.css';
import ArticleCondensed from './ArticleCondensed';

const UserArticles = props => {
  return (
    <div>
      <header className="topOfArticlesPage">
        <h1>
          <span className="groupArticlesHeader">Articles by this user</span>
        </h1>
      </header>
      {props.isLoading && (
        <p className="userLoading">... loading articles ...</p>
      )}
      {!props.isLoading &&
        props.articles.map((article, index) => (
          <ArticleCondensed key={`article${index}`} articleInfo={article} />
        ))}
    </div>
  );
};

UserArticles.propTypes = {};

export default UserArticles;
