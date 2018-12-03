import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import AddArticle from './AddArticle';
import * as api from '../../api';
import '../../css/Articles/GroupOfArticles.css';
import * as utils from '../../utils/utils';
import PopularOrRecent from './PopularOrRecent';

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
        <PopularOrRecent
          topic_slug={this.props.topic_slug}
          sorter={this.sorter}
          stateSorter={this.state.sorter}
        />
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
      .catch(err => utils.errorHandler(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !prevState.isLoading &&
      this.props.topic_slug !== prevProps.topic_slug
    ) {
      this.setState({ isLoading: true });
    }
    if (this.props.topic_slug !== prevProps.topic_slug) {
      const typeOfInfo =
        this.props.topic_slug && this.props.topic_slug !== prevProps.topic_slug
          ? `topics/${this.props.topic_slug}/articles`
          : 'articles';
      api
        .getInfo(typeOfInfo)
        .then(articles => {
          this.setState({
            articles,
            isLoading: false
          });
        })
        .catch(err => utils.errorHandler(err));
    }
  }
  newAddition = postedArticle => {
    this.setState(state => {
      return { articles: [...state.articles, postedArticle] };
    });
  };
}

GroupOfArticles.propTypes = {
  searchInfo: PropTypes.array
};

export default GroupOfArticles;
