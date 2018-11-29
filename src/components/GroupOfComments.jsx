import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddComment from './AddComment';
import * as api from '../api';

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
      .catch(console.log);
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
      .catch(console.log);
  };
  updateCommentsWithAddition = postedComment => {
    this.setState(state => {
      console.log(state.comments, postedComment);
      return { comments: [...state.comments, postedComment] };
    });
  };
}

GroupOfComments.propTypes = {};

export default GroupOfComments;
