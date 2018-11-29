import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/AddArticle.css';
import * as api from '../api';

class AddArticle extends Component {
  state = {
    title: '',
    textarea: ''
  };
  render() {
    return (
      <div className="wholeAdder">
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
        <form className="addArticleForm">
          <h3>Topic: {this.props.topic_slug}</h3>
          <label htmlFor="titleInput">Title:</label>
          <input
            type="text"
            name="titleInput"
            id="titleInput"
            onChange={event => this.handleInput(event, 'title')}
          />
          <br />
          <label htmlFor="textAreaInput">Article:</label>
          <textarea
            id="textAreaInput"
            rows="20"
            cols="100"
            onChange={event => this.handleInput(event, 'textarea')}
          />
          <br />
          <button type="submit" onClick={this.handleSubmit}>
            Post
          </button>
        </form>
      </div>
    );
  }
  handleInput = (event, type) => {
    const eventValue = event.target.value;
    this.setState({ [type]: eventValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    const body = {
      title: this.state.title,
      body: this.state.textarea,
      created_by: localStorage.getItem('ncid')
    };
    console.log('working??', body);
    console.log('url', `topics/${this.props.topic_slug}/articles`);
    api
      .addInfo(`topics/${this.props.topic_slug}/articles`, body)
      .then(res => console.log('post response', res))
      .catch(console.log);
  };
}

AddArticle.propTypes = {};

export default AddArticle;
