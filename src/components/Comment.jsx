import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import * as api from '../api';
import Voter from './Voter';
import DeleteComment from './DeleteComment';

const Comment = props => {
  const info = props.commentInfo;
  return (
    <article className="commentOnIndividualArticle">
      <p>{info.body}</p>
      <section>
        <div>
          {' - '}
          <Link to={`/users/${info.created_by.username}`}>
            {' '}
            {info.created_by.name}
          </Link>{' '}
          ({format(info.created_at, 'DD-MM-YYYY')})
        </div>
      </section>
      <footer>
        {localStorage.getItem('ncid') === info.created_by._id ? (
          <DeleteComment
            deleteComment={props.deleteComment}
            articleId={info._id}
          />
        ) : (
          <div />
        )}
        <Voter type="comments" componentInfo={info} />
      </footer>
    </article>
  );
};

Comment.propTypes = {};

export default Comment;
