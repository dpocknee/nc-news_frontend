import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  render() {
    const info = this.props.articleInfo;
    return (
      <article>
        <header>
          <h1>{info.title}</h1>
          <h2>{info.created_by}</h2>
          <h3>({info.created_at})</h3>
        </header>
        <section>{info.body}</section>
        <footer>
          <div>.</div>
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
