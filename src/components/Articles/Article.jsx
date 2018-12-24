import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import '../../css/Articles/Article.css';
import Voter from '../Voter';

const Article = (props) => {
  const { articleInfo } = props;
  return (
    <article>
      <header>
        <h1>
          <Link to={`/articles/${articleInfo._id}`}>{articleInfo.title}</Link>
        </h1>
        <h2>
          <Link to={`/users/${articleInfo.created_by.username}`}>
            {articleInfo.created_by.name}
          </Link>
        </h2>
        <h3>
          <Link to={`/articles/${articleInfo._id}`}>
            (
            {format(articleInfo.created_at, 'DD-MM-YYYY HH:mm')}
)
          </Link>
        </h3>
      </header>
      <section>{articleInfo.body}</section>
      <footer>
        <div />
        <Voter type="articles" componentInfo={articleInfo} />
      </footer>
    </article>
  );
};

Article.propTypes = {
  articleInfo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created_by: {
      username: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    },
    created_at: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
