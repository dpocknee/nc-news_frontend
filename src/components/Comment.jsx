import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import * as api from '../api';
import Voter from './Voter';

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
            <Link to={`/users/${info.created_by.username}`}>
              {' '}
              {info.created_by.name}
            </Link>{' '}
            ({format(info.created_at, 'DD-MM-YYYY')})
          </div>
          <Voter type="comments" componentInfo={info} />
        </footer>
      </article>
    );
  }
  voteHandler = (upOrDown, id) => {
    api
      .changeVotes(`/comments/${id}`, upOrDown)
      .then(comments => {
        console.log(comments);
      })
      .catch(console.log);
  };
}

Comment.propTypes = {};

export default Comment;
