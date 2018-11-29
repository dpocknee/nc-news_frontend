import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import GroupOfComments from './GroupOfComments';
import * as api from '../api';

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
        console.log(fetchedArticle)
        this.setState({ article: fetchedArticle, isLoading: false });
      })
      .catch(console.log);
  }
}

IndividualArticle.propTypes = {};

export default IndividualArticle;
