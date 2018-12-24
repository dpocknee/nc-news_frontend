import React from 'react';
import '../../css/Articles/GroupOfArticles.css';
import PropTypes from 'prop-types';
import * as utils from '../../utils/utils';

const PopularOrRecent = (props) => {
  const { stateSorter, topicSlug, sorter } = props;
  return (
    <header className="topOfArticlesPage">
      <h1>
        <span className="groupArticlesHeader">
          {topicSlug && `${utils.capitalizer(topicSlug)}`}
          {' '}
Articles
        </span>
      </h1>
      {stateSorter === 'votes' ? (
        <button type="button" onClick={() => sorter('created_at')} className="popularRecent">
          Most Recent
        </button>
      ) : (
        <span className="notPopularRecent">Most Recent</span>
      )}
      {' | '}
      {stateSorter === 'created_at' ? (
        <button type="button" onClick={() => sorter('votes')} className="popularRecent">
          Most Popular
        </button>
      ) : (
        <span className="notPopularRecent">Most Popular</span>
      )}
    </header>
  );
};

PopularOrRecent.propTypes = {
  topicSlug: PropTypes.string.isRequired,
  stateSorter: PropTypes.string.isRequired,
  sorter: PropTypes.func.isRequired,
};

export default PopularOrRecent;
