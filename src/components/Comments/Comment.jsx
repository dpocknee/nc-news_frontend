import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import Voter from '../Voter';
import DeleteComment from './DeleteComment';
import '../../css/Comments/Comment.css';

class Comment extends Component {
  state = {
    deleted: false
  };
  render() {
    const info = this.props.commentInfo;
    return (
      <article
        className={`commentOnIndividualArticle ${
          this.state.deleted ? 'commentOpaque' : 'commentSolid'
        }`}
      >
        <p>{info.body}</p>
        <section>
          <div className="commentAuthor">
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
              deleteComment={this.props.deleteComment}
              commentId={info._id}
              commentOpaque={this.commentOpaque}
            />
          ) : (
            <div />
          )}
          <Voter type="comments" componentInfo={info} />
        </footer>
      </article>
    );
  }
  commentOpaque = () => {
    this.setState({ deleted: true });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.commentInfo !== this.props.commentInfo) {
      this.setState({ deleted: false });
    }
  }
}

Comment.propTypes = {
  commentInfo: PropTypes.array,
  deleteComment: PropTypes.function
};

export default Comment;
