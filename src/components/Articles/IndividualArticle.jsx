import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import GroupOfComments from '../Comments/GroupOfComments';
import * as api from '../../api';
import * as utils from '../../utils/utils';

class IndividualArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true
  };
  render() {
    return (
      !this.state.isLoading && (
        <section>
          <Article articleInfo={this.state.article} />
          <GroupOfComments article_id={this.props.article_id} />
        </section>
      )
    );
  }
  componentDidMount() {
    const typeOfInfo = `articles/${this.props.article_id}`;
    api
      .getInfo(typeOfInfo)
      .then(article => {
        const fetchedArticle = article[0];
        this.setState({ article: fetchedArticle, isLoading: false });
      })
      .catch(err => utils.errorHandler(err));
  }
}

IndividualArticle.propTypes = {
  article_id: PropTypes.string
};

export default IndividualArticle;
