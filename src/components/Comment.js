import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

class Comment extends Component {
  render() {
    const info = this.props.commentInfo;
    return (
      <article className="commentOnIndividualArticle">
        <p>{info.body}</p>
        <footer>
          <div>
            {' - '}
            <Link to={`/users/${info.created_by}`}> {info.created_by}</Link> (
            {info.created_at})
          </div>
          <div className="voting">
            <div>Voteup</div>
            <div>Votedown</div>
          </div>
        </footer>
      </article>
    );
  }
}

Comment.propTypes = {};

export default Comment;
