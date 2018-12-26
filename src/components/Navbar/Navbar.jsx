import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toptitle from './Toptitle';
import SearchForm from './SearchForm';
import Nav from './Nav';
import * as api from '../../api';
import Login from './Login';
import * as utils from '../../utils/utils';

class Navbar extends Component {
  state = {
    searchbox: '',
    topics: [],
    isSearching: false,
  };

  componentDidMount() {
    api
      .getInfo('topics')
      .then(topics => {
        this.setState({ topics });
      })
      .catch(err => utils.errorHandler(err));
  }

  handleTextInput = event => {
    this.setState({ searchbox: event.target.value });
  };

  searchButton = event => {
    const { isSearching, searchbox } = this.state;
    const { searchHandler } = this.props;
    this.setState(state => {
      const reverseSearching = !state.isSearching;
      const clearBox = state.isSearching ? '' : state.searchbox;
      return { isSearching: reverseSearching, searchbox: clearBox };
    });
    const searchToSend = isSearching ? '' : searchbox;
    return searchHandler(event, searchToSend);
  };

  render() {
    const { topics, searchbox, isSearching } = this.state;
    const { login } = this.props;
    return (
      <aside>
        <Toptitle />
        <Nav topics={topics} />
        <div className="searchAndLogin">
          <SearchForm
            searchbox={searchbox}
            handleTextInput={this.handleTextInput}
            searchButton={this.searchButton}
            isSearching={isSearching}
          />
          <Login login={login} />
        </div>
      </aside>
    );
  }
}

Navbar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Navbar;
