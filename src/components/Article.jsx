import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';
import * as api from '../api';

class Article extends Component {
  render() {
    const info = this.props.articleInfo;
    return (
      <article>
        <header>
          <h1>
            <Link to={`/articles/${info._id}`}>{info.title}</Link>
          </h1>
          <h2>
            <Link to={`/users/${info.created_by.username}`}>
              {info.created_by.name}
            </Link>
          </h2>
          <h3>({format(info.created_at, 'DD-MM-YYYY HH:MM')})</h3>
        </header>
        <section>{info.body}</section>
        <footer>
          <div>Votes: {info.votes}</div>
          <div className="voting">
            <div>
              <Link to="/" onClick={event => this.voteHandler('up')}>
                Voteup
              </Link>
            </div>
            <div>
              <Link to="/" onClick={event => this.voteHandler('down')}>
                Votedown
              </Link>
            </div>
          </div>
        </footer>
      </article>
    );
  }
  voteHandler = upOrDown => {
    api
      .changeVotes(`/articles/${this.props.articleInfo._id}`, upOrDown)
      .catch(console.log('articleschanged'));
  };
}

Article.propTypes = {};

export default Article;
