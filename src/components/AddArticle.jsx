import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/AddArticle.css';
import * as api from '../api';

class AddArticle extends Component {
  state = {
    title: '',
    textarea: '',
    addForm: false
  };
  render() {
    return (
      <div className="wholeAdder">
        {this.props.topic_slug && (
          <div
            className={`addarticle  ${
              !this.state.addForm ? 'formContracted' : 'formExpanded'
            }`}
            onClick={() => this.expandForm()}
          >
            <div className="plus">
              <i
                className={`fas ${
                  this.state.addForm ? 'fa-minus-circle' : 'fa-plus-circle'
                } fa-2x`}
              />
            </div>
            <div>
              <p>Post an article about {this.props.topic_slug}</p>
            </div>
          </div>
        )}
        {this.state.addForm && (
          <form className="addArticleForm">
            <label className="label1">Topic</label>
            <div className="info1">{this.props.topic_slug}</div>
            <label className="label2">Author</label>
            <div className="info2">{localStorage.getItem('ncuser')}</div>
            <label htmlFor="titleInput" className="label3">
              Title
            </label>
            <input
              type="text"
              name="titleInput"
              id="titleInput"
              className="info3"
              onChange={event => this.handleInput(event, 'title')}
            />
            <br />
            <label htmlFor="textAreaInput" className="label4">
              Article
            </label>
            <textarea
              id="textAreaInput"
              rows="20"
              cols="100"
              className="info4"
              onChange={event => this.handleInput(event, 'textarea')}
            />
            <br />
            <button type="submit" onClick={this.handleSubmit} className="info5">
              Post Article
            </button>
          </form>
        )}
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
      .then(res => {
        console.log('post response', res);
        this.props.newAddition(res);
      })
      .catch(console.log);
  };
  expandForm = () => {
    this.setState(state => {
      const newValue = state.addForm ? false : true;
      return { addForm: newValue };
    });
  };
}

AddArticle.propTypes = {};

export default AddArticle;
