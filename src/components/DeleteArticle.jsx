import React from 'react';
import PropTypes from 'prop-types';
import '../css/AddArticle.css';
import { Link } from '@reach/router';

const DeleteArticle = props => {
  return (
    <div className="deleteArticle">
      <Link to="" onClick={() => props.deleteArticle(props.articleId)}>
        <div className="addarticle">
          <div className="plus">
            <i className="fas fa-times-circle fa-2x deleter" />
          </div>
          <div>
            <p>Delete Article</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

DeleteArticle.propTypes = {};

export default DeleteArticle;
