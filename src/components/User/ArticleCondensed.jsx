import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';

const Article = props => {
  const { articleInfo, contentType } = props;
  return (
    <article>
      <header>
        <h1>
          <Link to={`/articles/${articleInfo._id}`}>{articleInfo.title}</Link>
        </h1>
        {contentType === 'Articles' && (
          <h3>
            <Link to={`/articles/${articleInfo._id}`}>
              (
              {format(articleInfo.created_at, 'DD-MM-YYYY HH:mm')}
)
            </Link>
          </h3>
        )}
      </header>
    </article>
  );
};

Article.propTypes = {
  articleInfo: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  contentType: PropTypes.string.isRequired,
};

export default Article;
