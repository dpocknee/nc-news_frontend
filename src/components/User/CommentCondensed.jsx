import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import Voter from './Voter';

const CommentCondensed = props => {
  const info = props.articleInfo;
  return (
    <article>
      <header>
        <h1>
          <Link to={`/articles/${info._id}`}>{info.title}</Link>
        </h1>
        <h3>
          <Link to={`/articles/${info._id}`}>
            ({format(info.created_at, 'DD-MM-YYYY HH:mm')})
          </Link>
        </h3>
      </header>
    </article>
  );
};

CommentCondensed.propTypes = {};

export default CommentCondensed;
