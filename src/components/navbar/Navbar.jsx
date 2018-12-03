import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toptitle from './Toptitle';
import SearchForm from './SearchForm';
import Nav from './Nav';
import * as api from '../../api';
import Login from './Login';
import Collapsible from 'react-collapsible';
import MediaQuery from 'react-responsive';

class Navbar extends Component {
  state = {
    searchbox: '',
    searchParameters: [],
    topics: [],
    isSearching: false
  };
  render() {
    return (
      <aside>
        {/* <MediaQuery maxWidth={400}>Resize test</MediaQuery> */}
        {/* <Collapsible transitionTime={400} trigger={<Toptitle />}> */}
        <Toptitle />
        <Nav topics={this.state.topics} />
        <div className="searchAndLogin">
          <SearchForm
            searchbox={this.state.searchbox}
            handleTextInput={this.handleTextInput}
            searchButton={this.searchButton}
            isSearching={this.state.isSearching}
          />
          <Login login={this.props.login} />
        </div>
      </aside>
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
  searchButton = event => {
    this.setState(state => {
      const reverseSearching = state.isSearching ? false : true;
      return { isSearching: reverseSearching };
    });
    const searchToSend = this.state.isSearching ? '' : this.state.searchbox;
    return this.props.searchHandler(event, {
      searchInfo: {
        searchbox: searchToSend,
        searchParameters: this.state.searchParameters
      }
    });
  };
}

Navbar.propTypes = {};

export default Navbar;
