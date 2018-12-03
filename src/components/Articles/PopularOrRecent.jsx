import React from 'react';
import { Link } from '@reach/router';
import '../../css/Articles/GroupOfArticles.css';
import * as utils from '../../utils/utils';
import PropTypes from 'prop-types';

const PopularOrRecent = props => {
  return (
    <header className="topOfArticlesPage">
      <h1>
        <span className="groupArticlesHeader">
          {props.topic_slug && `${utils.capitalizer(props.topic_slug)}`}{' '}
          Articles
        </span>
      </h1>
      {props.stateSorter === 'votes' ? (
        <Link
          to=""
          onClick={() => props.sorter('created_at')}
          className="popularRecent"
        >
          Most Recent
        </Link>
      ) : (
        <span className="notPopularRecent">Most Recent</span>
      )}
      {' | '}
      {props.stateSorter === 'created_at' ? (
        <Link
          to=""
          onClick={() => props.sorter('votes')}
          className="popularRecent"
        >
          Most Popular
        </Link>
      ) : (
        <span className="notPopularRecent">Most Popular</span>
      )}
    </header>
  );
};

PopularOrRecent.propTypes = {
  topic_slug: PropTypes.string,
  stateSorter: PropTypes.string,
  sorter: PropTypes.function
};

export default PopularOrRecent;
