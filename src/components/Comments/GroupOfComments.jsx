import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddComment from './AddComment';
import * as api from '../../api';
import * as utils from '../../utils/utils';

class GroupOfComments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <section>
        {localStorage.getItem('ncuser') && (
          <AddComment
            articleId={this.props.article_id}
            newAddition={this.updateCommentsWithAddition}
          />
        )}
        {this.state.comments.map((comment, index) => (
          <Comment
            key={`comment${index}`}
            commentInfo={comment}
            deleteComment={this.deleteComment}
          />
        ))}
      </section>
    );
  }
  componentDidMount() {
    const typeOfInfo = `articles/${this.props.article_id}/comments`;
    api
      .getInfo(typeOfInfo)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => utils.errorHandler(err));
  }
  deleteComment = commentId => {
    api
      .apiDeleteComment(`comments/${commentId}`)
      .then(deleted => {
        this.setState(state => {
          const filteredComments = state.comments.filter(
            comment => String(comment._id) !== String(commentId)
          );
          return { comments: filteredComments };
        });
      })
      .catch(err => utils.errorHandler(err));
  };
  updateCommentsWithAddition = postedComment => {
    this.setState(state => {
      return { comments: [postedComment, ...state.comments] };
    });
  };
}

GroupOfComments.propTypes = {
  searchInfo: PropTypes.array
};

export default GroupOfComments;
