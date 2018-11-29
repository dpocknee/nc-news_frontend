import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toptitle from './Toptitle';
import { Link } from '@reach/router';
import * as api from '../api';
import Login from './Login';

class Navbar extends Component {
  state = {
    searchbox: '',
    searchParameters: [],
    topics: [],
    isSearching: false
  };
  render() {
    return (
      <nav>
        <Toptitle />
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <ul>
          {this.state.topics.map(topic => (
            <li key={`navTopics${topic.slug}`}>
              <Link to={`/topics/${topic.slug}/articles`}>{topic.title}</Link>
            </li>
          ))}
        </ul>
        <form>
          <h3>Search Articles:</h3>
          <input
            type="text"
            name="searchbox"
            id="searchbox"
            value={this.state.searchbox}
            onChange={this.handleTextInput}
          />{' '}
          <br />
          <button
            type="submit"
            onClick={event => {
              this.setState(state => {
                const reverseSearching = state.isSearching ? false : true;
                return { isSearching: reverseSearching };
              });
              const searchToSend = this.state.isSearching
                ? ''
                : this.state.searchbox;
              return this.props.searchHandler(event, {
                searchInfo: {
                  searchbox: searchToSend,
                  searchParameters: this.state.searchParameters
                }
              });
            }}
          >
            {this.state.isSearching ? 'Clear Search' : 'Search Articles'}
          </button>
        </form>

        {/* <li>
          <a
            href="https://frozen-river-28585.herokuapp.com/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
        </li> */}
        <Login login={this.props.login} />
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
