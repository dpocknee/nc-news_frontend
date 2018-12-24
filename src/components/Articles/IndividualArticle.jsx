import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import GroupOfComments from '../Comments/GroupOfComments';
import * as api from '../../api';
import * as utils from '../../utils/utils';

class IndividualArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    const { articleId } = this.props;
    const typeOfInfo = `articles/${articleId}`;
    api
      .getInfo(typeOfInfo)
      .then((article) => {
        const fetchedArticle = article[0];
        this.setState({ article: fetchedArticle, isLoading: false });
      })
      .catch(err => utils.errorHandler(err));
  }

  render() {
    const { articleId } = this.props;
    const { article, isLoading } = this.state;
    return (
      !isLoading && (
        <section>
          <Article articleInfo={article} />
          <GroupOfComments articleId={articleId} />
        </section>
      )
    );
  }
}

IndividualArticle.propTypes = {
  articleId: PropTypes.string.isRequired,
};

export default IndividualArticle;
