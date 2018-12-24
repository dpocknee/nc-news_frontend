import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';

const CommentCondensed = props => {
  const { articleInfo } = props;
  return (
    <article>
      <header>
        <h1>
          <Link to={`/articles/${articleInfo._id}`}>{articleInfo.title}</Link>
        </h1>
        <h3>
          <Link to={`/articles/${articleInfo._id}`}>
            (
            {format(articleInfo.created_at, 'DD-MM-YYYY HH:mm')}
)
          </Link>
        </h3>
      </header>
    </article>
  );
};

CommentCondensed.propTypes = {
  articleInfo: PropTypes.shape({}),
};

export default CommentCondensed;
