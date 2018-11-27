import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import * as api from '../api';
import { isEqual } from 'lodash';

class GroupOfArticles extends Component {
  state = {
    articles: [],
    isLoading: true
  };
  render() {
    return (
      <div>
        <header>
          <h1>
            {this.props.topic_slug && `${capitalizer(this.props.topic_slug)}`}{' '}
            Articles
          </h1>
        </header>
        {this.state.isLoading && <p>... loading articles ...</p>}
        {!this.state.isLoading &&
          this.state.articles.map((article, index) => (
            <Article key={`article${index}`} articleInfo={article} />
          ))}
      </div>
    );
  }
  componentDidMount() {
    if (this.props.topic_slug) {
      api.getArticlesByTopic(this.props.topic_slug).then(articles => {
        this.setState({ articles, isLoading: false });
      });
    } else {
      api
        .getInfo('articles')
        .then(articles => {
          this.setState({ articles, isLoading: false });
        })
        .catch(console.log);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic_slug) {
      // this.setState({ isLoading: true });
      api
        .getArticlesByTopic(this.props.topic_slug)
        .then(articles => {
          if (!isEqual(prevState.articles, articles)) {
            this.setState({ articles, isLoading: false });
          }
        })
        .catch(console.log);
    } else {
      // this.setState({ isLoading: true });
      api
        .getInfo('articles')
        .then(articles => {
          if (!isEqual(prevState.articles, articles)) {
            this.setState({ articles, isLoading: false });
          }
        })
        .catch(console.log);
    }
  }
}

const capitalizer = word => {
  return word[0].toUpperCase() + word.slice(1);
};

GroupOfArticles.propTypes = {};

export default GroupOfArticles;
