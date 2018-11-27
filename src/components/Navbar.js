import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toptitle from './Toptitle';
import { Link } from '@reach/router';

class Navbar extends Component {
  state = {
    searchbox: '',
    searchParameters: []
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
          <li>
            <Link to="/articles/football">Football</Link>
          </li>
          <li>Coding</li>
          <li>etc.</li>
        </ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
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
            name="articleSearch"
            id="articleSearch"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="articleSearch">Search articles</label>
          <br />
          <input
            type="checkbox"
            name="commentsSearch"
            id="commentsSearch"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="commentsSearch">Search comments</label>
          <br />
          <input
            type="checkbox"
            name="usersSearch"
            id="usersSearch"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="usersSearch">Search users</label>
          <br />
          <button
            type="submit"
            onClick={event => {
              return this.props.searchHandler(event, this.state);
            }}
          >
            Search
          </button>
        </form>

        <li />
      </nav>
    );
  }
  handleTextInput = event => {
    this.setState({ searchbox: event.target.value });
  };
  handleCheckbox = event => {
    console.log(event.target.name);
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
