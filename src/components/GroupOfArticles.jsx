import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import AddArticle from './AddArticle';
import * as api from '../api';
import { Link, navigate } from '@reach/router';
import * as utils from '../utils/utils';

class GroupOfArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sorter: 'created_at'
  };
  render() {
    const textInput = this.props.searchInfo
      ? this.props.searchInfo.searchInfo.searchbox
        ? this.props.searchInfo.searchInfo.searchbox
        : false
      : false;
    const filteredArticles = utils.filterer(this.state.articles, textInput);
    const sortedArticles = utils.sortedArticles(
      filteredArticles,
      this.state.sorter
    );
    const searchResults = textInput
      ? `${
          filteredArticles.length
        } articles found for search query "${textInput}".`
      : `${filteredArticles.length} articles found.`;

    return (
      <div>
        <header className="topOfArticlesPage">
          <h1>
            <span className="groupArticlesHeader">
              {this.props.topic_slug &&
                `${utils.capitalizer(this.props.topic_slug)}`}{' '}
              Articles
            </span>
          </h1>
          {this.state.sorter === 'votes' ? (
            <Link
              to=""
              onClick={() => this.sorter('created_at')}
              className="popularRecent"
            >
              Most Recent
            </Link>
          ) : (
            <span className="notPopularRecent">Most Recent</span>
          )}
          {' | '}
          {this.state.sorter === 'created_at' ? (
            <Link
              to=""
              onClick={() => this.sorter('votes')}
              className="popularRecent"
            >
              Most Popular
            </Link>
          ) : (
            <span className="notPopularRecent">Most Popular</span>
          )}
        </header>
        {textInput && <p className="topVarious">{searchResults}</p>}
        {localStorage.getItem('ncuser') && this.props.topic_slug && (
          <AddArticle
            topic_slug={this.props.topic_slug}
            newAddition={this.newAddition}
          />
        )}
        {this.state.isLoading && (
          <p className="topVarious">... loading articles ...</p>
        )}
        {!this.state.isLoading &&
          sortedArticles.map((article, index) => (
            <Article key={`article${index}`} articleInfo={article} />
          ))}
      </div>
    );
  }
  sorter = type => {
    // [...arts].sort
    this.setState(state => {
      const currentArticles = state.articles;
      const sortedCurrentArticles = utils.sortedArticles(currentArticles, type);
      return { sorter: type, articles: sortedCurrentArticles };
    });
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
      .catch(err => {
        const errorMsg = err.response.data.message;
        const errorStatus = err.response.status;
        console.log(err.response.data.message, err.response.status);
        navigate('/error', {
          replace: true,
          state: { errorMsg, errorStatus }
        });
      });
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
  newAddition = postedArticle => {
    this.setState(state => {
      return { articles: [...state.articles, postedArticle] };
    });
  };
  deleteArticles = deletedArticle => {};
}

GroupOfArticles.propTypes = {};

export default GroupOfArticles;
