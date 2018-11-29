import React from 'react';
import PropTypes from 'prop-types';
import '../css/DeleteComment.css';
import { Link } from '@reach/router';

const DeleteComment = props => {
  return (
    <div className="deleteCommentWrapper">
      <Link to="" onClick={() => props.deleteComment(props.CommntId)}>
        <div className="deleteComment">
          <div className="plus">
            <i className="fas fa-times-circle fa-2x deleter" />
          </div>
          <div className="deleteCommentText">
            <p>Delete Comment</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

DeleteComment.propTypes = {};

export default DeleteComment;
