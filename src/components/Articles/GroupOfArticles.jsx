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
    sorter: 'created_at',
  };

  componentDidMount() {
    const { topicSlug } = this.props;
    const typeOfInfo = topicSlug ? `topics/${topicSlug}/articles` : 'articles';
    api
      .getInfo(typeOfInfo)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => utils.errorHandler(err));
  }

  componentDidUpdate(prevProps, prevState) {
    const { topicSlug } = this.props;
    if (!prevState.isLoading && topicSlug !== prevProps.topicSlug) {
      /* eslint react/no-did-update-set-state: 0 */
      this.setState({ isLoading: true });
    }
    if (topicSlug !== prevProps.topicSlug) {
      const typeOfInfo = topicSlug && topicSlug !== prevProps.topicSlug
        ? `topics/${topicSlug}/articles`
        : 'articles';
      api
        .getInfo(typeOfInfo)
        .then(articles => {
          this.setState({
            articles,
            isLoading: false,
          });
        })
        .catch(err => utils.errorHandler(err));
    }
  }

  sorter = type => {
    this.setState(state => {
      const currentArticles = state.articles;
      const sortedCurrentArticles = utils.sortedArticles(currentArticles, type);
      return { sorter: type, articles: sortedCurrentArticles };
    });
  };

  newAddition = postedArticle => {
    this.setState(state => ({ articles: [...state.articles, postedArticle] }));
  };

  render() {
    const { searchInfo, topicSlug } = this.props;
    const { articles, sorter, isLoading } = this.state;
    const textInput = searchInfo
      ? searchInfo.searchInfo.searchbox
        ? searchInfo.searchInfo.searchbox
        : false
      : false;
    const filteredArticles = utils.filterer(articles, textInput);
    const sortedArticles = utils.sortedArticles(filteredArticles, sorter);
    const searchResults = textInput
      ? `${filteredArticles.length} articles found for search query "${textInput}".`
      : `${filteredArticles.length} articles found.`;

    return (
      <div>
        <PopularOrRecent topicSlug={topicSlug} sorter={this.sorter} stateSorter={sorter} />
        {textInput && <p className="topVarious">{searchResults}</p>}
        {localStorage.getItem('ncuser') && topicSlug && (
          <AddArticle topicSlug={topicSlug} newAddition={this.newAddition} />
        )}
        {isLoading && <p className="topVarious">... loading articles ...</p>}
        {!isLoading
          && sortedArticles.map(article => <Article key={article._id} articleInfo={article} />)}
      </div>
    );
  }
}

// GroupOfArticles.propTypes = {
//   searchInfo: PropTypes.shape({
//     searchInfo: PropTypes.shape({
//       searchbox: PropTypes.string,
//     }).isRequired,
//   }),
//   topicSlug: PropTypes.string,
// };

// GroupOfArticles.defaultProps = {
//   searchInfo: null,
//   topicSlug: undefined,
// };

export default GroupOfArticles;
