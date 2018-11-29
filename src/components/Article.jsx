import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import Voter from './Voter';
import DeleteArticle from './DeleteArticle';

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
        <h3>({format(info.created_at, 'DD-MM-YYYY HH:MM')})</h3>
      </header>
      <section>{info.body}</section>
      <footer>
        {localStorage.getItem('ncid') === info.created_by._id ? (
          <DeleteArticle
            deleteArticle={props.deleteArticle}
            articleId={info._id}
          />
        ) : (
          <div />
        )}
        <Voter type="articles" componentInfo={info} />
      </footer>
    </article>
  );
};

Article.propTypes = {};

export default Article;
