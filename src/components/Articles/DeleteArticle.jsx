import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Articles/AddArticle.css';

const DeleteArticle = (props) => {
  const { deleteArticle, articleId } = props;
  return (
    <div
      className="deleteArticle"
      role="button"
      tabIndex={0}
      onClick={() => deleteArticle(articleId)}
      onKeyDown={() => deleteArticle(articleId)}
    >
      <div className="addarticle">
        <div className="plus">
          <i className="fas fa-times-circle fa-2x deleter" />
        </div>
        <div>
          <p>Delete Article</p>
        </div>
      </div>
    </div>
  );
};

DeleteArticle.propTypes = {
  deleteArticle: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired,
};

export default DeleteArticle;
