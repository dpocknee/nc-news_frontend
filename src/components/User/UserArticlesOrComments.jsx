import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Articles/Article.css';
import '../../css/User/User.css';
import ArticleCondensed from './ArticleCondensed';

const UserArticlesOrComments = props => {
  const filteredArticlesOrComments =
    props.contentType === 'Comments'
      ? props.articlesOrComments.reduce(
          (outputArr, comment) => {
            if (!outputArr.ids.includes(comment.belongs_to._id)) {
              outputArr.articles = [...outputArr.articles, comment.belongs_to];
              outputArr.ids = [...outputArr.ids, comment.belongs_to._id];
            }
            return outputArr;
          },
          { ids: [], articles: [] }
        ).articles
      : props.articlesOrComments;
  return (
    <div>
      <header className="topOfArticlesPage">
        <h1>
          <span className="groupArticlesHeader">
            {props.contentType === 'Articles'
              ? 'Articles by this user'
              : 'This user has commented on the following articles'}
          </span>
        </h1>
      </header>
      {props.isLoading && (
        <p className="userLoading">... loading articles ...</p>
      )}
      {!props.isLoading &&
        filteredArticlesOrComments.map((articleOrComment, index) => (
          <ArticleCondensed
            key={`article${index}`}
            articleInfo={articleOrComment}
            contentType={props.contentType}
          />
        ))}
    </div>
  );
};

UserArticlesOrComments.propTypes = {
  articlesOrComments: PropTypes.array,
  contentType: PropTypes.string
};

export default UserArticlesOrComments;
