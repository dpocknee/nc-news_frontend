import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class GroupOfArticles extends Component {
  render() {
    return (
      <div>
        <Article />
      </div>
    );
  }
}

GroupOfArticles.propTypes = {};

export default GroupOfArticles;
