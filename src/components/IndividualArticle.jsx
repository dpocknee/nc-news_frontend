import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import GroupOfComments from './GroupOfComments';

class IndividualArticle extends Component {
  state = {
    article: {
      votes: 0,
      created_at: '2016-08-18T12:07:52.389Z',
      _id: '5be8440b17324b27109088d3',
      title: 'Running a Node App',
      created_by: '5be8440b17324b27109088d2',
      body:
        'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
      belongs_to: 'coding',
      __v: 0
    }
  };
  //this.props.article_id
  render() {
    return (
      <section>
        <Article articleInfo={this.state.article} />
        <GroupOfComments commentId={this.props.article_id} />
      </section>
    );
  }
}

IndividualArticle.propTypes = {};

export default IndividualArticle;
