import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { format } from 'date-fns';

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
            <Link to={`/users/${info.created_by.username}`}>{info.created_by.name}</Link>
          </h2>
          <h3>({format(info.created_at, 'DD-MM-YYYY HH:MM')})</h3>
        </header>
        <section>{info.body}</section>
        <footer>
          <div className="voting">
            <div>Voteup</div>
            <div>Votedown</div>
          </div>
        </footer>
      </article>
    );
  }
}

Article.propTypes = {};

export default Article;
