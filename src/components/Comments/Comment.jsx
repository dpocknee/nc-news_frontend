import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import Voter from '../Voter';
import DeleteComment from './DeleteComment';
import '../../css/Comments/Comment.css';

class Comment extends Component {
  state = {
    deleted: false,
  };

  componentDidUpdate(prevProps) {
    const { commentInfo } = this.props;
    if (prevProps.commentInfo !== commentInfo) {
      this.setState({ deleted: false });
    }
  }

  commentOpaque = () => {
    this.setState({ deleted: true });
  };

  render() {
    const { commentInfo, deleteComment } = this.props;
    const { deleted } = this.state;
    return (
      <article
        className={`commentOnIndividualArticle ${deleted ? 'commentOpaque' : 'commentSolid'}`}
      >
        <p>{commentInfo.body}</p>
        <section>
          <div className="commentAuthor">
            <Link to={`/users/${commentInfo.created_by.username}`}>
              {' '}
              {commentInfo.created_by.name}
            </Link>
            {' ('}
            {format(commentInfo.created_at, 'DD-MM-YYYY')}
            {')'}
          </div>
        </section>
        <footer>
          {localStorage.getItem('ncid') === commentInfo.created_by._id ? (
            <DeleteComment
              deleteComment={deleteComment}
              commentId={commentInfo._id}
              commentOpaque={this.commentOpaque}
            />
          ) : (
            <div />
          )}
          <Voter type="comments" componentInfo={commentInfo} />
        </footer>
      </article>
    );
  }
}

Comment.propTypes = {
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
};

export default Comment;
