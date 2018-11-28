import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toptitle from './Toptitle';
import { Link } from '@reach/router';
import * as api from '../api';

class Navbar extends Component {
  state = {
    searchbox: '',
    searchParameters: [],
    topics: []
  };
  render() {
    return (
      <nav>
        <Toptitle />
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <ul>
          <li>Most Recent</li>
          <li>Most Popular</li>
        </ul>
        <li>Topics</li>
        <ul>
          {this.state.topics.map(topic => (
            <li key={`navTopics${topic.slug}`}>
              <Link to={`/topics/${topic.slug}/articles`}>{topic.title}</Link>
            </li>
          ))}
        </ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <form>
          <h3>Search:</h3>
          <input
            type="text"
            name="searchbox"
            id="searchbox"
            onChange={this.handleTextInput}
          />{' '}
          <br />
          <input
            type="checkbox"
            name="articles"
            id="articleSearch"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="articleSearch">Search articles</label>
          <br />
          <input
            type="checkbox"
            name="comments"
            id="commentsSearch"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="commentsSearch">Search comments</label>
          <br />
          <input
            type="checkbox"
            name="users"
            id="usersSearch"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="usersSearch">Search users</label>
          <br />
          <button
            type="submit"
            onClick={event => {
              return this.props.searchHandler(event, {
                searchInfo: {
                  searchbox: this.state.searchbox,
                  searchParameters: this.state.searchParameters
                }
              });
            }}
          >
            Search
          </button>
        </form>

        <li />
      </nav>
    );
  }
  componentDidMount() {
    api
      .getInfo('topics')
      .then(topics => {
        this.setState({ topics });
      })
      .catch(console.log);
  }

  handleTextInput = event => {
    this.setState({ searchbox: event.target.value });
  };

  handleCheckbox = event => {
    const theBox = {
      name: event.target.name,
      checked: event.target.checked
    };
    this.setState(state => {
      const checked = theBox.checked
        ? [...state.searchParameters, theBox.name]
        : state.searchParameters.filter(box => box !== theBox.name);
      return { searchParameters: checked };
    });
  };
}

Navbar.propTypes = {};

export default Navbar;
