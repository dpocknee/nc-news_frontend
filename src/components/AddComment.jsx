import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/AddComment.css';
import * as api from '../api';

class AddComment extends Component {
  state = {
    title: '',
    textarea: '',
    addForm: false
  };
  render() {
    return (
      <div className="wholeCommentAdder">
        <div
          className={`addComment  ${
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
            <p>Comment on this article</p>
          </div>
        </div>
        {this.state.addForm && (
          <form className="addCommentForm">
            <label className="label2">Author</label>
            <div className="info2">{localStorage.getItem('ncuser')}</div>
            <label htmlFor="textAreaInput" className="label4">
              Comment
            </label>
            <textarea
              id="textAreaInput"
              rows="20"
              cols="100"
              className="info4"
              onChange={event => this.handleInput(event, 'textarea')}
            />
            <br />
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="info5 postCommentButton"
            >
              Post Comment
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
      body: this.state.textarea,
      created_by: localStorage.getItem('ncid')
    };
    api
      .addInfo(`articles/${this.props.articleId}/comments`, body)
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

AddComment.propTypes = {};

export default AddComment;
