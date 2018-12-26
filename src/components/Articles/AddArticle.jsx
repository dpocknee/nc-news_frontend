import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/Articles/AddArticle.css';
import * as api from '../../api';
import * as utils from '../../utils/utils';

class AddArticle extends Component {
  state = {
    title: '',
    textarea: '',
    addForm: false,
    formValidation: true,
  };

  handleInput = (event, type) => {
    const eventValue = event.target.value;
    this.setState({ [type]: eventValue });
  };

  handleSubmit = event => {
    const { title, textarea } = this.state;
    const { topicSlug, newAddition } = this.props;
    event.preventDefault();
    const body = {
      title,
      body: textarea,
      created_by: localStorage.getItem('ncid'),
    };
    if (title === '' || textarea === '') {
      this.setState({ formValidation: false });
    } else {
      this.setState({ formValidation: true });
      api
        .addInfo(`topics/${topicSlug}/articles`, body)
        .then(res => {
          newAddition(res);
          this.expandForm();
        })
        .catch(err => utils.errorHandler(err));
    }
  };

  expandForm = () => {
    this.setState(state => {
      const newValue = !state.addForm;
      return { addForm: newValue };
    });
  };

  render() {
    const { topicSlug } = this.props;
    const { addForm, formValidation } = this.state;
    return (
      <div className="wholeAdder">
        {topicSlug && (
          <div
            role="button"
            tabIndex={0}
            className={`addarticle  ${!addForm ? 'formContracted' : 'formExpanded'}`}
            onClick={() => this.expandForm()}
            onKeyDown={() => this.expandForm()}
          >
            <div className="plus">
              <i className={`fas ${addForm ? 'fa-minus-circle' : 'fa-plus-circle'} fa-2x`} />
            </div>
            <div>
              <p>{`Post an article about ${topicSlug}.`}</p>
            </div>
          </div>
        )}
        {addForm && (
          <form className="addArticleForm">
            <label className="label1" htmlFor="topic">
              Topic
            </label>
            <div className="info1" id="topic">
              {topicSlug}
            </div>

            <label className="label2" htmlFor="author">
              Author
            </label>
            <div className="info2" id="author">
              {localStorage.getItem('ncuser')}
            </div>
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
              className="info4"
              onChange={event => this.handleInput(event, 'textarea')}
            />
            <br />
            <button type="submit" onClick={this.handleSubmit} className="info5 postArticleButton">
              Post Article
            </button>
            {!formValidation && (
              <div className="addarticle">
                <p>Please fill out all fields in the form.</p>
              </div>
            )}
          </form>
        )}
      </div>
    );
  }
}

AddArticle.propTypes = {
  topicSlug: PropTypes.string.isRequired,
  newAddition: PropTypes.func.isRequired,
};

export default AddArticle;
