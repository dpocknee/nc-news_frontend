import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import * as api from '../api';
import { isEqual } from 'lodash';
import { Link } from '@reach/router';
import { compareDesc } from 'date-fns';
import * as utils from '../utils/utils';

class GroupOfArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sorter: 'created_at'
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

    const sortedArticles = filteredArticles.sort((a, b) => {
      if (this.state.sorter === 'created_at') {
        return compareDesc(a.created_at, b.created_at);
      } else {
        const votesA = parseInt(a.votes);
        const votesB = parseInt(b.votes);
        return votesA < votesB ? 1 : votesA > votesB ? -1 : 0;
      }
    });

    return (
      <div>
        <header>
          <h1>
            {this.props.topic_slug &&
              `${utils.capitalizer(this.props.topic_slug)}`}{' '}
            Articles
          </h1>
          {this.state.sorter === 'votes' ? (
            <Link to="" onClick={() => this.sorter('created_at')}>
              Most Recent
            </Link>
          ) : (
            'Most Recent'
          )}
          {' | '}
          {this.state.sorter === 'created_at' ? (
            <Link to="" onClick={() => this.sorter('votes')}>
              Most Popular
            </Link>
          ) : (
            'Most Popular'
          )}
        </header>
        {textInput && <p>{searchResults}</p>}
        {this.state.isLoading && <p>... loading articles ...</p>}
        {!this.state.isLoading &&
          sortedArticles.map((article, index) => (
            <Article key={`article${index}`} articleInfo={article} />
          ))}
      </div>
    );
  }
  sorter = type => {
    // [...arts].sort
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
    if (
      !prevState.isLoading &&
      this.props.topic_slug !== prevProps.topic_slug
    ) {
      this.setState({ isLoading: true });
    }
    if (this.props.topic_slug !== prevProps.topic_slug) {
      console.log('runnng');
      const typeOfInfo =
        this.props.topic_slug && this.props.topic_slug !== prevProps.topic_slug
          ? `topics/${this.props.topic_slug}/articles`
          : 'articles';
      api
        .getInfo(typeOfInfo)
        .then(articles => {
          // if (!isEqual(prevState.articles, articles)) {
          this.setState({
            articles,
            isLoading: false
          });
          // }
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

GroupOfArticles.propTypes = {};

export default GroupOfArticles;
