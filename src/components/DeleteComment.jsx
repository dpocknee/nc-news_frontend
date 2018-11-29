import React from 'react';
import PropTypes from 'prop-types';
import '../css/DeleteComment.css';

const DeleteComment = props => {
  return (
    <div
      className="deleteCommentWrapper"
      onClick={() => {
        props.deleteComment(props.commentId);
        props.commentOpaque();
      }}
    >
      <div className="deleteComment">
        <div className="plus">
          <i className="fas fa-times-circle fa-2x deleter" />
        </div>
        <div className="deleteCommentText">
          <p>Delete Comment</p>
        </div>
      </div>
    </div>
  );
};

DeleteComment.propTypes = {};

export default DeleteComment;
