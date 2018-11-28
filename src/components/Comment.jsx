import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import * as api from '../api';

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
          <div>
            <div>Votes: {info.votes}</div>
            <div className="voting">
              <div>
                <Link to="" onClick={event => this.voteHandler('up', info._id)}>
                  Voteup
                </Link>
              </div>
              <div>
                <Link
                  to=""
                  onClick={event => this.voteHandler('down', info._id)}
                >
                  Votedown
                </Link>
              </div>
            </div>
          </div>
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
      .catch(console.log('articleschanged'));
  };
}

Comment.propTypes = {};

export default Comment;
