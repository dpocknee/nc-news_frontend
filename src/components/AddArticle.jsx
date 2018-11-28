import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/AddArticle.css';

class AddArticle extends Component {
  render() {
    return (
      <div>
        {this.props.topic_slug && (
          <div className="addarticle">
            <div className="plus">
              <i className="fas fa-plus-circle fa-2x" />
            </div>
            <div>
              <p>Add an Article</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

AddArticle.propTypes = {};

export default AddArticle;
