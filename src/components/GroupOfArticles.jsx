import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import * as api from '../api';
import { isEqual } from 'lodash';

class GroupOfArticles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div>
        <header>
          <h1>Articles</h1>
        </header>
        {this.state.articles.map((article, index) => (
          <Article key={`article${index}`} articleInfo={article} />
        ))}
      </div>
    );
  }
  componentDidMount() {
    if (this.props.topic_slug) {
      api.getArticlesByTopic(this.props.topic_slug).then(articles => {
        this.setState({ articles });
      });
    } else {
      api
        .getInfo('articles')
        .then(articles => {
          this.setState({ articles });
        })
        .catch(console.log);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic_slug) {
      api.getArticlesByTopic(this.props.topic_slug).then(articles => {
        if (!isEqual(prevState.articles, articles)) {
          this.setState({ articles });
        }
      });
    } else {
      api
        .getInfo('articles')
        .then(articles => {
          if (!isEqual(prevState.articles, articles)) {
            this.setState({ articles });
          }
        })
        .catch(console.log);
    }
  }
}

GroupOfArticles.propTypes = {};

export default GroupOfArticles;
