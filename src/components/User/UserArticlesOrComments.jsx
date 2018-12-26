import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Articles/Article.css';
import '../../css/User/User.css';
import ArticleCondensed from './ArticleCondensed';

const UserArticlesOrComments = props => {
  const { contentType, articlesOrComments, isLoading } = props;

  const filteredArticlesOrComments = contentType === 'Comments'
    ? articlesOrComments.reduce(
      (outputArr, comment) => {
        /* eslint no-param-reassign: 0 */
        if (!outputArr.ids.includes(comment.belongs_to._id)) {
          outputArr.articles = [...outputArr.articles, comment.belongs_to];
          outputArr.ids = [...outputArr.ids, comment.belongs_to._id];
        }
        return outputArr;
      },
      { ids: [], articles: [] },
    ).articles
    : articlesOrComments;
  return (
    <div>
      <header className="topOfArticlesPage">
        <h1>
          <span className="groupArticlesHeader">
            {contentType === 'Articles'
              ? 'Articles by this user'
              : 'This user has commented on the following articles'}
          </span>
        </h1>
      </header>
      {isLoading && <p className="userLoading">... loading articles ...</p>}
      {!isLoading
        && filteredArticlesOrComments.map(articleOrComment => (
          <ArticleCondensed
            key={articleOrComment._id}
            articleInfo={articleOrComment}
            contentType={props.contentType}
          />
        ))}
    </div>
  );
};

UserArticlesOrComments.propTypes = {
  articlesOrComments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  contentType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default UserArticlesOrComments;
