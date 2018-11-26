import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupOfArticles from './GroupOfArticles';

class MainWindow extends Component {
  render() {
    return (
      <main>
        <h1>Articles</h1>
        <GroupOfArticles />
      </main>
    );
  }
}

MainWindow.propTypes = {};

export default MainWindow;
