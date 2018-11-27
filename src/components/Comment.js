import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';

class Comment extends Component {
  render() {
    const info = this.props.commentInfo;
    // Date.parse(
    return (
      <article className="commentOnIndividualArticle">
        <p>{info.body}</p>
        <footer>
          <div>
            {' - '}
            <Link to={`/users/${info.created_by}`}> {info.created_by}</Link> (
            {format(info.created_at, 'DD-MM-YYYY')})
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
