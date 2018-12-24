import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/Comments/AddComment.css';
import * as api from '../../api';
import * as utils from '../../utils/utils';

class AddComment extends Component {
  state = {
    textarea: '',
    addForm: false,
  };

  handleInput = (event, type) => {
    const eventValue = event.target.value;
    this.setState({ [type]: eventValue });
  };

  handleSubmit = (event) => {
    const { textarea } = this.state;
    const { newAddition, articleId } = this.props;
    event.preventDefault();
    const body = {
      body: textarea,
      created_by: localStorage.getItem('ncid'),
    };
    api
      .addInfo(`articles/${articleId}/comments`, body)
      .then((res) => {
        newAddition(res);
      })
      .catch(err => utils.errorHandler(err));
  };

  expandForm = () => {
    this.setState((state) => {
      const newValue = !state.addForm;
      return { addForm: newValue };
    });
  };

  render() {
    const { addForm } = this.state;
    return (
      <div className="wholeCommentAdder">
        <div
          role="button"
          tabIndex={0}
          className={`addComment  ${!addForm ? 'formContracted' : 'formExpanded'}`}
          onClick={() => this.expandForm()}
          onKeyDown={() => this.expandForm()}
        >
          <div className="plus">
            <i className={`fas ${addForm ? 'fa-minus-circle' : 'fa-plus-circle'} fa-2x`} />
          </div>
          <div>
            <p>Comment on this article</p>
          </div>
        </div>
        {addForm && (
          <form className="addCommentForm">
            <label className="label2">Author</label>
            <div className="info2">{localStorage.getItem('ncuser')}</div>
            <label htmlFor="textAreaInput" className="label4">
              Comment
            </label>
            <textarea
              id="textAreaInput"
              className="info4"
              onChange={event => this.handleInput(event, 'textarea')}
            />
            <br />
            <button type="submit" onClick={this.handleSubmit} className="info5 postCommentButton">
              Post Comment
            </button>
          </form>
        )}
      </div>
    );
  }
}

AddComment.propTypes = {
  articleId: PropTypes.string.isRequired,
  newAddition: PropTypes.func.isRequired,
};

export default AddComment;
