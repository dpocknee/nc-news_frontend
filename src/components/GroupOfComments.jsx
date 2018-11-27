import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import * as api from '../api';

class GroupOfComments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <section>
        {this.state.comments.map((comment, index) => (
          <Comment key={`comment${index}`} commentInfo={comment} />
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
}

GroupOfComments.propTypes = {};

export default GroupOfComments;
