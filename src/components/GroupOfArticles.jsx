import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import * as api from '../api';
import { isEqual } from 'lodash';
import { Link } from '@reach/router';

class GroupOfArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sorter: null
  };
  render() {
    const filteredArticles = this.filterer(this.state.articles);
    const textInput = this.props.searchInfo
      ? this.props.searchInfo.searchInfo.searchbox
        ? this.props.searchInfo.searchInfo.searchbox
        : false
      : false;
    const searchResults = textInput
      ? `${
          filteredArticles.length
        } articles found for search query "${textInput}".`
      : `${filteredArticles.length} articles found.`;
    return (
      <div>
        <header>
          <h1>
            {this.props.topic_slug && `${capitalizer(this.props.topic_slug)}`}{' '}
            Articles
          </h1>
          <Link to="" onClick={() => this.sorter('recent')}>
            Most Recent
          </Link>
          {' | '}
          <Link to="" onClick={() => this.sorter('popular')}>
            Most Popular
          </Link>
        </header>
        {textInput && <p>{searchResults}</p>}
        {this.state.isLoading && <p>... loading articles ...</p>}
        {!this.state.isLoading &&
          filteredArticles.map((article, index) => (
            <Article key={`article${index}`} articleInfo={article} />
          ))}
      </div>
    );
  }
  sorter = type => {
    this.setState({ sorter: type });
  };

  componentDidMount() {
    const typeOfInfo = this.props.topic_slug
      ? `topics/${this.props.topic_slug}/articles`
      : 'articles';
    api
      .getInfo(typeOfInfo)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(console.log);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoading === false && this.props.topic_slug) {
      this.setState({ isLoading: true });
    }
    if (!isEqual(this.props, prevProps)) {
      const typeOfInfo =
        this.props.topic_slug && this.props.topic_slug !== prevProps.topic_slug
          ? `topics/${this.props.topic_slug}/articles`
          : 'articles';
      api
        .getInfo(typeOfInfo)
        .then(articles => {
          if (!isEqual(prevState.articles, articles)) {
            this.setState({
              articles,
              isLoading: false
            });
          }
        })
        .catch(console.log);
    }
  }
  filterer = articles => {
    const searchBox = this.props.searchInfo
      ? this.props.searchInfo.searchInfo.searchbox
      : /[\w\W]+/;
    return articles.filter(article => {
      const regex = new RegExp(searchBox, 'gi');
      return regex.test(article.body);
    });
  };
}

const capitalizer = word => {
  return word[0].toUpperCase() + word.slice(1);
};

GroupOfArticles.propTypes = {};

export default GroupOfArticles;
