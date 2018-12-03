import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import '../../css/Articles/Article.css';
import Voter from '../Voter';

const Article = props => {
  const info = props.articleInfo;
  return (
    <article>
      <header>
        <h1>
          <Link to={`/articles/${info._id}`}>{info.title}</Link>
        </h1>
        <h2>
          <Link to={`/users/${info.created_by.username}`}>
            {info.created_by.name}
          </Link>
        </h2>
        <h3>
          <Link to={`/articles/${info._id}`}>
            ({format(info.created_at, 'DD-MM-YYYY HH:mm')})
          </Link>
        </h3>
      </header>
      <section>{info.body}</section>
      <footer>
        <div />
        <Voter type="articles" componentInfo={info} />
      </footer>
    </article>
  );
};

Article.propTypes = {
  articleInfo: PropTypes.object.isRequired
};

export default Article;
