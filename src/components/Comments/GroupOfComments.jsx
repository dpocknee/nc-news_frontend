import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddComment from './AddComment';
import * as api from '../../api';
import * as utils from '../../utils/utils';

class GroupOfComments extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    const { articleId } = this.props;
    const typeOfInfo = `articles/${articleId}/comments`;
    api
      .getInfo(typeOfInfo)
      .then(comments => this.setState({ comments }))
      .catch(err => utils.errorHandler(err));
  }

  deleteComment = (commentId) => {
    api
      .apiDeleteComment(`comments/${commentId}`)
      .then(() => {
        this.setState((state) => {
          const filteredComments = state.comments.filter(
            comment => String(comment._id) !== String(commentId),
          );
          return { comments: filteredComments };
        });
      })
      .catch(err => utils.errorHandler(err));
  };

  updateCommentsWithAddition = (postedComment) => {
    this.setState(state => ({ comments: [postedComment, ...state.comments] }));
  };

  render() {
    const { articleId } = this.props;
    const { comments } = this.state;
    return (
      <section>
        {localStorage.getItem('ncuser') && (
          <AddComment articleId={articleId} newAddition={this.updateCommentsWithAddition} />
        )}
        {comments.map(comment => (
          <Comment key={comment._id} commentInfo={comment} deleteComment={this.deleteComment} />
        ))}
      </section>
    );
  }
}

GroupOfComments.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default GroupOfComments;
