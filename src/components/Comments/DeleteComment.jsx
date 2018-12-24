import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Comments/DeleteComment.css';

const DeleteComment = (props) => {
  const { commentId, deleteComment, commentOpaque } = props;
  return (
    <div
      className="deleteCommentWrapper"
      role="button"
      tabIndex={0}
      onClick={() => {
        deleteComment(commentId);
        commentOpaque();
      }}
      onKeyDown={() => {
        deleteComment(commentId);
        commentOpaque();
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

DeleteComment.propTypes = {
  commentId: PropTypes.string.isRequired,
  commentInfo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created_by: {
      username: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    },
    created_at: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  deleteComment: PropTypes.func.isRequired,
  commentOpaque: PropTypes.func.isRequired,
};

export default DeleteComment;
